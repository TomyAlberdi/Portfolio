import ContactForm from "@/components/ContactForm";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Linkedin } from "lucide-react";
import { useTranslation } from "react-i18next";

const Contact = () => {
  const { t } = useTranslation();

  const navigate = (url: string) => {
    window.open(url, "_blank");
  };

  return (
    <Card id="contact" className="w-full md:pb-6 pb-[10svh]">
      <CardHeader>
        <CardTitle>{t("Contact")}</CardTitle>
      </CardHeader>
      <CardContent className="w-full flex flex-col md:flex-row justify-start items-center md:gap-0 gap-10">
        <section className="flex justify-evenly items-center md:w-1/3 w-full">
          <Card
            className="flex flex-col items-center justify-center w-2/5 aspect-square cursor-pointer hover:scale-102 transition-all duration-300 ease-in-out bg-muted"
            onClick={() => navigate("https://github.com/TomyAlberdi")}
          >
            <img
              src="https://simpleicons.vercel.app/github/fff"
              className="w-16"
              alt="github"
            />
            <span>GitHub</span>
          </Card>
          <Card
            className="flex flex-col items-center justify-center w-2/5 aspect-square cursor-pointer hover:scale-102 transition-all duration-300 ease-in-out bg-blue-900"
            onClick={() => navigate("https://linkedin.com/in/tomás-alberdi")}
          >
            <Linkedin className="big-icon" />
            <span>LinkedIn</span>
          </Card>
        </section>
        <section className="w-full md:w-2/3 flex justify-center items-center">
          <ContactForm />
        </section>
      </CardContent>
    </Card>
  );
};
export default Contact;
