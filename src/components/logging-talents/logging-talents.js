import React from "react";
import Navbar from "../navbar/navbar";
import TalentView from "../talent-view/talent-view";

function LoggingTalents(props) {
  return (
    <div>
      <div className="post-jop-wrapper" id="overflow-y-scroll">
        <div className={"navbarHom"}>
          <div className="logoBg">
            <img src="./images/Napa_logo_white.svg" alt="" />
          </div>
          <div className="homeNavbar">
            <Navbar />
          </div>
        </div>

        <TalentView />
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

export default LoggingTalents;
