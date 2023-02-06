import React from "react";
import RoutesPath from "../../routes/routes";
import { useNavigate } from "react-router-dom";
import { Button } from "react-bootstrap";
import { token } from "../../API/POST";
import userPic from "../../img/user-picture.png";
import UserSelector from "../user-selector/user-selector";
import LanguageSelector from "../language-selector/language-selector";

import "./navbar.scss";
import logoBlue from "../images/logo-blue.svg";

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <>
      {token ? (
        <>
          <div className="logoBgWhite">
            <img src={logoBlue} alt="blueLogo" />
          </div>
          <div className="homeNavbar" style={{ width: "52vw" }}>
            <div className="navbar navbar-expand-md">
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
                        navigate(RoutesPath.aboutUs);
                      }}
                    >
                      About us
                    </div>
                  </li>
                  <li className="nav-item">
                    <div
                      className="nav-link"
                      data-bs-toggle="tab"
                      onClick={() => navigate(RoutesPath.contactUspage)}
                    >
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
        </>
      ) : (
        <>
          <div className="logoBg">
            <img src="../images/Napa_logo_white.svg" alt="whiteLogo" />
          </div>
          <div className="homeNavbar" style={{ zIndex: 999 }}>
            <div className="navbar navbar-expand-md">
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
              <div
                className="collapse navbar-collapse signout-navbar"
                id="myCollapse"
              >
                <ul className="nav">
                  <li className="nav-item">
                    <div
                      className="nav-link active"
                      data-bs-toggle="tab"
                      onClick={() => {
                        navigate(RoutesPath.home);
                      }}
                    >
                      Home
                    </div>
                  </li>
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
                    <div
                      className="nav-link"
                      data-bs-toggle="tab"
                      onClick={() => {
                        navigate(RoutesPath.contactUspage);
                      }}
                    >
                      Contact us
                    </div>
                  </li>
                </ul>
                <div className="boxBtn">
                  <Button
                    className="custom-outline-btn"
                    onClick={() => {
                      navigate(RoutesPath.login);
                    }}
                  >
                    Log in
                  </Button>
                  <Button
                    className="custom-outline-btn sign-btn"
                    onClick={() => {
                      navigate(RoutesPath.signUp);
                    }}
                  >
                    Sign up
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Navbar;
