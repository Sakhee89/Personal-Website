import { IoLogoJavascript } from "react-icons/io5";
import { SiTypescript, SiPostgresql, SiExpress, SiJest } from "react-icons/si";
import { FaReact, FaVuejs, FaNode } from "react-icons/fa";
import { ProjectCard } from "./ProjectCard";
import { projectsData } from "../data/projectsData";

export function Projects({ show }) {
  return (
    <section className="pb-8 px-6">
      {show && (
        <>
          <div className="pt-10">
            <h1 className="tracking-wider text-center text-2xl font-bold pb-3">
              Skillset
            </h1>
            <div className="flex flex-wrap gap-4 justify-center pt-2">
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
          </div>
          <h1 className="tracking-wider text-center pt-10 pb-2 text-2xl font-bold">
            Projects
          </h1>
          <div className="flex justify-center items-center flex-col gap-4 px-4">
            {projectsData.map((projectData) => {
              return (
                <div className="py-3">
                  <ProjectCard projectData={projectData} key={projectData.id} />
                </div>
              );
            })}
          </div>
        </>
      )}
    </section>
  );
}
