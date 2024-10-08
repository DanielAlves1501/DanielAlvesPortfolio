import StatsBar from "./StatsBar";

const Skills = () => {
  const skillsList = [
    {
      langName: "HTML",
      langLevel: "Advanced",
      percentage: 80,
    },
    {
      langName: "CSS & Tailwind CSS",
      langLevel: "Advanced",
      percentage: 80,
    },
    {
      langName: "JavaScript",
      langLevel: "Advanced",
      percentage: 80,
    },
    {
      langName: "React",
      langLevel: "Advanced",
      percentage: 80,
    },
    {
      langName: "Next Js",
      langLevel: "Regular",
      percentage: 65,
    },
    {
      langName: "Node Js",
      langLevel: "Regular",
      percentage: 65,
    },
    {
      langName: "Express Js",
      langLevel: "Regular",
      percentage: 65,
    },
    {
      langName: "React Native",
      langLevel: "Regular",
      percentage: 65,
    },
    {
      langName: "Figma",
      langLevel: "Beginner",
      percentage: 40,
    },
  ];
  return (
    <section className="container pt-[100px]" id="skills">
      <h2 className="title text-center">
        <span className="text-secondary">Skills</span> and{" "}
        <span className="text-secondary">Technologies</span> I have used <br />{" "}
        and worked with
      </h2>
      {skillsList.map((skill, index) => (
        <StatsBar
          langName={skill.langName}
          langLevel={skill.langLevel}
          percentage={skill.percentage}
          key={index}
        />
      ))}
    </section>
  );
};

export default Skills;
