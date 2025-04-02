import React from "react";
import { motion } from "framer-motion";

const SingleCertificate = ({ name, year, image, link, align }) => {
  return (
    <motion.div
      className={`
        flex items-center gap-6
        sm:flex-col
        md:${align === "right" ? "flex-row-reverse" : "flex-row"}
      `}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      {/* Image animée */}
      <motion.img
        src={image}
        alt={name}
        className="w-[250px] h-[180px] rounded-lg shadow-lg cursor-pointer"
        whileHover={{ scale: 1.1, rotate: 2 }}
        whileTap={{ scale: 0.95 }}
        transition={{ duration: 0.3 }}
      />

      {/* Texte et lien */}
      <div className="text-left sm:text-center">
        <h3 className="md:text-3xl sm:text-2xl text-orange">{name}</h3>
        <p className="text-gray-600">{year}</p>
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block mt-2 text-blue-500 hover:underline"
        >
          View Certificate →
        </a>
      </div>
    </motion.div>
  );
};

export default SingleCertificate;
