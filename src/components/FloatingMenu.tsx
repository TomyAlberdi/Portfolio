import {
  CommandDialog,
  CommandGroup,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import {
  AtSign,
  BriefcaseBusiness,
  FolderGit2,
  House,
  Languages,
  Layers,
} from "lucide-react";
import { useTranslation } from "react-i18next";
import { DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { cn, internalNavigate } from "@/lib/utils";

interface FloatingMenuProps {
  Open: boolean;
  setOpen: (Open: boolean) => void;
}

const sections = [
  { icon: <House />, label: "Home", action: () => internalNavigate("home") },
  {
    icon: <Layers />,
    label: "Stack",
    action: () => internalNavigate("skills"),
  },
  {
    icon: <BriefcaseBusiness />,
    label: "Experience",
    action: () => internalNavigate("experience"),
  },
  {
    icon: <FolderGit2 />,
    label: "Projects",
    action: () => internalNavigate("projects"),
  },
  {
    icon: <AtSign />,
    label: "Contact",
    action: () => internalNavigate("contact"),
  },
];

const FloatingMenu = ({ Open, setOpen }: FloatingMenuProps) => {
  const { t, i18n } = useTranslation();
  return (
    <CommandDialog open={Open} onOpenChange={setOpen}>
      <DialogHeader>
        <DialogTitle
          className={cn(
            "top-2 left-2 data-[selected=true]:bg-accent data-[selected=true]:text-accent-foreground [&_svg:not([class*='text-'])]:text-muted-foreground relative flex cursor-pointer items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-hidden select-none data-[disabled=true]:pointer-events-none data-[disabled=true]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4"
          )}
        >
          Menu
        </DialogTitle>
      </DialogHeader>
      <CommandList className="custom-scrollbar">
        <CommandGroup heading={t("Sections")}>
          {sections.map((section, i) => (
            <CommandItem
              key={section.label}
              onSelect={() => section.action()}
              tabIndex={i}
            >
              {section.icon}
              {t(section.label)}
            </CommandItem>
          ))}
        </CommandGroup>
        <CommandGroup heading={t("Language")}>
          <CommandItem
            onSelect={() =>
              i18n.language === "en"
                ? i18n.changeLanguage("es")
                : i18n.changeLanguage("en")
            }
          >
            <Languages />
            {t("CurrentLanguage")}
          </CommandItem>
        </CommandGroup>
      </CommandList>
    </CommandDialog>
  );
};
export default FloatingMenu;
