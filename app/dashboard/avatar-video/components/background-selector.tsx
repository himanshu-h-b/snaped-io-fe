"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { motion, AnimatePresence } from "framer-motion";
import { useAvatarStore } from "@/store/useAvatarStore";

export interface Background {
  _id: string;
  type: string;
  url: string;
}

interface BackgroundSelectionProps {
  isLoading: boolean;
  setIsLoading: (isLoading : boolean)=>void;
  allBackgrounds : Background[];
  selectedBackground: string;
  setSelectedBackground: (backgroundId: string) => void;
}

const BACKGROUNDS_PER_PAGE = 8;

export default function BackgroundSelection({
  isLoading,
  setIsLoading,
  allBackgrounds,
  selectedBackground,
  setSelectedBackground,
}: BackgroundSelectionProps) {
  const [visibleBackgrounds, setVisibleBackgrounds] = useState<Background[]>(
    [],
  );
  const [page, setPage] = useState(1);
  const [previewBackground, setPreviewBackground] = useState<string | null>(
    null,
  );
  const hoverTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const { setAvatarData } = useAvatarStore();

  useEffect(() => {
    setVisibleBackgrounds(allBackgrounds.slice(0, BACKGROUNDS_PER_PAGE));

  }, [allBackgrounds]);

  const loadMoreBackgrounds = () => {
    const nextPage = page + 1;
    const startIndex = (nextPage - 1) * BACKGROUNDS_PER_PAGE;
    const endIndex = startIndex + BACKGROUNDS_PER_PAGE;
    setVisibleBackgrounds([
      ...visibleBackgrounds,
      ...allBackgrounds.slice(startIndex, endIndex),
    ]);
    setPage(nextPage);
  };

  const handleMouseEnter = (backgroundId: string) => {
    hoverTimeoutRef.current = setTimeout(() => {
      setPreviewBackground(backgroundId);
    }, 2000);
  };

  const handleMouseLeave = () => {
    setPreviewBackground(null);
    if (hoverTimeoutRef.current) {
      clearTimeout(hoverTimeoutRef.current);
      hoverTimeoutRef.current = null;
    }
  };

  if (isLoading) {
    return <div className="text-center">Loading backgrounds...</div>;
  }

  if (allBackgrounds.length === 0) {
    return (
      <div className="flex items-center justify-center w-full h-40">
        No backgrounds found.
      </div>
    );
  }

  return (
    <div className="space-y-4">
      <h1>Select Background</h1>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
        {visibleBackgrounds.map((bg) => (
          <div
            key={bg._id}
            className="relative group"
            onMouseEnter={() => handleMouseEnter(bg._id)}
            onMouseLeave={handleMouseLeave}
          >
            <Card
              className={`cursor-pointer transition-all ${
                selectedBackground === bg._id
                  ? "ring-2 ring-primary opacity-65"
                  : ""
              }`}
              onClick={() => {
                setSelectedBackground(bg._id);
                setAvatarData({ backgroundImage: bg.url });
              }}
            >
              <CardContent className="p-2">
                <div className="relative aspect-video mb-2">
                  <Image
                    src={bg.url}
                    alt={`Background ${bg._id}`}
                    layout="fill"
                    objectFit="cover"
                    className="rounded-md"
                  />
                </div>
              </CardContent>
            </Card>

            <AnimatePresence>
              {previewBackground === bg._id && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9, y: -10 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.9, y: -10 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className="absolute left-1/2 transform -translate-x-1/2 -top-40 z-50 w-48 shadow-lg rounded-lg"
                >
                  <Image
                    src={bg.url}
                    alt={`Background ${bg._id}`}
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

      {visibleBackgrounds.length < allBackgrounds.length && (
        <div className="text-center">
          <Button onClick={loadMoreBackgrounds} variant="outline">
            Show More
          </Button>
        </div>
      )}
    </div>
  );
}
