export function AboutMe({ show }) {
  return (
    <section className="pt-10 flex justify-center pb-8">
      {show && (
        <div>
          <h1 className="text-2xl text-center font-bold">About Me</h1>
          <p className="text-justify pt-4 w-full md:max-w-md lg:max-w-5xl">
            Hello! I'm Kevin, a Software Developer based in London. My journey
            into the world of software development began with a solid foundation
            gained from the intensive Northcoders bootcamp. <br></br>
            <br></br>
            <b>Background and Transition:</b>
            <br></br>With a background as a Finance Analyst & Data Analytic
            Manager, I embarked on a transformative journey to pursue my passion
            for software development. I've always been intrigued by the power of
            technology to solve complex problems and streamline processes. This
            transition reflects my profound commitment to transforming ideas
            into efficient and user-friendly software solutions. <br></br>
            <br></br>
            <b>Technical Skills:</b>
            <br></br>I specialise in a variety of programming languages and
            technologies, including JavaScript, TypeScript, Python, Node.js, and
            a range of frontend and backend frameworks such as React.js, Vue.js,
            Express, and Next.js. I'm well-versed in Test Driven Development
            (TDD), database management with PostgreSQL and MongoDB, and
            proficient in utilising tools like Jest for testing and GitHub for
            version control.
            <br></br>
            <br></br>
            <b>Professional Experience:</b>
            <br></br>During my tenure as a Trainee Software Developer at
            Northcoders, I actively contributed to diverse projects,
            demonstrating proficiency in both frontend and backend development.
            Notable achievements include the successful completion of a fully
            functional Reddit clone and collaboration on a group project
            integrating new technologies seamlessly. My experience in software
            development has honed my problem-solving skills and equipped me with
            the ability to adapt to evolving tech stacks.
            <br></br>
            <br></br>
            <b>Education and Learning Journey:</b>
            <br></br>I hold a MSC in Finance and Investment from the University
            of Brighton, where I developed analytical and critical thinking
            skills crucial for my transition into software development.
            Additionally, my continuous pursuit of learning through platforms
            like CodeAcademy, Udemy, and FreeCodeCamp underscores my dedication
            to personal and professional growth.
            <br></br>
            <br></br>
            <b>Interests and Future Aspirations:</b>
            <br></br>
            Outside of software development, I enjoy staying updated with
            industry trends, attending tech events, and actively participating
            in networking opportunities. I am passionate about continuous
            personal development and am committed to exploring new projects and
            technologies to broaden my skill set and contribute meaningfully to
            the tech community.
          </p>
        </div>
      )}
    </section>
  );
}
