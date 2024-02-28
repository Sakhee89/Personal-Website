import { Header } from "./Header";
import { SocialIcon } from "react-social-icons";

export function NavBar({ handleAboutMeClick, handleProjectsClick }) {
  return (
    <nav className="border">
      <Header />
      <div className="flex justify-center">
        <div className="size-20 flex items-center item">
          <SocialIcon url="https://github.com/Sakhee89/" />
          <SocialIcon url="https://www.linkedin.com/in/kevin-chan-b7103b135/" />
        </div>
      </div>
      <div className="flex justify-center space-x-4 mb-4">
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
