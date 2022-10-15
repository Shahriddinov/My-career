import React from 'react'
import addPageIcon from "../images/add-page-icon.svg";
import Navbar from '../navbar/navbar';
import TalentSidebarLeft from '../talent-sidebar-left/talent-sidebar-left';
import TalentSidebarRight from '../talent-sidebar-right/talent-sidebar-right';
import './talentOpenNewTab.scss'
import { useNavigate } from "react-router-dom";
import RoutesPath from "../../routes/routes";
import logoBlue from "../images/logo-blue.svg";
import dropDown from "../../img/drop-down.svg";
import userPic from "../../img/user-picture.png";
import UserSelector from "../user-selector/user-selector";

const TalentOpenNewTabBtn = () => {

  const navigate = useNavigate();

  return (
    <div className='talentOpenNewTabBtn'>
      <div className="navbar-home">
        <div className="logos-wrapper">
          <img src={logoBlue} alt="white logo" width="360" height="94" />
        </div>
        <div className="homeNavbar">
          <div className=" navbar navbar-expand-md">
            <button
              type="button"
              className="navbar-toggler knopka"
              data-bs-toggle="collapse"
              data-bs-target="#myCollapse"
            >
              <label htmlFor="check">
                <input type="checkbox" id="check" />
                <span></span>
                <span></span>
              </label>
            </button>

            <div className="collapse navbar-collapse" id="myCollapse">
              <ul className="nav">
                <li className="nav-item">
                  <div
                    className="nav-link"
                    data-bs-toggle="tab"
                    onClick={() => {
                      navigate(RoutesPath.talants);
                    }}
                  >
                    Talants
                  </div>
                </li>
                <li className="nav-item">
                  <div
                    className="nav-link active"
                    data-bs-toggle="tab"
                    onClick={() => {
                      navigate(RoutesPath.postJop);
                    }}
                  >
                    Jobs
                  </div>
                </li>
                <li className="nav-item">
                  <div
                    className="nav-link"
                    data-bs-toggle="tab"
                    onClick={() => {
                      navigate(RoutesPath.aboutUs);
                    }}
                  >
                    About us
                  </div>
                </li>
                <li className="nav-item">
                  <div className="nav-link" data-bs-toggle="tab">
                    Contact us
                 </div>
                </li>
              </ul>
              <div className="logged-talents__user-informations">
                {/* <div className="logged-talents__user">
                  <img src={userPic} width="36" height="36" />
                  <span className="logged-talents__user-name">Michel R</span>
                  <img src={dropDown} width="13" height="7" />
                </div> */}
                <UserSelector/>
                <div className="logged-talents__language">
                  <span className="logged-talents__language-text">En</span>
                  <img src={dropDown} width="13" height="7" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      

      
      <div className='talent-modal__page-view--wrapper'>
        <TalentSidebarLeft/>
      <TalentSidebarRight newTabBtn={false}/>
      </div>
      
      
    </div>
  )
}

export default TalentOpenNewTabBtn;