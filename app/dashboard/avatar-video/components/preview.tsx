"use client";

import { useEffect, useRef, useState } from "react";
import { fabric } from "fabric";
import { cn } from "@/lib/utils";
import { useAvatarStore } from "@/store/useAvatarStore";
import { redirect } from "next/navigation";

interface PreviewProps {
  className?: string;
}

const Preview: React.FC<PreviewProps> = ({ className, ...props }) => {
  const { avatarData, setAvatarData, audioUrl, videoUrl, generationProgress } =
    useAvatarStore();
  const [dimensions , setDimentions] = useState({ width: avatarData.web_bg_width/3, height: avatarData.web_bg_height/3 });
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const fabricCanvasRef = useRef<fabric.Canvas | null>(null);

  // Fixed Canvas Dimensions (16:9)
  // const dimensions = { width: 640, height: 360 };

  useEffect(()=>{
    setDimentions({height : avatarData.web_bg_height/3 , width : avatarData.web_bg_width/3})
  }, [avatarData.web_bg_height , avatarData.web_bg_width])
 

  useEffect(() => {
    console.log(dimensions)
    if (!canvasRef.current) return;

    // Dispose old canvas
    if (fabricCanvasRef.current) {
      fabricCanvasRef.current.dispose();
      fabricCanvasRef.current = null;
    }

    // Create new fabric.js canvas
    const canvas = new fabric.Canvas(canvasRef.current, { selection: true });
    fabricCanvasRef.current = canvas;
    canvas.setWidth(dimensions.width);
    canvas.setHeight(dimensions.height);
    canvas.clear();

    const loadImage = (url: string): Promise<fabric.Image | null> => {
      return new Promise((resolve) => {
        fabric.Image.fromURL(url, (img) => resolve(img), {
          crossOrigin: "anonymous",
        });
      });
    };

    (async () => {
      // Load Background Image (non-JPEG)
      if (avatarData.backgroundImage) {
        const bgImg = await loadImage(avatarData.backgroundImage);
        if (bgImg) {
          bgImg.set({ selectable: false, evented: false });

          const scale = Math.max(
            dimensions.width / bgImg.width!,
            dimensions.height / bgImg.height!,
          );
          bgImg.scale(scale);
          bgImg.set({
            left: dimensions.width / 2 - (bgImg.width! * scale) / 2,
            top: dimensions.height / 2 - (bgImg.height! * scale) / 2,
          });

          canvas.setBackgroundImage(bgImg, () =>
            fabricCanvasRef.current?.renderAll(),
          );
        }
      }

      // Load Avatar Image (JPEG/JPG or PNG)
      if (avatarData.avatarImage) {
        const img = await loadImage(avatarData.avatarImage);
        if (img) {
          const isPNG = avatarData.avatarImage.toLowerCase().endsWith(".png");

          if (isPNG) {
            // PNG images "float" above the background
            img.set({
              left:
                (avatarData.web_people_x / avatarData.web_bg_width) *
                dimensions.width,
              top:
                (avatarData.web_people_y / avatarData.web_bg_height) *
                dimensions.height,
              scaleX:
                (avatarData.web_people_width / img.width!) *
                (dimensions.width / avatarData.web_bg_width),
              scaleY:
                (avatarData.web_people_height / img.height!) *
                (dimensions.height / avatarData.web_bg_height),
              hasControls: true,
              hasBorders: true,
              lockUniScaling: true, // Ensure aspect ratio is maintained
              cornerStyle: "circle",
              borderColor: "#7e4fa5",
              cornerColor: "#7e4fa5",
              transparentCorners: false,
              lockRotation: true,
              lockSkewingX: true,
              lockSkewingY: true,
              lockScalingFlip: true,
              lockScalingX: false,
              lockScalingY: false,
            });
            canvas.add(img);
          } else {
            // JPEG/JPG images set as background but scaled correctly
            const scaleX = dimensions.width / img.width!;
            const scaleY = dimensions.height / img.height!;
            const scale = Math.min(scaleX, scaleY);

            // Ensure the image height doesn't exceed the canvas height
            const scaledHeight = img.height! * scale;
            const scaledWidth = img.width! * scale;

            const left = (dimensions.width - scaledWidth) / 2; // Center horizontally
            const top = (dimensions.height - scaledHeight) / 2; // Center vertically

            img.set({
              left,
              top,
              scaleX: scale,
              scaleY: scale,
              selectable: false, // Don't allow interaction with the background image
              evented: false, // Make sure it's not interactive
            });

            canvas.setBackgroundImage(img, () =>
              fabricCanvasRef.current?.renderAll(),
            );
          }

          // Update store when position of PNG image changes
          if (isPNG) {
            img.on("modified", () => {
              setAvatarData({
                ...avatarData,
                web_people_x:
                  (img.left! / dimensions.width) * avatarData.web_bg_width,
                web_people_y:
                  (img.top! / dimensions.height) * avatarData.web_bg_height,
                web_people_width:
                  img.scaleX! *
                  img.width! *
                  (avatarData.web_bg_width / dimensions.width),
                web_people_height:
                  img.scaleY! *
                  img.height! *
                  (avatarData.web_bg_height / dimensions.height),
              });
            });
          }
        }
      }
    })();

    return () => {
      fabricCanvasRef.current?.dispose();
      fabricCanvasRef.current = null;
    };
  }, [avatarData.backgroundImage, avatarData.avatarImage , dimensions]);

  useEffect(() => {
    console.log("Background Height:", avatarData.web_bg_height);
    console.log("Background Width:", avatarData.web_bg_width);
    console.log("Avatar Height:", avatarData.web_people_height);
    console.log("Avatar Width:", avatarData.web_people_width);
    console.log("Avatar X:", avatarData.web_people_x);
    console.log("Avatar Y:", avatarData.web_people_y);
  }, [avatarData]);

  return (
    <div
      style={
       {
        height : dimensions.height,
        width : dimensions.width
       } 
      }
      className={cn(
        "flex items-center self-center justify-center relative",
        className,
      )}
      {...props}
    >
      {!videoUrl && (
        <div className="border border-gray-300 rounded-lg">
          <canvas ref={canvasRef}></canvas>
        </div>
      )}

      {audioUrl && !videoUrl && (
        <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col space-y-2 w-full h-full items-center justify-center">
          <div className="w-full bg-gray-900 rounded-full h-2.5 mx-10">
            <div
              className="bg-purple-600 h-2.5 rounded-full transition-all duration-300"
              style={{ width: `${generationProgress}%` }}
            ></div>
          </div>
          <div className="flex text-white">
            Your AI video is being{" "}
            <span className="bg-gradient-to-r from-purple-500 to-indigo-600 bg-clip-text ml-2 text-transparent">
              Generated.
            </span>
          </div>
        </div>
      )}

      {videoUrl && (
        <div className="flex items-center justify-center">
          <video
            src={videoUrl}
            controls
            className="w-full max-w-2xl rounded-lg shadow-lg"
          />
          {redirect(`video-preview?url=${videoUrl}`)}
        </div>
      )}
    </div>
  );
};

export default Preview;
