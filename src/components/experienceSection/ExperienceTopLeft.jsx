import ExperienceInfo from "./ExperienceInfo";

const ExperienceTopLeft = () => {
  return (
    <div className="flex flex-col gap-6 w-[300px]">
      <p className="text-orange font-bold uppercase text-3xl font-special text-center">
        Since 2008
      </p>
      <div className="flex justify-center items-center gap-4">
        <ExperienceInfo text="Over 15 Years" />
        <p className="font-bold text-6xl text-lightBrown">-</p>
        <ExperienceInfo text="Of Experience" />
      </div>
      <ExperienceInfo text="With 2 years" />
      <p className="text-center">
         of experience as a trainer at OFFPT, 
        specializing in electromechanical systems and dedicated to enhancing students' technical skills.
      </p>

    </div>
  );
};

export default ExperienceTopLeft;
