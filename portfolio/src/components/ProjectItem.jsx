import React from "react";

const projectsData = [
  { tech: "React JS" },
  { tech: "JavaScript" },
  { tech: "React JS / Redux TK" },
  { tech: "SASS" },
];

const ProjectItem = ({ img, title }) => {
  return (
    <div className="relative flex items-center justify-center h-auto w-full shadow-amber-500 shadow-right rounded-md group hover:bg-gradient-to-l from-sky-100 to-amber-200">
      <img
        src={img}
        alt=""
        className="w-full h-full rounded-xl group-hover:opacity-40"
      />
      <div className="hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
        <h3 className="text-2xl font-bold text-amber-800 tracking-wider text-center">
          {title}
        </h3>

        <p className="pb-4 pt-2 text-amber-800 text-center">React JS</p>
        <a href="/">
          <p className="text-center p-3 rounded-full bg-sky-50 text-amber-800 font-bold cursor-pointer text-lg">
            More info
          </p>
        </a>
      </div>
    </div>
  );
};

export default ProjectItem;
