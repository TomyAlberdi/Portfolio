import { ExperienceCardProps } from "@/lib/interfaces";
import { Card } from "@/components/ui/card";
import { useTranslation } from "react-i18next";
import { useEffect, useState } from "react";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Button } from "@/components/ui/button";
import TechTile from "@/components/TechTile";
const ExperienceCard = (data: ExperienceCardProps) => {
  const { t, i18n } = useTranslation();
  const [LanguageEn, setLanguageEn] = useState(true);
  useEffect(() => {
    const language = i18n.language;
    setLanguageEn(language === "en");
  }, [i18n.language]);

  const [ViewDescription, setViewDescription] = useState(false);

  const navigateToLink = () => {
    if (data.link !== null) {
      window.open(data.link, "_blank");
    }
  };

  return (
    <Card
      className="h-[60svh] md:h-[500px] py-0 flex flex-col gap-0 border-none"
      style={{ backgroundColor: data.bkg_color }}
    >
      <section className="h-[25%] flex flex-col">
        <div className="p-2 h-2/3 flex flex-col justify-center gap-2">
          <h3
            className="text-xl"
            style={{ borderBottom: `2px solid ${data.accent_color}` }}
          >
            {LanguageEn ? data.name_en : data.name_es}
          </h3>
          <span className="text-xs text-foreground">({data.year})</span>
        </div>
        <div className="h-1/3 bg-black/30 flex items-center pl-2">
          <h4>{LanguageEn ? data.role_en : data.role_es}</h4>
        </div>
      </section>
      <section className="h-[47.5%] p-2 relative">
        <ScrollArea className="h-full z-10">
          {LanguageEn ? data.description_en : data.description_es}
        </ScrollArea>
        <div
          className={
            "absolute h-full w-full left-0 top-0 z-20 backdrop-blur-lg flex justify-center items-center bg-black/30 shadow-inner " +
            (!ViewDescription ? "" : "hidden")
          }
        >
          <Button
            className="cursor-pointer"
            onClick={() => setViewDescription(true)}
          >
            {t("ViewJobDescription")}
          </Button>
        </div>
      </section>
      <section className="h-[27.5%] flex flex-col">
        <div className="h-1/2 px-2 pt-2 gap-2 flex">
          {data.icons.map((icon, index) => (
            <TechTile key={index} iconName={icon.name} icon={icon.icon} />
          ))}
        </div>
        <div className="h-1/2 p-2">
          <Button
            className="h-full w-full cursor-pointer"
            disabled={data.link === null || data.wip}
            onClick={navigateToLink}
          >
            {t("Visit")}
          </Button>
        </div>
      </section>
    </Card>
  );
};
export default ExperienceCard;
