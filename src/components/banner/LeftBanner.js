import React from 'react'
import { useTypewriter, Cursor } from "react-simple-typewriter";
import Media from './Media';

const LeftBanner = () => {
    const [text] = useTypewriter({
      words: ["Software Engineer.", "Web Developer.", "Front-End Developer."],
      loop: true,
      typeSpeed: 100,
      deleteSpeed: 70,
      delaySpeed: 1000,
    });
  return (
    <div className="w-full lgl:w-1/2 flex flex-col gap-20">
      <div className="flex flex-col gap-5">
        <h4 className=" text-lg font-normal">WELCOME TO MY WORLD</h4>
        <h1 className="font-bold text-white" style={{
          fontSize: "3rem",
          lineHeight: "1",
        }}>
          Hi, I'm <span className="text-designColor capitalize">Swapnil More</span>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               
        </h1>
        <h2 className="text-4xl font-bold text-white">
          a <span>{text}</span>
          <Cursor
            cursorBlinking="false"
            cursorStyle="|"
            cursorColor="#ff014f"
          />
        </h2>
        <p className="text-base font-bodyFont leading-6 tracking-wide">
        Experienced React Js developer with 2+ years of experience in building and maintaining web applications. Strong understanding of React.js and related technologies. Maintaining frontend
        performance, troubleshooting and debugging to enhance overall performance.
        </p>
      </div>
     {/* Media */}
     <Media />
    </div>
  );
}

export default LeftBanner