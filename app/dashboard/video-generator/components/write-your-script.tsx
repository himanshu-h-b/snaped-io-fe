"use client";
import { Button } from "@/components/button";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import { generateScript } from "../api";

function WriteYourScript({
  script,
  setScript,
}: {
  script: string;
  setScript: any;
}) {
  const [selected, setSelected] = useState<string | null>(null);
  const [open, setOpen] = useState(false);

  const categories = [
    {
      id: 1,
      name: "Action & Adventure (ACTION)",
    },
    {
      id: 2,
      name: "LEGO Style (LEGO)",
    },
    {
      id: 3,
      name: "Minecraft Aesthetic (MINECRAFT)",
    },
    {
      id: 4,
      name: "Anime & Manga (ANIME)",
    },
    {
      id: 5,
      name: "Disney & Pixar (DISNEY PIXAR)",
    },
    {
      id: 6,
      name: "Children’s Storybook (CHILDREN BOOK)",
    },
    {
      id: 7,
      name: "Photorealistic (PHOTO REALISM)",
    },
    {
      id: 8,
      name: "Studio Ghibli-Inspired (STUDIO GHIBLI)",
    },
    {
      id: 9,
      name: "Watercolor Painting (WATERCOLOR)",
    },
    {
      id: 10,
      name: "Vintage Camera (OLD CAMERA)",
    },
    {
      id: 11,
      name: "Charcoal Sketch (CHARCOAL)",
    },
    {
      id: 12,
      name: "Steampunk Fantasy (STEAMPUNK)",
    },
    {
      id: 13,
      name: "Cyberpunk Neon (CYBERPUNK)",
    },
  ];

  const handleSubmit = async (_data: FormData) => {
    console.log("Generating script");
    const response = await generateScript(_data, selected || "");
    setScript(response.script);
    setOpen(false);
  };

  return (
    <div>
      <p className="text-sm">Write your script</p>
      <Textarea
        className="focus:border-2 focus:border-purple-600 outline-none focus-visible:ring-0 focus-visible:ring-offset-0 my-2"
        rows={8}
        value={script}
        readOnly
        placeholder="Paste your blog here...."
      />
      <Dialog open={open}>
        <Button
          onClick={() => {
            setOpen(true);
          }}
          className="float-end"
        >
          Generate With AI
        </Button>
        <DialogContent>
          <DialogTitle>What topic should we focus on?</DialogTitle>
          <form action={handleSubmit}>
            <Textarea
              className="focus:border-2 focus:border-purple-600 outline-none focus-visible:ring-0 focus-visible:ring-offset-0 my-2"
              rows={4}
              name="prompt"
              placeholder="Enter the prompt"
            />

            <div className="flex justify-center mt-6">
              <div className="grid grid-cols-4 gap-3 rounded-lg">
                {categories.map((category) => (
                  <button
                    type="button"
                    key={category.name}
                    className={`px-4 py-2 border rounded-lg text-sm ${
                      selected === category.name
                        ? "bg-purple-300 text-purple-900"
                        : ""
                    }`}
                    onClick={() => setSelected(category.name)}
                  >
                    {category.name.split("(")[0]}
                  </button>
                ))}
              </div>
            </div>

            <h3 className="font-semibold mt-4 mb-2">Script Length</h3>
            <Input type="number" name="video_length" placeholder="00"></Input>

            <div className="flex gap-2 float-end">
              <Button
                type="button"
                className="float-end mt-4"
                onClick={() => setOpen(false)}
              >
                Close
              </Button>
              <Button type="submit" className="float-end mt-4">
                Generate Script
              </Button>
            </div>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
}

export { WriteYourScript };
