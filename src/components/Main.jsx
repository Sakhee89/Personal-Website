import React from "react";
import { AboutMe } from "./AboutMe";
import { Projects } from "./Projects";
import { ContactMe } from "./ContactMe/ContactMe";
import { Home } from "./Home";

export function Main({ page }) {
  return (
    <main className="bg-gradient-to-r from-[#100534] to-[#050112]">
      {page.home && <Home />}
      {page.aboutMe && <AboutMe />}
      {page.projects && <Projects />}
      {page.contactMe && <ContactMe />}
    </main>
  );
}
