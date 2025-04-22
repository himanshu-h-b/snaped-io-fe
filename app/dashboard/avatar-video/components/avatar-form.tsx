"use client";
import { useState } from "react";
import TextInput from "./text-input";

type variant = "text" | "audio";

interface AvatarFormInputProps {
  text: string;
  selectedAvatar: string;
  aspectRatio: string;
  selectedVoice: string;
  generationProgress: number;
  isSmartMotion: boolean;
  setGenerationProgress: (progress: number) => void;
  setSelectedVoice: (text: string) => void;
  setAspectRatio: (text: string) => void;
  setText: (text: string) => void;
  setLanguage: (language: string) => void;
  setAudioUrl: (url: string) => void;
  setVideoUrl: (url: string) => void;
  setSelectedAnchor: (anchor: string) => void;
}

const AvatarForm = () => {
  const [variant, setVariant] = useState<variant>("text");
  const textFormDefaultValues = {
    script: "",
    language: "",
    subtitle: "",
    aspect_ratio: "",
  };
  return (
    <div>
      <TextInput />
    </div>
  );
};

export default AvatarForm;
