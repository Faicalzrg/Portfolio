import ProjectsText from "./ProjectsText";
import SingleProject from "./SingleProject";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";

const projects = [
  {
    name: "Project BIM & Power BI",
    year: "Leveraging Revit Data for Analytical Visualization",
    align: "right",
    image: "../../public/images/website-img-1.jpg",
    link: "https://docs.google.com/presentation/d/1FEeVY2b-t_ovS9bHj-3mc83DZfVBM2cn/edit?usp=drive_link&ouid=107527228456277639624&rtpof=true&sd=true",
  },
  {
    name: "The ISO 55000 standard",
    year: "Optimizing asset management with ISO 55000",
    align: "left",
    image: "../../public/images/website-img-2.jpeg",
    link: "https://docs.google.com/presentation/d/1z_JzJeFLftgS7E2W7tL6VL8998uEa1cu/edit?usp=drive_link&ouid=107527228456277639624&rtpof=true&sd=true",
  },
  {
    name: "Optimizing Time and Motion Studies",
    year: "Enhancing efficiency through predetermined methods",
    align: "right",
    image: "../../public/images/website-img-3.jpg",
    link: "https://drive.google.com/file/d/1jpMnkH6rigdRDM2fvEB4Byzv5rWvYEu2/view?usp=drive_link",
  },
  {
    name: "A Journey Through Facilities",
    year: "Exploring the world of facilities management",
    align: "left",
    image: "../../public/images/website-img-4.jpeg",
    link: "https://drive.google.com/file/d/1a3v3E7NmX5THms4ZfBZ8Nbvgv8lXiv59/view?usp=drive_link",
  },
  {
    name: "Value Stream Mapping",
    year: "Streamlining processes for maximum efficiency",
    align: "right",
    image: "../../public/images/website-img-5.jpg",
    link: "https://docs.google.com/presentation/d/1cvMhxkkh-WzYAHEEx0JIGg4Hq4Dx2n5q/edit?usp=drive_link&ouid=107527228456277639624&rtpof=true&sd=true",
  },
  {
    name: "A3 thinking",
    year: "Structured problem-solving",
    align: "left",
    image: "../../public/images/A3 thinking.png",
    link: "https://drive.google.com/file/d/1uULHcByEgYItONp_NLnUOl_5puisDFzg/view?usp=drive_link",
  },
  {
    name: "Poka yoke",
    year: "Error-prevention design",
    align: "right",
    image: "../../public/images/Poka yoke.jpg",
    link: "https://docs.google.com/presentation/d/1JrXTx9iwjhvhfgCkhk3c2Z9nYyntNkyO/edit?usp=drive_link&ouid=107527228456277639624&rtpof=true&sd=true",
  },
];

const ProjectsMain = () => {
  return (
    <div id="projects" className="max-w-[1200px] mx-auto px-4">
      <motion.div
        variants={fadeIn("top", 0)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.7 }}
      >
        <ProjectsText />
      </motion.div>
      <div className="flex flex-col gap-20 max-w-[900px] mx-auto mt-12">
        {projects.map((project, index) => {
          return (
            <SingleProject
              key={index}
              name={project.name}
              year={project.year}
              align={project.align}
              image={project.image}
              link={project.link}
            />
          );
        })}
      </div>
      <hr className="border-t-2 border-gray-500 my-10 w-full" />
    </div>
  );
};

export default ProjectsMain;
