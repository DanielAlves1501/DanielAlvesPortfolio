import Image from "next/image";

const About = () => {
  return (
    <section className="container pt-[100px]" id="about">
      <h2 className="title">About Me</h2>

      <div className="items-center justify-between sm:flex md:items-start ">
        <div className="about-pic-container">
          <Image src="/assets/aboutPicColor.webp" fill className="about-pic" />
        </div>

        <div className="sm:w-[47%]">
          <p className="body-text">
            Hi! I’m a passionate Front-End Developer based in Venezuela. I enjoy
            what I do and have a great ability for learning new things and adapt
            very quick!
          </p>
          <br />
          <p className="body-text">
            I like challenges and see them as an opportunity to learn and take
            each project as a journey of discovery and improvement.
          </p>
          <article className="mt-10">
            <h3 className="subtitle">Teleperformance</h3>
            <p className="description-text">
              Customer Service Representative | Advertising Support at Meta
            </p>
          </article>

          <article className="mt-5">
            <h3 className="subtitle">La Guacareña</h3>
            <p className="description-text">
              UX/UI Designer | Front-end Developer | Menu Designer
            </p>
          </article>

          <article className="mt-5">
            <h3 className="subtitle">StreamPro</h3>
            <p className="description-text">
              UX/UI Designer | Front-end & Backend Developer
            </p>
          </article>
        </div>
      </div>
    </section>
  );
};

export default About;
