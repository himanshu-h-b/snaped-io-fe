import React, { useState } from "react";
import { useDroppable } from "@dnd-kit/core";
import { CloudUploadIcon } from "lucide-react";

const UploadMediaDialog = () => {
  const [files, setFiles] = useState<File[]>([]);

  const { setNodeRef, isOver } = useDroppable({
    id: "upload-area",
  });

  const handleFiles = (newFiles: FileList | null) => {
    if (!newFiles) return;

    const validFiles = Array.from(newFiles).filter((file) =>
      [
        "image/jpeg",
        "image/png",
        "image/gif",
        "image/webp",
        "video/mp4",
        "video/webm",
      ].includes(file.type),
    );

    setFiles((prevFiles) => [...prevFiles, ...validFiles]);
  };

  const handleDrop = (event: React.DragEvent) => {
    event.preventDefault();
    handleFiles(event.dataTransfer.files);
  };

  return (
    <div className="p-4 max-w-xl mx-auto flex flex-col space-y-4">
      <div className="mt-4 flex justify-center self-end">
        <label
          htmlFor="file-upload"
          className="cursor-pointer bg-[#121212] text-white px-4 py-2 shadow hover:bg-[#232323] flex items-center space-x-2 rounded-lg"
        >
          <CloudUploadIcon className="size-6" />
          <span>Upload Files</span>
        </label>
        <input
          id="file-upload"
          type="file"
          className="hidden"
          multiple
          accept="image/*,video/*"
          onChange={(e) => handleFiles(e.target.files)}
        />
      </div>

      <div
        ref={setNodeRef}
        className={`border-2 border-dashed rounded-lg p-6 ${
          isOver ? "border-blue-500 bg-blue-50" : "border-gray-300"
        }`}
        onDrop={handleDrop}
        onDragOver={(e) => e.preventDefault()}
      >
        <p className="text-center text-gray-500">Drag and drop files here</p>
        <p className="text-center text-sm text-gray-400">
          Only images and videos are allowed
        </p>
      </div>

      <div className="mt-6 max-h-64 overflow-y-auto grid grid-cols-2 sm:grid-cols-3 gap-4 rounded p-4">
        {files.map((file, index) => (
          <div
            key={index}
            className="relative w-full h-32 rounded overflow-hidden shadow"
          >
            {file.type.startsWith("image/") ? (
              <img
                src={URL.createObjectURL(file)}
                alt={file.name}
                className="object-cover w-full h-full"
                onLoad={() => URL.revokeObjectURL(URL.createObjectURL(file))}
              />
            ) : (
              <video
                src={URL.createObjectURL(file)}
                controls
                className="object-cover w-full h-full"
                onLoadedData={() =>
                  URL.revokeObjectURL(URL.createObjectURL(file))
                } // Revoke URL to avoid memory leaks
              />
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default UploadMediaDialog;
