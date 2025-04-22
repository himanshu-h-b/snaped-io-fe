"use client"

import type React from "react"

import { useState } from "react"
import Image from "next/image"

const page = () => {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedCategories, setSelectedCategories] = useState<string[]>([])


  const categories = [
    { id: "education", name: "Education", icon: "🎓" },
    { id: "energy", name: "Energy", icon: "⚡" },
    { id: "legal", name: "Legal", icon: "⚖️" },
    { id: "consulting", name: "Consulting", icon: "💼" },
    { id: "aerospace", name: "Aerospace", icon: "✈️" },
    { id: "construction1", name: "Construction", icon: "🔨" },
    { id: "technology", name: "Technology", icon: "💻" },
    { id: "retail", name: "Retail", icon: "🛍️" },
    { id: "government", name: "Government", icon: "🏛️" },
    { id: "healthcare", name: "Healthcare", icon: "🩺" },
    { id: "nonprofit", name: "Non-Profit", icon: "❤️" },
    { id: "realestate", name: "Real Estate", icon: "🏠" },
    { id: "agriculture", name: "Agriculture", icon: "🌾" },
    { id: "hospitality", name: "Hospitality", icon: "🏨" },
    { id: "construction2", name: "Construction", icon: "🏗️" },
    { id: "transportation", name: "Transportation", icon: "🚆" },
    { id: "manufacturing", name: "Manufacturing", icon: "🏭" },
    { id: "pharmaceuticals", name: "Pharmaceuticals", icon: "💊" },
    { id: "media", name: "Media and Entertainment", icon: "🎬" },
  ]

  const searchResults = [
    {
      id: 1,
      keyword: "what is servant leadership",
      trend: 0,
      cpc: "$0.63",
      searchVolume: "4.40k",
      completion: "Low",
      trendGraph: "/placeholder.svg?height=30&width=80",
    },
    {
      id: 2,
      keyword: "what is your leadership style",
      trend: 0,
      cpc: "$0.4",
      searchVolume: "1.30k",
      completion: "High",
      trendGraph: "/placeholder.svg?height=30&width=80",
    },
    {
      id: 3,
      keyword: "what is servant leadership",
      trend: 0,
      cpc: "$0.63",
      searchVolume: "4.40k",
      completion: "Low",
      trendGraph: "/placeholder.svg?height=30&width=80",
    },
    {
      id: 4,
      keyword: "what is your leadership style",
      trend: 0,
      cpc: "$0.4",
      searchVolume: "1.30k",
      completion: "High",
      trendGraph: "/placeholder.svg?height=30&width=80",
    },
    {
      id: 5,
      keyword: "what is servant leadership",
      trend: 0,
      cpc: "$0.63",
      searchVolume: "4.40k",
      completion: "Low",
      trendGraph: "/placeholder.svg?height=30&width=80",
    },
    {
      id: 6,
      keyword: "what is your leadership style",
      trend: 0,
      cpc: "$0.4",
      searchVolume: "1.30k",
      completion: "High",
      trendGraph: "/placeholder.svg?height=30&width=80",
    },
    {
      id: 7,
      keyword: "what is servant leadership",
      trend: 0,
      cpc: "$0.63",
      searchVolume: "4.40k",
      completion: "Low",
      trendGraph: "/placeholder.svg?height=30&width=80",
    },
  ]

  const toggleCategory = (categoryId: string) => {
    if (selectedCategories.includes(categoryId)) {
      setSelectedCategories(selectedCategories.filter((id) => id !== categoryId))
    } else {
      setSelectedCategories([...selectedCategories, categoryId])
    }
  }

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Searching for:", searchQuery)
  }

  return (
    <div className="w-full h-full px-4 py-6">
      <div className="w-full p-6 bg-white dark:bg-transparent rounded-md shadow-sm">
      <h1 className="text-base font-medium mb-1">Explore Ideas</h1>
      <p className="mb-4 text-sm font-light">
        Discover trending topics to inspire creativity and craft impactful scripts and videos that captivate audiences
      </p>

      {/* Search Bar */}
      <div className="border rounded-lg px-6 py-4 mb-4">
        <form onSubmit={handleSearch} className="flex items-center gap-2 mb-2">
          <div className="flex-1 flex border border-[#4E43FA] rounded-md overflow-hidden">
            <div className="flex items-center px-2 border-r-2 border-t-2 border-b-2 border-[#4E43FA] rounded-r-md w-fit">
              <div className="flex items-center gap-1">
                <Image
                  src="/images/Google.svg"
                  alt="Google"
                  width={20}
                  height={20}
                  className="rounded-full"
                />
                <span className="text-sm font-light">Google</span>
                <svg className="w-4 h-4" viewBox="0 0 20 20" fill="currentColor">
                  <path
                    fillRule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
            </div>
            <input
              type="text"
              placeholder="Type your ideas here"
              className="flex-1 p-2 outline-none bg-[#F8F8F8] dark:bg-[#1E2529]"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          <button type="submit" className="bg-transparent text-[#4E43FA] border border-[#4E43FA] rounded-md px-4 py-2 text-sm">
            Search Ideas
          </button>
        </form>
        <div className="text-xs text-[#313131] dark:text-[#6B7280]">
          Examples: "Building Project Funding", "Medical Services", "Obstacles", "Journey", "Psychological Well-being".
        </div>
      </div>

      {/* Categories */}
      <div className="mb-6">
        <h2 className="text-sm font-medium mb-2">Search by category</h2>
        <div className="flex flex-wrap gap-2">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => toggleCategory(category.id)}
              className={`flex items-center gap-1 px-2 py-1.5 rounded-sm text-sm ${
                selectedCategories.includes(category.id) ? "bg-[#E1DFFF] dark:bg-black dark:text-[#4e43fa] dark:border-[#4e43fa] text-[#4E43FA] border border-[#4E43FA] " : "bg-white dark:bg-black dark:border-[#232323] border text-[#717171] border-[#717171]"
              }`}
            >
              <span>{category.icon}</span>
              <span className=" text-sm">{category.name}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Results Table */}
      <div className="overflow-x-auto text-[#5F5F5F]">
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-gray-100 dark:bg-[#404040] dark:text-[#D5D5D5] text-left text-sm">
              <th className="px-4 py-2 rounded-l-md font-medium">Questions / Keywords</th>
              <th className="px-4 py-2 font-medium">Trend</th>
              <th className="px-4 py-2 font-medium">CPC</th>
              <th className="px-4 py-2 font-medium">Search Volume</th>
              <th className="px-4 py-2 font-medium">Completion</th>
              <th className="px-4 py-2 font-medium">Trend Graph</th>
              <th className="px-4 py-2 rounded-r-md"></th>
            </tr>
          </thead>
          <tbody>
            {searchResults.map((result, index) => (
              <tr key={result.id} className={index % 2 === 0 ? "bg-white dark:bg-transparent dark:text-[#D5D5D5]" : "bg-gray-50 dark:bg-[#404040] dark:text-[#D5D5D5]"}>
                <td className="px-4 py-3 text-sm">{result.keyword}</td>
                <td className="px-4 py-3 text-sm">{result.trend}</td>
                <td className="px-4 py-3 text-sm">{result.cpc}</td>
                <td className="px-4 py-3 text-sm">{result.searchVolume}</td>
                <td className="px-4 py-3 text-sm">
                  <span
                    className={`px-2 py-0.5 rounded-full text-xs ${
                      result.completion === "Low" ? "text-green-600" : "text-red-600"
                    }`}
                  >
                    {result.completion}
                  </span>
                </td>
                <td className="px-4 py-3">
                  <Image
                    src={result.trendGraph || "/placeholder.svg"}
                    alt="Trend Graph"
                    width={80}
                    height={30}
                    className="w-20 h-8"
                  />
                </td>
                <td className="px-4 py-3">
                  <button className="border border-[#4E43FA] text-[#4E43FA] dark:bg-black/60 rounded-md px-4 py-1 text-sm">Create</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
    </div>
  )
}

export default page