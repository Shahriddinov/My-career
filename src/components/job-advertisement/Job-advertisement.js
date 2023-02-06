import React from "react";
import { useState } from "react";
import Navbar from "../navbar/navbar";

// import userPic from '../images/user-img.jpg';
import verified from "../images/verificated.svg";
import emailIcon from "../images/email.svg";
import phoneIcon from "../images/phone.svg";
import locationIcon from "../images/location.svg";
import telegram from "../images/telegram.svg";
import whatsapp from "../images/whatsapp.svg";
import twitter from "../images/twitter.svg";
import instagram from "../images/instagramm.svg";
import facebook from "../images/facebook.svg";
import github from "../images/github.svg";
import userumidaka from "../../img/user-umid-aka.png";
import ticking from "../../img/ticking.svg";
import jobVideo from "../../img/videoForWork.mp4";
import "../job-modal-sidebar/job-modal-sidebar.scss";
import "./Job-advertisement.scss";
import ClientCard from "../client-card/client-card";
import JobAdvertisementCard from "./JobAdvertisementCard";
import Loggedlang from "../LoggetLang/LoggetLang";
import { useTranslation } from "react-i18next";

function Jobadvertisement() {
  const { t } = useTranslation();

  const [isClicked, setClicked] = useState(1);

  function handleClick(evt) {
    const eventValue = evt.target.dataset.id;
    setClicked(eventValue);
  }
  return (
    <div className="jobadvertisement">
      <div className="navbarHom">
        <Navbar />
      </div>
      <div className="jobadvertisement__container">
        <div className="jobadvertisement__info">
          <div className="jobadvertisement__info-header">
            <img
              className="jobadvertisement__info-headeruser"
              src={userumidaka}
              alt=""
            />
            <div className="jobadvertisement__info-headerContent">
              <div className="jobadvertisement__info-header-usercontent">
                <h2>Umid Abdusattorov</h2>
                <img src={ticking} alt="" />
              </div>
              <div className="jobadvertisement__info-header-usercontent">
                <span>{t("ceo")}</span>
                <a href="/">Napa Automotive</a>
              </div>
            </div>
          </div>
          <p className="jobadvertisement__info-text">
            The company offers services to improve the efficiency of other
            companies. With the help of our highly qualified specialists and
            modern technologies, we integrate our knowledge and skills to
            increase efficiency.
            <br />
            <br />
            <br />
            Sit lacinia feugiat commodo hac tristique. Non lobortis in eu a,
            mattis ullamcorper nullam. Facilisi ipsum mattis hac urna
            scelerisque nunc id. Aliquam nullam turpis magna placerat. Amet
            aliquam eget dignissim odio leo, in adipiscing. Aliquet mattis in
            tortor, eros.
          </p>
          <video
            className="jobadvertisement__video"
            src={jobVideo}
            controls
          ></video>
          <div className="client-hostory">
            <h2 className="client-history__title">
              {t("Clients-history")} (<span>27</span>)
            </h2>

            <nav className="page__navbar page__subnavbar">
              <ul className="page__navbar-list" onClick={handleClick}>
                <li className="page__navbar-list--item">
                  <span data-id="1">
                    Active (<span>4</span>)
                  </span>
                  <span
                    className={isClicked == 1 ? `list__item-stroke` : ""}
                  ></span>
                </li>
                <li className="page__navbar-list--item">
                  <span data-id="2">
                    Completed (<span>20</span>)
                  </span>
                  <span
                    className={isClicked == 2 ? `list__item-stroke` : ""}
                  ></span>
                </li>
                <li className="page__navbar-list--item">
                  <span data-id="3">
                    In progress (<span>3</span>)
                  </span>
                  <span
                    className={isClicked == 3 ? `list__item-stroke` : ""}
                  ></span>
                </li>
              </ul>
              <span className="list__stroke"></span>
            </nav>

            <div className="clients__list">
              <JobAdvertisementCard />
              <JobAdvertisementCard />
              <JobAdvertisementCard />
            </div>
            <p className="client-history__button">See more...</p>
          </div>
        </div>

        <div className="jobadvertisement__contact">
          <div className="jobadvertisement__sidebar user">
            <div className="user__job-history jobadvertisement__contact-change">
              <div className="user__job-history--wrapper stripe">
                <p className="user__job-payment--number">$5936</p>
                <p className="user__job-payment--text">Totally paid</p>
              </div>
              <div className="user__job-history--wrapper">
                <p className="user__job-payment--number">324</p>
                <p className="user__job-payment--text">Posted jobs</p>
              </div>
            </div>
            <div className="user__contact jobadvertisement__contact-changecolumn">
              <div className="user__contact--wrapper">
                <img src={emailIcon} width="24" height="19" alt="email icon" />
                <p className="user__contact-email">user@name.com</p>
              </div>
              <div className="user__contact--wrapper">
                <img src={phoneIcon} width="24" height="24" alt="phone icon" />
                <p className="user__contact-number">+998 90 005 00 34</p>
              </div>
              <div className="user__contact--wrapper">
                <img
                  src={locationIcon}
                  width="20"
                  height="25"
                  alt="location icon"
                />
                <p className="user__contact-location">
                  17, Little Ring Road street, <br /> Tashkent, Uzbekistan
                </p>
              </div>
            </div>
            <div className="user__verification jobadvertisement__contact-changecolumn">
              <h2 className="user__verification-title">{t("Verifications")}</h2>
              <div className="user__verification-wrapper">
                <p>ID: Verified</p>
                <img
                  src={verified}
                  width="17"
                  height="17"
                  alt="user verificated"
                />
              </div>
            </div>
            <div className="user__company jobadvertisement__contact-changecolumn">
              <h2 className="user__company-title">{t("About-company")}</h2>
            </div>
            <div className="user__employee jobadvertisement__contact-changecolumn">
              <h2 className="user__employee-title">
                {t("The-number-of-employees")}
              </h2>
              <p className="user__employee-count">37</p>
            </div>
            <div className="user__website jobadvertisement__contact-changecolumn">
              <h2 className="user__website-title">{t("Website-links")}</h2>
              <a className="user__website-link" target="_blank">
                https://www.behance.net/mjuraev676ba95
              </a>
            </div>
            <div className="user__social-media jobadvertisement__contact-changecolumn">
              <h2 className="user__social-media--title">{t("Social-media")}</h2>
              <div className="user__social-media--links">
                <a className="user__social-media--link">
                  <img
                    src={telegram}
                    className="user__social-media--icon"
                    width="24"
                    height="24"
                    alt="social media link"
                  />
                  t.me/Murphy_design_2001
                </a>
                <a className="user__social-media--link">
                  <img
                    src={whatsapp}
                    className="user__social-media--icon"
                    width="24"
                    height="24"
                    alt="social media link"
                  />
                  t.me/Murphy_design_2001
                </a>
                <a className="user__social-media--link">
                  <img
                    src={facebook}
                    className="user__social-media--icon"
                    width="24"
                    height="24"
                    alt="social media link"
                  />
                  t.me/Murphy_design_2001
                </a>
                <a className="user__social-media--link">
                  <img
                    src={github}
                    className="user__social-media--icon"
                    width="24"
                    height="24"
                    alt="social media link"
                  />
                  t.me/Murphy_design_2001
                </a>
                <a className="user__social-media--link">
                  <img
                    src={instagram}
                    className="user__social-media--icon"
                    width="24"
                    height="24"
                    alt="social media link"
                  />
                  t.me/Murphy_design_2001
                </a>
                <a className="user__social-media--link">
                  <img
                    src={twitter}
                    className="user__social-media--icon"
                    width="24"
                    height="24"
                    alt="social media link"
                  />
                  t.me/Murphy_design_2001
                </a>
              </div>
            </div>
            <div className="user__established">
              <h2 className="user__established-title">
                {t("Established-year")}
              </h2>
              <p className="user__established-text">June 9, 2022</p>
            </div>
          </div>
        </div>
      </div>

      <div className="talents-pattern jobadvertisement__pattern">
        <img src="./images/white-ell1.svg" alt="pattern" />
        <img src="./images/white-ell2.svg" alt="pattern" />
        <img src="./images/white-ell3.svg" alt="pattern" />
        <img src="./images/white-ell4.svg" alt="pattern" />
        <img src="./images/white-ell5.svg" alt="pattern" />
      </div>
    </div>
  );
}

export default Jobadvertisement;
