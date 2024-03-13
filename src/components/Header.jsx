export function Header({ handleHomeClick }) {
  return (
    <header className="text-center text-gray-950 font header">
      <h1 onClick={handleHomeClick} className="text-3xl pt-4 italic">
        Kevin Chan
      </h1>
      <section className="pt-3 pb-2"></section>
    </header>
  );
}
