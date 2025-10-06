import { MoreVertical, Edit, Trash2, Copy } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Badge } from "@/components/ui/badge"
import { PlatformIcon } from "@/components/platform-icon"

const contentItems = [
  {
    id: 1,
    title: "10 AI Tips for Productivity",
    description: "Boost your workflow with these amazing AI tools",
    platform: "youtube",
    thumbnail: "/ai-productivity-video-thumbnail.jpg",
    views: "124K",
    engagement: "8.5%",
    status: "published",
  },
  {
    id: 2,
    title: "Quick Morning Routine",
    description: "Start your day right with this 5-minute routine",
    platform: "tiktok",
    thumbnail: "/morning-routine-thumbnail.png",
    views: "89K",
    engagement: "12.3%",
    status: "published",
  },
  {
    id: 3,
    title: "Tech Review: Latest Gadgets",
    description: "Unboxing and reviewing the newest tech",
    platform: "instagram",
    thumbnail: "/tech-gadgets-video-thumbnail.jpg",
    views: "56K",
    engagement: "9.7%",
    status: "scheduled",
  },
  {
    id: 4,
    title: "Cooking Hack You Need",
    description: "This simple trick will change your cooking game",
    platform: "youtube",
    thumbnail: "/cooking-hack-video-thumbnail.jpg",
    views: "0",
    engagement: "0%",
    status: "processing",
  },
  {
    id: 5,
    title: "Fitness Challenge Day 1",
    description: "30-day transformation starts now",
    platform: "tiktok",
    thumbnail: "/fitness-challenge-video-thumbnail.jpg",
    views: "203K",
    engagement: "15.2%",
    status: "published",
  },
  {
    id: 6,
    title: "Travel Vlog: Hidden Gems",
    description: "Exploring the most beautiful places",
    platform: "instagram",
    thumbnail: "/travel-vlog-thumbnail.png",
    views: "0",
    engagement: "0%",
    status: "scheduled",
  },
]

export function ContentGrid() {
  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-semibold text-foreground">Recent Content</h2>
        <Button variant="ghost" size="sm">
          View All
        </Button>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {contentItems.map((item) => (
          <Card
            key={item.id}
            className="group overflow-hidden border-border bg-card/50 backdrop-blur-sm transition-all hover:bg-card/80"
          >
            <CardContent className="p-0">
              {/* Thumbnail */}
              <div className="relative aspect-video overflow-hidden bg-muted">
                <img
                  src={item.thumbnail || "/placeholder.svg"}
                  alt={item.title}
                  className="h-full w-full object-cover transition-transform group-hover:scale-105"
                />
                <div className="absolute right-2 top-2">
                  <PlatformIcon platform={item.platform} />
                </div>
              </div>

              {/* Content */}
              <div className="space-y-3 p-4">
                <div className="space-y-1">
                  <h3 className="font-semibold leading-tight text-foreground line-clamp-1">{item.title}</h3>
                  <p className="text-sm text-muted-foreground line-clamp-2">{item.description}</p>
                </div>

                {/* Stats */}
                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <span className="font-medium">{item.views}</span>
                    <span>views</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <span className="font-medium">{item.engagement}</span>
                    <span>engagement</span>
                  </div>
                </div>

                {/* Status & Actions */}
                <div className="flex items-center justify-between">
                  <Badge
                    variant={
                      item.status === "published" ? "default" : item.status === "scheduled" ? "secondary" : "outline"
                    }
                    className={
                      item.status === "published"
                        ? "bg-success/10 text-success hover:bg-success/20"
                        : item.status === "scheduled"
                          ? "bg-warning/10 text-warning hover:bg-warning/20"
                          : "bg-muted text-muted-foreground"
                    }
                  >
                    {item.status.charAt(0).toUpperCase() + item.status.slice(1)}
                  </Badge>

                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" size="icon" className="h-8 w-8">
                        <MoreVertical className="h-4 w-4" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuItem>
                        <Edit className="mr-2 h-4 w-4" />
                        Edit
                      </DropdownMenuItem>
                      <DropdownMenuItem>
                        <Copy className="mr-2 h-4 w-4" />
                        Duplicate
                      </DropdownMenuItem>
                      <DropdownMenuItem className="text-destructive">
                        <Trash2 className="mr-2 h-4 w-4" />
                        Delete
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
