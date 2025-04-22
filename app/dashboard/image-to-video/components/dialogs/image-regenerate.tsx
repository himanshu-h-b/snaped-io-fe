"use client";

import { Button } from "@/components/button";
import { Textarea } from "@/components/ui/textarea";
import { RefreshCcwIcon } from "lucide-react";
import Image from "next/image";
import React, { useState } from "react";
const ImageRegenerateDialog = () => {
  const [prompt, setPrompt] = useState("");

  return (
    <div className="flex w-full justify-stretch space-x-5">
      <div className="flex flex-col w-full space-y-2 mt-4">
        <h1 className="font-bold text-sm">Image Prompt</h1>
        <Textarea
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          className="focus:border-2 focus:border-purple-600 outline-none focus-visible:ring-0 focus-visible:ring-offset-0"
          rows={8}
          placeholder="Exploring human nature, mysterious journey, dark path"
        ></Textarea>

        <div className="flex justify-between text-xs">
          <span className="text-blue-400">
            Each Image regeneration will cost 1 credits
          </span>
          <span>{prompt.length}/500</span>
        </div>

        <Button className="w-fit self-start flex items-center space-x-2 mt-5">
          <RefreshCcwIcon className="size-5" />
          <span>Generate</span>
        </Button>
      </div>

      <div className="flex flex-col">
        <Image
          alt={`generated_`}
          className="w-48 rounded-lg"
          width={1024}
          height={1024}
          src={"https://i.ibb.co/SwN25bWx/image.png"}
        />

        <Button className="w-fit self-end flex items-center space-x-2 mt-10">
          Save
        </Button>
      </div>
    </div>
  );
};

export default ImageRegenerateDialog;
