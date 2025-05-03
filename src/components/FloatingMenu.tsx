import {
  CommandDialog,
  CommandGroup,
  CommandItem,
  CommandList,
} from "@/components/ui/command";

interface FloatingMenuProps {
  Open: boolean;
  setOpen: (Open: boolean) => void;
}

const FloatingMenu = ({ Open, setOpen }: FloatingMenuProps) => {
  return (
    <CommandDialog open={Open} onOpenChange={setOpen}>
      <CommandList className="custom-scrollbar">
        <CommandGroup heading="Sections">
          <CommandItem>

          </CommandItem>
        </CommandGroup>
      </CommandList>
    </CommandDialog>
  );
};
export default FloatingMenu;
