import { useState } from "react";
import { useNavigate } from "react-router-dom";
import RoutesPath from "../../routes/routes";
import FilterCard from "../filter-card/filter-card";
import logoBlue from "../images/logo-blue.svg";
import TalentCard from "../talent-card/talent-card";
import dropDown from "../../img/drop-down.svg";
import userPic from "../../img/user-picture.png";
import "./logged-talents.scss";

function LoggedTalents() {
  const navigate = useNavigate();
  const [isClicked, setClicked] = useState(1);

  function handleClick(evt) {
    const eventValue = evt.target.dataset.id;
    setClicked(eventValue);
  }

  return (
    <div className="logged-talents">
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

            <div className="navbar-wrapper" id="myCollapse">
              <ul className="nav">
                <li className="nav-item">
                  <div
                    className="nav-link active"
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
                    className="nav-link"
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
                <div className="logged-talents__user">
                  <img src={userPic} width="36" height="36" />
                  <span className="logged-talents__user-name">Michel R</span>
                  <img src={dropDown} width="13" height="7" />
                </div>
                <div className="logged-talents__language">
                  <span className="logged-talents__language-text">En</span>
                  <img src={dropDown} width="13" height="7" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="logged-talents__container">
        <div className="logged-talents__page">
          <div className="page__header">
            <div className="input-group">
              <input
                type="text"
                className="form-control form-control0"
                placeholder="Title, keywords..."
                aria-label="Text input with segmented dropdown button"
              />
              <button
                type="button"
                className="forSearchBtn forSearchBtn99 btn btn-outline-secondary"
              >
                <div className="searchIcon searchIcon1"></div>
              </button>
            </div>
            <nav className="page__navbar">
              <ul className="page__navbar-list" onClick={handleClick}>
                <li className="page__navbar-list--item">
                  <span data-id="1">Best matches</span>
                  <span
                    className={isClicked == 1 ? `list__item-stroke` : ""}
                  ></span>
                </li>
                <li className="page__navbar-list--item">
                  <span data-id="2">Recent</span>
                  <span
                    className={isClicked == 2 ? `list__item-stroke` : ""}
                  ></span>
                </li>
                <li className="page__navbar-list--item">
                  <span data-id="3">Saved</span>
                  <span
                    className={isClicked == 3 ? `list__item-stroke` : ""}
                  ></span>
                </li>
              </ul>
              <span className="list__stroke"></span>
            </nav>
          </div>
          <ul className="page__body">
            <TalentCard />
            <TalentCard />
            <TalentCard />
            <TalentCard />
            <TalentCard />
            <TalentCard />
            <TalentCard />
            <TalentCard />
          </ul>
        </div>
        <div className="logged-talents__sidebar">
          <FilterCard className="logged-talents__filter-card" />
        </div>
      </div>

      <div className="talents-pattern">
        <img src="./images/white-ell1.svg" alt="pattern" />
        <img src="./images/white-ell2.svg" alt="pattern" />
        <img src="./images/white-ell3.svg" alt="pattern" />
        <img src="./images/white-ell4.svg" alt="pattern" />
        <img src="./images/white-ell5.svg" alt="pattern" />
      </div>
    </div>
  );
}

export default LoggedTalents;
