import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Terminal, X } from "lucide-react";

interface FloatingMenuButtonProps {
  Open: boolean;
  setOpen: (Open: boolean) => void;
}

const FloatingMenuButton = ({ Open, setOpen }: FloatingMenuButtonProps) => {
  return (
    <div className="floatingMenuButton fixed bottom-0 h-[75px] w-full md:bottom-2 md:w-1/10 md:right-0 flex justify-center items-center z-50 max-h-[100dvh]">
      <Alert
        className="w-auto cursor-pointer bg-muted sticky bottom-2"
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
