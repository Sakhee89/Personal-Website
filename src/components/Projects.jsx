import { IoLogoJavascript } from "react-icons/io5";
import { SiTypescript, SiPostgresql, SiExpress, SiJest } from "react-icons/si";
import { FaReact, FaVuejs, FaNode } from "react-icons/fa";
import { ProjectCard } from "./ProjectCard";
import { projectsData } from "../data/projectsData";

export function Projects({ show }) {
  return (
    <section className="mt-10 pb-10">
      {show && (
        <>
          <h1 className="text-2xl font-bold">Skillset</h1>
          <div className="mt-5 mb-5 flex flex-wrap gap-4 justify-center">
            <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript">
              <IoLogoJavascript className="text-4xl" />
            </a>
            <a href="https://www.typescriptlang.org/">
              <SiTypescript className="text-4xl" />
            </a>
            <a href="https://react.dev/">
              <FaReact className="text-4xl" />
            </a>
            <a href="https://nodejs.org/en">
              <FaNode className="text-4xl" />
            </a>
            <a href="https://vuejs.org/">
              <FaVuejs className="text-4xl" />
            </a>
            <a href="https://www.postgresql.org/">
              <SiPostgresql className="text-4xl" />
            </a>
            <a href="https://expressjs.com/">
              <SiExpress className="text-4xl" />
            </a>
            <a href="https://jestjs.io/">
              <SiJest className="text-4xl" />
            </a>
          </div>
          <h1 className="mb-5 text-2xl font-bold">Projects</h1>
          <div className="flex justify-center items-center flex-col">
            {projectsData.map((projectData) => {
              return (
                <ProjectCard projectData={projectData} key={projectData.id} />
              );
            })}
          </div>
        </>
      )}
    </section>
  );
}
