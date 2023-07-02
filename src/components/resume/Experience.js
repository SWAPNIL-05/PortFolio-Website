import React from "react";
import {motion} from "framer-motion"
import ResumeCard from "./ResumeCard";

const Experience = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="py-12 font-titleFont flex gap-20"
    >
      <div>
        <div className="flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2021 - 2023</p>
          <h2 className="text-4xl font-bold">Job Experience</h2>
        </div>
        <div className="mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
        <ResumeCard
            title="ReactJs Developer"
            subTitle="Algoscript Software Pvt. Ltd - (Mar/2022  - Present)"
            result="Surat"
            des="Developed an online trivia game platform enabling users to design game boards, select game types, and play with friends or online opponents."
          />
          <ResumeCard
            title="Computer Science Expert"
            subTitle="Chegg India - (Sept/2021 - Present)"
            result="Remote"
            des="Provide expert-level guidance to students on computer science-related topics by answering their questions online."
          />
          <ResumeCard
            title="ReactJs InterShip"
            subTitle="Tagline Infotech LLP - (Jan/2022 - Feb/2022)"
            result="Surat"
            des="Built personal mini projects to gain hands-on experience with React.js and improve my skills."
          />
        </div>
      </div>
    </motion.div>
  );
};

export default Experience;
