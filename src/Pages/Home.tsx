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
      <section className="flex md:flex-row flex-col justify-between items-center w-full md:gap-0 gap-4">
        <CardHeader className="md:w-1/3 w-full">
          <CardTitle className="md:text-[3vw] text-[10vw] font-light text-primary"> 
            Tomás Alberdi
          </CardTitle>
          <CardDescription className="md:text-xl text-lg">
            {t("SoftwareDeveloper")}
          </CardDescription>
        </CardHeader>
        <div className="md:w-2/3 px-6 md:px-0 w-full border border-red-500">  
          
        </div>
      </section>
    </Card>
  );
};
export default Home;
