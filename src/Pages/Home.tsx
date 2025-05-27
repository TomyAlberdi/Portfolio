import Timeline from "@/components/Timeline";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useTranslation } from "react-i18next";

const Home = () => {
  const { t } = useTranslation();

  return (
    <Card id="home">
      <CardHeader>
        <CardTitle>{t("Home")}</CardTitle>
      </CardHeader>
      <section className="flex md:flex-row flex-col justify-start items-center w-full gap-4">
        <CardHeader className="w-full">
          <CardTitle className="md:text-[3vw] text-[10vw] font-light text-primary">
            Tomás Alberdi
          </CardTitle>
          <CardDescription className="md:text-xl text-lg">
            {t("SoftwareDeveloper")}
          </CardDescription>
        </CardHeader>
        <div className="md:w-1/2 px-6 md:px-0 md:mr-[10%] w-full text-sm">
          {t("About")}
        </div>
      </section>
      <CardHeader>
        <Timeline />
      </CardHeader>
    </Card>
  );
};
export default Home;
