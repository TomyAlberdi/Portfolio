import { ExperienceCardProps } from "@/lib/interfaces";
import { ScrollArea } from "@/components/ui/scroll-area";
import { useTranslation } from "react-i18next";
import TechTile from "@/components/TechTile";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";

interface ExpandedExperienceCardProps {
  data: ExperienceCardProps;
  LanguageEn: boolean;
}

const ExpandedExperienceCard = ({
  data,
  LanguageEn,
}: ExpandedExperienceCardProps) => {
  const { t } = useTranslation();

  const navigateToLink = () => {
    if (data.link !== null) {
      window.open(data.link, "_blank");
    }
  };

  return (
    <ScrollArea className="max-h-[70svh] pt-0 pb-2 flex flex-col gap-3 border-none rounded-md">
      <div className="p-4 flex flex-col justify-center gap-2">
        <h3
          className="text-xl"
          style={{ borderBottom: `2px solid ${data.accent_color}` }}
        >
          {LanguageEn ? data.name_en : data.name_es}
        </h3>
        <span className="text-xs text-foreground">({data.year})</span>
      </div>
      <div className="bg-black/30 flex items-center p-4">
        <h4>{LanguageEn ? data.role_en : data.role_es}</h4>
      </div>
      <section className="py-2 px-6">
        {LanguageEn ? data.description_en : data.description_es}
      </section>
      <div className="h-1/2 px-2 pt-2 gap-2 flex justify-center flex-wrap">
        {data.icons.map((icon, index) => (
          <TechTile key={index} iconName={icon.name} icon={icon.icon} />
        ))}
      </div>
      <div className="p-2 pb-0">
        <Button
          className="h-full w-full cursor-pointer"
          disabled={data.link === null || data.wip}
          onClick={navigateToLink}
        >
          {t("Visit")} <ExternalLink />
        </Button>
      </div>
    </ScrollArea>
  );
};
export default ExpandedExperienceCard;
