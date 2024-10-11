import Image from "next/image";
import CustomBtn from "./CustomBtn";

const Hero = () => {
  return (
    <div className="container relative z-10 pt-[150px] desktop:h-screen   ">
      <div className="w-full sm:flex justify-between items-center">
        <div>
          <h1 className="hero-title text-center mb-5 sm:text-left">
            Hi there! <br /> I'm{" "}
            <span className="text-secondary"> Daniel Alves</span>
          </h1>
          <strong className="text-[24px] font-inter font-light block text-center sm:text-left md:text-[30px] lg:text-[36px]">
            Front End Developer
          </strong>
          <div className="flex flex-wrap justify-center items-baseline mb-10 sm:justify-start ">
            <CustomBtn text="Contact Me" extraStyles="mt-5 " />
            <a
              href="/DanielAlvesCV.pdf"
              target="_blank"
              className="text-secondary ml-5 text-[14px] hover:text-gray transition-colors duration-300"
            >
              Download my CV
            </a>
          </div>
        </div>
        <div className="hero-pic">
          <Image
            src="/assets/profilePicColor.webp"
            fill
            className="rounded-full object-cover"
            sizes="(max-width: 500px) 150px, (max-width: 640px) 220px, (max-width: 768px) 260px, 400px"
            alt="Profile Picture"
          />
        </div>
      </div>

      <div className="text-[14px] flex justify-center mt-20 sm:mt-[100px] sm:text-[16px]">
        <div className="border-r-2 text-center pr-5">
          <span className="text-secondary font-inter font-medium text-3xl md:text-4xl ">
            3+
          </span>
          <p className="mt-5 text-center">Years Experience</p>
        </div>
        <div className="border-r-2 text-center px-5 lg:px-10 ">
          <span className="text-secondary font-inter font-medium text-3xl md:text-4xl ">
            10+
          </span>
          <p className=" mt-5 text-center">Projects Completed</p>
        </div>
        <div className="text-center pl-5">
          <span className="text-secondary font-inter font-medium text-3xl md:text-4xl ">
            15+
          </span>
          <p className=" mt-5 text-center">Happy Clients</p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
