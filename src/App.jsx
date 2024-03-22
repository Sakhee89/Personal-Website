import "./App.css";
import { Main } from "./components/Main";
import { NavBar } from "./components/NavBar/NavBar";
import React, { useState } from "react";

function App() {
  const [page, setPage] = useState({
    home: true,
    aboutMe: false,
    projects: false,
    contactMe: false,
  });

  const handleHomeClick = () => {
    setPage({
      home: true,
      aboutMe: false,
      projects: false,
      contactMe: false,
    });
  };

  const handleAboutMeClick = () => {
    setPage({
      home: false,
      aboutMe: true,
      projects: false,
      contactMe: false,
    });
  };

  const handleProjectsClick = () => {
    setPage({
      home: false,
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
        handleHomeClick={handleHomeClick}
        page={page}
      />

      <Main page={page} />
    </>
  );
}

export default App;
