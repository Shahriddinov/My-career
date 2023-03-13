import TalentModalPage from "../talent-modal-page/talent-modal-page";
import TalentModalSidebar from "../talent-modal-sidebar/talent-modal-sidebar";
import Navbar from "../navbar/navbar";

import "./talent-modal-page-view.scss";

function TalentModalPageView() {
  return (
    <div className="talent-modal__page-view">
      <div className="navbarHom">
        <Navbar />
      </div>
      <div className="talent-modal__page-view--wrapper">
        <TalentModalPage />
        <TalentModalSidebar isLinkNeed={false} />
      </div>
    </div>
  );
}

export default TalentModalPageView;
