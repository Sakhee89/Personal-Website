import { Header } from "./Header";
import { SocialIcon } from "react-social-icons";

export function NavBar({
  handleAboutMeClick,
  handleProjectsClick,
  handleContactMeClick,
  handleHomeClick,
  page,
}) {
  return (
    <div className="bg-white text-center tracking-widest">
      <Header handleHomeClick={handleHomeClick} />
      <div className="flex justify-center">
        <SocialIcon
          className="mr-3"
          style={{ height: 40, width: 40 }}
          url="https://github.com/Sakhee89/"
        />
        <SocialIcon
          style={{ height: 40, width: 40 }}
          url="https://www.linkedin.com/in/kevin-chan-b7103b135/"
        />
      </div>

      <div className="flex justify-center space-x-10 py-4 font text-black custom-font">
        <span
          className={`cursor-pointer ${
            page.home ? "text-red-500" : "text-black"
          } hover:text-red-500`}
          onClick={handleHomeClick}
        >
          Home
        </span>
        <span
          className={`cursor-pointer ${
            page.aboutMe ? "text-red-500" : "text-black"
          } hover:text-red-500`}
          onClick={handleAboutMeClick}
        >
          About Me
        </span>
        <span
          className={`cursor-pointer ${
            page.projects ? "text-red-500" : "text-black"
          } hover:text-red-500`}
          onClick={handleProjectsClick}
        >
          Projects
        </span>
        <span
          className={`cursor-pointer ${
            page.contactMe ? "text-red-500" : "text-black"
          } hover:text-red-500`}
          onClick={handleContactMeClick}
        >
          Contact
        </span>
      </div>
    </div>
  );
}
