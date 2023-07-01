import React from 'react'
import { contactImg } from "../../assets/index";
import SocialMedia from './SocialMedia';


const ContactLeft = () => {
  return (
    <div className="w-full lgl:w-[35%] h-full bg-gradient-to-r from-[#1e2024] to-[#23272b] p-4 lgl:p-8 rounded-lg shadow-shadowOne flex flex-col gap-8 justify-center" style={{                                                                                                                                                                                                                                                                                                                                 
      transition: "transform 0.2s ease-in-out, -webkit-transform 0.2s ease-in-out",
      cursor: "pointer",
    }}>
      <img
        className="w-full h-64 object-cover rounded-lg mb-2"
        src={contactImg}
        alt="contactImg"
      />
      <div className="flex flex-col gap-4">
        <h3 className="text-3xl font-bold text-white">Swapnil More</h3>
        <p className="text-lg font-normal text-gray-400">
         ReactJs Developer
        </p>
        <p className="text-base text-gray-400 tracking-wide">
        I have over 2 years of experience as a highly skilled ReactJS developer with a focus on creating dynamic and interactive user interfaces.
        </p>
        <p className="text-base text-gray-400 flex items-center gap-2">
          Phone: <span className="text-lightText">+91 9923437568</span>
        </p>
        <p className="text-base text-gray-400 flex items-center gap-2">
          Email: <span className="text-lightText">swapnil.scet@gmail.com</span>
        </p>
      </div>
      <SocialMedia />
    </div>
  );
}

export default ContactLeft;