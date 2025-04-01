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

const AllSkillsSM = () => {
  return (
    <div className="grid md:grid-cols-4 sm:grid-cols-2 gap-12 my-12">
      {skills.map((item, index) => {
        return (
          <motion.div
            variants={fadeIn("up", 0.2)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.7 }}
            key={index}
            className="flex flex-col items-center"
          >
            <item.icon className="text-7xl text-orange" />
            <p className="text-center mt-4">{item.skill}</p>
          </motion.div>
        );
      })}
    </div>
  );
};

export default AllSkillsSM;
