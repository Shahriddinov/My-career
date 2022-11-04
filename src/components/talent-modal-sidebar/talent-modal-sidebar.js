import "./talent-modal-sidebar.scss";
import TalentModalLink from '../talent-modal-link/talent-modal-link';
import verified from '../images/verificated.svg';
import locationIcon from '../images/location.svg';

function TalentModalSidebar({isLinkNeed = true}) {
  return (
    <div className='talent-modal__sidebar'>
      {
        isLinkNeed ? <TalentModalLink/> : null
      }
      <div className='talent-modal__sidebar-user'>
        <div className='user__talent-history'>
          <div className='user__talent-history--wrapper stripe'>
            <p className='user__talent-payment--number'>$5936</p>
            <p className='user__talent-payment--text'>Totally paid</p>
          </div>
          <div className='user__talent-history--wrapper stripe'>
            <p className='user__talent-payment--number'>324</p>
            <p className='user__talent-payment--text'>Posted modals</p>
          </div>
          <div className='user__talent-history--wrapper'>
            <p className='user__talent-payment--number'>324</p>
            <p className='user__talent-payment--text'>Total hours</p>
          </div>
        </div>
      </div>

      <div className="talent-modal__sidebar-box">
          <div className="talent-modal__sidebar-box-title">Available</div>
          <p className="talent-modal__sidebar-box-subtitle">More than 40 hrs/week</p>
      </div>

      <div className="talent-modal__sidebar-box">
          <div className="talent-modal__sidebar-box-title">Verifications</div>
          <p className="talent-modal__sidebar-box-subtitle">ID: Verified <img src={verified}/></p>
      </div>

      <div className="talent-modal__sidebar-box">
          <div className="talent-modal__sidebar-box-title">Languages</div>
          <p className="talent-modal__sidebar-box-subtitle">English: C2 - Native speaker</p>
          <p className="talent-modal__sidebar-box-subtitle">Russian: B2 - Upper Intermediate</p>
      </div>

      <div className="talent-modal__sidebar-box">
          <div className="talent-modal__sidebar-box-title">Educations</div>
          <p className="talent-modal__sidebar-box-subtitle">
            Skans School of Accountancy Other, ACCA (Association of Chartered Certified Accountant) 
          </p>
          <span className="mstg">2012-2018</span>
          <p className="talent-modal__sidebar-box-subtitle">
            Aptech Computer Education Other, Software and Website Development (ASP.NET C#) 
          </p>
          <span className="mstg">2010-2011</span>
      </div>

      <div className="talent-modal__sidebar-box">
          <div className="talent-modal__sidebar-box-title">Experience</div>
          <p className="talent-modal__sidebar-box-subtitle">NAPA Automotive: UX UI Designer</p>
          <span className="mstg">March 2022 - Now</span>
      </div>

      <div className="talent-modal__sidebar-box">
          <div className="talent-modal__sidebar-box-title">Skills</div>
          <button className="talent-modal__sidebar-box-btn">figma</button>
          <button className="talent-modal__sidebar-box-btn">html</button>
          <button className="talent-modal__sidebar-box-btn">Adobe PhotoShop</button>
      </div>

      <div className="talent-modal__sidebar-box">
          <div className="talent-modal__sidebar-box-title">Living address</div>
          <span className="mstg"><img src={locationIcon}/> Tashkent, Uzbekistan</span>
      </div>

      <div className="talent-modal__sidebar-box">
          <div className="talent-modal__sidebar-box-title">Member since</div>
          <p className="talent-modal__sidebar-box-subtitle">June 9, 2022</p>
      </div>

    </div>
  )
}

export default TalentModalSidebar;