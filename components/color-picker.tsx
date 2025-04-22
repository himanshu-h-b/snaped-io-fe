"use client";

import { useState } from "react";
import { SketchPicker } from "react-color";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function ColorPicker() {
  const [color, setColor] = useState("#23D11A");
  const [open, setOpen] = useState(false);

  return (
    <div className="flex flex-col gap-2">
      <Label>Video Colour</Label>
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <div className="flex items-center gap-2 border px-2 rounded-md cursor-pointer outline-none ring-0">
            <div
              className="size-6 rounded border"
              style={{ backgroundColor: color }}
            />
            <Input
              value={color}
              readOnly
              className="cursor-pointer text-sm border-none bg-transparent"
            />
          </div>
        </PopoverTrigger>
        <PopoverContent align="start" className="w-auto p-0">
          <SketchPicker
            color={color}
            onChange={(updatedColor) => setColor(updatedColor.hex)}
          />
        </PopoverContent>
      </Popover>
    </div>
  );
}
