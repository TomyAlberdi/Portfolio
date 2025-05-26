import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { useTranslation } from "react-i18next";

const Projects = () => {
  const { t } = useTranslation();
  //TODO: Design & implement Personal projects component
  return (
    <Card id="projects" className="w-full flex-row pt-0">
      <CardHeader className="w-1/2 pt-6">
        <CardTitle>{t("Projects")}</CardTitle>
      </CardHeader>
      <ScrollArea className="border border-red-500 w-1/2 max-h-[20svh]"></ScrollArea>
    </Card>
  );
};
export default Projects;
