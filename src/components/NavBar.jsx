import { Header } from "./Header";
import { SocialIcon } from "react-social-icons";

export function NavBar({
  handleAboutMeClick,
  handleProjectsClick,
  handleContactMeClick,
  page,
}) {
  return (
    <div className="bg-gradient-to-r from-blue-300 from-10% to-green-100 to-90% text-center">
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
      <div className="flex justify-center space-x-10 py-4 font-bold text-black ">
        <span
          onClick={handleAboutMeClick}
          style={{
            cursor: "pointer",
            color: page.aboutMe ? "red" : "black",
          }}
        >
          About Me
        </span>
        <span
          onClick={handleProjectsClick}
          style={{
            cursor: "pointer",
            color: page.projects ? "red" : "black",
          }}
        >
          Projects
        </span>
        <span
          onClick={handleContactMeClick}
          style={{
            cursor: "pointer",
            color: page.contactMe ? "red" : "black",
          }}
        >
          Contact Me
        </span>
      </div>
    </div>
  );
}
