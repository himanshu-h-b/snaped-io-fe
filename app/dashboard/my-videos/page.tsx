"use client"
import { useState } from "react"
import { ChevronDown, ChevronUp, Folder, MoreVertical } from "lucide-react"
import Link from "next/link"
import CustomPage from "@/components/custom-page";
import { Button } from "@/components/button";

const VideoEditor = () => {
  const [foldersExpanded, setFoldersExpanded] = useState(true)
  const [videosExpanded, setVideosExpanded] = useState(true)
  const [folders, setFolders] = useState([{ id: 1, name: "Folder 01", items: 1 }])
  const [videos, setVideos] = useState([{ id: 1, name: "Untitled Video 01", timestamp: "Few Sec ago" }])
  const [showCreateFolderModal, setShowCreateFolderModal] = useState(false)
  const [newFolderName, setNewFolderName] = useState("")

  const handleCreateFolder = () => {
    if (newFolderName.trim()) {
      const newFolder = {
        id: folders.length + 1,
        name: newFolderName,
        items: 0,
      }
      setFolders([...folders, newFolder])
      setNewFolderName("")
      setShowCreateFolderModal(false)
    }
  }

  return (
    <div className="w-full h-full px-4 py-6">
    <div className="w-full h-full p-6 bg-white dark:bg-black rounded-lg shadow-sm">
    <div className="flex justify-between items-center mb-4">
      <div className="flex flex-col gap-2">
        <h1 className="text-xl font-medium">
          My Videos
        </h1>
        <div className="text-sm">
          /<Link href="/home" className="text-transparent bg-white 
             bg-gradient-to-r from-[#4E43FA] to-[#9F62CA] bg-clip-text 
             rounded-md">Home</Link>
        </div>
      </div>
      <button
        onClick={() => setShowCreateFolderModal(true)}
        className="relative px-3 py-1.5 text-sm 
             text-transparent bg-white 
             bg-gradient-to-r from-[#4E43FA] to-[#9F62CA] bg-clip-text 
             border-2 rounded-md border-[#9F62CA]"
      >
        Create Folder
      </button>
    </div>

    {/* Folders Section */}
    <div className="rounded-md mb-4 overflow-hidden">
      <div
        className="flex justify-between items-center p-3 bg-[#F4F4F4] dark:bg-[#404040] rounded-sm cursor-pointer"
        onClick={() => setFoldersExpanded(!foldersExpanded)}
      >
        <h2 className="font-medium">Folders</h2>
        {foldersExpanded ? <ChevronDown size={20} /> : <ChevronUp size={20} />}
      </div>

      {foldersExpanded && (
        <div className="px-2 py-3 flex gap-3 flex-wrap">
          {folders.map((folder) => (
            <div key={folder.id} className="flex flex-col items-start gap-2 p-2 w-32">
              <div className="flex w-full h-full bg-[#D9D9D98C] dark:bg-[#404040] items-center rounded-sm justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="url(#custom-gradient)"
                stroke="none"
                className="w-24 h-24 scale-90"
              >
                <defs>
                  <linearGradient id="custom-gradient" gradientTransform="rotate(135)">
                    <stop offset="0%" stopColor="#4E43FA" />
                    <stop offset="100%" stopColor="#9F62CA" />
                  </linearGradient>
                </defs>
                <Folder fill="url(#custom-gradient)" stroke="none" />
              </svg>
                {/* <Folder className="w-24 h-24 text-custom-gradient scale-90" stroke="none" fill="currentColor" /> */}
              </div>
              <div className="flex justify-between w-full">
              <div className="flex-1">
                <p className="text-sm">{folder.name}</p>
                <p className="text-xs text-gray-500">{folder.items} items</p>
              </div>
              <button className="p-1">
                <MoreVertical size={18} className="text-[#505050]" />
              </button>
            </div>
            </div>
          ))}
        </div>
      )}
    </div>

    {/* Videos Section */}
    <div className="overflow-hidden">
      <div
        className="flex justify-between items-center p-3 bg-[#F4F4F4] dark:bg-[#404040] rounded-sm cursor-pointer"
        onClick={() => setVideosExpanded(!videosExpanded)}
      >
        <h2 className="font-medium">Videos</h2>
        {videosExpanded ? <ChevronDown size={20} /> : <ChevronUp size={20} />}
      </div>

      {videosExpanded && (
        <div className="p-4">
          {videos.map((video) => (
            <div key={video.id} className="border h-full flex flex-col gap-2 w-72 rounded-md p-3">
              <div className="bg-[#EFF4F6] h-36 w-full mb-2 rounded"></div>
              <div className="flex justify-between items-start">
                <div>
                  <p className="text-[#464646]">{video.name}</p>
                  <p className="text-sm text-[#9A9A9A]">{video.timestamp}</p>
                </div>
                <button className="p-1">
                  <MoreVertical size={18} />
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>

    {/* Create Folder Modal */}
    {showCreateFolderModal && (
      <div onClick={() => setShowCreateFolderModal(false)} className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
        <div onClick={(e) => e.stopPropagation()} className="bg-white flex flex-col gap-12 dark:bg-[#404040] p-6 rounded-xl w-[38rem]">
          <div>
          <h2 className="text-base mb-4">Create Folder</h2>
          <input
            type="text"
            value={newFolderName}
            onChange={(e) => setNewFolderName(e.target.value)}
            placeholder="Folder name"
            className="w-full border placeholder-[#454545] rounded-md p-2 mb-4 outline-none dark:text-black bg-[#E1DFFF]"
            autoFocus
          />
          </div>
          <div className="flex w-full items-center justify-center">
            {/* <button onClick={() => setShowCreateFolderModal(false)} className="px-4 py-2 border rounded-md">
              Cancel
            </button> */}
            <Button onClick={handleCreateFolder} className="px-9 py-3 rounded-md">
              Create Folder
            </Button>
          </div>
        </div>
      </div>
    )}
  </div>
  </div>
  );
};

export default VideoEditor;
