import React from "react";
import { AboutMe } from "./AboutMe";

import { Projects } from "./Projects";
import { ContactMe } from "./ContactMe";
import { Home } from "./Home";

export function Main({ page }) {
  return (
    <main>
      {page.home && <Home show={page.home} />}
      {page.aboutMe && <AboutMe show={page.aboutMe} />}
      {page.projects && <Projects show={page.projects} />}
      {page.contactMe && <ContactMe show={page.contactMe} />}
    </main>
  );
}
