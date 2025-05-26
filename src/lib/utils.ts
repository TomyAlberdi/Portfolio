import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const getActiveBackground = (value: string) => {
  switch (value) {
    case "Backend":
      return "bg-rose-950/50";
    case "Frontend":
      return "bg-sky-950/50";
    case "Databases":
    case "Bases de Datos":
      return "bg-teal-950/50";
    case "DevOps":
      return "bg-indigo-950/50";
    case "Soft Skills":
      return "bg-yellow-950/50";
    case "none":
      return "bg-black/30";
    default:
      return "bg-black/70";
  }
};
