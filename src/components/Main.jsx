import React from "react";
import { AboutMe } from "./AboutMe";
import { Projects } from "./Projects";
import { ContactMe } from "./ContactMe/ContactMe";
import { Home } from "./Home";

export function Main({ page }) {
  return (
    <main>
      {page.home && <Home />}
      {page.aboutMe && <AboutMe />}
      {page.projects && <Projects />}
      {page.contactMe && <ContactMe />}
    </main>
  );
}
