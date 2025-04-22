"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Card, CardContent } from "@/components/ui/card";
import { interNormal } from "@/fonts/font";
import { cn } from "@/lib/utils";
import VideoGeneration from "./video-generation";
import { Label } from "@/components/ui/label";
import { HiOutlineDeviceMobile } from "react-icons/hi";
import { IoTabletLandscapeOutline } from "react-icons/io5";
import { FaRegSquare } from "react-icons/fa6";
import AspectRatio from "./aspect-ratio";
import { useAvatarStore } from "@/store/useAvatarStore";

interface Language {
  value: string;
  label: string;
  children: Language[];
}

interface Voice {
  label: string;
  value: string;
  children: {
    value: string;
    label: string;
  }[];
}

export default function TextInput() {
  const {
    text,
    setText,
    setAudioUrl,
    setLanguage,
    selectedVoice,
    setAspectRatio,
    selectedAvatar,
    setSelectedVoice,
    setSelectedAnchor,
  } = useAvatarStore();

  const [isLoading, setIsLoading] = useState(false);
  const [languages, setLanguages] = useState<Language[]>([]);
  const [voices, setVoices] = useState<Voice[]>([]);
  const [selectedLanguage, setSelectedLanguage] = useState("");
  const [selectedRegion, setSelectedRegion] = useState("");
  const [selectedVoiceCategory, setSelectedVoiceCategory] = useState("");
  const [isGenerating, setIsGenerating] = useState(false);
  const [detectedLanguageInfo, setDetectedLanguageInfo] = useState<{
    language: string;
    country: string;
    region: string;
    voice_map_type: string;
  } | null>(null);
  const [isTextProcessed, setIsTextProcessed] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [audioUrl, setAudioUrlState] = useState("");

  const aspectRatioOptions = [
    {
      label: "Vertical (9:16)",
      value: "9:16",
      icon: HiOutlineDeviceMobile,
    },
    {
      label: "Horizontal (16:9)",
      value: "16:9",
      icon: IoTabletLandscapeOutline,
    },
    {
      label: "Square (1:1)",
      value: "1:1",
      icon: FaRegSquare,
    },
  ];

  useEffect(() => {
    fetchLanguages();
  }, []);

  useEffect(() => {
    if (detectedLanguageInfo) {
      fetchVoices();
    }
  }, [detectedLanguageInfo]);

  const fetchLanguages = async () => {
    try {
      const response = await fetch("/api/language-list");
      const data = await response.json();
      setLanguages(data.languages);
    } catch (error) {
      console.error("Error fetching languages:", error);
    }
  };

  const fetchVoices = async () => {
    try {
      const response = await fetch("/api/voices", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          country: selectedLanguage,
          region: selectedRegion,
        }),
      });
      const data = await response.json();
      setVoices(data.voices);
      if (data.voices.length > 0) {
        setSelectedVoiceCategory(data.voices[0].value);
        if (data.voices[0].children.length > 0) {
          setSelectedVoice(data.voices[0].children[0].value);
        }
      }
    } catch (error) {
      console.error("Error fetching voices:", error);
    }
  };

  const handleTextChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setText(e.target.value);
    setIsTextProcessed(false);
  };

  const handleLanguageChange = (value: string) => {
    setSelectedLanguage(value);
    setSelectedRegion("");
    setDetectedLanguageInfo(null);
    setIsTextProcessed(false);
  };

  const handleRegionChange = (value: string) => {
    setSelectedRegion(value);
    setDetectedLanguageInfo(null);
    setIsTextProcessed(false);
  };

  const handleVoiceCategoryChange = (value: string) => {
    setSelectedVoiceCategory(value);
    const category = voices.find((v) => v.value === value);
    if (category && category.children.length > 0) {
      setSelectedVoice(category.children[0].value);
    }
  };

  const handleVoiceChange = (value: string) => {
    setSelectedVoice(value);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      if (!isTextProcessed) {
        // Detect language if not manually selected
        if (!selectedLanguage) {
          const languageResponse = await fetch("/api/detect-language", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ text }),
          });
          const languageData = await languageResponse.json();
          setDetectedLanguageInfo(languageData);
          setLanguage(languageData.language);
        } else {
          // Use selected language info
          const selectedLangInfo = languages.find(
            (lang) => lang.value === selectedLanguage,
          );
          if (selectedLangInfo) {
            setDetectedLanguageInfo({
              language: selectedLangInfo.value,
              country: selectedLangInfo.value,
              region: selectedLangInfo.value.toUpperCase(),
              voice_map_type: selectedLangInfo.value,
            });
            setLanguage(selectedLangInfo.value);
          }
        }
        setIsTextProcessed(false); // SET THIS TO TRUE TO USE GENERATE SOUND BUTTON
      } else {
        // Convert text to speech
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
            setAudioUrlState(ttsData.audioUrl);
            setSelectedAnchor(selectedVoice);
            setSuccessMessage(
              "Sound generated successfully. You can now proceed to generate the video.",
            );
          }
        } else {
          throw new Error("Text and voice selection are required");
        }
      }
    } catch (error) {
      console.error("Error processing text:", error);
      // You might want to set an error state here and display it to the user
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Card className="py-4">
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label
              htmlFor="text"
              className="block text-sm font-medium text-gray-200 mb-1"
            >
              Script
            </label>
            <textarea
              id="text"
              className={cn(
                interNormal.className,
                "border-2 min-h-[100px] rounded-lg px-2 py-2 focus:border-2 focus:border-purple-600 w-full",
              )}
              placeholder="Write your script here......"
              disabled={isLoading}
              value={text}
              rows={6}
              onChange={handleTextChange}
            />
          </div>
          {languages.length > 0 && (
            <div>
              <label
                htmlFor="language"
                className="block text-sm font-medium text-gray-200 mb-1"
              >
                Select a language
              </label>
              <Select
                value={selectedLanguage}
                onValueChange={handleLanguageChange}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Auto-detect" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="auto-detect">Auto-detect</SelectItem>
                  {languages.map((language) => (
                    <SelectItem key={language.value} value={language.value}>
                      {language.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          )}

          <div className="flex flex-col space-y-2">
            <Label>Aspect Ratio</Label>
            {/* <SelectOptions
                  placeholder="Select an aspect ratio"
                  options={aspectRatioOptions}
                  onChange={(value) => setAspectRatio(value)}
                  disabled={isLoading}
            /> */}
            <AspectRatio setAspectRatio={setAspectRatio} aspectRatio={[1, 2]} />
          </div>
          {selectedLanguage !== "" &&
            selectedLanguage !== "auto-detect" &&
            languages.length > 0 && (
              <div>
                <label
                  htmlFor="language"
                  className="block text-sm font-medium text-gray-200 mb-1"
                >
                  Select a Region
                </label>
                <Select
                  value={selectedRegion}
                  onValueChange={handleRegionChange}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Auto-detect" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="auto-detect">Auto-detect</SelectItem>
                    {languages
                      .filter((v) => v.value === selectedLanguage)
                      .map((regions) => {
                        return regions.children.map((region) => (
                          <SelectItem key={region.value} value={region.value}>
                            {region.label}
                          </SelectItem>
                        ));
                      })}
                  </SelectContent>
                </Select>
              </div>
            )}
          {voices.length > 0 && (
            <>
              <div>
                <label
                  htmlFor="voiceCategory"
                  className="block text-sm font-medium text-gray-200 mb-1"
                >
                  Select a voice category
                </label>
                <Select
                  value={selectedVoiceCategory}
                  onValueChange={handleVoiceCategoryChange}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select a voice category" />
                  </SelectTrigger>
                  <SelectContent>
                    {voices.map((category) => (
                      <SelectItem key={category.value} value={category.value}>
                        {category.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div>
                <label
                  htmlFor="voice"
                  className="block text-sm font-medium text-gray-200 mb-1"
                >
                  Select a voice
                </label>
                <Select value={selectedVoice} onValueChange={handleVoiceChange}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select a voice" />
                  </SelectTrigger>
                  <SelectContent>
                    {voices
                      .find(
                        (category) => category.value === selectedVoiceCategory,
                      )
                      ?.children.map((voice) => (
                        <SelectItem key={voice.value} value={voice.value}>
                          {voice.label}
                        </SelectItem>
                      ))}
                  </SelectContent>
                </Select>
              </div>
            </>
          )}
          {!isGenerating && (
            <Button type="submit" disabled={isLoading} className="w-full">
              {isLoading ? (
                <>
                  <svg
                    className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    ></circle>
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    ></path>
                  </svg>
                  Processing...
                </>
              ) : isTextProcessed ? (
                "Generate Sound"
              ) : (
                "Process Text"
              )}
            </Button>
          )}
        </form>
        {successMessage && (
          <div className="mt-4">
            <p className="text-green-600 mb-2">{successMessage}</p>
          </div>
        )}
      </CardContent>

      <VideoGeneration
        isGenerating={isGenerating}
        setIsGenerating={setIsGenerating}
        selectedVoice={selectedVoice}
        setSelectedVoice={setSelectedVoice}
        setAudioUrl={setAudioUrl}
        setSelectedAnchor={setSelectedAnchor}
        audioUrl={audioUrl}
        language={selectedLanguage || "en-US"}
        selectedVoiceAnchor={selectedAvatar}
      />
    </Card>
  );
}
