import React from "react";
import WorkItem from "./WorkItem";

const data = [
  {
    year: 2022,
    title: "Frontend Developer",
    duration: "1 year",
    details:
      "Worked on various projects using technologies such as SAAS, Tailwind, React, Redux Toolkit, Nextjs, Firebase and other related technologies.",
  },
  {
    year: 2011,
    title: "Lead Engineer",
    duration: "11 years",
    details:
      "I was the lead engineer at the nuclear plant. The main duties were to manage the production activities of subordinate personnel in the repair of reactor and radioactive waste management, as well as to control the observance of technological processes and production regimes, elimination of the causes of their violation, participation in the development of documentation.",
  },
];

const Work = () => {
  return (
    <div id="work" className="max-w-[1040px] m-auto md:pl-20 p-4 py-16">
      <h1 className="text-4xl font-bold text-center text-[#162b61]">Work</h1>
      {data.map((item, idx) => (
        <WorkItem
          key={idx}
          year={item.year}
          title={item.title}
          duration={item.duration}
          details={item.details}
        />
      ))}
    </div>
  );
};

export default Work;
