import React from "react";
import RoutesPath from "../../routes/routes";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "react-bootstrap";

function NewTalants(props) {
  const navigate = useNavigate();

  function handleClass() {
    let classes = document.getElementsByClassName("cardLikeBtn");

    if (classes.className === "cardLikeBtn") {
      classes.className = "cardLikeBtn1";
    } else {
      classes.className = "cardLikeBtn";
    }
  }

  return (
    <div>
      <div className="post-jop-wrapper" id="overflow-y-scroll">
        <div className={"navbarHom"}>
          <div className="logoBg">
            <img src="./images/Napa_logo_white.svg" alt="" />
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
                        navigate(RoutesPath.home);
                      }}
                    >
                      Home
                    </div>
                  </li>
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
                <div className="boxBtn">
                  <Button className="btnNone">
                    <select
                      onClick={() => {
                        navigate(RoutesPath.login);
                      }}
                      className="form-select custom-outline-btn accountBtnConfig col-6"
                      aria-label="Default select example"
                    >
                      <option value="1" className="accountBtnPersonalImage">
                        {" "}
                        Michel R
                      </option>
                      <option value="2">Michel B</option>
                      <option value="3">Michel C</option>
                    </select>
                  </Button>
                  <Button className="btnNone">
                    <select
                      onClick={() => {
                        navigate(RoutesPath.login);
                      }}
                      className="form-select custom-outline-btn accountBtnConfig1 col-6"
                      aria-label="Default select example"
                    >
                      <option value="1" className="accountBtnPersonalImage">
                        En
                      </option>
                      <option value="2">Ru</option>
                      <option value="3">Uz</option>
                    </select>
                  </Button>
                  <div className="accountBtnPointer"></div>
                  <div className="accountBtnPointer1"></div>
                  <div className="accountChoosePic"></div>
                </div>
                <div className="d-flex flex-row"></div>
              </div>
            </div>
          </div>
        </div>

        <div className="d-flex ourMainContainer">
          <div className="input-group forSearchBtn33">
            <input
              type="text"
              className="form-control"
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
          <div className="col-9 ourOptionsInJobs">
            <div className="bg-white p-3" style={{ borderRadius: "6px" }}>
              <div className="menu navOptionChange">
                <ul className="nav navOptionChange1">
                  <li className="nav-item">
                    <Link
                      className={`nav-link ${
                        props.history === RoutesPath.jop ? "active" : ""
                      }`}
                      to={RoutesPath.jop}
                    >
                      Best matches
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link
                      className={`nav-link ${
                        props.history === RoutesPath.newJops ? "active" : ""
                      }`}
                      to={RoutesPath.newJops}
                    >
                      Recent
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link
                      className={`nav-link ${
                        props.history === RoutesPath.savedJops ? "active" : ""
                      }`}
                      to={RoutesPath.savedJops}
                    >
                      Saved
                    </Link>
                  </li>
                </ul>
              </div>

              {props.children}
            </div>
          </div>
          <div className="allCards">
            <div className="personalCard22">
              <div className="d-flex">
                <div className="d-flex">
                  <div className="cardPic"></div>
                  <div className="cardUserName">Michel R</div>
                  <div className="cardTick"></div>
                  <div className="cardSphere">Web-desing UI/UX</div>
                </div>
                <div className="d-flex">
                  <div className="cardJobSuccess">
                    <div>80%</div>
                    <div className="cardRange"></div>
                    <div className="cardJob">Job Success</div>
                  </div>
                  <div className="cardHourly">
                    <div>5$</div> <div className="cardHourlyText">Hourly</div>
                  </div>
                  <div className="cardHourly cardJobs">
                    <div>324</div>{" "}
                    <div className="cardHourlyText">Completed Jobs</div>
                  </div>
                </div>
                <div className="cardLikeBtn" onClick={handleClass}></div>
              </div>
              <div className="cardText d-flex">
                Experienced designer required to make updates to website graphic
                assets and email banner. Files will be provided in Adobe
                illustrator and Photoshop PSD. Tasks as follows: ...{" "}
                <div className="cardPointer"></div>
              </div>
              <div className="d-flex">
                <div className="cardFigma text-center pt-2">Figma</div>
                <div className="cardFigma cardText1 text-center pt-2">html</div>
                <div className="cardFigma cardText2 text-center pt-2">
                  Adobe PhotoShop
                </div>
                <div className="cardLevel">
                  Level: <span className="cardLevel1">Middle</span>
                </div>
              </div>
              <div className="d-flex">
                <div className="cardYears">
                  3 years <span className="cardYears1">of experience</span>
                </div>
                <div className="cardLocation1"></div>
                <div className="cardLocation">Tashkent, Uzbekistan</div>
              </div>
            </div>
            <div className="personalCard personalCard11">
              <div className="d-flex">
                <div className="d-flex">
                  <div className="cardPic"></div>
                  <div className="cardUserName">Michel R</div>
                  <div className="cardTick"></div>
                  <div className="cardSphere">Web-desing UI/UX</div>
                </div>
                <div className="d-flex">
                  <div className="cardJobSuccess">
                    <div>80%</div>
                    <div className="cardRange"></div>
                    <div className="cardJob">Job Success</div>
                  </div>
                  <div className="cardHourly">
                    <div>5$</div> <div className="cardHourlyText">Hourly</div>
                  </div>
                  <div className="cardHourly cardJobs">
                    <div>324</div>{" "}
                    <div className="cardHourlyText">Completed Jobs</div>
                  </div>
                </div>
                <div className="cardLikeBtn" onClick={handleClass}></div>
              </div>
              <div className="cardText d-flex">
                Experienced designer required to make updates to website graphic
                assets and email banner. Files will be provided in Adobe
                illustrator and Photoshop PSD. Tasks as follows: ...{" "}
                <div className="cardPointer"></div>
              </div>
              <div className="d-flex">
                <div className="cardFigma text-center pt-2">Figma</div>
                <div className="cardFigma cardText1 text-center pt-2">html</div>
                <div className="cardFigma cardText2 text-center pt-2">
                  Adobe PhotoShop
                </div>
                <div className="cardLevel">
                  Level: <span className="cardLevel1">Middle</span>
                </div>
              </div>
              <div className="d-flex">
                <div className="cardYears">
                  3 years <span className="cardYears1">of experience</span>
                </div>
                <div className="cardLocation1"></div>
                <div className="cardLocation">Tashkent, Uzbekistan</div>
              </div>
            </div>
            <div className="personalCard personalCard44">
              <div className="d-flex">
                <div className="d-flex">
                  <div className="cardPic"></div>
                  <div className="cardUserName">Michel R</div>
                  <div className="cardTick"></div>
                  <div className="cardSphere">Web-desing UI/UX</div>
                </div>
                <div className="d-flex">
                  <div className="cardJobSuccess">
                    <div>80%</div>
                    <div className="cardRange"></div>
                    <div className="cardJob">Job Success</div>
                  </div>
                  <div className="cardHourly">
                    <div>5$</div> <div className="cardHourlyText">Hourly</div>
                  </div>
                  <div className="cardHourly cardJobs">
                    <div>324</div>{" "}
                    <div className="cardHourlyText">Completed Jobs</div>
                  </div>
                </div>
                <div className="cardLikeBtn" onClick={handleClass}></div>
              </div>
              <div className="cardText d-flex">
                Experienced designer required to make updates to website graphic
                assets and email banner. Files will be provided in Adobe
                illustrator and Photoshop PSD. Tasks as follows: ...{" "}
                <div className="cardPointer"></div>
              </div>
              <div className="d-flex">
                <div className="cardFigma text-center pt-2">Figma</div>
                <div className="cardFigma cardText1 text-center pt-2">html</div>
                <div className="cardFigma cardText2 text-center pt-2">
                  Adobe PhotoShop
                </div>
                <div className="cardLevel">
                  Level: <span className="cardLevel1">Middle</span>
                </div>
              </div>
              <div className="d-flex">
                <div className="cardYears">
                  3 years <span className="cardYears1">of experience</span>
                </div>
                <div className="cardLocation1"></div>
                <div className="cardLocation">Tashkent, Uzbekistan</div>
              </div>
            </div>
            <div className="personalCard personalCard55">
              <div className="d-flex">
                <div className="d-flex">
                  <div className="cardPic"></div>
                  <div className="cardUserName">Michel R</div>
                  <div className="cardTick"></div>
                  <div className="cardSphere">Web-desing UI/UX</div>
                </div>
                <div className="d-flex">
                  <div className="cardJobSuccess">
                    <div>80%</div>
                    <div className="cardRange"></div>
                    <div className="cardJob">Job Success</div>
                  </div>
                  <div className="cardHourly">
                    <div>5$</div> <div className="cardHourlyText">Hourly</div>
                  </div>
                  <div className="cardHourly cardJobs">
                    <div>324</div>{" "}
                    <div className="cardHourlyText">Completed Jobs</div>
                  </div>
                </div>
                <div className="cardLikeBtn" onClick={handleClass}></div>
              </div>
              <div className="cardText d-flex">
                Experienced designer required to make updates to website graphic
                assets and email banner. Files will be provided in Adobe
                illustrator and Photoshop PSD. Tasks as follows: ...{" "}
                <div className="cardPointer"></div>
              </div>
              <div className="d-flex">
                <div className="cardFigma text-center pt-2">Figma</div>
                <div className="cardFigma cardText1 text-center pt-2">html</div>
                <div className="cardFigma cardText2 text-center pt-2">
                  Adobe PhotoShop
                </div>
                <div className="cardLevel">
                  Level: <span className="cardLevel1">Middle</span>
                </div>
              </div>
              <div className="d-flex">
                <div className="cardYears">
                  3 years <span className="cardYears1">of experience</span>
                </div>
                <div className="cardLocation1"></div>
                <div className="cardLocation">Tashkent, Uzbekistan</div>
              </div>
            </div>

            <div className="filterBar col-12">
              <div className="filterTextMain">Filter</div>
              <div className="filterTextMain1">Payment amount</div>
              <div className="filterTextMain2">Form</div>
              <div className="filterTextMain3">to</div>
              <div className="d-flex flex-row ">
                <div className="col-6 inputSizing22 inputSizing33">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="10$"
                    aria-label="Name"
                  />
                </div>
                <div className="col-6  inputSizing22 inputSizing33">
                  <input
                    type="password"
                    className="form-control"
                    placeholder="20$"
                    aria-label="Name"
                  />
                </div>
              </div>
              <div className="filterTextMain1">Job success</div>
              <div className="d-flex flex-row ">
                <div className="col-6 inputSizing inputSizing34">
                  <input
                    type="text"
                    className="form-control inputFormLength"
                    placeholder="More than 80%"
                    aria-label="Name"
                  />
                </div>
              </div>
              <div className="filterTextMain1">Required level</div>
              <div className="filterTextMain2">Form</div>
              <div className="filterTextMain3">to</div>
              <div className="d-flex flex-row ">
                <select
                  className="form-select form-control col-6  inputSizing22 inputSizing33"
                  aria-label="Default select example"
                >
                  <option value="1">Junior</option>
                  <option value="2">Middle</option>
                  <option value="3">Senior</option>
                </select>
                <select
                  className="form-select form-control col-6  inputSizing22 inputSizing33"
                  aria-label="Default select example"
                >
                  <option value="1">Junior</option>
                  <option value="2">Middle</option>
                  <option value="3">Senior</option>
                </select>
              </div>
              <div className="form-check form-for-filter pt-4">
                <input className="checkboxMenu" type="checkbox" />
                <div className="checkboxText">Verified employee</div>
              </div>
              <div className="filterTextMain1 filterTextMain11">Region</div>
              <div className="d-flex flex-row ">
                <select
                  className="form-select form-control col-6  inputSizing inputSizing33 inputSizing12 inputSizing35"
                  aria-label="Default select example"
                >
                  <option value="1">Uzbekistan</option>
                  <option defaultValue value="2">
                    Russia
                  </option>
                  <option value="3">USA</option>
                </select>
              </div>
              <div className="filterTextMain1">Completed jobs (minimum)</div>
              <div className="d-flex flex-row ">
                <div className="col-6 inputSizing inputSizing34">
                  <input
                    type="text"
                    className="form-control inputFormLength"
                    placeholder="10"
                    aria-label="Name"
                  />
                </div>
              </div>
              <div className="filterTextMain1">Required skills</div>
              <div className="d-flex flex-row ">
                <div className="col-6 inputSizing inputSizing34">
                  <input
                    type="text"
                    className="form-control inputFormLength"
                    placeholder="Figma     html     AdobePhotoshop"
                    aria-label="Name"
                  />
                </div>
              </div>
              <div className="filterBtnApply">
                {" "}
                <div className="filterBtnApplyText text-center">
                  Apply filter
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="pattern99">
        <img src="./images/white-ell1.svg" alt="pattern" />
        <img src="./images/white-ell2.svg" alt="pattern" />
        <img src="./images/white-ell3.svg" alt="pattern" />
        <img src="./images/white-ell4.svg" alt="pattern" />
        <img src="./images/white-ell5.svg" alt="pattern" />
      </div>
    </div>
  );
}

export default NewTalants;
