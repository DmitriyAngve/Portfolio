import React from "react";
import ProjectItem from "./ProjectItem";
import mealsImg from "../assets/ReactMeals.jpg";
import bookmartImg from "../assets/Bookmart.jpg";
import forkifyImg from "../assets/Forkify.jpg";
import natoursImg from "../assets/Tours.jpg";

const Projects = () => {
  return (
    <div
      id="projects"
      className="w-full m-auto md:pl-20 p-4 py-16 bg-gradient-to-r from-sky-100 to-amber-100"
    >
      <h1 className="text-4xl font-bold text-center text-[#273558] mb-6 ">
        Projects
      </h1>
      <p className="text-center py-8">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nam cum,
        labore culpa earum quas rerum at iure aperiam vel. Doloremque minus rem
        sit dolore quidem unde ipsam eius nisi accusantium!
      </p>
      <div className="grid sm:grid-cols-2 gap-12">
        <ProjectItem img={mealsImg} title="Food-App" />
        <ProjectItem img={forkifyImg} title="Recipe-App" />
        <ProjectItem img={bookmartImg} title="Store-App" />
        <ProjectItem img={natoursImg} title="Travel-App" />
      </div>
    </div>
  );
};

export default Projects;
