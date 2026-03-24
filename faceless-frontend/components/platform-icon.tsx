import { Youtube, Music2, Instagram } from "lucide-react"
import { cn } from "@/lib/utils"

interface PlatformIconProps {
  platform: "youtube" | "tiktok" | "instagram"
  className?: string
}

export function PlatformIcon({ platform, className }: PlatformIconProps) {
  const icons = {
    youtube: {
      icon: Youtube,
      bg: "bg-red-500",
      text: "text-white",
    },
    tiktok: {
      icon: Music2,
      bg: "bg-black",
      text: "text-white",
    },
    instagram: {
      icon: Instagram,
      bg: "bg-gradient-to-br from-purple-500 via-pink-500 to-orange-500",
      text: "text-white",
    },
  }

  const config = icons[platform]
  const Icon = config.icon

  return (
    <div className={cn("flex h-8 w-8 items-center justify-center rounded-lg", config.bg, className)}>
      <Icon className={cn("h-4 w-4", config.text)} />
    </div>
  )
}
