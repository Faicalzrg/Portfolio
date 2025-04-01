import SingleExperience from "./SingleExperience";
import { FaArrowRightLong } from "react-icons/fa6";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";

const experiences = [
  {
    job: "Electromechanical Maintenance Technician",
    company: "BANK AL-MAGHRIB",
    date: "2010 - 2016",
    responsibilities: [
      "Performing preventive and corrective maintenance operations.",
      "Managing spare parts inventory.",
      "Preparing intervention reports.",
    ],
  },
  {
    job: "Industrial Electromechanics Trainer",
    company: "OFPPT",
    date: "2022 - Present",
    responsibilities: [
      "Conducting training sessions on electromechanical systems.",
      "Developing training materials and curriculum for electromechanical courses.",
      "Assessing and evaluating trainee performance and progress.",
    ],
  },
  {
    job: "Maintenance Workshop Manager",
    company: "BANK AL-MAGHRIB",
    date: "2016 - Present",
    responsibilities: [
      "Operational and technical manager of the maintenance workshop.",
      "Management of personnel, maintenance tasks, and inventory",
      "Planning and coordinating maintenance interventions.",
      "Staff training and development.",
    ],
  },
];

const AllExperiences = () => {
  return (
    <div className="flex md:flex-row sm:flex-col items-center justify-between">
      {experiences.map((experience, index) => {
        return (
          <>
            <SingleExperience key={index} experience={experience} />
            {index < 2 ? (
              <motion.div
                variants={fadeIn("right", 0)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: false, amount: 0.7 }}
              >
                <FaArrowRightLong className="text-6xl text-orange lg:block sm:hidden" />
              </motion.div>
            ) : (
              ""
            )}
          </>
        );
      })}
    </div>
  );
};

export default AllExperiences;
