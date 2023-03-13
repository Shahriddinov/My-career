import JobModalPage from "../job-modal-page/job-modal-page";
import JobModalSidebar from "../job-modal-sidebar/job-modal-sidebar";
import Navbar from "../navbar/navbar";
import "./job-modal-page-view.scss";

function JobModalPageView() {
  return (
    <div className="job-modal__page-view">
      <div className="navbarHom">
        <Navbar />
      </div>

      <div className="job-modal__page-view--wrapper">
        <JobModalPage />
        <JobModalSidebar isLinkNeed={false} />
      </div>
    </div>
  );
}

export default JobModalPageView;
