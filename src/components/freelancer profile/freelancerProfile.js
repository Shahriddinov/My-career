import React, { useState, useRef, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "../navbar/navbar";
import AddProjectModal from "./addProjectModal";
import EditPersonalInfo from "./editPersonalInfo";
import EditAvailable from "./editAvailable";
import EditLanguage from "./editLanguage";
import EditEducation from "./editEducation";
import EditExperience from "./editExperience";
import EditSkill from "./editSkill";
import EditAddress from "./editAddress";
import EditContacts from "./editContacts";
import GET from "../../API/GET";

import {
  BsGithub,
  BsTelegram,
  BsWhatsapp,
  BsFacebook,
  BsInstagram,
  BsTwitter,
  BsGlobe,
} from "react-icons/bs";
import { SlLocationPin } from "react-icons/sl";

import editPortf from "../../img/editOnProfile.svg";
import editBtn from "../../img/editBtn.svg";
import "./styleFrlProf.scss";
import starIcon from "../../img/star-icon.svg";
import ma1 from "../../img/mobileApp1.png";
import ma2 from "../../img/mobileApp2.png";
import g69 from "../../img/Group69.png";
import editt from "../../img/Group42139.png";
import deletee from "../../img/Group42140.png";

import userPic from "../../img/user-picture.png";
import TalentModalCard from "../talent-modal-cards/talent-modal-card";

import verified from "../images/verificated.svg";

const FreelancerProfile = () => {
  const [isClicked, setClicked] = useState(1);
  const [buttonEd, setButtonEd] = useState(false);
  const [modal, setModal] = useState(false);
  const [editInfo, setEditInfo] = useState(false);
  const [editAvailable, setEditAvailable] = useState(false);
  const [editLanguage, setEditLanguage] = useState(false);
  const [editEducation, setEditEducation] = useState(false);
  const [editExperience, setEditExperience] = useState(false);
  const [editSkills, setEditSkills] = useState(false);
  const [editAddress, setEditAddress] = useState(false);
  const [editContacts, setEditContacts] = useState(false);
  const [frlData, setFrlData] = useState();

  const toggle = () => {
    setModal(!modal);
  };

  const toggle2 = () => {
    setEditInfo(!editInfo);
  };

  const toggle3 = () => {
    setEditAvailable(!editAvailable);
  };

  const toggle4 = () => {
    setEditLanguage(!editLanguage);
  };

  const toggle5 = () => {
    setEditEducation(!editEducation);
  };

  const toggle6 = () => {
    setEditExperience(!editExperience);
  };

  const toggle7 = () => {
    setEditSkills(!editSkills);
  };

  const toggle8 = () => {
    setEditAddress(!editAddress);
  };

  const toggle9 = () => {
    setEditContacts(!editContacts);
  };

  function handleClick(evt) {
    const eventValue = evt.target.dataset.id;
    setClicked(eventValue);
  }
  const navigate = useNavigate();
  const editRef = useRef();

  function showEdits() {
    setButtonEd(!buttonEd);
    if (buttonEd == false) {
      editRef.current.style.display = "none";
    } else {
      editRef.current.style.display = "block";
    }
  }

  const getFreelancerData = async () => {
    try {
      const get = await GET.FreelancerData();
      if (get.status === 200) {
        setFrlData(get.data.data);
      } else {
        alert(get.statusText);
      }
    } catch (err) {
      alert(err);
    }
  };

  useEffect(() => {
    getFreelancerData();
  }, []);

  console.log("Freelancer data: ", frlData);

  return (
    <div className="talent-modal__page-view">
      <div className="navbarHom">
        <Navbar />
      </div>

      <div className="talent-modal__page-view--wrapper">
        <div className="talent-modal__page">
          <div className="talent-modal__head">
            <div className="talent-modal__user">
              <img
                className="talent-modal__user-pic"
                src={userPic}
                width="90"
                height="90"
                alt="user picture"
              />
              <div className="talent-modal__user-info">
                <p className="talent-modal__user-title">
                  <span className="talent-modal__user-name">
                    Michel Rodrigues
                  </span>
                  <img
                    className="talent-modal__user-star"
                    src={starIcon}
                    width="17"
                    height="17"
                    alt="star icon"
                  />
                </p>
                <span className="talent-modal__user-subtitle">
                  Web-design UI/UX
                </span>
                <span className="talent-modal__user-subtitle-span">Middle</span>
              </div>
            </div>
            <div className="talent-modal__job">
              <div className="talent-modal__job-success">
                <span className="talent-modal__job-percent">80%</span>
                <span className="talent-modal__job-percent--line">
                  <span className="talent-modal__percent-line talent-modal__percent-line--80"></span>
                </span>
                <p className="talent-modal__job-text">Job Success</p>
              </div>
              <span className="stroke"></span>
              <div className="talent-modal__job-payment">
                <span className="talent-modal__job-payment--amount">5$</span>
                <span className="talent-modal__job-payment--text">Hourly</span>
              </div>
              <span className="stroke"></span>

              <div>
                <img
                  src={editBtn}
                  alt=""
                  onClick={toggle2}
                  style={{ cursor: "pointer", marginLeft: "10px" }}
                />
              </div>
            </div>
          </div>

          <div className="talent-modal__post">
            <div className="talent-modal__post--text">
              <p>I have been in the IT business for more than 11 years.</p>

              <p>
                With over 5 years of experience in the ERP consultancy. I have
                deployed and delivered 30+ Odoo implementations in different
                types of businesses. I have implemented a mixture of Enterprise
                and Community versions according to the cost-benefit analysis of
                the business and which suits best for the business.
              </p>
            </div>

            <div className="talent-modal__post--video">
              <button>See public view</button>
            </div>
          </div>

          <div className="talent-modal__portfolio">
            <div className="talent-modal-main-title">
              portfolio (14) <img src={editPortf} alt="" onClick={toggle} />
            </div>
            <div className="talent-modal__portfolio--box">
              <div className="talent-modal__portfolio--box-card">
                <div className="portfolio--box-card-img">
                  <img src={ma1} />
                </div>

                <div className="portfolio--box-card-text">
                  <p>
                    Mobile app My Career{" "}
                    <img
                      src={g69}
                      style={{ marginLeft: "80px", cursor: "pointer" }}
                      onClick={showEdits}
                    />
                  </p>
                  <span>6 days ago</span>
                </div>
                <div className="group69" ref={editRef}>
                  <div className="editDiv">
                    {" "}
                    <img src={editt} /> Edit
                  </div>
                  <div className="editDiv">
                    <img src={deletee} width="27px" />
                    Delete
                  </div>
                </div>
              </div>

              <div className="talent-modal__portfolio--box-card">
                <div className="portfolio--box-card-img">
                  <img src={ma2} />
                </div>

                <div className="portfolio--box-card-text">
                  <p>Mobile app My Career</p>
                  <span>6 days ago</span>
                </div>
              </div>

              <div className="talent-modal__portfolio--box-card">
                <div className="portfolio--box-card-img">
                  <img src={ma2} />
                </div>

                <div className="portfolio--box-card-text">
                  <p>Mobile app OnCloud</p>
                  <span>6 days ago</span>
                </div>
              </div>

              <div className="talent-modal__portfolio--box-card">
                <div className="portfolio--box-card-img">
                  <img src={ma1} />
                </div>

                <div className="portfolio--box-card-text">
                  <p>Mobile app My Career</p>
                  <span>6 days ago</span>
                </div>
              </div>

              <div className="talent-modal__portfolio--box-card">
                <div className="portfolio--box-card-img">
                  <img src={ma1} />
                </div>

                <div className="portfolio--box-card-text">
                  <p>Mobile app My Career</p>
                  <span>6 days ago</span>
                </div>
              </div>

              <div className="talent-modal__portfolio--box-card">
                <div className="portfolio--box-card-img">
                  <img src={ma2} />
                </div>

                <div className="portfolio--box-card-text">
                  <p>Mobile app OnCloud</p>
                  <span>6 days ago</span>
                </div>
              </div>

              <div className="talent-modal__portfolio--box-card">
                <div className="portfolio--box-card-img">
                  <img src={ma2} />
                </div>

                <div className="portfolio--box-card-text">
                  <p>Mobile app OnCloud</p>
                  <span>6 days ago</span>
                </div>
              </div>

              <div className="talent-modal__portfolio--box-card">
                <div className="portfolio--box-card-img">
                  <img src={ma1} />
                </div>

                <div className="portfolio--box-card-text">
                  <p>Mobile app My Career</p>
                  <span>6 days ago</span>
                </div>
              </div>
            </div>
          </div>
          <div className="talent-modal-main-title">work history</div>

          <nav className="tm__navbar">
            <ul className="tm__navbar-list" onClick={handleClick}>
              <li className="tm__navbar-list--item">
                <span data-id="1">Completed (324)</span>
                <span
                  className={isClicked == 1 ? `list__item-stroke` : ""}
                ></span>
              </li>
              <li className="tm__navbar-list--item">
                <span data-id="2">In progress (3)</span>
                <span
                  className={isClicked == 2 ? `list__item-stroke` : ""}
                ></span>
              </li>
            </ul>
            <span className="list__stroke"></span>
          </nav>

          <TalentModalCard />
          <TalentModalCard />
          <TalentModalCard />
          <TalentModalCard />

          <div className="btn_see-more">
            <button>See more...</button>
          </div>
        </div>

        <div className="talent-modal__sidebar">
          <div className="talent-modal__sidebar-user">
            <div className="user__talent-history">
              <div className="user__talent-history--wrapper stripe">
                <p className="user__talent-payment--number">$5936</p>
                <p className="user__talent-payment--text">Totally paid</p>
              </div>
              <div className="user__talent-history--wrapper stripe">
                <p className="user__talent-payment--number">324</p>
                <p className="user__talent-payment--text">Posted modals</p>
              </div>
              <div className="user__talent-history--wrapper">
                <p className="user__talent-payment--number">324</p>
                <p className="user__talent-payment--text">Total hours</p>
              </div>
            </div>
          </div>

          <div className="talent-modal__sidebar-box">
            <div className="talent-modal__sidebar-box-title">
              <p>Available</p>
              <div>
                <img
                  src={editBtn}
                  alt=""
                  onClick={toggle3}
                  style={{ cursor: "pointer", marginLeft: "10px" }}
                />
              </div>
            </div>
            <p className="talent-modal__sidebar-box-subtitle">
              More than 40 hrs/week
            </p>
          </div>

          <div className="talent-modal__sidebar-box">
            <div className="talent-modal__sidebar-box-title">Verifications</div>
            <p className="talent-modal__sidebar-box-subtitle">
              ID: Verified <img src={verified} />
            </p>
          </div>

          <div className="talent-modal__sidebar-box">
            <div className="talent-modal__sidebar-box-title">
              <p>Languages</p>
              <div>
                <img
                  src={editBtn}
                  alt=""
                  onClick={toggle4}
                  style={{ cursor: "pointer", marginLeft: "10px" }}
                />
              </div>
            </div>
            {frlData?.[0]?.userLanguages?.map((language) => {
              if (language?.name)
                return (
                  <div key={language?.id}>
                    <p className="talent-modal__sidebar-box-subtitle">
                      <span>{language?.name}: </span>{" "}
                      <span>{language?.level}</span>
                    </p>
                  </div>
                );
            })}
          </div>

          <div className="talent-modal__sidebar-box">
            <div className="talent-modal__sidebar-box-title">
              <p>Educations</p>
              <div>
                <img
                  src={editBtn}
                  alt=""
                  onClick={toggle5}
                  style={{ cursor: "pointer", marginLeft: "10px" }}
                />
              </div>
            </div>
            {frlData?.[0]?.educations?.map((education) => {
              if (education?.schoolName)
                return (
                  <div key={education?.id}>
                    <p className="talent-modal__sidebar-box-subtitle">
                      {education?.schoolName} ({education?.educationDegree})
                    </p>
                    <span className="mstg">
                      {education?.startDate} - {education?.endDate}
                    </span>
                  </div>
                );
            })}
          </div>

          <div className="talent-modal__sidebar-box">
            <div className="talent-modal__sidebar-box-title">
              <p>Experience</p>
              <div>
                <img
                  src={editBtn}
                  alt=""
                  onClick={toggle6}
                  style={{ cursor: "pointer", marginLeft: "10px" }}
                />
              </div>
            </div>
            {frlData?.[0]?.experiences?.map((experience) => {
              if (experience?.companyName)
                return (
                  <div key={experience?.id}>
                    <p className="talent-modal__sidebar-box-subtitle">
                      <span>{experience?.companyName} : </span>{" "}
                      <span> {experience?.job}</span>
                    </p>
                    <span className="mstg">
                      {experience?.startDate} - {experience?.endDate}
                    </span>
                  </div>
                );
            })}
          </div>

          <div className="talent-modal__sidebar-box">
            <div className="talent-modal__sidebar-box-title">
              <p>Skills</p>
              <div>
                <img
                  src={editBtn}
                  alt=""
                  onClick={toggle7}
                  style={{ cursor: "pointer", marginLeft: "10px" }}
                />
              </div>
            </div>
            {frlData?.[0]?.freelancerPosition?.freelancerSkills?.map(
              (skill) => {
                if (skill?.name)
                  return (
                    <div style={{ display: "inline" }} key={skill?.id}>
                      <button className="talent-modal__sidebar-box-btn">
                        {skill.name}
                      </button>
                    </div>
                  );
              }
            )}
          </div>

          <div className="talent-modal__sidebar-box">
            <div className="talent-modal__sidebar-box-title">
              <p>Contacts</p>
              <div>
                <img
                  src={editBtn}
                  alt=""
                  onClick={toggle9}
                  style={{ cursor: "pointer", marginLeft: "10px" }}
                />
              </div>
            </div>
            <div className="contacts-part">
              {frlData?.[0]?.freelancerContact?.gitHub ? (
                <div>
                  <BsGithub />{" "}
                  <a
                    href={frlData?.[0]?.freelancerContact?.gitHub}
                    target="_blank"
                  >
                    {frlData?.[0]?.freelancerContact?.gitHub}
                  </a>
                </div>
              ) : null}
              {frlData?.[0]?.freelancerContact?.telegram ? (
                <div>
                  <BsTelegram />{" "}
                  <a
                    href={frlData?.[0]?.freelancerContact?.telegram}
                    target="_blank"
                  >
                    {frlData?.[0]?.freelancerContact?.telegram}
                  </a>
                </div>
              ) : null}
              {frlData?.[0]?.freelancerContact?.instagram ? (
                <div>
                  <BsInstagram />{" "}
                  <a
                    href={frlData?.[0]?.freelancerContact?.instagram}
                    target="_blank"
                  >
                    {frlData?.[0]?.freelancerContact?.instagram}
                  </a>
                </div>
              ) : null}
              {frlData?.[0]?.freelancerContact?.facebook ? (
                <div>
                  <BsFacebook />{" "}
                  <a
                    href={frlData?.[0]?.freelancerContact?.facebook}
                    target="_blank"
                  >
                    {frlData?.[0]?.freelancerContact?.facebook}
                  </a>
                </div>
              ) : null}
              {frlData?.[0]?.freelancerContact?.twitter ? (
                <div>
                  <BsTwitter />{" "}
                  <a
                    href={frlData?.[0]?.freelancerContact?.twitter}
                    target="_blank"
                  >
                    {frlData?.[0]?.freelancerContact?.twitter}
                  </a>
                </div>
              ) : null}
              {frlData?.[0]?.freelancerContact?.watsApp ? (
                <div>
                  <BsWhatsapp />{" "}
                  <a
                    href={frlData?.[0]?.freelancerContact?.watsApp}
                    target="_blank"
                  >
                    {frlData?.[0]?.freelancerContact?.watsApp}
                  </a>
                </div>
              ) : null}
              {frlData?.[0]?.freelancerContact?.webSite ? (
                <div>
                  <BsGlobe />{" "}
                  <a
                    href={frlData?.[0]?.freelancerContact?.webSite}
                    target="_blank"
                  >
                    {frlData?.[0]?.freelancerContact?.webSite}
                  </a>
                </div>
              ) : null}
            </div>
          </div>

          <div className="talent-modal__sidebar-box">
            <div className="talent-modal__sidebar-box-title">
              <p>Living address</p>
              <div>
                <img
                  src={editBtn}
                  alt=""
                  onClick={toggle8}
                  style={{ cursor: "pointer", marginLeft: "10px" }}
                />
              </div>
            </div>
            <div className="address-part">
              <SlLocationPin />
              <span className="city">
                {" "}
                {frlData?.[0]?.address?.countryName},
              </span>
              <span className="country">
                {" "}
                {frlData?.[0]?.address?.regionName}
              </span>
            </div>
          </div>

          <div className="talent-modal__sidebar-box special-box">
            <div className="talent-modal__sidebar-box-title">Member since</div>
            <p className="talent-modal__sidebar-box-subtitle">June 9, 2022</p>
          </div>
          <div className="resume-btn">
            <button onClick={() => navigate("/resume")}>Resume</button>
          </div>
        </div>
      </div>
      <AddProjectModal toggle={toggle} modal={modal} />
      <EditPersonalInfo toggle2={toggle2} editInfo={editInfo} />
      <EditAvailable toggle3={toggle3} editAvailable={editAvailable} />
      <EditLanguage toggle4={toggle4} editLanguage={editLanguage} />
      <EditEducation toggle5={toggle5} editEducation={editEducation} />
      <EditExperience toggle6={toggle6} editExperience={editExperience} />
      <EditSkill toggle7={toggle7} editSkill={editSkills} />
      <EditAddress toggle8={toggle8} editAddress={editAddress} />
      <EditContacts toggle9={toggle9} editContacts={editContacts} />
    </div>
  );
};

export default FreelancerProfile;
