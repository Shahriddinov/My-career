import JobModalPage from "../job-modal-page/job-modal-page";
import JobModalSidebar from "../job-modal-sidebar/job-modal-sidebar";
import { useNavigate } from "react-router-dom";
import RoutesPath from "../../routes/routes";
import logoBlue from "../images/logo-blue.svg";
import dropDown from "../../img/drop-down.svg";
import userPic from "../../img/user-picture.png";
import UserSelector from "../user-selector/user-selector";
import "./job-modal-page-view.scss";

function JobModalPageView() {
  const navigate = useNavigate();

  return (
    <div className="job-modal__page-view">
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

            <div className="collapse navbar-collapse" id="myCollapse">
              <ul className="nav">
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
                <UserSelector userPicture={userPic} />
                <div className="logged-talents__language">
                  <span className="logged-talents__language-text">En</span>
                  <img src={dropDown} width="13" height="7" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="job-modal__page-view--wrapper">
        <JobModalPage />
        <JobModalSidebar isLinkNeed={false} />
      </div>
    </div>
  );
}

export default JobModalPageView;
