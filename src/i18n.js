import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  en: {
    translation: {
      Search: "Search",
      NoResultsFound: "No results found",
      Sections: "Sections",
      Language: "Language",
      CurrentLanguage: "English",
      Home: "Home",
      Experience: "Experience",
      Projects: "Personal Projects",
      Stack: "Tech Stack / Skills",
      Contact: "Contact",
    },
  },
  es: {
    translation: {
      Search: "Buscar",
      NoResultsFound: "No se encontraron resultados",
      Sections: "Secciones",
      Language: "Idioma",
      CurrentLanguage: "Español",
      Home: "Inicio",
      Experience: "Experiencia",
      Projects: "Proyectos Personales",
      Stack: "Tech Stack / Skills",
      Contact: "Contacto",
    },
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: "en",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
