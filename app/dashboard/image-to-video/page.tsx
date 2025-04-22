"use client";
import { Button } from "@/components/button";
import { Textarea } from "@/components/ui/textarea";
import { InfoIcon, RefreshCcwIcon, WandSparklesIcon } from "lucide-react";
import Image from "next/image";
import React, { useState } from "react";
import DialogManager from "./components/dialog-manager";
import { useDialog } from "@/hooks/useDialog";
import { Card } from "@/components/ui/card";

const page = () => {
  const [script, setScript] = useState("");

  const handleTextChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setScript(e.target.value);
  };

  const images = [
    { id: 0, img: "https://i.ibb.co/SwN25bWx/image.png" },
    { id: 1, img: "https://i.ibb.co/gbbXwmft/image.png" },
    { id: 2, img: "https://i.ibb.co/R4HSjLsF/image.png" },
    { id: 3, img: "https://i.ibb.co/7x5k7RjK/image.png" },
    { id: 4, img: "https://i.ibb.co/SwN25bWx/image.png" },
  ];

  const captions = ["her", "only", "companion", "begin", "an", "old"];

  const { isOpen, openDialog, closeDialog } = useDialog();

  return (
    <div className="flex flex-col p-2 sm:p-4 md:p-6 gap-6 lg:pr-10">
      <DialogManager isOpen={isOpen} onClose={closeDialog} />
      <Card className="flex flex-col p-4 sm:p-6 md:p-8 gap-8 lg:pr-12">
        <h1 className="text-lg">Image to Video</h1>

        <h1 className="font-bold">Images</h1>
        <div className="flex space-x-5 overflow-x-auto w-full">
          {images.map((v, _) => (
            <div key={_} className="relative h-full group">
              <Image
                alt={`generated_${_}`}
                className="w-40 rounded-lg"
                width={1024}
                height={1024}
                src={v.img}
              />
              <div className="absolute bottom-3 w-full flex justify-center">
                <Button
                  onClick={openDialog}
                  className="group-hover:block hidden transition-all duration-300"
                >
                  <div className="flex items-center">
                    <RefreshCcwIcon className="size-6 space-x-1" />
                    <span>Edit Image</span>
                  </div>
                </Button>
              </div>
            </div>
          ))}
        </div>

        <h1 className="font-bold">Captions</h1>
        <div className="flex items-center space-x-2 text-sm">
          {captions.map((v, _) => (
            <span key={_} className="border p-2 rounded-lg">
              {v}
            </span>
          ))}
        </div>

        <h1 className="font-bold">Script</h1>
        <Textarea
          value={script}
          onChange={handleTextChange}
          className="focus:border-2 focus:border-purple-600 outline-none focus-visible:ring-0 focus-visible:ring-offset-0"
          rows={8}
          placeholder="Describe your script here..."
        ></Textarea>

        <Button className="w-fit self-end flex items-center space-x-2">
          <WandSparklesIcon className="size-5" />
          <span>Export Video</span>
        </Button>

        <div className="flex justify-between">
          <div className="flex items-center space-x-1">
            <InfoIcon className="size-4" />
            <span className="text-sm">Snaped AI can make mistakes</span>
          </div>

          <div className="flex items-center text-xs space-x-1">
            <InfoIcon className="size-3" />
            <span className="text-xs pr-2">Estimated video length : 0:00</span>
            💰Estimated Credits : 0
          </div>
        </div>
      </Card>
    </div>
  );
};

export default page;
