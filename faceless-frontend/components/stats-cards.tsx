import { TrendingUp, TrendingDown, Eye, DollarSign, Zap } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

const stats = [
  {
    name: "Total Videos Generated",
    value: "1,284",
    change: "+12.5%",
    trend: "up",
    icon: Zap,
  },
  {
    name: "Total Views",
    value: "2.4M",
    change: "+18.2%",
    trend: "up",
    icon: Eye,
  },
  {
    name: "Active Platforms",
    value: "3",
    change: "YouTube, TikTok, Instagram",
    trend: "neutral",
    icon: null,
  },
  {
    name: "Revenue This Month",
    value: "$12,450",
    change: "+8.3%",
    trend: "up",
    icon: DollarSign,
  },
]

export function StatsCards() {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      {stats.map((stat) => (
        <Card
          key={stat.name}
          className="relative overflow-hidden border-border bg-card/50 backdrop-blur-sm transition-all hover:bg-card/80"
        >
          <CardContent className="p-6">
            <div className="flex items-start justify-between">
              <div className="space-y-2">
                <p className="text-sm font-medium text-muted-foreground">{stat.name}</p>
                <p className="text-3xl font-bold tracking-tight text-foreground">{stat.value}</p>
                <div className="flex items-center gap-1 text-sm">
                  {stat.trend === "up" && (
                    <>
                      <TrendingUp className="h-4 w-4 text-success" />
                      <span className="font-medium text-success">{stat.change}</span>
                    </>
                  )}
                  {stat.trend === "down" && (
                    <>
                      <TrendingDown className="h-4 w-4 text-destructive" />
                      <span className="font-medium text-destructive">{stat.change}</span>
                    </>
                  )}
                  {stat.trend === "neutral" && <span className="text-muted-foreground">{stat.change}</span>}
                </div>
              </div>
              {stat.icon && (
                <div className="rounded-lg bg-primary/10 p-3">
                  <stat.icon className="h-6 w-6 text-primary" />
                </div>
              )}
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
