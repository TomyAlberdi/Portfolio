import { ExperienceCardProps } from "@/lib/interfaces";
import { Card } from "@/components/ui/card";
import { useTranslation } from "react-i18next";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import ExpandedExperienceCard from "@/components/ExpandedExperienceCard";
const ExperienceCard = (data: ExperienceCardProps) => {
  const { t, i18n } = useTranslation();
  const [LanguageEn, setLanguageEn] = useState(true);
  useEffect(() => {
    const language = i18n.language;
    setLanguageEn(language === "en");
  }, [i18n.language]);

  return (
    <Card
      className="pt-0 pb-2 flex flex-col gap-3 border-none"
      style={{ backgroundColor: data.bkg_color }}
    >
      <div className="p-2 flex flex-col justify-center gap-2">
        <h3
          className="text-xl"
          style={{ borderBottom: `2px solid ${data.accent_color}` }}
        >
          {LanguageEn ? data.name_en : data.name_es}
        </h3>
        <span className="text-xs text-foreground">({data.year})</span>
      </div>
      <div className="bg-black/30 flex items-center p-2">
        <h4>{LanguageEn ? data.role_en : data.role_es}</h4>
      </div>
      <div className="px-2">
        <Dialog>
          <DialogTrigger asChild>
            <Button className="w-full">{t("ViewMore")}</Button>
          </DialogTrigger>
          <DialogContent className="p-0" style={{ backgroundColor: data.bkg_color }}>
            <ExpandedExperienceCard data={data} LanguageEn={LanguageEn} />
          </DialogContent>
        </Dialog>
      </div>
    </Card>
  );
};
export default ExperienceCard;
