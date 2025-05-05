import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import { useTranslation } from "react-i18next";

const Home = () => {
  const { t } = useTranslation();

  return (
    <Card id="home">
      <CardHeader>
        <CardTitle>{t("Home")}</CardTitle>
      </CardHeader>
    </Card>
  );
};
export default Home;
