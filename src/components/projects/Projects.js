import React from 'react'
import Title from '../layouts/Title'
import { projectTwo } from "../../assets/index";
import ProjectsCard from './ProjectsCard';

const Projects = () => {
  return (
    <section
      id="projects"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <div className="flex justify-center items-center text-center">
        <Title
          title="VISIT MY PORTFOLIO AND KEEP YOUR FEEDBACK"
          des="My Projects"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-14">
        <ProjectsCard
          title="Factile"
          des="Factile is a free learning platform that lets teachers create engaging jeopardy-style quiz games for the classroom. It's free, easy and loads of fun!"
          src="https://edshelf.com/wp-content/uploads/2014/09/screenshot-factile-1.png"
        />
        <ProjectsCard
          title="E-commerce Website"
          des="It facilitates the transaction between a buyer and seller. It is the virtual space where you showcase products, and online customers make selections. Your website acts as the product shelve and cash register of your online business channel!"
          src={projectTwo}
        />
        <ProjectsCard
          title="Chatting App"
          des="Users can engage in conversations effortlessly, fostering meaningful and interactive communication."
          src="https://cdn.dribbble.com/userupload/2816389/file/original-f627dc439b3ed7f2c88e9dd61c2b2cc3.png?resize=400x0"
        />
        <ProjectsCard
          title="Factile"
          des="Factile is a free learning platform that lets teachers create engaging jeopardy-style quiz games for the classroom. It's free, easy and loads of fun!"
          src="https://edshelf.com/wp-content/uploads/2014/09/screenshot-factile-1.png"
        />
      </div>
    </section>
  );
}

export default Projects