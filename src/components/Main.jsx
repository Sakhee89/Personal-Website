import React from "react";

import { IoLogoJavascript } from "react-icons/io5";
import { SiTypescript, SiPostgresql, SiExpress } from "react-icons/si";
import { FaReact, FaVuejs, FaNode } from "react-icons/fa";
import { useState } from "react";

export function Main() {
  const [page, setPage] = useState({
    aboutMe: false,
    skillset: false,
    projects: false,
  });
  return (
    <main>
      <h1>About Me</h1>
      <section>
        Hi, I'm Kevin. I completed a intensive full Stack Software Developer
        bootcamp with Northcoders in January 2024.{" "}
      </section>
      <h1>Skillset</h1>
      <IoLogoJavascript />
      <SiTypescript />
      <FaReact />
      <FaNode />
      <FaVuejs />
      <SiPostgresql />
      <SiExpress />
      <h1>Projects</h1>
    </main>
  );
}
