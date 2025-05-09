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
      Experience: "Professional Experience",
      Projects: "Personal Projects",
      Stack: "Tech Stack / Skills",
      Contact: "Contact",
      SoftwareDeveloper: "Software Developer",
      About:
        "Born in 2001 in La Plata, Argentina. I'm a Full Stack Developer that strives to create functional and elegant software, and to keep learning.",
      TimelineTitle: "Timeline",
      TimelineDescription: "Timeline of my education & professional career.",
      Highschool: "Graduated Highschool.",
      University:
        "Pursued a Bachelor's Degree in Computer Systems in the Faculty of Informatics of the National University of La Plata.",
      CTD: "Graduated as a Certified Tech Developer in Digital House, a degree backed by Globant and Mercado Libre.",
      BS: "Concluded my studies at Digital House by earning the Backend Specialist certification.",
      Freelancing: "Started freelancing as a Software Developer.",
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
      Experience: "Experiencia Profesional",
      Projects: "Proyectos Personales",
      Stack: "Tech Stack / Skills",
      Contact: "Contacto",
      SoftwareDeveloper: "Desarrollador de Software",
      About:
        "Nacido en 2001 en La Plata, Argentina. Soy un Desarrollador de Software Full Stack que se esfuerza por crear software funcional y elegante, y en siempre seguir aprendiendo.",
      TimelineTitle: "Línea de Tiempo",
      TimelineDescription:
        "Línea de Tiempo de mi educación y carrera profesional.",
      Highschool: "Graduado de Bachiller",
      University:
        "Cursé la Licenciatura en Sistemas en la Facultad de Informática de la Universidad Nacional de La Plata.",
      CTD: "Graduado como Certified Tech Developer en Digital House, una carrera intensiva respaldada por Globant y Mercado Libre.",
      BS: "Finalicé mis estudios en Digital House obteniendo la certificación de Backend Specialist.",
      Freelancing:
        "Empecé a trabajar como Desarrollador de Software freelance.",
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
