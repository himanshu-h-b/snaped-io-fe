"use client"

import type React from "react"

import { useState, useRef } from "react"
import { Plus, Sparkles, X, Upload } from "lucide-react"
import { Button } from "./button"

interface CreatePostModalProps {
  onClose: () => void
  onCreatePost: (file: File) => void
}

export function CreatePostModal({ onClose, onCreatePost }: CreatePostModalProps) {
  const [content, setContent] = useState("")
  const [selectedFile, setSelectedFile] = useState<File | null>(null)
  const [previewUrl, setPreviewUrl] = useState<string | null>(null)
  const fileInputRef = useRef<HTMLInputElement>(null)

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0]
      setSelectedFile(file)

      // Create preview URL
      const url = URL.createObjectURL(file)
      setPreviewUrl(url)
    }
  }

  const handleUploadClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click()
    }
  }

  const handleSubmit = () => {
    if (selectedFile) {
      onCreatePost(selectedFile)
    }
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white dark:bg-[#121212] rounded-lg w-full max-w-md mx-4 py-4">
        <div className="flex justify-between items-center p-4">
          <h2 className="text-base font-semibold">Create Post</h2>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
            <X className="h-5 w-5" />
          </button>
        </div>

        <div className="px-4 flex flex-col gap-4">
          <div className="flex items-center gap-2">
            <div className="py-2 px-4 rounded-full bg-[#E1DFFF] flex items-center justify-center text-black text-xl">A</div>
            <button className="border py-2 px-2 rounded-full p-1">
              <Plus className="h-6 w-6" />
            </button>
          </div>

          <div className="border rounded-lg p-2 flex flex-col gap-2">
            <label htmlFor="cont" className="text-sm">What do you want to share?</label>
            <textarea
              className="w-full h-24 resize-none outline-none text-sm"
              placeholder="Enter or generate content here..."
              value={content}
              onChange={(e) => setContent(e.target.value)}
            ></textarea>
          </div>

          {previewUrl && (
            <div className="mb-4 relative">
              <div className="aspect-video bg-gray-200 rounded-lg overflow-hidden">
                {selectedFile?.type.startsWith("video/") ? (
                  <video src={previewUrl} className="w-full h-full object-cover" controls />
                ) : (
                  <img src={previewUrl || "/placeholder.svg"} className="w-full h-full object-cover" alt="Preview" />
                )}
              </div>
              <button
                className="absolute top-2 right-2 bg-gray-800 bg-opacity-70 text-white rounded-full p-1"
                onClick={() => {
                  setSelectedFile(null)
                  setPreviewUrl(null)
                }}
              >
                <X className="h-4 w-4" />
              </button>
            </div>
          )}

          <div className="flex flex-col w-fit gap-2">
            <button className="flex gap-1 items-center border border-purple-600 py-1 px-2 rounded-lg text-gradient-primary">
              <img src="/logos/light.svg" alt="img" className="h-5 w-5" />
              Generate Description
            </button>

            <button
              className="text-gray-600 flex flex-col items-center justify-center w-24 border h-20 border-gray-200 text-xs rounded-lg"
              onClick={handleUploadClick}
            >
              <Upload className="h-3 w-3 mr-1" />
              Upload
            </button>
            <input
              type="file"
              ref={fileInputRef}
              className="hidden"
              accept="image/*,video/*"
              onChange={handleFileChange}
            />
          </div>

          <div className="flex justify-end gap-2">
            <Button
              className=""
              onClick={handleSubmit}
            >
              Create
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

