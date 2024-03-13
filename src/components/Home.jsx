export function Home({ show }) {
  return (
    <section className="flex items-center justify-center">
      {show && (
        <div className="pt-20 text-2xl text-center home-font tracking-widest">
          Welcome to My Portfolio Page
        </div>
      )}
    </section>
  );
}
