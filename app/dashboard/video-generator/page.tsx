"use client";
import { useState } from "react";
import { GenerateVideo } from "./components/generate-video";
import { WriteYourScript } from "./components/write-your-script";

const VideoGenerator = () => {
  const [script, setScript] = useState("");
  return (
    <div className="flex flex-col p-4 sm:p-6 md:p-8 gap-8 lg:pr-12">
      <div className="space-y-6">
        <div className="bg-background rounded-lg p-6 border shadow space-y-10 pb-10">
          <div>
            <h1 className="text-lg mb-4">Image to Video</h1>
            <WriteYourScript script={script} setScript={setScript} />
          </div>
          <GenerateVideo script={script} />
        </div>
      </div>
    </div>
  );
};

export default VideoGenerator;
