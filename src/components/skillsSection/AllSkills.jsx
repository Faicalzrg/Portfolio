import SingleSkill from "./SingleSkill";
import { FaTools } from "react-icons/fa";
import { FaClock } from "react-icons/fa";
import { FaProjectDiagram } from "react-icons/fa";
import { FaIndustry } from "react-icons/fa";
import { FaCertificate } from "react-icons/fa";
import { FaChartLine } from "react-icons/fa";
import { FaTasks } from "react-icons/fa";
import { FaSearchPlus } from "react-icons/fa";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";

const skills = [
  {
    skill: "Lean Manufacturing",
    icon: FaIndustry,
  },
  {
    skill: "Kaizen",
    icon: FaChartLine,
  },
  {
    skill: "5S",
    icon: FaTasks,
  },
  {
    skill: "SMED",
    icon: FaClock,
  },
  {
    skill: "TPM",
    icon: FaTools,
  },
  {
    skill: "FMEA",
    icon: FaSearchPlus,
  },
  {
    skill: "6 Sigma",
    icon: FaCertificate,
  },
  {
    skill: "Supply Chain",
    icon: FaProjectDiagram,
  },
];

const AllSkills = () => {
  return (
    <div>
      <div className="flex items-center justify-center relative gap-2 max-w-[1200px] mx-auto flex-wrap">
        {skills.map((item, index) => (
          <motion.div
            variants={fadeIn("up", `0.${index}`)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0 }}
            key={index}
          >
            <SingleSkill text={item.skill} imgSvg={<item.icon />} />
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default AllSkills;
