"use client";

import { Button } from "@/components/button";
import { useAvatarStore } from "@/store/useAvatarStore";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { RiGeminiLine } from "react-icons/ri";

interface VideoGenerationProps {
  language: string;
  audioUrl: string;
  isGenerating: boolean;
  selectedVoice: string;
  selectedVoiceAnchor: string;
  setIsGenerating: (text: boolean) => void;
  setSelectedVoice: (text: string) => void;
  setSelectedAnchor: (anchor: string) => void;
  setAudioUrl: (url: string) => void;
}

interface CaptionAlignBody {
  BackColour: string;
  language: string;
  PrimaryColour: string;
  OutlineColour: string;
  BorderStyle: number;
  FontName: string;
  Fontsize: number;
  subtitle_position: number;
}

interface VideoRequestBody {
  title: string;
  anchor_id: string;
  anchor_type: number;
  isAllowReverse: boolean;
  audioSrc: string;
  resolution: number;
  web_bg_width: number;
  web_bg_height: number;
  web_people_width: number;
  web_people_height: number;
  web_people_x: number;
  web_people_y: number;
  web_people_max_height: number;
  web_people_max_width: number;
  msg?: string;
  back_id?: string;
  isSkipRs: boolean;
  isCaptionEnabled?: boolean;
  captionAlign?: CaptionAlignBody;
}

export default function VideoGeneration({
  language,
  audioUrl,
  setAudioUrl,
  isGenerating,
  selectedVoice,
  setIsGenerating,
  setSelectedVoice,
  setSelectedAnchor,
  selectedVoiceAnchor,
}: VideoGenerationProps) {
  const [videoUrl, setVideoUrlState] = useState("");
  const [error, setError] = useState("");

  const {
    text,
    setVideoUrl,
    allowReverse,
    isSmartMotion,
    setGenerationProgress,
    captionEnabled,
    avatarData,
    selectedBackground,
    isPublicAvatar,
    setSelectedAvatar,
  } = useAvatarStore();

  const handleGenerateVideo = async () => {
    if (!text || !language) {
      console.log(text, language, audioUrl, selectedVoiceAnchor);
      toast.error("Please process text before generating.");
      setError(
        "Please complete all previous steps before generating the video.",
      );
      return;
    }

    if (!selectedVoiceAnchor) {
      toast.error("Please select the avatar!");
      setError(
        "Please complete all previous steps before generating the video.",
      );
      return;
    }

    setIsGenerating(true);
    setError("");
    setGenerationProgress(0);

    try {
      if (text && selectedVoice) {
        const ttsResponse = await fetch("/api/text-to-speech", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ text, voiceId: selectedVoice }),
        });
        const ttsData = await ttsResponse.json();
        if (ttsData.error) {
          throw new Error(ttsData.error);
        }
        if (ttsData.audioUrl) {
          setAudioUrl(ttsData.audioUrl);
          setSelectedAnchor(selectedVoice);

          const body: VideoRequestBody = {
            title: `${new Date().toLocaleString()}`,
            anchor_id: selectedVoiceAnchor,
            anchor_type: isPublicAvatar ? 0 : 1, // Assuming 0 for system-provided avatars
            audioSrc: ttsData.audioUrl,
            resolution: 1080,
            web_bg_width: avatarData.web_bg_width,
            web_bg_height: avatarData.web_bg_height,
            web_people_width: avatarData.web_people_width,
            web_people_height: avatarData.web_people_height,
            web_people_x: avatarData.web_people_x,
            web_people_y: avatarData.web_people_y,
            web_people_max_height: avatarData.web_bg_height,
            web_people_max_width: avatarData.web_bg_width,
            isSkipRs: !isSmartMotion,
            isAllowReverse: allowReverse,
          };

          if (captionEnabled) {
            (body.isCaptionEnabled = true),
              (body.captionAlign = {
                BackColour: "rgba(0, 0, 0, 0)",
                language: language,
                PrimaryColour: "rgba(255, 255, 255, 1)",
                OutlineColour: "rgba(0, 0, 0, 1)",
                BorderStyle: 4,
                FontName: "Arial",
                Fontsize: 50,
                subtitle_position: 0.0136,
              });
            body.msg = text;
          }

          if (selectedBackground) {
            body.back_id = selectedBackground;
          }

          const response = await fetch("/api/generate-video", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(body),
          });

          const data = await response.json();
          if (data.videoId) {
            await checkVideoStatus(data.videoId);
          } else {
            throw new Error("Failed to start video generation");
          }

          setAudioUrl("");
          setSelectedAvatar("");
        }
      } else {
        toast.error("Please Proccess Text First");
        throw new Error("Text and voice selection are required");
      }
    } catch (error) {
      console.error("Error generating video:", error);
      setError("Failed to generate video. Please try again.");
    } finally {
      setIsGenerating(false);
    }
  };

  const checkVideoStatus = async (videoId: string) => {
    const maxAttempts = 10000;
    const interval = 5000; // 5 seconds

    for (let attempt = 0; attempt < maxAttempts; attempt++) {
      try {
        const response = await fetch("/api/video-status", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ _id: videoId }),
        });
        const data = await response.json();

        if (data.code === 0 && data.data.length > 0) {
          const videoData = data.data[0];
          if (videoData.status === "success") {
            setVideoUrlState(videoData.result);
            setVideoUrl(videoData.result);
            setGenerationProgress(100);
            return;
          } else if (videoData.status === "fail") {
            throw new Error("Video Generation Failed");
          } else {
            setGenerationProgress(Math.min(videoData.process, 90));
            await new Promise((resolve) => setTimeout(resolve, interval));
          }
        } else {
          throw new Error("Invalid response from video status API");
        }
      } catch (error) {
        console.error("Error checking video status:", error);
        setError("Failed to check video status. Please try again.");
        return;
      }
    }

    setError("Video generation timed out. Please try again.");
  };

  return (
    <div className="space-y-4">
      {error && (
        <div
          className="mx-5 bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative"
          role="alert"
        >
          <span className="block sm:inline">{error}</span>
        </div>
      )}

      <div className="flex items-center justify-end mr-2">
        <Button
          onClick={handleGenerateVideo}
          disabled={isGenerating}
          className="px-4 py-2 mt-4"
        >
          <RiGeminiLine
            className={`mr-1 size-4 ${isGenerating ? "animate-spin" : "animate-none"}`}
          />
          {isGenerating ? "Generating..." : "Generate with AI"}
        </Button>
      </div>

      {/* {isGenerating && (
        <div className="w-full bg-gray-900 rounded-full h-2.5 px-3">
          <div className="bg-purple-600 h-2.5 rounded-full" style={{ width: `${generationProgress}%` }}></div>
        </div>
      )} */}
    </div>
  );
}
