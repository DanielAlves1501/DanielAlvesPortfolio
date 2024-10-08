import { FaFacebook, FaLinkedin, FaInstagram } from "react-icons/fa";

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
        <div className="flex gap-3">
          <a
            href="https://www.linkedin.com/in/daniel-alves-616755243/"
            target="_blank"
            className="hover:text-white transition-colors duration-300"
          >
            <FaLinkedin size={20} />
          </a>

          <a
            href="https://www.facebook.com/DanielAlves0415"
            target="_blank"
            className="hover:text-white transition-colors duration-300"
          >
            <FaFacebook size={20} />
          </a>

          <a
            href="https://www.instagram.com/danielalves123321"
            target="_blank"
            className="hover:text-white transition-colors duration-300"
          >
            <FaInstagram size={20} />
          </a>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
