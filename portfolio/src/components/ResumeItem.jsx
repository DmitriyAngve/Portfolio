import React from "react";
import resumeImg from "../assets/Resume.jpg";

const ResumeItem = () => {
  return (
    <div
      id="resume"
      className="w-full m-auto md:pl-20 p-4 py-16 bg-gradient-to-r from-sky-100 to-amber-100"
    >
      <h1 className="py-4 text-4xl font-bold text-center text-[#273558] mb-6">
        Resume
      </h1>
      <img src={resumeImg} alt="" />
      <a
        href="https://resume.io/r/UDD6iStxZ"
        target="_blank"
        rel="noopener noreferrer"
      >
        <button className="bg-amber-300 text-[#273558] font-semibold mt-4 w-full p-4 rounded-lg">
          Open resume
        </button>
      </a>
    </div>
  );
};

export default ResumeItem;
