import "@/index.css";
import { useEffect, useState } from "react";

const sections = [
  "about",
  "personal-projects",
  "work-experience",
  "skills",
  "contact",
];

function App() {
  const [Progress, setProgress] = useState<number>(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = sections.indexOf(entry.target.id);
            if (index !== -1) {
              setProgress((index / (sections.length - 1)) * 100);
            }
          }
        });
      },
      { threshold: 0.6 }
    );
    sections.forEach((id) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="App min-h-screen text-background">
      <section className="min-h-screen backdrop-blur-xs flex justify-center items-start">
        <div className="h-full w-full md:w-1/2 flex justify-center items-center">
          <div
            className="bg-blue-500 w-1 transition-all duration-300"
            style={{ height: `${Progress}` }}
          />
          <main className="w-full p-4 border border-red-500">sss</main>
        </div>
      </section>
    </div>
  );
}

export default App;
