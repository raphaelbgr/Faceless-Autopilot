"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Play, Pause, Download, RefreshCw } from "lucide-react"

interface ContentGeneratorProps {
  onGenerate: (content: any) => void
}

export function ContentGenerator({ onGenerate }: ContentGeneratorProps) {
  const [step, setStep] = useState(1)
  const [isGenerating, setIsGenerating] = useState(false)
  const [progress, setProgress] = useState(0)
  const [formData, setFormData] = useState({
    topic: "",
    niche: "",
    format: "",
    voice: "",
    duration: "",
    platforms: [] as string[]
  })

  const niches = [
    "Personal Finance",
    "Health & Fitness", 
    "Technology",
    "Business",
    "Motivation",
    "Education"
  ]

  const formats = [
    "Tips & Tricks",
    "Educational",
    "Motivational",
    "Entertainment",
    "News & Updates"
  ]

  const voices = [
    "Professional Male",
    "Professional Female", 
    "Casual Male",
    "Casual Female",
    "Energetic"
  ]

  const platforms = [
    { id: "youtube", name: "YouTube Shorts", icon: "📺" },
    { id: "tiktok", name: "TikTok", icon: "🎵" },
    { id: "instagram", name: "Instagram Reels", icon: "📸" }
  ]

  const handleGenerate = async () => {
    setIsGenerating(true)
    setProgress(0)
    
    // Simulate AI generation process
    const steps = [
      "Analyzing trending topics...",
      "Generating script...",
      "Creating voiceover...",
      "Assembling video...",
      "Optimizing for platforms..."
    ]
    
    for (let i = 0; i < steps.length; i++) {
      await new Promise(resolve => setTimeout(resolve, 1000))
      setProgress((i + 1) * 20)
    }
    
    setIsGenerating(false)
    setProgress(100)
    
    // Generate mock content
    const generatedContent = {
      id: Date.now(),
      title: `AI-Generated: ${formData.topic}`,
      description: `Automatically generated content about ${formData.topic}`,
      platform: formData.platforms[0] || "youtube",
      thumbnail: "/placeholder.svg",
      views: "0",
      engagement: "0%",
      status: "generated"
    }
    
    onGenerate(generatedContent)
  }

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <RefreshCw className="h-5 w-5" />
            AI Content Generator
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* Step 1: Topic & Niche */}
          <div className="space-y-4">
            <div>
              <Label htmlFor="topic">Topic or Keyword</Label>
              <Input
                id="topic"
                placeholder="e.g., '5 Money Mistakes That Keep You Poor'"
                value={formData.topic}
                onChange={(e) => setFormData({...formData, topic: e.target.value})}
              />
            </div>
            
            <div>
              <Label>Content Niche</Label>
              <Select onValueChange={(value) => setFormData({...formData, niche: value})}>
                <SelectTrigger>
                  <SelectValue placeholder="Select a niche" />
                </SelectTrigger>
                <SelectContent>
                  {niches.map((niche) => (
                    <SelectItem key={niche} value={niche.toLowerCase()}>
                      {niche}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* Step 2: Format & Voice */}
          <div className="grid gap-4 md:grid-cols-2">
            <div>
              <Label>Content Format</Label>
              <Select onValueChange={(value) => setFormData({...formData, format: value})}>
                <SelectTrigger>
                  <SelectValue placeholder="Select format" />
                </SelectTrigger>
                <SelectContent>
                  {formats.map((format) => (
                    <SelectItem key={format} value={format.toLowerCase()}>
                      {format}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            
            <div>
              <Label>Voice Style</Label>
              <Select onValueChange={(value) => setFormData({...formData, voice: value})}>
                <SelectTrigger>
                  <SelectValue placeholder="Select voice" />
                </SelectTrigger>
                <SelectContent>
                  {voices.map((voice) => (
                    <SelectItem key={voice} value={voice.toLowerCase()}>
                      {voice}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* Step 3: Platform Selection */}
          <div>
            <Label>Target Platforms</Label>
            <div className="flex flex-wrap gap-2 mt-2">
              {platforms.map((platform) => (
                <Button
                  key={platform.id}
                  variant={formData.platforms.includes(platform.id) ? "default" : "outline"}
                  size="sm"
                  onClick={() => {
                    const newPlatforms = formData.platforms.includes(platform.id)
                      ? formData.platforms.filter(p => p !== platform.id)
                      : [...formData.platforms, platform.id]
                    setFormData({...formData, platforms: newPlatforms})
                  }}
                >
                  <span className="mr-2">{platform.icon}</span>
                  {platform.name}
                </Button>
              ))}
            </div>
          </div>

          {/* Generation Progress */}
          {isGenerating && (
            <div className="space-y-2">
              <div className="flex items-center justify-between text-sm">
                <span>Generating content...</span>
                <span>{progress}%</span>
              </div>
              <Progress value={progress} className="w-full" />
            </div>
          )}

          {/* Generate Button */}
          <Button 
            onClick={handleGenerate}
            disabled={!formData.topic || !formData.niche || isGenerating}
            className="w-full"
            size="lg"
          >
            {isGenerating ? (
              <>
                <RefreshCw className="mr-2 h-4 w-4 animate-spin" />
                Generating...
              </>
            ) : (
              <>
                <Play className="mr-2 h-4 w-4" />
                Generate Content
              </>
            )}
          </Button>
        </CardContent>
      </Card>
    </div>
  )
}
