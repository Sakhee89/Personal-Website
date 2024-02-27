import { Header } from "./Header";
import { SocialIcon } from "react-social-icons";

export function NavBar() {
  return (
    <nav>
      <Header />
      <SocialIcon url="https://github.com/Sakhee89/" />
      <SocialIcon url="https://www.linkedin.com/in/kevin-chan-b7103b135/" />
    </nav>
  );
}
