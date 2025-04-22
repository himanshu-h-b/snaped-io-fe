"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { motion, AnimatePresence } from "framer-motion";
import { useAvatarStore } from "@/store/useAvatarStore";

export interface Avatar {
  _id: string;
  type: string;
  video_cover: string;
  people_img?: string;
  base_video: string;
  lang: string[];
}

interface AvatarSelectionProps {
  avatars: Avatar[];
  selectedAvatar: string;
  isLoading: boolean;
  setIsLoading: (isLoading: boolean) => void;
  favAvatars?: Avatar[] | null;
  setSelectedAvatar: (avatarId: string) => void;
}

const AVATARS_PER_PAGE = 8;

export default function AvatarSelection({
  avatars,
  isLoading,
  setIsLoading,
  selectedAvatar,
  setSelectedAvatar,
  favAvatars = null,
}: AvatarSelectionProps) {
  const [visibleAvatars, setVisibleAvatars] = useState<Avatar[]>([]);
  const [page, setPage] = useState(1);
  const [previewAvatar, setPreviewAvatar] = useState<string | null>(null);
  const hoverTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const { selectedMenu, setAvatarData, setVideoUrl, setIsPublicAvatar } =
    useAvatarStore();

  useEffect(() => {
    setVisibleAvatars(avatars.slice(0, AVATARS_PER_PAGE));
    setIsLoading(false);
  }, [selectedMenu, avatars]);

  const loadMoreAvatars = () => {
    const nextPage = page + 1;
    const startIndex = (nextPage - 1) * AVATARS_PER_PAGE;
    const endIndex = startIndex + AVATARS_PER_PAGE;
    setVisibleAvatars([
      ...visibleAvatars,
      ...avatars.slice(startIndex, endIndex),
    ]);
    setPage(nextPage);
  };

  const handleMouseEnter = (avatarId: string) => {
    hoverTimeoutRef.current = setTimeout(() => {
      setPreviewAvatar(avatarId);
    }, 2000);
  };

  const handleMouseLeave = () => {
    setPreviewAvatar(null);
    if (hoverTimeoutRef.current) {
      clearTimeout(hoverTimeoutRef.current);
      hoverTimeoutRef.current = null;
    }
  };

  if (isLoading) {
    return <div className="text-center">Loading avatars...</div>;
  }

  if (favAvatars !== null && favAvatars.length === 0) {
    return (
      <div className="flex items-center justify-center w-full h-40">
        No avatar found.
      </div>
    );
  }

  return (
    <div className="space-y-4">
      <h1>Select Avatar</h1>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
        {visibleAvatars.map((avatar) => (
          <div
            key={avatar._id}
            className="relative group"
            onMouseEnter={() => handleMouseEnter(avatar._id)}
            onMouseLeave={handleMouseLeave}
          >
            <Card
              className={`cursor-pointer transition-all ${
                selectedAvatar === avatar._id
                  ? "ring-2 ring-primary opacity-65"
                  : ""
              }`}
              onClick={() => {
                setSelectedAvatar(avatar._id);
                setIsPublicAvatar(selectedMenu === 2);
                setVideoUrl("");
                setAvatarData({
                  avatarImage: avatar.people_img || avatar.video_cover,
                });
              }}
            >
              <CardContent className="p-2">
                <div className="relative h-32 mb-2">
                  <Image
                    src={
                      avatar.people_img ||
                      avatar.video_cover ||
                      "/placeholder.svg"
                    }
                    alt={`Avatar ${avatar._id}`}
                    layout="fill"
                    objectFit="cover"
                    className="rounded-md mix-blend-normal bg-black"
                    objectPosition="top"
                  />
                </div>
                <p className="text-center text-sm font-medium truncate">
                  Avatar {avatar._id.slice(-4)}
                </p>
                <p className="text-center text-xs text-muted-foreground">
                  {avatar.lang.join(", ")}
                </p>
              </CardContent>
            </Card>

            <AnimatePresence>
              {previewAvatar === avatar._id && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9, y: -10 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.9, y: -10 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className="absolute left-1/2 transform -translate-x-1/2 -top-40 z-50 w-48 shadow-lg rounded-lg"
                >
                  <Image
                    src={avatar.video_cover || "/placeholder.svg"}
                    alt={`Avatar ${avatar._id}`}
                    width={192}
                    height={108}
                    className="rounded-md"
                  />
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>

      {visibleAvatars.length < avatars.length && (
        <div className="text-center">
          <Button onClick={loadMoreAvatars} variant="outline">
            Show More
          </Button>
        </div>
      )}
    </div>
  );
}
