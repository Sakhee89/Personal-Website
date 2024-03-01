import "./App.css";
import { Main } from "./components/Main";
import { NavBar } from "./components/NavBar";
import React, { useState } from "react";

function App() {
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
    <>
      <NavBar
        handleAboutMeClick={handleAboutMeClick}
        handleProjectsClick={handleProjectsClick}
        handleContactMeClick={handleContactMeClick}
      />
      <Main page={page} />
    </>
  );
}

export default App;
