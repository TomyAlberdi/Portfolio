import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { useTranslation } from "react-i18next";
import experience from "@/lib/experience.json";
import ExperienceCard from "@/components/ExperienceCard";

const Experience = () => {
  const { t } = useTranslation();

  return (
    <Card id="experience" className="pb-2 w-full">
      <CardHeader>
        <CardTitle>{t("Experience")}</CardTitle>
      </CardHeader>
      <Carousel
        className="relative"
        opts={{
          align: "start",
          slidesToScroll: 1,
          containScroll: "trimSnaps",
        }}
      >
        <CarouselContent>
          {experience.map((item, index) => (
            <CarouselItem
              key={index}
              className="px-2 md:px-0 md:pl-2 md:basis-[30%] w-[10vw] md:w-auto"
            >
              <ExperienceCard {...item} />
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </Card>
  );
};
export default Experience;
