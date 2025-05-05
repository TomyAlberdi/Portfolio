import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import { useTranslation } from "react-i18next";

const Projects = () => {
  const { t } = useTranslation();

  return (
    <Card id="projects">
      <CardHeader>
        <CardTitle>{t("Projects")}</CardTitle>
      </CardHeader>
    </Card>
  );
};
export default Projects;
