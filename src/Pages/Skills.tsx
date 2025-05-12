import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import { useTranslation } from "react-i18next";

const Skills = () => {
  const { t } = useTranslation();

  return (
    <Card id="skills" className="w-full">
      <CardHeader>
        <CardTitle>{t("Stack")}</CardTitle>
      </CardHeader>
    </Card>
  );
};
export default Skills;
