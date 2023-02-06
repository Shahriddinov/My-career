import JobCard from "../job-card/job-card";
import LoginCard from "../loginCard";
import "./jobs-view.scss";

function JobsView() {
  return (
    <div className="talantsContainer d-flex">
      <div className="input-group">
        <input
          type="text"
          className="form-control form-control0"
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
      <ul className="allCards1">
        <JobCard />
        <JobCard />
        <JobCard />
        <JobCard />
        <JobCard />
      </ul>
      <div className="jobLogin">
        <LoginCard />
      </div>
    </div>
  );
}

export default JobsView;
