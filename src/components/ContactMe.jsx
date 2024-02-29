export function ContactMe({ show }) {
  return (
    <section className="mt-10 flex justify-center pb-10">
      {show && (
        <div>
          <h1 className="text-2xl mb-5">Contact Me</h1>
          <p>
            Email:{" "}
            <a href="mailto:KevinChan01@outlook.com">KevinChan01@outlook.com</a>
          </p>
        </div>
      )}
    </section>
  );
}
