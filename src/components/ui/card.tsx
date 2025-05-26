import * as React from "react";

import { cn, getActiveBackground } from "@/lib/utils";
import { AppWindow, Database, Server, Users, Workflow } from "lucide-react";

function Card({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card"
      className={cn(
        "CardComponent text-card-foreground flex flex-col gap-6 rounded-xl border py-6 shadow-sm bg-black/30",
        className
      )}
      {...props}
    />
  );
}

interface MenuCardProps extends React.ComponentProps<"div"> {
  cardName?: string;
  icon?: string;
}

function MenuCard({ className, cardName, icon, ...props }: MenuCardProps) {
  const getIcon = () => {
    switch (cardName) {
      case "Backend":
        return <Server className="size-4" />;
      case "Frontend":
        return <AppWindow className="size-4" />;
      case "Databases":
      case "Bases de Datos":
        return <Database className="size-4" />;
      case "DevOps":
        return <Workflow className="size-4" />;
      case "Soft Skills":
        return <Users className="size-4" />;
      default:
        return icon ? <img src={icon} className="w-8 h-8" /> : null;
    }
  };

  return (
    <div
      data-slot="card"
      className={cn(
        "CardComponent text-card-foreground flex flex-row gap-4 text-lg rounded-xl border py-6 shadow-sm ",
        getActiveBackground(cardName || ""),
        className
      )}
      {...props}
    >
      {getIcon()}
      <span className="text-center">{cardName}</span>
    </div>
  );
}

function CardHeader({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-header"
      className={cn(
        "@container/card-header grid auto-rows-min grid-rows-[auto_auto] items-start gap-1.5 px-6 has-data-[slot=card-action]:grid-cols-[1fr_auto] [.border-b]:pb-6",
        className
      )}
      {...props}
    />
  );
}

function CardTitle({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-title"
      className={cn("leading-none font-semibold", className)}
      {...props}
    />
  );
}

function CardDescription({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-description"
      className={cn("text-muted-foreground text-sm", className)}
      {...props}
    />
  );
}

function CardAction({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-action"
      className={cn(
        "col-start-2 row-span-2 row-start-1 self-start justify-self-end",
        className
      )}
      {...props}
    />
  );
}

function CardContent({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-content"
      className={cn("px-6", className)}
      {...props}
    />
  );
}

function CardFooter({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-footer"
      className={cn("flex items-center px-6 [.border-t]:pt-6", className)}
      {...props}
    />
  );
}

export {
  Card,
  MenuCard,
  CardHeader,
  CardFooter,
  CardTitle,
  CardAction,
  CardDescription,
  CardContent,
};
