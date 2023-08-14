import React, { useState } from "react";
import Candidates from "./Candidates";
import { candidates, jobRoles, locations } from "../constants/constants";
import CustomFilter from "./CustomFilter";
import ErrorModal from "./ErrorModal";

const Home = ({ isAuthenticated }) => {
  const [searchInputLocation, setSearchInputLocation] = useState("")
  const [searchInputJobRole, setSearchInputJobrole] = useState("")
  const filteredCandidate = 
    (searchInputLocation == "" && searchInputJobRole == "")? 
    candidates
    : candidates.filter((candidate)=>
    candidate.location.toLowerCase().replace(/\s+/g, "").includes(searchInputLocation.toLowerCase().replace(/\s+/g, ""))
    && 
    candidate.job_role.toLowerCase().replace(/\s+/g, "").includes(searchInputJobRole.toLowerCase().replace(/\s+/g, ""))
    )
  return (
    <div>
      {isAuthenticated && (
        <div className="w-full min-h-[70vh]">
          <div className="flex my-5">
            <div className="flex justify-between w-full sm:flex-row flex-col sm:items-center">
              <h2 className="font-dsans text-3xl font-bold mt-2">
                Search your ideal candidate 🔎
              </h2>
              <div className="sm:flex gap-2 inline">
              <CustomFilter searchInput={searchInputLocation} setSearchInput={setSearchInputLocation} parameter={locations}/>
              <CustomFilter searchInput={searchInputJobRole} setSearchInput={setSearchInputJobrole} parameter={jobRoles}/>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-0">
            {filteredCandidate.map((candidate, index) => (
                <Candidates key={index} candidate={candidate} index={index} />
              ))}
          </div>
            {filteredCandidate.length==0 && (
              <ErrorModal/>
            )}
        </div>
      )}
    </div>
  );
};

export default Home;
