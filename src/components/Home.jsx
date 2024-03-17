import { SocialIcon } from "react-social-icons";

export function Home({ show }) {
  return (
    <section className="flex items-center justify-center">
      {show && (
        <div>
          <div className="pt-20 text-2xl text-center home-font tracking-widest">
            Welcome to My Portfolio Page
          </div>
          <div className="flex justify-center gap-5 pt-10">
            <SocialIcon
              style={{ height: 40, width: 40 }}
              url="https://github.com/Sakhee89/"
            />
            <SocialIcon
              style={{ height: 40, width: 40 }}
              url="https://www.linkedin.com/in/kevin-chan-b7103b135/"
            />
          </div>
        </div>
      )}
    </section>
  );
}
