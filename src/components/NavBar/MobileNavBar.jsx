import PropTypes from "prop-types";

export function MobileNavBar({
  isOpen,
  toggleMenu,
  handleAboutMeClick,
  handleProjectsClick,
  handleContactMeClick,
  handleHomeClick,
  page,
}) {
  MobileNavBar.propTypes = {
    isOpen: PropTypes.bool.isRequired,
    toggleMenu: PropTypes.func.isRequired,
  };

  return (
    <div
      className={`w-screen h-screen block bg-black text-white bg-opacity-30 fixed left-0 top-0 mobile-nav-z-index custom-box-shadow transition-all duration-300 ease-in-out md:hidden ${
        isOpen ? "opacity-100 translate-x-0" : "opacity-0 translate-x-[-100vw]"
      }`}
      onClick={toggleMenu}
    >
      <div className="w-[45vw] h-screen bg-[#342864] p-8">
        <h1 className="mb-12 header">My Portfolio</h1>
        <ul className="flex flex-col gap-8 list-none ml-[-1.5rem]">
          <li className="mx-6">
            <span className="navBar-a-styling" onClick={handleHomeClick}>
              Home
            </span>
          </li>
          <li className="mx-6">
            <span className="navBar-a-styling" onClick={handleAboutMeClick}>
              About
            </span>
          </li>
          <li className="mx-6">
            <span className="navBar-a-styling" onClick={handleProjectsClick}>
              Projects
            </span>
          </li>
          <li className="mx-6">
            <span className="navBar-a-styling" onClick={handleContactMeClick}>
              Contact Me
            </span>
          </li>
        </ul>
      </div>
    </div>
  );
}