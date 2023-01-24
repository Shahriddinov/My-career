import likeIcon from "../../img/like.svg";
import dropDown from "../../img/drop-down.svg";
import locationIcon from "../../img/location-icon.svg";
import userPic from "../../img/user-picture.png";
import starIcon from "../../img/star-icon.svg";
import "./talent-card.scss";
import { useState } from "react";
import TalentModal from "../talent-modal/talent-modal";

function TalentCard() {
  const [isModalOpened, setModalOpened] = useState(false);

  function closeModal(value) {
    setModalOpened(value);
  }
  return (
    <>
      <li
        className="talent-card"
        onClick={() => setModalOpened(!isModalOpened)}
      >
        <div className="talent-card__head">
          <div className="talent-card__user">
            <img
              className="talent-card__user-pic"
              src={userPic}
              width="54"
              height="54"
              alt="user picture"
            />
            <div className="talent-card__user-info">
              <p className="talent-card__user-title">
                <span className="talent-card__user-name">Michel R</span>
                <img
                  className="talent-card__user-star"
                  src={starIcon}
                  width="17"
                  height="17"
                  alt="star icon"
                />
              </p>
              <p className="talent-card__user-subtitle">Web-design UI/UX</p>
            </div>
          </div>
          <div className="talent-card__job">
            <span className="stroke"></span>
            <div className="talent-card__job-success">
              <span className="talent-card__job-percent">80%</span>
              <span className="talent-card__job-percent--line">
                <span className="talent-card__percent-line talent-card__percent-line--80"></span>
              </span>
              <p className="talent-card__job-text">Job Success</p>
            </div>
            <span className="stroke"></span>
            <div className="talent-card__job-payment">
              <span className="talent-card__job-payment--amount">5$</span>
              <span className="talent-card__job-payment--text">Hourly</span>
            </div>
            <span className="stroke"></span>
            <div className="talent-card__job-amount">
              <span className="talent-card__job-amount--number">324</span>
              <span className="talent-card__job-amount--text">
                Completed Jobs
              </span>
            </div>
            <span className="stroke"></span>
          </div>
          <span className="talent-card__like-icon">
            <img src={likeIcon} alt="like icon" width={"20"} height={"18"} />
          </span>
        </div>
        <div className="talent-card__body">
          <div className="talent-card__body-description">
            <p className="talent-card__body-text talent-card__body-text--short">
              Experienced designer required to make updates to website graphic
              assets and email banner. Files will be provided in Adobe
              illustrator and Photoshop PSD. Tasks as follows: ...
            </p>
            <img
              className="talent-card__body-image"
              src={dropDown}
              alt="drop down icon"
              width="20"
              height="11"
            />
          </div>
          <div className="talent-card__body-abilities">
            <ul className="talent-card__body-abilities--list">
              <li className="talent-card__body-ability">Figma</li>
              <li className="talent-card__body-ability">Html</li>
              <li className="talent-card__body-ability">Adobe PhotoShop</li>
            </ul>
            <p className="talent-card__body-abilities--level">
              level:{" "}
              <strong className="talent-card__body-level--strong">
                Middle
              </strong>
            </p>
          </div>
        </div>
        <div className="talent-card__footer">
          <p className="talent-card__footer-experience">
            <span className="talent-card__footer-experience--span">
              3 years{" "}
            </span>
            of experience
          </p>
          <div className="talent-card__footer-location">
            <img
              src={locationIcon}
              className="talent-card__footer-location--icon"
              alt="location icon"
              width="16"
              height="20"
            />
            <p className="talent-card__footer-location--text">
              Tashkent,Uzbekistan
            </p>
          </div>
        </div>
      </li>
      {isModalOpened && (
        <TalentModal
          className={isModalOpened ? "job-modal" : "closed"}
          isModalOpened={isModalOpened}
          closeModal={closeModal}
        />
      )}
    </>
  );
}

export default TalentCard;
