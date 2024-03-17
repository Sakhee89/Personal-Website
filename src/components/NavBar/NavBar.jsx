import { SocialIcon } from "react-social-icons";
import { useState } from "react";
import { MobileNavBar } from "./MobileNavBar";

export function NavBar({
  handleAboutMeClick,
  handleProjectsClick,
  handleContactMeClick,
  handleHomeClick,
  page,
}) {
  const [openMenu, setOpenMenu] = useState(false);

  function toggleMenu() {
    setOpenMenu(!openMenu);
  }

  return (
    <nav className="bg-black text-white py-2 sticky top-0 z-30 backdrop-blur-[50px] px-8 md:px-0">
      <MobileNavBar
        isOpen={openMenu}
        toggleMenu={toggleMenu}
        handleAboutMeClick={handleAboutMeClick}
        handleProjectsClick={handleProjectsClick}
        handleContactMeClick={handleContactMeClick}
        handleHomeClick={handleHomeClick}
        page={page}
      />{" "}
      <div className="max-w-[1700px] flex items-center justify-between py-4 mb-auto">
        <h1 className="px-4 header">My Portfolio</h1>
        <ul className="hidden items-center gap-2 list-none md:flex">
          <li className="mx-6">
            <span className="navBar-a-styling" onClick={handleHomeClick}>
              Home
            </span>
          </li>
          <li className="mx-6">
            <a className="navBar-a-styling" onClick={handleAboutMeClick}>
              About
            </a>
          </li>
          <li className="mx-6">
            <a className="navBar-a-styling" onClick={handleProjectsClick}>
              Projects
            </a>
          </li>
          <li className="mx-6">
            <a className="navBar-a-styling" onClick={handleContactMeClick}>
              Contact Me
            </a>
          </li>
        </ul>
        <button
          className="w-10 h-10 text-[1.5rem] flex items-center justify-center rounded-[0.4rem] text-white border-transparent custom-background leading-[0] cursor-pointer transition-all duration-[400] ease-in-out md:hidden hover:text-[#f2f1f4] hover:bg-black hover:border hover:border-solid hover:border-[#4f4e51]"
          onClick={toggleMenu}
        >
          <span
            className={"material-symbols-outlined"}
            style={{ fontSize: "1.8rem" }}
          >
            {openMenu ? "close" : "menu"}
          </span>
        </button>
      </div>
    </nav>
  );
}
