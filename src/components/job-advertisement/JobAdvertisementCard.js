import star from "../images/star.svg";
import blueStar from "../images/blue-star.svg";
import dropDown from "../../img/drop-down.svg";
import verified from "../images/verificated.svg";
import userPicture from "../../img/Napa-icon.png";
import { Rate } from "antd";
import "antd/dist/antd.css";
import "../client-card/client-card.scss";
import { useState } from "react";

function JobAdvertisementCard() {
  let [isTrueAccardion, setisTrueAccardion] = useState(false);
  return (
    <div className="client-card">
      <div className="client-card__top">
        <div className="client-card__top-info">
          <h3 className="client-card__title client-card__subtitle">
            Business Card Design
          </h3>
          <div className="client-card__top-sum">
            <p>10$</p>
            <p>3 days</p>
          </div>
        </div>
        <p className="client-card__top-level">
          Required level: <span>Middle</span>
        </p>
      </div>
      <div
        className="client-card__description"
        onClick={() => setisTrueAccardion(!isTrueAccardion)}
      >
        <div className="client-card__text">
          <p className="client-card__subtext">
            Experienced designer required to make updates to website graphic
            assets,email banner. Files will be provided in Adobe
            illustrator,Photoshop PSD. Tasks as follows:
          </p>
          <span
            className={
              isTrueAccardion === true ? "client-card__text--active" : ""
            }
          >
            ...
          </span>
          <p
            className={
              isTrueAccardion === true
                ? "client-card__text client-card__subtext "
                : "client-card__text client-card__text--active"
            }
          >
            {" "}
            simply dummy text of the printing and typesetting industry. Lorem
            Ipsum has been the industry's standard dummy text ever since the
            1500s, when an unknown printer took a galley
          </p>
        </div>
        <img
          src={dropDown}
          className="client-card__drop-down"
          width="20"
          height="11"
        />
      </div>
      <div className="client-card__expiriens">
        <p>Figma</p>
        <p>Adobe PhotoShop</p>
        <p>Adobe Illustrator</p>
      </div>

      <div className="client-card__user client-card__subuser">
        <div className="client-card__user-content">
          <img
            src={userPicture}
            className="client-card__user-picture"
            width="54"
            height="54"
            alt="user picture"
          />
          <div className="client-card__user-name--wrapper">
            <h3 className="client-card__user-name">Napa Automotive</h3>
            <p className="client-card__user-subtext">
              <img
                className="client-card__user-subtext--icon client-card__user-subtext--subicon"
                src={verified}
                width="17"
                height="17"
                alt="user verificated"
              />
              Verified
            </p>
          </div>
          <div className="client-history__user-info client-history__user-subinfo">
            <div className="client-history__user-info--wrapper client-history__user-subinfo--wrapper">
              <p className="client-history__user-info--title">3 years</p>
              <p className="client-history__user-info--subtitle">In service</p>
            </div>
            <div className="client-history__user-info--wrapper client-history__user-subinfo--wrapper">
              <p className="client-history__user-info--title">1530$</p>
              <p className="client-history__user-info--subtitle">Paid</p>
            </div>
          </div>
        </div>
        <span className="client-history__user-postdate">Posted 1 day ago</span>
      </div>
    </div>
  );
}

export default JobAdvertisementCard;
