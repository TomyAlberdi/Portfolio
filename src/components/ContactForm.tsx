import { Label } from "@/components/ui/label";
import { useTranslation } from "react-i18next";
import { Input } from "@/components/ui/input";
import { useState, useRef } from "react";
import { ContactForm as ContactFormType } from "@/lib/interfaces";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { LoaderCircle, Send } from "lucide-react";
import { toast } from "sonner";
import emailjs from "@emailjs/browser";

const ContactForm = () => {
  const { t } = useTranslation();

  const public_key = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
  const service_id = import.meta.env.VITE_EMAILJS_SERVICE_ID;
  const formRef = useRef<HTMLFormElement>(null);

  const [formData, setFormData] = useState<ContactFormType>({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);

  const validateEmail = (email: string) => {
    return email
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };

  const checkFields = () => {
    if (formData.name === "") {
      toast.error(t("NameEmpty"));
      return false;
    }
    if (!validateEmail(formData.email)) {
      toast.error(t("Invalid email"));
      return false;
    }
    if (formData.message === "") {
      toast.error(t("MessageEmpty"));
      return false;
    }
    return true;
  };

  const sendEmail = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    if (!checkFields()) {
      setLoading(false);
      return;
    }
    if (formRef.current) {
      emailjs
        .sendForm(service_id, "template_6iqcubj", formRef.current, {
          publicKey: public_key,
        })
        .then(() => {
          setFormData({ name: "", email: "", message: "" });
          toast.success(t("EmailSent"));
        })
        .catch((error) => {
          toast.error(t("EmailError"));
          console.error(error);
        });
    }
  };

  return (
    <form
      ref={formRef}
      className="flex flex-col items-center justify-center h-full gap-2 md:w-2/3 w-full"
      onSubmit={sendEmail}
    >
      <section className="flex flex-col gap-2 w-full">
        <Label htmlFor="name">{t("Name")}</Label>
        <Input
          id="name"
          name="from_name"
          type="text"
          placeholder={t("EnterName")}
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
        />
      </section>
      <section className="flex flex-col gap-2 w-full">
        <Label htmlFor="email">{t("Email")}</Label>
        <Input
          id="email"
          name="from_email"
          type="email"
          placeholder={t("EnterEmail")}
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
        />
      </section>
      <section className="flex flex-col gap-2 w-full">
        <Label htmlFor="message">{t("Message")}</Label>
        <Textarea
          className="resize-none"
          id="message"
          name="message"
          placeholder={t("EnterMessage")}
          value={formData.message}
          onChange={(e) =>
            setFormData({ ...formData, message: e.target.value })
          }
        />
      </section>
      <section className="flex justify-center items-center w-full">
        <Button className="w-full" disabled={loading} type="submit">
          {loading ? (
            <>
              <LoaderCircle className="animate-spin" />
              {t("SendingEmail")}
            </>
          ) : (
            <>
              <Send />
              {t("Send")}
            </>
          )}
        </Button>
      </section>
    </form>
  );
};

export default ContactForm;
