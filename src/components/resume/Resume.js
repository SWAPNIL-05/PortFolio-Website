import React, {  useState } from 'react'
import Title from '../layouts/Title';
import Education from './Education';
import Skills from './Skills';
import Experience from "./Experience"

const Resume = () => {
   const [educationData, setEducationData] = useState(true);
   const [skillData, setSkillData] = useState(false);
   const [experienceData, setExperienceData] = useState(false);
  return (
    <section id="resume" className="w-full py-20 border-b-[1px] border-b-black">
      <div className="flex justify-center items-center text-center" style={{display:"flex",flexDirection:"column"}}>
        <Title title="2+ YEARS OF EXPERIENCE" des="My Resume" />
      <div style={{marginBottom:"30px"}}>
              <a href={`${require("../../assets/images/projects/resume.pdf")}`} download="SwapnilMore.pdf" className="w-full h-12 bg-[#141518] rounded-lg text-base text-gray-400 tracking-wider  hover:text-white duration-300 hover:border-[2px] hover:border-designColor border-transparent" style={{padding:"20px"}}>    
              Download CV
              &nbsp;  <i className="fa-solid fa-download"></i>
              </a> 
     </div>
      </div>
      <div>
        <ul className="w-full grid grid-cols-1 md:grid-cols-3 xl:grid-cols-4">
          <li
            onClick={() =>
              setEducationData(true) &
              setSkillData(false) &
              setExperienceData(false)
            }
            className={`${
              educationData
                ? "border-designColor rounded-lg"
                : "border-transparent"
            } resumeLi`}
          >
            Education
          </li>
          <li
            onClick={() =>
              setEducationData(false) &
              setSkillData(true) &
              setExperienceData(false)
            }
            className={`${
              skillData ? "border-designColor rounded-lg" : "border-transparent"
            } resumeLi`}
          >
            Professional Skills
          </li>
          <li
            onClick={() =>
              setEducationData(false) &
              setSkillData(false) &
              setExperienceData(true)
            }
            className={`${
              experienceData
                ? "border-designColor rounded-lg"
                : "border-transparent"
            } resumeLi`}
          >
            Experience
          </li>
        </ul>
      </div>
      {educationData && <Education />}
      {skillData && <Skills />}
      {experienceData && <Experience />}
 
    </section>
  );
}

export default Resume