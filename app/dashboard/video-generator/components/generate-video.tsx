"use client";
import { Button } from "@/components/button";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import { useEffect, useState } from "react";
import { generateVideo, getVoices } from "../api";
import {
  aspectRatioData,
  captionPosition,
  colorOptions,
  images,
  languages,
  videoLength,
} from "../constants";
import AspectRatio from "./aspect-ratio";
import Dropdown from "./dropdown";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Loader2, Mail, Video } from "lucide-react";
import { cn } from "@/lib/utils";

function GenerateVideo({ script }: { script: string }) {
  const [isOpen, setIsOpen] = useState(false);
  const [voices, setVoices] = useState<Array<any>>([]);
  const [aspectRatio, setAspectRatio] = useState(0);
  const [aiVisual, setAiVisual] = useState<any>("");
  const [animationStep, setAnimationStep] = useState(0);

  useEffect(() => {
    getVoices().then((voices) => {
      // @ts-expect-error
      const formatted_voices = [];
      voices.forEach((value, idx) => {
        formatted_voices.push({
          label: value.name,
          value: value.voice_id,
        });
      });
      // @ts-expect-error
      setVoices(formatted_voices);
    });
  }, []);

  useEffect(() => {
    if (isOpen) {
      const interval = setInterval(() => {
        setAnimationStep((prev) => (prev + 1) % 3);
      }, 800);
      return () => clearInterval(interval);
    }
  }, [isOpen]);

  const handleSubmit = async (_data: FormData) => {
    setIsOpen(true);
    const ratio =
      aspectRatioData[aspectRatio].title +
      " " +
      aspectRatioData[aspectRatio].ratio;
    const response = await generateVideo(_data, script, ratio, aiVisual.name);
  };

  return (
    <div>
      <Dialog open={isOpen} onOpenChange={() => setIsOpen(false)}>
        <DialogContent className="sm:max-w-md border-primary/20">
          <DialogHeader className="space-y-3">
            <div className="w-full flex justify-center">
              <div className="relative">
                <div className="text-6xl">🚀</div>
                <div
                  className={cn(
                    "absolute -bottom-2 -right-2 transition-all duration-300",
                    animationStep === 0 && "opacity-100 scale-100",
                    animationStep !== 0 && "opacity-0 scale-0"
                  )}
                >
                  <span className="text-2xl">✨</span>
                </div>
                <div
                  className={cn(
                    "absolute -top-2 -left-2 transition-all duration-300",
                    animationStep === 1 && "opacity-100 scale-100",
                    animationStep !== 1 && "opacity-0 scale-0"
                  )}
                >
                  <span className="text-2xl">✨</span>
                </div>
                <div
                  className={cn(
                    "absolute -bottom-2 -left-2 transition-all duration-300",
                    animationStep === 2 && "opacity-100 scale-100",
                    animationStep !== 2 && "opacity-0 scale-0"
                  )}
                >
                  <span className="text-2xl">✨</span>
                </div>
              </div>
            </div>

            <h2 className="text-center text-2xl font-bold bg-gradient-to-r from-[#4E43FA] to-[#9F62CA] bg-clip-text text-transparent">
              Your Video is Taking Off!
            </h2>
          </DialogHeader>

          <div className="flex flex-col items-center justify-center py-4 space-y-6">
            <div className="bg-gradient-to-r from-primary/10 to-purple-400/10 p-6 rounded-xl border border-primary/20">
              <p className="text-center text-foreground">
                We're creating something amazing for you! 🎬 ✨
              </p>
              <p className="text-center text-muted-foreground mt-2">
                Once your video is ready, we'll send it straight to your email
                inbox.
              </p>
            </div>

            <div className="flex items-center justify-center gap-3 w-full">
              <div
                className="h-2 w-2 rounded-full bg-custom-gradient animate-bounce"
                style={{ animationDelay: "0ms" }}
              ></div>
              <div
                className="h-2 w-2 rounded-full bg-custom-gradient animate-bounce"
                style={{ animationDelay: "300ms" }}
              ></div>
              <div
                className="h-2 w-2 rounded-full bg-custom-gradient animate-bounce"
                style={{ animationDelay: "600ms" }}
              ></div>
            </div>
          </div>

          <DialogFooter className="flex flex-col gap-2 sm:flex-row sm:justify-between">
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              {/* <span className="text-lg">📧</span> */}
              <Mail />
              <span>Check your email soon!</span>
            </div>
            <Button
              onClick={() => setIsOpen(false)}
              className="px-8 rounded-full py-2"
            >
              Got it! 👍
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
      <form action={handleSubmit} className="space-y-6">
        {/* Ai Visuals */}
        <div className="space-y-2">
          <p>AI Visuals</p>
          <div className="flex space-x-5 overflow-x-hidden hover:overflow-x-auto w-full">
            {images.map((v, _) => (
              <div
                key={_}
                className={`relative h-full group p-1.5 rounded-lg ${
                  v.id === aiVisual.id ? "bg-purple-600" : ""
                }`}
                onClick={() => setAiVisual(v)}
              >
                <span className="absolute bottom-5 text-white bg-[#232323] dark:bg-white dark:text-black p-2 rounded-md text-xs left-1/2 -translate-x-1/2 w-max text-wrap max-w-[140px] text-center">
                  {v.name}
                </span>
                <Image
                  alt={`generated_${_}`}
                  className="w-32 min-h-[150px] min-w-[150px] rounded-lg"
                  width={1024}
                  height={1024}
                  src={`/${v.img}`}
                />
              </div>
            ))}
          </div>
        </div>
        {/* Options */}
        <div className="flex space-x-4">
          <Dropdown
            onChange={() => {}}
            label="Language"
            options={languages}
            name="language"
          />
          <Dropdown
            onChange={() => {}}
            label="Voice"
            options={voices}
            name="voice_id"
          />
          <Dropdown
            onChange={() => {}}
            label="Video Length"
            options={videoLength}
            name="video_length"
          />
        </div>
        {/* Aspect */}
        <div>
          <label className="block text-sm font-medium text-[#121212] dark:text-gray-200 mb-1">
            Asppect Ratio
          </label>
          <AspectRatio
            data={aspectRatioData}
            selected={aspectRatio}
            setSelected={setAspectRatio}
          />
        </div>
        {/* Advance option */}
        <div>
          <label className="block text-lg font-medium text-[#121212] dark:text-gray-200 mb-2 pt-3">
            Advanced Options
          </label>

          <div className="grid grid-cols-4 gap-2">
            <div>
              <label className="block text-sm font-medium text-[#121212] dark:text-gray-200 mb-1">
                Caption Font Size
              </label>
              <Input name="caption_font_size" type="number" max={64} />
            </div>
            <Dropdown
              name="caption_color"
              onChange={() => {}}
              label="Caption Color"
              options={colorOptions}
            />
            <Dropdown
              name="caption_position"
              onChange={() => {}}
              label="Caption Position"
              options={captionPosition}
            />
          </div>
        </div>

        <div className="w-full flex justify-end">
          <Button type="submit">Generate Video</Button>
        </div>
      </form>
    </div>
  );
}

export { GenerateVideo };
