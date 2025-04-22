"use client"

import { useState } from "react"
import { Search } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"

export default function Support() {
  const [darkMode, setDarkMode] = useState(false)

  // Help categories data
  const helpCategories = [
    {
      title: "Billing & Plans",
      links: [
        { text: "Screened pricing & plans", href: "#" },
        { text: "How can i extend my plan?", href: "#" },
        { text: "Can i get a discount?", href: "#" },
      ],
    },
    {
      title: "Using Screened",
      links: [
        { text: "How do i send email?", href: "#" },
        { text: "I can't logout", href: "#" },
        { text: "How to change password?", href: "#" },
      ],
    },
    {
      title: "Artifical Intelligence",
      links: [
        { text: "What is Artificial Intelligence?", href: "#" },
        { text: "How can AI help me", href: "#" },
        { text: "Why HR's found it easy to use AI", href: "#" },
        { text: "Learning how to use AI", href: "#" },
      ],
    },
  ]

  return (
    <div className={`min-h-screen bg-background ${darkMode ? "dark" : ""}`}>
      <div className="container mx-auto px-4 py-8 space-y-6">

        {/* Header */}
        <div className="space-y-6">
          <h1 className="text-3xl font-bold tracking-tight">How can we help you?</h1>

          {/* Search bar */}
          <div className="relative">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input placeholder="Type your query here" className="pl-10 h-12 text-base" />
          </div>
        </div>

        {/* Help categories */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {helpCategories.map((category) => (
            <Card key={category.title} className="overflow-hidden">
              <CardHeader className="pb-4">
                <CardTitle>{category.title}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-1">
                {category.links.map((link) => (
                  <a key={link.text} href={link.href} className="block text-blue-500 dark:text-blue-500 hover:underline py-1">
                    {link.text}
                  </a>
                ))}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}

