import { Header } from "./Header";
import { SocialIcon } from "react-social-icons";

export function NavBar({ handleAboutMeClick, handleProjectsClick }) {
  return (
    <nav className="border">
      <Header /> <SocialIcon url="https://github.com/Sakhee89/" />
      <SocialIcon url="https://www.linkedin.com/in/kevin-chan-b7103b135/" />
      <div className="flex items-center space-x-4">
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
