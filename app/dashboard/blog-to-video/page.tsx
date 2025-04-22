"use client";

import { Card } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import AspectRatio from "./components/aspect-ratio";
import Dropdown from "./components/dropdown";
import ColorPicker from "@/components/color-picker";
import { RiGeminiLine } from "react-icons/ri";
import { Button } from "@/components/button";

const page = () => {
  const subtitleOptions = [
    { label: "Hello", value: "hello" },
    { label: "Hii", value: "hii" },
  ];

  return (
    <div className="flex flex-col p-2 sm:p-4 md:p-6 gap-6 lg:pr-10">
      <Card className="flex flex-col p-4 sm:p-6 md:p-8 gap-8 lg:pr-12">
        <form className="flex flex-col w-full space-y-2">
          <span className="font-bold">Blog to Video</span>
          <Textarea
            className="focus:border-2 focus:border-purple-600 outline-none focus-visible:ring-0 focus-visible:ring-offset-0"
            rows={8}
            placeholder="Paste your blog here...."
          />
          <div className="flex space-x-4">
            <Dropdown
              onChange={() => {}}
              label="Language"
              options={subtitleOptions}
            />
            <Dropdown
              onChange={() => {}}
              label="Captions"
              options={subtitleOptions}
            />
            <Dropdown
              onChange={() => {}}
              label="Voice"
              options={subtitleOptions}
            />
          </div>

          <label className="block text-sm font-medium text-gray-200 mb-1">
            Asppect Ratio
          </label>
          <AspectRatio />

          <label className="block text-lg font-medium text-gray-200 mb-1 pt-3">
            Advanced Options
          </label>

          <div className="grid grid-cols-4 gap-2">
            <ColorPicker />

            <Dropdown
              onChange={() => {}}
              label="Voice"
              options={subtitleOptions}
            />
            <Dropdown
              onChange={() => {}}
              label="Caption Animation"
              options={subtitleOptions}
            />
            <Dropdown
              onChange={() => {}}
              label="Background Music"
              options={subtitleOptions}
            />
            <Dropdown
              onChange={() => {}}
              label="Sound Effect"
              options={subtitleOptions}
            />
            <Dropdown
              onChange={() => {}}
              label="Animation Effect"
              options={subtitleOptions}
            />
            <Dropdown
              onChange={() => {}}
              label="Image Transition"
              options={subtitleOptions}
            />
          </div>

          <div className="flex justify-end">
            <Button className="px-4 py-2 mt-4 w-fit">
              <RiGeminiLine className={`mr-1 size-4 `} />
              Generate Video
            </Button>
          </div>
        </form>
      </Card>
    </div>
  );
};

export default page;
