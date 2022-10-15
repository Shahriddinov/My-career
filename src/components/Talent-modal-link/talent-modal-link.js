import addPageIcon from "../images/add-page-icon.svg";
import "aos/dist/aos.css";


function TalentModalLink() {


  return (
    <div className="job-modal__sidebar-link--wrapper">
      <img src={addPageIcon} width="30" height="30" alt="add page icon" />
      <a
        className="job-modal__sidebar-link"
        href="/oneTalentView"
        target="_blanked"
      >
        Open In New Window
      </a>
    </div>
  );
}

export default TalentModalLink;
