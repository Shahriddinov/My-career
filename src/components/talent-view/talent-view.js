import LoginCard from "../loginCard";
import TalentCard from "../talent-card/talent-card";
import "./talent-view.scss";

function TalentView() {
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
      <div className="allCards1">
        <TalentCard />
        <TalentCard />
        <TalentCard />
        <TalentCard />
      </div>
      <div className="jobLogin">
        <LoginCard />
      </div>
    </div>
  );
}

export default TalentView;
