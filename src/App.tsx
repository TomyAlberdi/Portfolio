import "@/index.css";
import { ScrollArea } from "@/components/ui/scroll-area";
import FloatingMenuButton from "@/components/FloatingMenuButton";
import { useEffect, useState } from "react";
import FloatingMenu from "@/components/FloatingMenu";
import "@/i18n";

function App() {
  const [FloatingMenuOpen, setFloatingMenuOpen] = useState(false);

  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setFloatingMenuOpen(!FloatingMenuOpen);
      }
    };
    document.addEventListener("keydown", down);
    return () => {
      document.removeEventListener("keydown", down);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="App md:h-screen h-[100svh] text-background flex flex-col items-center justify-start">
      <ScrollArea className="w-full md:w-4/5 md:h-screen h-[90svh] border border-red-500">
        <section className="w-full h-full flex flex-col justify-start items-center">
          <span>ey</span>
        </section>
      </ScrollArea>
      <FloatingMenuButton
        Open={FloatingMenuOpen}
        setOpen={setFloatingMenuOpen}
      />
      <FloatingMenu Open={FloatingMenuOpen} setOpen={setFloatingMenuOpen} />
    </div>
  );
}

export default App;
