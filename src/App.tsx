import "@/index.css";
import { ScrollArea } from "@/components/ui/scroll-area";
import FloatingMenuButton from "@/components/FloatingMenuButton";
import { useEffect, useState } from "react";
import FloatingMenu from "@/components/FloatingMenu";
import "@/i18n";
import Home from "@/Pages/Home";
import Experience from "@/Pages/Experience";
import Projects from "@/Pages/Projects";
import Skills from "@/Pages/Skills";
import Contact from "@/Pages/Contact";

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
    <div className="App md:h-screen h-[100svh] flex flex-col items-center justify-start">
      <ScrollArea className="w-full md:w-4/5 h-screen pt-3 max-w-[1250px]"> 
        <section className="w-full h-full flex flex-col justify-start items-center gap-3">
          <Home />
          <Experience />
          <Projects />
          <Skills />
          <Contact />
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
