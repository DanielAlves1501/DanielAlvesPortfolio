import Social from "./Social";

const Navbar = () => {
  return (
    <header className="container pt-5 z-10">
      <nav className="flex flex-col gap-5 justify-between items-center sm:flex-row">
        <ul className="flex gap-7 text-[14px]">
          <li className="hover:text-white transition-colors duration-300">
            <a href="#about">About</a>
          </li>
          <li className="hover:text-white transition-colors duration-300">
            <a href="#skills">Skills</a>
          </li>
          <li className="hover:text-white transition-colors duration-300">
            <a href="#projects">Projects</a>
          </li>
          <li className="hover:text-white transition-colors duration-300">
            <a href="#Contact">Contact</a>
          </li>
        </ul>
        <Social />
      </nav>
    </header>
  );
};

export default Navbar;
