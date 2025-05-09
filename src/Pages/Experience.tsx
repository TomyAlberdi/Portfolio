import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { useTranslation } from "react-i18next";
import experience from "@/lib/experience.json";

const Experience = () => {
  const { t } = useTranslation();

  return (
    <Card id="experience" className="pb-[2.5%] md:pb-6">
      <CardHeader>
        <CardTitle>{t("Experience")}</CardTitle>
      </CardHeader>
      <Carousel className="flex justify-center items-center md:justify-start">
        <CarouselContent className="w-screen md:w-[70vw] border border-red-500">
          {experience.map((item, index) => (
            <CarouselItem key={index} className="md:w-1/3">
              <Card
                className="h-[60svh] md:h-[70vh] w-[90%] md:w-full ml-[2.5%] md:ml-6"
                style={{ backgroundColor: item.bkg_color }}
              >
                {item.name_en}
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </Card>
  );
};
export default Experience;
