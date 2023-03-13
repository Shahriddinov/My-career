import { useState } from "react";
import "./jobAdvertisement.scss";
import JobAdvertisementCard from "./jobAdvertisementCard/jobAdvertisementCard";
import Navbar from "../navbar/navbar";

function JobAdvertisement() {
  const [isClicked, setClicked] = useState(1);

  function handleClick(evt) {
    const eventValue = evt.target.dataset.id;
    setClicked(eventValue);
  }

  return (
    <div className="job-advertisement">
      <div className="navbarHom">
        <Navbar />
      </div>
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
