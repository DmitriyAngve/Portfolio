import React from "react";

const ProjectItem = ({ img, title }) => {
  return (
    <div className="relative flex items-center justify-center h-auto w-full shadow-amber-500 shadow-right">
      <img src={img} alt="" className="w-full h-full object-fill" />
      <div>
        <h3></h3>
      </div>
    </div>
  );
};

export default ProjectItem;
