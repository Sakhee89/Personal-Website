import React, { useState } from "react";
import { AboutMe } from "./AboutMe";
import { NavBar } from "./NavBar";
import { Projects } from "./Projects";
import { ContactMe } from "./ContactMe";

export function Main() {
  const [page, setPage] = useState({
    aboutMe: true,
    projects: false,
    contactMe: false,
  });

  const handleAboutMeClick = () => {
    setPage({
      aboutMe: true,
      projects: false,
      contactMe: false,
    });
  };

  const handleProjectsClick = () => {
    setPage({
      aboutMe: false,
      projects: true,
      contactMe: false,
    });
  };

  const handleContactMeClick = () => {
    setPage({
      aboutMe: false,
      projects: false,
      contactMe: true,
    });
  };

  return (
    <div>
      <NavBar
        handleAboutMeClick={handleAboutMeClick}
        handleProjectsClick={handleProjectsClick}
        handleContactMeClick={handleContactMeClick}
      />
      <main>
        {page.aboutMe && <AboutMe show={page.aboutMe} />}
        {page.projects && <Projects show={page.projects} />}
        {page.contactMe && <ContactMe show={page.contactMe} />}
      </main>
    </div>
  );
}
