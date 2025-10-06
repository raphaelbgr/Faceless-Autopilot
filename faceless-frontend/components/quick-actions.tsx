import { Plus, Calendar, BarChart3, Settings } from "lucide-react"
import { Button } from "@/components/ui/button"

export function QuickActions() {
  return (
    <div className="space-y-4">
      <h2 className="text-xl font-semibold text-foreground">Quick Actions</h2>
      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
        <Button className="h-auto flex-col gap-2 py-4" size="lg">
          <Plus className="h-5 w-5" />
          <span>Generate New Content</span>
        </Button>
        <Button variant="secondary" className="h-auto flex-col gap-2 py-4" size="lg">
          <Calendar className="h-5 w-5" />
          <span>Schedule Posts</span>
        </Button>
        <Button variant="secondary" className="h-auto flex-col gap-2 py-4" size="lg">
          <BarChart3 className="h-5 w-5" />
          <span>View Analytics</span>
        </Button>
        <Button variant="secondary" className="h-auto flex-col gap-2 py-4" size="lg">
          <Settings className="h-5 w-5" />
          <span>Platform Settings</span>
        </Button>
      </div>
    </div>
  )
}
