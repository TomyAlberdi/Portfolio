import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Calendar1 } from "lucide-react";
import { useTranslation } from "react-i18next";
import { ScrollArea } from "@/components/ui/scroll-area";

const Timeline = () => {
  const { t } = useTranslation();

  const listItems = [
    {
      title: "2019",
      description: t("Highschool"),
    },
    {
      title: "2020 - 2022",
      description: t("University"),
    },
    {
      title: "2022 - 2023",
      description: t("CTD"),
    },
    {
      title: "2023",
      description: t("Freelancing"),
    },
    {
      title: "2023 - 2024",
      description: t("BS"),
    },
  ];

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="w-min cursor-pointer" variant={"outline"}>
          <Calendar1 />
          {t("TimelineTitle")}
        </Button>
      </DialogTrigger>
      <DialogContent className="md:w-[500px] w-[95vw]">
        <DialogHeader>
          <DialogTitle>{t("TimelineTitle")}</DialogTitle>
          <DialogDescription>{t("TimelineDescription")}</DialogDescription>
        </DialogHeader>
        <ScrollArea className="max-h-[70vh] md:max-h-[60vh] flex flex-col">
          <ul>
            {listItems.map((item, index) => (
              <li key={index} className="flex flex-col items-start mb-3">
                <h3 className="text-xl font-bold">{item.title}</h3>
                <p className="text-sm ml-3">{item.description}</p>
              </li>
            ))}
          </ul>
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
};
export default Timeline;
