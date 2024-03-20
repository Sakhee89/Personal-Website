import { EmailForm } from "./EmailForm";
import { ContactInfoCard } from "./ContactInfoCard";

export function ContactMe() {
  return (
    <section className="p-6 xl:max-w-[1300px] xl:mx-auto xl:last:relative">
      <h1 className="flex justify-center text-[1.3rem] mb-6 font-semibold md:text-[1.5rem] md:mb-12">
        Contact Me
      </h1>
      <div className="md:flex md:gap-12">
        <div className="md:w-1/2 md:order-2 mb-12 md:mb-0">
          <EmailForm />
        </div>
        <div className="md:w-1/2 md:order-1">
          <ContactInfoCard
            urlText="https://github.com/Sakhee89/"
            iconText="https://github.com/Sakhee89/"
          />
          <ContactInfoCard
            urlText="https://www.linkedin.com/in/kevin-chan-b7103b135/"
            iconText="https://www.linkedin.com/in/kevin-chan-b7103b135/"
          />
          <ContactInfoCard
            urlText="KevinChan01@outlook.com"
            iconText="mailto:KevinChan01@outlook.com"
          />
        </div>
      </div>
    </section>
  );
}
