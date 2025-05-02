import "@/index.css";
import { ScrollArea } from "@/components/ui/scroll-area";

function App() {
  return (
    <div className="App min-h-screen text-background flex flex-col items-center justify-center">
      <ScrollArea className="w-full md:w-4/5 h-screen">
        <section className="w-full h-full flex flex-col justify-start items-center">
          <span>ey</span>
        </section>
      </ScrollArea>
    </div>
  );
}

export default App;
