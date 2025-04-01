import React from "react";

const certifications = [
  {
    title: "Utiliser l’IA dans sa stratégie L&D",
    description: "Optimisez l'apprentissage et le développement avec l'IA.",
    link: "#",
  },
  {
    title: "Scrum Master",
    description: "Maîtrisez la méthodologie agile Scrum.",
    link: "#",
  },
  {
    title: "Project Management Essentials",
    description: "Les bases essentielles de la gestion de projet.",
    link: "https://www.linkedin.com/learning/certificates/9b439eeec0e540287b4c5ba536f792a9638537bed67735a0d416e006aeab66b4?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_certifications_details%3BF%2FvTy6G6RomB32hIC0L4%2BQ%3D%3D",
  },
  {
    title: "Lean Six Sigma White Belt",
    description: "Introduction aux principes Lean Six Sigma.",
    link: "#",
  },
  {
    title: "Design Thinking",
    description: "Approche centrée sur l'innovation et la résolution de problèmes.",
    link: "#",
  },
  {
    title: "Java Programmer",
    description: "Développez vos compétences en programmation Java.",
    link: "#",
  },
  {
    title: "Maîtrisez les fondamentaux d'Excel",
    description: "Boostez votre productivité avec Excel.",
    link: "#",
  },
];

const CertificationsSection = () => {
  return (
    <section id="certifications" className="py-16 bg-gray-900 text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8 text-orange-400">Certifications</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((certif, index) => (
            <div key={index} className="p-6 bg-gray-800 shadow-lg rounded-lg text-left">
              <h3 className="text-xl font-semibold text-orange-300">{certif.title}</h3>
              <p className="text-gray-400">{certif.description}</p>
              <a href={certif.link} target="_blank" rel="noopener noreferrer" className="text-blue-400 flex items-center mt-3">
                View <span className="ml-1">↗</span>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CertificationsSection;
