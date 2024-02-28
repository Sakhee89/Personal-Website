import { IoLogoJavascript } from "react-icons/io5";
import { SiTypescript, SiPostgresql, SiExpress } from "react-icons/si";
import { FaReact, FaVuejs, FaNode } from "react-icons/fa";

export function Projects({ show }) {
  return (
    <section>
      {show && (
        <>
          <h1>Skillset</h1>
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
          <a href="#express">
            <SiExpress />
          </a>
          <h1>Projects</h1>
        </>
      )}
    </section>
  );
}
