import Image from "next/image";
import Link from "next/link";

const ProjectCard = ({ imgPath, projectName, projectLink }) => {
  return (
    <article className="w-[300px] ">
      <div className="w-[300px] h-[300px] relative mb-5">
        <Link href={projectLink} target="_blank ">
          <Image
            src={imgPath}
            className="rounded-xl object-cover transition-all duration-300  hover:scale-[1.1]"
            alt={projectName}
            fill
          />
        </Link>
      </div>

      <div className="flex justify-between items-center">
        <h4 className="description-text !font-medium ">{projectName}</h4>
        <button className="text-[12px] !font-medium border-[1px] rounded-xl border-secondary px-3 py-[1px] transition-all duration-300 hover:bg-secondary hover:text-primary hover:scale-[1.1]">
          View Details
        </button>
      </div>
    </article>
  );
};

export default ProjectCard;
