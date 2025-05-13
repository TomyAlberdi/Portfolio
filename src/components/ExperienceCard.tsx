import { ExperienceCardProps } from "@/lib/interfaces";
import { Card } from "@/components/ui/card";
import { useTranslation } from "react-i18next";
import { useEffect, useState } from "react";
const ExperienceCard = (data: ExperienceCardProps) => {
  const { t, i18n } = useTranslation();
  const [LanguageEn, setLanguageEn] = useState(true);
  useEffect(() => {
    const language = i18n.language;
    setLanguageEn(language === "en");
  }, [i18n.language]);

  return (
    <Card
      className="h-[60svh] md:h-[500px]"
      style={{ backgroundColor: data.bkg_color }}
    >
      {LanguageEn ? data.name_en : data.name_es}
    </Card>
  );
};
export default ExperienceCard;
