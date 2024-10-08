import ProjectCard from "./ProjectCard";

const Projects = () => {
  const projects = [
    {
      projectName: "La Guacarena",
      imgPath: "/assets/project1.webp",
      projectLink: "https://laguacarena.com",
    },
    {
      projectName: "Sneakers Ecom",
      imgPath: "/assets/project2.webp",
      projectLink: "https://danielalves1501.github.io/Ecommerce-Main-Page",
    },
    {
      projectName: "Huddle",
      imgPath: "/assets/project3.webp",
      projectLink: "https://gilded-douhua-652d0f.netlify.app",
    },
    {
      projectName: "Sushiman",
      imgPath: "/assets/project4.webp",
      projectLink: "https://dulcet-centaur-1a5c2a.netlify.app",
    },
    {
      projectName: "SnakeGame",
      imgPath: "/assets/project5.webp",
      projectLink: "https://effulgent-truffle-0b774f.netlify.app",
    },
    {
      projectName: "TicTacToe Game",
      imgPath: "/assets/project6.webp",
      projectLink: "https://jazzy-genie-c96519.netlify.app",
    },
  ];
  return (
    <section className="container">
      <h2 className="title text-center pt-[100px]">Projects</h2>
      <div className="flex justify-center gap-10 flex-wrap ">
        {projects.map((project, index) => (
          <ProjectCard
            projectName={project.projectName}
            imgPath={project.imgPath}
            projectLink={project.projectLink}
            key={index}
          />
        ))}
      </div>
    </section>
  );
};

export default Projects;
