import React from "react";
import JobsView from "../jobs-view/jobs-view";
import Navbar from "../navbar/navbar";

function LoggingJobs() {
  return (
    <div>
      <div className="post-jop-wrapper" id="overflow-y-scroll">
        <div className="navbarHom">
          <Navbar />
        </div>

        <JobsView />
      </div>
      <div className="pattern99">
        <img src="./images/white-ell1.svg" alt="pattern" />
        <img src="./images/white-ell2.svg" alt="pattern" />
        <img src="./images/white-ell3.svg" alt="pattern" />
        <img src="./images/white-ell4.svg" alt="pattern" />
        <img src="./images/white-ell5.svg" alt="pattern" />
      </div>
    </div>
  );
}

export default LoggingJobs;
