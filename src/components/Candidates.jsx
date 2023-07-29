import React from "react";
import hero from "../assets/hero.png";
const Candidates = ({ candidate }) => {
  return (
    <div className="group my-2 w-full sm:w-[230px] bg-primary p-2 rounded-xl font-dsans cursor-pointer shadow-xl">
      <img src={hero} alt="candidate_image" />
      <div className="ml-2">
        <h2 className="font-bold text-2xl">{candidate.name}</h2>
        <p>{candidate.job_role}</p>
      </div>
      <button className="bg-white invisible w-full rounded-full my-2 py-2 hover:bg-accent group-hover:visible" onClick={(e)=>console.log(e)}>Select</button>
    </div>
  );
};

export default Candidates;
