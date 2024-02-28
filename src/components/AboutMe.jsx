export function AboutMe({ show }) {
  return (
    <section>
      {show && (
        <>
          <h1>About Me</h1>
          <p>
            Hi, I'm Kevin. I completed an intensive full Stack Software
            Developer bootcamp with Northcoders in January 2024.
          </p>
        </>
      )}
    </section>
  );
}
