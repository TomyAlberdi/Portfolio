import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import { useTranslation } from "react-i18next";

const Contact = () => {
  const { t } = useTranslation();

  return (
    <Card id="contact" className="w-full">
      <CardHeader>
        <CardTitle>{t("Contact")}</CardTitle>
      </CardHeader>
    </Card>
  );
};
export default Contact;
