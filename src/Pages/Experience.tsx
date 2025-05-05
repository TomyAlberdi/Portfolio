import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import { useTranslation } from "react-i18next";

const Experience = () => {
  const { t } = useTranslation();

  return (
    <Card id="experience">
      <CardHeader>
        <CardTitle>{t("Experience")}</CardTitle>
      </CardHeader>
    </Card>
  );
};
export default Experience;
