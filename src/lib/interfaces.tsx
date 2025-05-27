export interface Icon {
  name: string;
  icon: string;
}

export interface ExperienceCardProps {
  name_en: string;
  name_es: string;
  year: string;
  link: string | null;
  role_en: string;
  role_es: string;
  description_en: string;
  description_es: string;
  bkg_color: string;
  accent_color: string;
  icons: Icon[];
  wip: boolean;
}

export interface MenuItem {
  labelEn: string;
  labelEs?: string;
  icon?: string;
  children?: MenuItem[];
}

export interface Project {
  year: string;
  name_en: string;
  name_es: string;
  icons: Icon[];
  link: string;
}

export interface ContactForm {
  name: string;
  email: string;
  message: string;
}