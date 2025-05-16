import * as React from "react"
import * as TabsPrimitive from "@radix-ui/react-tabs"
import { Server, AppWindow, Database, Workflow, Users } from "lucide-react"
import { cn } from "@/lib/utils"

function Tabs({
  className,
  ...props
}: React.ComponentProps<typeof TabsPrimitive.Root>) {
  return (
    <TabsPrimitive.Root
      data-slot="tabs"
      className={cn("flex flex-col gap-2", className)}
      {...props}
    />
  )
}

function TabsList({
  className,
  ...props
}: React.ComponentProps<typeof TabsPrimitive.List>) {
  return (
    <TabsPrimitive.List
      data-slot="tabs-list"
      className={cn(
        "bg-muted text-muted-foreground inline-flex h-12 w-fit items-center justify-center rounded-lg p-[3px]",
        className
      )}
      {...props}
    />
  )
}

interface TabsTriggerProps extends React.ComponentProps<typeof TabsPrimitive.Trigger> {
  triggerName?: "Backend" | "Frontend" | "Databases" | "DevOps" | "Soft Skills";
}

function TabsTrigger({
  className,
  triggerName,
  ...props
}: TabsTriggerProps) {
  const getActiveBackground = () => {
    switch(triggerName) {
      case "Backend": return "data-[state=active]:bg-rose-950";
      case "Frontend": return "data-[state=active]:bg-sky-950";
      case "Databases": return "data-[state=active]:bg-teal-950";
      case "DevOps": return "data-[state=active]:bg-indigo-950";
      case "Soft Skills": return "data-[state=active]:bg-yellow-950";
      default: return "data-[state=active]:bg-background";
    }
  }

  const getIcon = () => {
    switch(triggerName) {
      case "Backend": return <Server className="size-4" />;
      case "Frontend": return <AppWindow className="size-4" />;
      case "Databases": return <Database className="size-4" />;
      case "DevOps": return <Workflow className="size-4" />;
      case "Soft Skills": return <Users className="size-4" />;
      default: return null;
    }
  }

  return (
    <TabsPrimitive.Trigger
      data-slot="tabs-trigger"
      className={cn(
        "cursor-pointer dark:data-[state=active]:text-foreground focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:outline-ring dark:data-[state=active]:border-input text-foreground dark:text-foreground inline-flex h-[calc(100%-1px)] flex-1 items-center justify-center gap-1.5 rounded-md border border-transparent px-2 text-sm font-medium whitespace-nowrap transition-[color,box-shadow] focus-visible:ring-[3px] focus-visible:outline-1 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:shadow-sm [&_svg]:pointer-events-none [&_svg]:shrink-0",
        getActiveBackground(),
        className
      )}
      {...props}
    >
      {getIcon()}
      <span className="hidden ml-2 md:inline">{triggerName}</span>
    </TabsPrimitive.Trigger>
  )
}

function TabsContent({
  className,
  ...props
}: React.ComponentProps<typeof TabsPrimitive.Content>) {
  return (
    <TabsPrimitive.Content
      data-slot="tabs-content"
      className={cn("flex-1 outline-none", className)}
      {...props}
    />
  )
}

export { Tabs, TabsList, TabsTrigger, TabsContent }
