import React from 'react'
import { motion } from 'framer-motion';
import ResumeCard from './ResumeCard';

const Education = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20"
    >
      {/* part one */}
      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2015- 2023</p>
          <h2 className="text-3xl md:text-4xl font-bold">Education</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Master Of Computer Application"
            subTitle="Gujarat Technological University(2020 - 2023)"
            result="8.15/10"
            des="I hold a Master of Computer Applications (MCA) degree with a strong focus on software development,
             database management, and system analysis."
          />
          <ResumeCard
            title="Bachelor Of Computer Application"
            subTitle="North Maharashtra University(2017 - 2020)"
            result="9.24/10"
            des="My BCA education has provided me with a comprehensive understanding of various programming languages, software development methodologies, and computer networks."
          />
          <ResumeCard
            title="Higher Secondary School Certificate"
            subTitle="Pratap College(2015 - 2017)"
            result="72.48%"
            des="Developed analytical and problem-solving skills through complex mathematical calculations."
          />
        </div>
      </div>
      {/* part Two */}

      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2021 - 2023</p>
          <h2 className="text-3xl md:text-4xl font-bold">Job Experience</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
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
}

export default Education