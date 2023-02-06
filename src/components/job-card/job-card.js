import starIcon from "../../img/star-icon.svg";
import dropDown from "../../img/drop-down.svg";
import likeIcon from "../../img/like.svg";
import userPic from "../../img/jobs-image.svg";
import { useState } from "react";
import JobModal from "../modals/jobs-modal/job-modal";
import "./job-card.scss";

function JobCard() {
  const [isModalOpened, setModalOpened] = useState(false);

  function closeModal(value) {
    setModalOpened(value);
  }

  return (
    <ul className="job-ul">
      <li className="job-card" onClick={() => setModalOpened(!isModalOpened)}>
        <div className="job-card__head">
          <h2 className="job-card__title">Business Card Design</h2>
          <ul className="job-card__head-list">
            <li className="job-card__stroke"></li>
            <li className="job-card__head-list--item">10$</li>
            <li className="job-card__stroke"></li>
            <li className="job-card__head-list--item">3 days</li>
            <li className="job-card__stroke"></li>
          </ul>
          <p className="job-card__level">
            Required level: <span className="job-card__level-span">Middle</span>
          </p>
          <span className="job-card__like-icon">
            <img src={likeIcon} alt="like icon" width={"20"} height={"18"} />
          </span>
        </div>
        <div className="job-card__body">
          <div className="job-card__body-info">
            <p className="job-card__body-text">
              Experienced designer required to make updates to website graphic
              assets and email banner. Files will be provided in Adobe
              illustrator and Photoshop PSD. Tasks as follows: ...
            </p>
            <img
              className="job-card__body-image"
              src={dropDown}
              alt="drop down icon"
              width="20"
              height="11"
            />
          </div>
          <ul className="job-card__body-abilities--list">
            <li className="job-card__body-ability">Figma</li>
            <li className="job-card__body-ability">Adobe Photoshop</li>
            <li className="job-card__body-ability">Adobe Illustrator</li>
          </ul>
        </div>
        <div className="job-card__footer">
          <div className="job-card__user">
            <img className="job-card__user-pic" src={userPic} />
            <div className="job-card__company-info">
              <span className="job-card__company-name">Napa Automotive</span>
              <div className="job-card__company-title">
                <img
                  className="job-card__company-star"
                  src={starIcon}
                  width="17"
                  height="17"
                  alt="star icon"
                />
                <p className="job-card__company-subtitle">Verified</p>
              </div>
            </div>
          </div>
          <ul className="job-card__footer-list">
            <li className="stroke"></li>
            <li className="job-card__footer-list--item">
              <span className="job-card__footer-item--title">3 years</span>
              <p className="job-card__item-text">In service</p>
            </li>
            <li className="stroke"></li>
            <li className="job-card__footer-list--item">
              <span className="job-card__footer-item--title">24</span>
              <p className="job-card__item-text">Completed Jobs</p>
            </li>
            <li className="stroke"></li>
            <li className="job-card__footer-list--item">
              <span className="job-card__footer-item--title">1530$</span>
              <p className="job-card__item-text">Paid</p>
            </li>
            <li className="stroke"></li>
          </ul>
          <p className="job-card__time">Posted 1 day ago</p>
        </div>
      </li>
      {isModalOpened && (
        <JobModal
          className={isModalOpened ? "job-modal" : "closed"}
          isModalOpened={isModalOpened}
          closeModal={closeModal}
        />
      )}
    </ul>
  );
}

export default JobCard;
