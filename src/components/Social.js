import { FaFacebook, FaLinkedin, FaInstagram } from "react-icons/fa";

const Social = () => {
  return (
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
  );
};

export default Social;
