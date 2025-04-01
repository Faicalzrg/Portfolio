import CertificationsText from "./CertificationsText";
import SingleCertificate from "./SingleCertificate";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";

const certifications = [

  {
    name: "Project Management Essentials",
    year: "The Basics of Project Management",
    align: "right",
    image: "/images/certifications/project-management.png",
    link: "https://www.linkedin.com/learning/certificates/3b4aa9d888b1cbfcb4178b53ced81adf32781d3ee34e0381ea93e46a9fce7133",
  },
  {
    name: "Design Thinking",
    year: "Encourage creativity and invention",
    align: "left",
    image: "/images/certifications/design-thinking.png",
    link: "https://openclassrooms.com/fr/course-certificates/2144789035",
  },
  {
    name: "Scrum Master",
    year: "Mastering agile project management",
    align: "right",
    image: "/images/certifications/scrum-master.png",
    link: "https://www.coursera.org/account/accomplishments/specialization/KIT6CJ70NKFF",
  },
  {
    name: "Lean Six Sigma White Belt",
    year: "Process Optimization with Lean Six Sigma",
    align: "left",
    image: "/images/certifications/lean-six-sigma.png",
    link: "https://drive.google.com/file/d/1MxdPC3m_qnqmMluiX3fbBoDmtMybbVTb/view?usp=drive_link",
  },
  {
    name: "Using AI in your L&D strategy",
    year: "Optimizing learning with artificial intelligence",
    align: "right",
    image: "/images/certifications/ia-strategie-ld.png",
    link: "https://www.linkedin.com/learning/certificates/19844ea212312b623efc3e4c9971ac03fa864de3f9a84e9deab2cc8b67ba98a2",
  },
  {
    name: "Java Programmer",
    year: "Software development with Java",
    align: "left",
    image: "/images/certifications/java-programmer.png",
    link: "https://openclassrooms.com/fr/course-certificates/7936923397",
  },
  {
    name: "Master the fundamentals of Excel",
    year: "Improve Productivity with Excel",
    align: "right",
    image: "/images/certifications/excel-fundamentals.png",
    link: "https://openclassrooms.com/fr/course-certificates/2713863226",
  },
];

const CertificationsMain = () => {
  return (
    <div id="certifications" className="max-w-[1200px] mx-auto px-4">
      <motion.div
        variants={fadeIn("top", 0)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.7 }}
      >
        <CertificationsText /> {/* 🔥 Ajout du texte d'intro ici */}
      </motion.div>
      <div className="flex flex-col gap-20 max-w-[900px] mx-auto mt-12">
        {certifications.map((certif, index) => (
          <SingleCertificate
            key={index}
            name={certif.name}
            year={certif.year}
            align={certif.align}
            image={certif.image}
            link={certif.link}
          />
        ))}
      </div>
      <hr className="border-t-2 border-gray-500 my-10 w-full" />
    </div>
  );
};

export default CertificationsMain;
