import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { useTranslation } from "react-i18next";
import projects from "@/lib/projects.json";
import ProjectLine from "@/components/ProjectLine";

const Projects = () => {
  const { t } = useTranslation();
  return (
    <Card id="projects" className="w-full md:flex-row py-0">
      <CardHeader className="md:w-1/5 pt-6">
        <CardTitle>{t("Projects")}</CardTitle>
      </CardHeader>
      <ScrollArea className=" md:w-4/5">
        <ul className="w-full max-h-[40svh] flex flex-col items-end justify-start pr-6 list-none md:gap-4 gap-15 first:pt-20 last:pb-6">
          {projects.map((project, index) => (
            <ProjectLine key={index} {...project} />
          ))}
        </ul>
      </ScrollArea>
    </Card>
  );
};
export default Projects;
