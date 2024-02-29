import { Header } from "./Header";
import { SocialIcon } from "react-social-icons";

export function NavBar({
  handleAboutMeClick,
  handleProjectsClick,
  handleContactMeClick,
}) {
  return (
    <nav className="nav border">
      <Header />
      <div>
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
      <div className="flex justify-center space-x-4 mb-4 mt-4">
        <span onClick={handleAboutMeClick} style={{ cursor: "pointer" }}>
          About Me
        </span>
        <span onClick={handleProjectsClick} style={{ cursor: "pointer" }}>
          Projects
        </span>
        <span onClick={handleContactMeClick} style={{ cursor: "pointer" }}>
          Contact Me
        </span>
      </div>
    </nav>
  );
}
