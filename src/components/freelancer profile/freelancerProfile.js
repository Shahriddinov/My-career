import React,{useState, useRef} from 'react'
import editPortf from "../../img/editOnProfile.svg";
import editBtn from "../../img/editBtn.svg";
import './styleFrlProf.scss';
import starIcon from "../../img/star-icon.svg";
import ma1 from '../../img/mobileApp1.png';
import ma2 from '../../img/mobileApp2.png';
import g69 from '../../img/Group69.png';
import editt from '../../img/Group42139.png';
import deletee from '../../img/Group42140.png';

import { useNavigate } from "react-router-dom";
import RoutesPath from "../../routes/routes";
import logoBlue from "../images/logo-blue.svg";
import dropDown from "../../img/drop-down.svg";
import userPic from "../../img/user-picture.png";
import UserSelector from "../user-selector/user-selector";
import TalentModalCard from '../talent-modal-cards/talent-modal-card'
import AddProjectModal from './addProjectModal';
import EditPersonalInfo from './editPersonalInfo';

import verified from '../images/verificated.svg';
import locationIcon from '../images/location.svg';

const FreelancerProfile = () => {
  const [isClicked, setClicked] = useState(1)
  const [buttonEd, setButtonEd] = useState(false)
  const [modal, setModal] = useState(false);
  const [editInfo, setEditInfo] = useState(false);
 
  const toggle = () => {
      setModal(!modal)
  };

  const toggle2=()=>{
    setEditInfo(!editInfo)
  };

  function handleClick(evt) {
      const eventValue = evt.target.dataset.id;
      setClicked(eventValue);
  }
  const navigate = useNavigate();
  const editRef = useRef();

  // window.onclick = function(){
  //   if(buttonEd==true){
  //     setButtonEd(false)
  //   }
  // }
  function showEdits(){
    setButtonEd(!buttonEd)
    if(buttonEd==false){
      editRef.current.style.display = 'none'
    }else{
      editRef.current.style.display = 'block'
    }
  }

  return (
    <div className='talent-modal__page-view'>

        <div className="navbar-home">
        <div className="logos-wrapper">
          <img src={logoBlue} alt="white logo" width="360" height="94" onClick={()=>navigate(RoutesPath.home)}/>
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

      <div className="talent-modal__page-view--wrapper">
        
      <div className='talent-modal__page'>
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
              <span className="talent-modal__user-name">Michel Rodrigues</span>
              <img
                className="talent-modal__user-star"
                src={starIcon}
                width="17"
                height="17"
                alt="star icon"
              />
            </p>
            <span className="talent-modal__user-subtitle">Web-design UI/UX</span>
            <span className="talent-modal__user-subtitle">Middle</span>
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

          <div>
            <img src={editBtn} alt='' onClick={toggle2}/>
          </div>
        </div>
      </div>

      <div className='talent-modal__post'>
            <div className='talent-modal__post--text'>
              <p>I have been in the IT business for more than 11 years.</p>

              <p>
                  With over 5 years of experience in the ERP consultancy. I have deployed and delivered 30+ Odoo implementations in different types of businesses. I have implemented a mixture of Enterprise and Community versions according to the cost-benefit analysis of the business and which suits best for the business.
              </p>
            </div>

            <div className='talent-modal__post--video'>
              <button>See public view</button> 
            </div>
            
      </div>


      <div className='talent-modal__portfolio'>
        <div className='talent-modal-main-title'>portfolio (14) <img src={editPortf} alt='' onClick={toggle}/></div>
        <div className='talent-modal__portfolio--box'>
            <div className='talent-modal__portfolio--box-card'>
                  <div className='portfolio--box-card-img'>
                      <img src={ma1}/>
                  </div>

                  <div className='portfolio--box-card-text'>
                      <p>Mobile app My Career <img src={g69} style={{marginLeft:"80px",cursor:'pointer'}} onClick={showEdits}/></p>
                      <span>6 days ago</span>
                  </div>
                  <div className='group69' ref={editRef}>
                    <div className='editDiv'> <img src={editt}/> Edit</div>
                    <div className='editDiv'><img src={deletee} width='27px'/>Delete</div>
                  </div>
            </div>

            <div className='talent-modal__portfolio--box-card'>
                  <div className='portfolio--box-card-img'>
                      <img src={ma2}/>
                  </div>

                  <div className='portfolio--box-card-text'>
                      <p>Mobile app My Career</p>
                      <span>6 days ago</span>
                  </div>
            </div>

            <div className='talent-modal__portfolio--box-card'>
                  <div className='portfolio--box-card-img'>
                      <img src={ma2}/>
                  </div>

                  <div className='portfolio--box-card-text'>
                      <p>Mobile app OnCloud</p>
                      <span>6 days ago</span>
                  </div>
            </div>

            <div className='talent-modal__portfolio--box-card'>
                  <div className='portfolio--box-card-img'>
                      <img src={ma1}/>
                  </div>

                  <div className='portfolio--box-card-text'>
                      <p>Mobile app My Career</p>
                      <span>6 days ago</span>
                  </div>
            </div>

            <div className='talent-modal__portfolio--box-card'>
                  <div className='portfolio--box-card-img'>
                      <img src={ma1}/>
                  </div>

                  <div className='portfolio--box-card-text'>
                      <p>Mobile app My Career</p>
                      <span>6 days ago</span>
                  </div>
            </div>

            <div className='talent-modal__portfolio--box-card'>
                  <div className='portfolio--box-card-img'>
                      <img src={ma2}/>
                  </div>

                  <div className='portfolio--box-card-text'>
                      <p>Mobile app OnCloud</p>
                      <span>6 days ago</span>
                  </div>
            </div>

            <div className='talent-modal__portfolio--box-card'>
                  <div className='portfolio--box-card-img'>
                      <img src={ma2}/>
                  </div>

                  <div className='portfolio--box-card-text'>
                      <p>Mobile app OnCloud</p>
                      <span>6 days ago</span>
                  </div>
            </div>

            <div className='talent-modal__portfolio--box-card'>
                  <div className='portfolio--box-card-img'>
                      <img src={ma1}/>
                  </div>

                  <div className='portfolio--box-card-text'>
                      <p>Mobile app My Career</p>
                      <span>6 days ago</span>
                  </div>
            </div>
        </div>
      </div>
      <div className='talent-modal-main-title'>work history</div>

      <nav className="tm__navbar">
          <ul className="tm__navbar-list" onClick={handleClick}>
              <li className="tm__navbar-list--item" >
                  <span data-id="1">Completed (324)</span>
                  <span className={isClicked == 1 ? `list__item-stroke` : ""}></span>
              </li>
              <li className="tm__navbar-list--item">
                  <span data-id="2">In progress (3)</span>
                  <span className={isClicked == 2 ? `list__item-stroke` : ""}></span>
              </li>
          </ul>
          <span className="list__stroke"></span>
      </nav>

    <TalentModalCard/>
    <TalentModalCard/>
    <TalentModalCard/>
    <TalentModalCard/>

    <div className='btn_see-more'>
      <button >See more...</button>

    </div>
    </div>


    <div className='talent-modal__sidebar'>

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
      </div>
      <AddProjectModal toggle={toggle} modal={modal}/>
      <EditPersonalInfo toggle2={toggle2} editInfo={editInfo}/>
    </div>

  )
}

export default FreelancerProfile;