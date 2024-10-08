import Social from "./Social";

const Footer = () => {
  return (
    <footer className="container pt-[100px] pb-5 flex justify-between items-center">
      <p className="description-text">
        {" "}
        &copy; {new Date().getFullYear()} Daniel Alves. All rights reserved.
      </p>

      <Social />
    </footer>
  );
};

export default Footer;
