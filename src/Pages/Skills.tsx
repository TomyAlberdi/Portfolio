import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  MenuCard,
} from "@/components/ui/card";
import { MenuItem } from "@/lib/interfaces";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import skills from "@/lib/skills.json";
import { Button } from "@/components/ui/button";
import { ChevronRight, ChevronsLeft } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { getActiveBackground } from "@/lib/utils";

const Skills = () => {
  const { t, i18n } = useTranslation();

  const [path, setPath] = useState<MenuItem[]>([]);

  const currentLevel =
    path.length === 0 ? skills : path[path.length - 1].children || [];

  const basePath = path.length > 0 ? path[0].labelEn : null;

  const getBreadcrumbs = () => {
    return path.map((item) => {
      const label =
        i18n.language === "en" || !item.labelEs ? item.labelEn : item.labelEs;
      return (
        <>
          <ChevronRight className="inline h-6 w-6" /> {label}
        </>
      );
    });
  };

  const handleClick = (item: MenuItem) => {
    if (item.children) setPath([...path, item]);
  };

  const handleBack = () => {
    setPath(path.slice(0, -1));
  };

  return (
    <Card
      id="skills"
      className={` w-full pb-2 ${getActiveBackground(
        basePath || "none"
      )} transition-all duration-300`}
    >
      <CardHeader className="flex flex-row justify-between items-center">
        <CardTitle className="flex items-center gap-1">
          {t("Stack")}
          <span className="hidden md:flex gap-2 ml-2 items-center">{getBreadcrumbs()}</span>
        </CardTitle>
        <Button
          onClick={handleBack}
          className={`${path.length > 0 ? "" : "invisible"}`}
        >
          <ChevronsLeft />
          <span className="hidden md:inline">{t("Back")}</span>
        </Button>
      </CardHeader>
      <CardContent className="px-2 min-h-[25svh] md:min-h-[15svh] flex flex-wrap justify-center items-center gap-4">
        <AnimatePresence mode="popLayout">
          {currentLevel.map((item) => {
            const isClickable = !!item.children;
            const cardText =
              i18n.language === "en" || !item.labelEs
                ? item.labelEn
                : item.labelEs;
            const icon = "icon" in item ? item.icon : undefined;
            return (
              <motion.div
                key={item.labelEn}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
              >
                <MenuCard
                  className={`transition rounded-2xl p-4 text-center h-full flex items-center justify-center ${
                    isClickable ? "cursor-pointer hover:shadow-lg" : ""
                  }`}
                  onClick={() => isClickable && handleClick(item)}
                  cardName={cardText}
                  icon={icon}
                />
              </motion.div>
            );
          })}
        </AnimatePresence>
      </CardContent>
    </Card>
  );
};
export default Skills;
