import { useState } from "react";
import FilterCard from "../filter-card/filter-card";
import JobCard from "../job-card/job-card";
import "./logged-jobs.scss";
import Navbar from "../navbar/navbar";

function LoggedJobs() {
  const [isClicked, setClicked] = useState(1);

  function handleClick(evt) {
    const eventValue = evt.target.dataset.id;
    setClicked(eventValue);
  }

  return (
    <div className="logged-talents">
      <div className="navbarHom">
        <Navbar />
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
            <JobCard />
            <JobCard />
            <JobCard />
            <JobCard />
            <JobCard />
          </ul>
        </div>
        <div className="logged-talents__sidebar">
          <FilterCard className="logged-jobs__filter-card" />
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

export default LoggedJobs;
