import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Terminal, X } from "lucide-react";

interface FloatingMenuButtonProps {
  Open: boolean;
  setOpen: (Open: boolean) => void;
}

const FloatingMenuButton = ({ Open, setOpen }: FloatingMenuButtonProps) => {
  // TODO: fix weird position issue on mobile (only smartphone)
  return (
    <div className="floatingMenuButton fixed bottom-[90svh] h-[10svh] w-full md:bottom-2 md:w-1/10 md:right-0 flex justify-center items-center z-50">
      <Alert
        className="w-auto cursor-pointer bg-muted"
        onClick={() => setOpen(!Open)}
      >
        {Open ? <X /> : <Terminal />}
        <AlertTitle>Menu</AlertTitle>
        <AlertDescription className="hidden md:block">
          Ctrl + K
        </AlertDescription>
      </Alert>
    </div>
  );
};
export default FloatingMenuButton;
