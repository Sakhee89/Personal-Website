import React, { useState } from "react";
import { AboutMe } from "./AboutMe";
import { NavBar } from "./NavBar";
import { Projects } from "./Projects";

export function Main() {
  const [page, setPage] = useState({
    aboutMe: false,
    projects: false,
  });

  const handleAboutMeClick = () => {
    setPage({
      aboutMe: true,
      projects: false,
    });
  };

  const handleProjectsClick = () => {
    setPage({
      aboutMe: false,
      projects: true,
    });
  };

  return (
    <div>
      <NavBar
        handleAboutMeClick={handleAboutMeClick}
        handleProjectsClick={handleProjectsClick}
      />
      <main>
        {page.aboutMe && <AboutMe show={page.aboutMe} />}
        {page.projects && <Projects show={page.projects} />}
      </main>
    </div>
  );
}
