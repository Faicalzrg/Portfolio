import SingleSkill from "./SingleSkill";
import {FaTools} from "react-icons/fa";
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
    skill: "MPV",
    icon: FaTools,
  },
  {
    skill: "MTS",
    icon: FaClock,
  },
  {
    skill: "VSM",
    icon: FaProjectDiagram,
  },
  {
    skill: "FM",
    icon: FaIndustry,
  },
  {
    skill: "ISO",
    icon: FaCertificate,
  },
  {
    skill: "PDCA",
    icon: FaChartLine,
  },
  {
    skill: "PM",
    icon: FaTasks,
  },
  {
    skill: "RCA",
    icon: FaSearchPlus,
  },
];

const AllSkills = () => {
  return (
    <div>
      <div className="flex items-center justify-center relative gap-2 max-w-[1200px] mx-auto">
        {skills.map((item, index) => {
          return (
            <motion.div
              variants={fadeIn("up", `0.${index}`)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: false, amount: 0 }}
              key={index}
            >
              <SingleSkill
                key={index}
                text={item.skill}
                imgSvg={<item.icon />}
              />
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default AllSkills;
