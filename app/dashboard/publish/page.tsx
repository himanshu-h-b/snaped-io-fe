"use client"

import { useState } from "react"
import { Link, Link2, Plus } from "lucide-react"
import Image from "next/image"
import { Card } from "@/components/ui/card"
import { ConnectSocialsModal } from "@/components/connect-socials-modal"
import { CreatePostModal } from "@/components/create-post-modal"
import { SocialAccountsModal } from "@/components/social-accounts-modal"
import { Button } from "@/components/button"

const Page = () => {
  const [showConnectModal, setShowConnectModal] = useState(false)
  const [showCreateModal, setShowCreateModal] = useState(false)
  const [showAccountsModal, setShowAccountsModal] = useState(false)
  const [isConnected, setIsConnected] = useState(false)
  const [posts, setPosts] = useState<any[]>([])
  const [currentAccount, setCurrentAccount] = useState({
    name: "Alan Walker",
    platform: "youtube",
  })

  const handleConnect = (platform: string) => {
    setIsConnected(true)
    setShowConnectModal(false)
  }

  const handleCreatePost = (file: File) => {
    const newPost = {
      id: Date.now(),
      title: "India in Detail",
      date: "10-12-2024",
      thumbnail: URL.createObjectURL(file),
      duration: "00:06",
    }

    setPosts([...posts, newPost])
    setShowCreateModal(false)
  }

  const handleSwitchAccount = (account: any) => {
    setCurrentAccount(account)
    setShowAccountsModal(false)
  }

  return (
    <div className="container w-full h-full px-4 py-6 dark:bg-black">
      <div className="w-full p-6 bg-white dark:bg-[#121212] rounded-md shadow-sm">
      <div className="max-w-7xl mx-auto p-4">
        <div className="flex justify-between items-center mb-6">
          <div className="text-2xl font-medium mb-4">Publish</div>
          <Button
            onClick={() => setShowCreateModal(true)}
            className="py-2"
          >
            <Plus className="h-4 w-4 mr-2" />
            Create Post
          </Button>
        </div>

        {!isConnected ? (
          <div className="p-8 mb-6 flex flex-col items-center text-center">
            <h2 className="text-xl font-semibold mb-2">Connect Your Socials</h2>
            <p className="text-gray-500 max-w-xl mb-6">
              Easily link all your social media accounts to streamline your content sharing. Manage and synchronize your
              posts across multiple platforms, enhancing your online presence and engagement while saving time and
              resources effortlessly through integrated social media management tools.
            </p>
            <Button
              onClick={() => setShowConnectModal(true)}
              className="px-6 py-2 flex gap-2 items-center"
            >
              <Link2 className="" />
              Connect Social Accounts
            </Button>
          </div>
        ) : (
          // User Content Section
          <div className="mt-4">
            <div className="flex items-start gap-20">
              <div className="flex items-center">
                <div className="h-10 w-10 rounded-full bg-indigo-600 flex items-center justify-center text-white mr-2">
                  A
                </div>
                <div className="">
                  <div className="font-medium">{currentAccount.name}</div>
                  <div className="flex items-center">
                    <div
                      className={`h-6 w-6`}
                    >
                      <img src="/logos/youtube.svg" alt="logo" />
                    </div>
                  </div>
                </div>
              </div>
              <button className="text-purple-600" onClick={() => setShowAccountsModal(true)}>
                Switch
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-6">
              {posts.map((post) => (
                <Card key={post.id} className="overflow-hidden">
                  <div className="relative">
                    <div className="aspect-video bg-gray-200 relative">
                      <div className="absolute inset-0 flex items-center justify-center">
                        <Image
                          src={post.thumbnail || "/placeholder.svg"}
                          alt="Video thumbnail"
                          fill
                          className="object-cover"
                        />
                        <div className="absolute bottom-2 right-2 bg-black bg-opacity-70 text-white text-xs px-1 rounded">
                          {post.duration}
                        </div>
                      </div>
                    </div>
                    <div className="p-3">
                      <div className="flex justify-between">
                        <div>
                          <h3 className="font-medium">{post.title}</h3>
                          <p className="text-sm text-gray-500">{post.date}</p>
                        </div>
                        <button className="text-gray-500">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                          >
                            <path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z" />
                          </svg>
                        </button>
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Modals */}
      {showConnectModal && <ConnectSocialsModal onClose={() => setShowConnectModal(false)} onConnect={handleConnect} />}

      {showCreateModal && <CreatePostModal onClose={() => setShowCreateModal(false)} onCreatePost={handleCreatePost} />}

      {showAccountsModal && (
        <SocialAccountsModal
          onClose={() => setShowAccountsModal(false)}
          onSelectAccount={handleSwitchAccount}
          currentAccount={currentAccount}
        />
      )}
      </div>
    </div>
  )
}

export default Page;
