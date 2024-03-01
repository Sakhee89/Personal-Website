import { Header } from "./Header";
import { SocialIcon } from "react-social-icons";

export function NavBar({
  handleAboutMeClick,
  handleProjectsClick,
  handleContactMeClick,
}) {
  return (
    <div className="bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90%">
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
      <div className="flex justify-center space-x-4 py-4 text-black font-semibold">
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
    </div>
  );
}
