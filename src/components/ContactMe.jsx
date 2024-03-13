export function ContactMe({ show }) {
  return (
    <section className="text-center mt-10 flex justify-center pb-10">
      {show && (
        <div>
          <h1 className="text-2xl mb-5 font-bold">Contact</h1>
          <div>
            <p className="hover:text-red-500">
              Email:{" "}
              <a href="mailto:KevinChan01@outlook.com">
                KevinChan01@outlook.com
              </a>
            </p>
          </div>
        </div>
      )}
    </section>
  );
}
