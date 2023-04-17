import React from "react";

const WorkItem = ({ year, title, duration, details }) => {
  return (
    <ol className="flex flex-col md:flex-row relative border-l border-amber-300 pl-6">
      <li>
        <div>
          <p>
            <span>{year}</span>
            <span>{title}</span>
            <span>{duration}</span>
          </p>
          <p>
            <span>{details}</span>
          </p>
        </div>
      </li>
    </ol>
  );
};

export default WorkItem;
