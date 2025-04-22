"use client"

import { useState } from "react"
import { X } from "lucide-react"
import { Button } from "@/components/ui/button"

interface SocialPlatform {
  name: string
  icon: string
  type: string
}

const socialPlatforms: SocialPlatform[] = [
  { name: "Youtube", icon: "/logos/youtube.svg", type: "Channel" },
  { name: "LinkedIn", icon: "/logos/linkdin.svg", type: "Account" },
  { name: "Facebook", icon: "/logos/facebook.svg", type: "Page" },
  { name: "Instagram", icon: "/logos/insta.svg", type: "Channel" },
  { name: "X", icon: "/logos/twitter.svg", type: "Account" },
  { name: "Threads", icon: "/logos/threads.svg", type: "Page" },
]

interface ConnectSocialsModalProps {
  onClose: () => void
  onConnect: (platform: string) => void
}

export function ConnectSocialsModal({ onClose, onConnect }: ConnectSocialsModalProps) {
  const [connecting, setConnecting] = useState(false)
  const [selectedPlatform, setSelectedPlatform] = useState("")

  const handleConnect = (platform: string) => {
    setSelectedPlatform(platform)
    setConnecting(true)

    // Simulate connection process
    setTimeout(() => {
      onConnect(platform)
    }, 1000)
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg dark:bg-[#121212] w-fit max-w-[47rem] mx-4">
        <div className="flex justify-between items-center p-4 border-b">
          <h2 className="text-lg font-medium">Connect to you socials</h2>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
            <X className="h-5 w-5" />
          </button>
        </div>

        <div className="flex flex-wrap w-full gap-7 p-6">
          {socialPlatforms.map((platform, index) => (
            <div key={index} className="border dark:bg-white/10 rounded-lg w-52 p-4 flex flex-col items-center text-center">
              <div
                className={`h-10 w-10}`}
              >
                <img src={platform.icon} alt="logo icon" className="w-full h-full object-cover" />
              </div>
              <div className="mt-2">
                <div className="font-medium text-gray-500">{platform.name}</div>
                <div className="text-sm ">{platform.type}</div>
              </div>
              <Button
                variant="link"
                className="text-blue-500 mt-1 p-0 h-auto"
                onClick={() => handleConnect(platform.icon)}
                disabled={connecting && selectedPlatform === platform.icon}
              >
                {connecting && selectedPlatform === platform.icon ? "Connecting..." : "Connect"}
              </Button>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

function getSocialIconColor(icon: string): string {
  switch (icon) {
    case "youtube":
      return "bg-red-100 text-red-600"
    case "linkedin":
      return "bg-blue-100 text-blue-600"
    case "facebook":
      return "bg-blue-100 text-blue-600"
    case "instagram":
      return "bg-pink-100 text-pink-600"
    case "twitter":
      return "bg-gray-100 text-black"
    case "threads":
      return "bg-gray-100 text-black"
    default:
      return "bg-gray-100 text-gray-600"
  }
}

function getSocialIcon(icon: string) {
  switch (icon) {
    case "youtube":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17" />
          <path d="m10 15 5-3-5-3z" />
        </svg>
      )
    case "linkedin":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
          <rect width="4" height="12" x="2" y="9" />
          <circle cx="4" cy="4" r="2" />
        </svg>
      )
    case "facebook":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
        </svg>
      )
    case "instagram":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
          <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
          <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
        </svg>
      )
    case "twitter":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M4 4h16v16H4z" />
        </svg>
      )
    case "threads":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M19 5c-1.5 0-2.8 1.4-3 2-3.5-1.5-11-1.5-14 0-.3-1.5-1.5-2-3-2" />
          <path d="M3 5v14c0 1.1.9 2 2 2h14a2 2 0 0 0 2-2V5" />
        </svg>
      )
    default:
      return null
  }
}

