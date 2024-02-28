export function AboutMe({ show }) {
  return (
    <section className="mt-10">
      {show && (
        <div>
          <h1 className="text-2xl">About Me</h1>
          <p className="mt-4">
            Hi, I'm Kevin. I completed an intensive full Stack Software
            Developer bootcamp with Northcoders in January 2024.
          </p>
        </div>
      )}
    </section>
  );
}
