import { Header } from "./Header";
import { SocialIcon } from "react-social-icons";

export function NavBar({ handleAboutMeClick, handleProjectsClick }) {
  return (
    <nav className="nav border">
      <Header />
      <div>
        <SocialIcon className="size-24" url="https://github.com/Sakhee89/" />
        <SocialIcon
          className="flex justify-center size-20"
          url="https://www.linkedin.com/in/kevin-chan-b7103b135/"
        />
      </div>
      <div className="flex justify-center space-x-4 mb-4 mt-4">
        <span onClick={handleAboutMeClick} style={{ cursor: "pointer" }}>
          About Me
        </span>
        <span onClick={handleProjectsClick} style={{ cursor: "pointer" }}>
          Projects
        </span>
      </div>
    </nav>
  );
}
