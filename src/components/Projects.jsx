import { IoLogoJavascript } from "react-icons/io5";
import { SiTypescript, SiPostgresql, SiExpress, SiJest } from "react-icons/si";
import { FaReact, FaVuejs, FaNode } from "react-icons/fa";
import { ProjectCard } from "./ProjectsCard";

export function Projects({ show }) {
  return (
    <section className="mt-10">
      {show && (
        <>
          <h1>Skillset</h1>
          <div className="mt-5 mb-5 flex flex-wrap gap-4 justify-center">
            <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript">
              <IoLogoJavascript />
            </a>
            <a href="https://www.typescriptlang.org/">
              <SiTypescript />
            </a>
            <a href="https://react.dev/">
              <FaReact />
            </a>
            <a href="https://nodejs.org/en">
              <FaNode />
            </a>
            <a href="https://vuejs.org/">
              <FaVuejs />
            </a>
            <a href="https://www.postgresql.org/">
              <SiPostgresql />
            </a>
            <a href="https://expressjs.com/">
              <SiExpress />
            </a>
            <a href="https://jestjs.io/">
              <SiJest />
            </a>
          </div>
          <h1 className="mb-5">Projects</h1>
          <ProjectCard />
        </>
      )}
    </section>
  );
}
