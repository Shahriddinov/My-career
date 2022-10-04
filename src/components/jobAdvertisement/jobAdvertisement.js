import logoBlue from "../images/logo-blue.svg";
import { useNavigate } from "react-router-dom";
import RoutesPath from "../../routes/routes";
import UserSelector from "../user-selector/user-selector";
import dropDown from "../../img/drop-down.svg";
import userPic from "../../img/user-picture.png";
import { useState } from "react";
import "./jobAdvertisement.scss";
import JobAdvertisementCard from "./jobAdvertisementCard/jobAdvertisementCard";
import LanguageSelector from "../language-selector/language-selector";

function JobAdvertisement() {
  const navigate = useNavigate();
  const [isClicked, setClicked] = useState(1);

  function handleClick(evt) {
    const eventValue = evt.target.dataset.id;
    setClicked(eventValue);
  }

  return (
    <div className="job-advertisement">
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
                <UserSelector userPicture={userPic} />
                <LanguageSelector />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Page */}
      <div className="job-advertisement__container">
        <h2 className="job-advertisement__title">Your Postings</h2>
        <div className="page__header">
          <nav className="page__navbar">
            <ul className="page__navbar-list" onClick={handleClick}>
              <li className="page__navbar-list--item">
                <span data-id="1">Active (324)</span>
                <span
                  className={isClicked == 1 ? `list__item-stroke` : ""}
                ></span>
              </li>
              <li className="page__navbar-list--item">
                <span data-id="2">Draft (3)</span>
                <span
                  className={isClicked == 2 ? `list__item-stroke` : ""}
                ></span>
              </li>
            </ul>
            <span className="list__stroke"></span>
          </nav>
        </div>
        <ul className="job-advertisement__card-list">
          <JobAdvertisementCard />
          <JobAdvertisementCard />
          <JobAdvertisementCard />
          <JobAdvertisementCard />
          <JobAdvertisementCard />
          <JobAdvertisementCard />
        </ul>
      </div>
    </div>
  );
}

export default JobAdvertisement;
