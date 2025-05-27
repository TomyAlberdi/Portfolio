import { Project } from "@/lib/interfaces";
import { useTranslation } from "react-i18next";

const ProjectLine = (project: Project) => {
  const { i18n } = useTranslation();

  const navigateToProject = () => {
    window.open(project.link, "_blank");
  };

  return (
    <li
      className="w-full flex md:flex-row flex-col-reverse justify-center md:justify-end items-end gap-1 md:gap-3 cursor-pointer hover:-translate-x-4 hover:transition-transform duration-300 ease-in-out" 
      onClick={navigateToProject}
    >
      <section className="flex gap-2">
        {project.icons?.map((icon, index) => (
          <img key={index} src={icon.icon} alt={icon.name} className="w-5 h-5" />
        ))}
      </section>
      <span className="text-4xl md:text-4xl font-light text-right">{i18n.language === "en" ? project.name_en : project.name_es}</span>
      <span className="md:leading-normal leading-0">{project.year}</span>
    </li>
  );
};
export default ProjectLine;
