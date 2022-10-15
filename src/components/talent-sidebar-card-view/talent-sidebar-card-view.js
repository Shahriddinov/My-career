import React, {useState} from 'react'
import './talentSidebarCardView.scss'
import userPic from "../../img/user-picture.png";
import starIcon from "../../img/star-icon.svg";
import mcma1 from "../../img/mc_ma1.svg";
import mcma2 from "../../img/mc_ma2.svg";
import videoWork from "../../img/user-sidebar-video.svg";
import TalentSidebarCard from '../talent-sidebar-left-cards/talent-sidebar-left-cards';

const TalentSidebarCardView = () => {

    const [isClicked, setClicked] = useState(1)

    function handleClick(evt) {
        const eventValue = evt.target.dataset.id;
        setClicked(eventValue);
    }

  return (
    <div className='TalentSidebarCardView'>
          <div className='talent-sidebar-left-user-info'>
        <div className='talent-sidebar-left-header'>

            <img src={userPic} className='talent-sidebar-user-img'/>

            <div className='talent-sidebar-user-name'>
                <p>michel rodriguez </p> 
                <img src={starIcon} width="20" height="20"/>
                <span>Web-design UI/UX</span>
                <span>Middle</span>
            </div>

            <div className="talent-sidebar__job-success">
                <span className="talent-sidebar__job-percent">80%</span>
                <span className="talent-sidebar__job-percent--line">
                <span className="talent-sidebar__percent-line talent-sidebar__percent-line--80"></span>
                </span>
                <p className="talent-sidebar__job-text">Job Success</p>
            </div>

            <li className="stroke"></li>

            <div className="talent-sidebar__job-payment">
                <span className="talent-sidebar__job-payment--amount">5$</span>
                <span className="talent-sidebar__job-payment--text">Hourly</span>
            </div>

        </div>

        <div className='talent-sidebar-left-body'>

            <div className='talent-sidebar-user-about-text'>
                <p> I have been in the IT business for more than 11 years.</p>

                <p>
                    With over 5 years of experience in the ERP consultancy. I have deployed and delivered 30+ Odoo implementations in different types of businesses. I have implemented a mixture of Enterprise and Community versions according to the cost-benefit analysis of the business and which suits best for the business.
                </p>
            </div>

            <div className='talent-sidebar-user-video-work'>
                <img src={videoWork} width='100%'/>
            </div>
            <hr/>

            <div className='talent-sidebar-user-work-title'>portfolio (14)</div>

            <div className='talent-sidebar-user-portfolio'>

                <div className='talent-sidebar-user-portfolio-box'>

                    <img src={mcma1}/>
                    <p>Mobile app My Career</p>
                    <span>6 days ago</span>

                </div>

                <div className='talent-sidebar-user-portfolio-box'>

                    <img src={mcma2}/>
                    <p>Mobile app My Career</p>
                    <span>6 days ago</span>

                </div>

                <div className='talent-sidebar-user-portfolio-box'>

                    <img src={mcma2}/>
                    <p>Mobile app My Career</p>
                    <span>6 days ago</span>

                </div>

                <div className='talent-sidebar-user-portfolio-box'>

                    <img src={mcma1}/>
                    <p>Mobile app My Career</p>
                    <span>6 days ago</span>

                </div>

                <div className='talent-sidebar-user-portfolio-box'>

                    <img src={mcma1}/>
                    <p>Mobile app My Career</p>
                    <span>6 days ago</span>

                </div>

                <div className='talent-sidebar-user-portfolio-box'>

                    <img src={mcma2}/>
                    <p>Mobile app My Career</p>
                    <span>6 days ago</span>

                </div>
            </div>

            <hr/>

            <div className='talent-sidebar-user-work-title'>work history</div>

            <nav className="talent-sidebar-page__navbar">
                <ul className="talent-sidebar-page__navbar-list" onClick={handleClick}>
                    <li className="talent-sidebar-page__navbar-list--item" >
                        <span data-id="1">Completed (324)</span>
                        <span className={isClicked == 1 ? `talent-sidebar-list__item-stroke` : ""}></span>
                    </li>
                    <li className="talent-sidebar-page__navbar-list--item">
                        <span data-id="2">In progress (3)</span>
                        <span className={isClicked == 2 ? `talent-sidebar-list__item-stroke` : ""}></span>
                    </li>
                </ul>
                <span className="list__stroke"></span>
            </nav>

        </div>
        <hr/>
        <TalentSidebarCard/>
        <TalentSidebarCard/>
        <TalentSidebarCard/>
        
      </div>



    <div className='talent-sidebar-right__job-history'>

          <div className='talent-sidebar-right__job-history--wrapper stripe'>
            <p className='talent-sidebar-right__job-payment--number'>$5936</p>
            <p className='talent-sidebar-right__job-payment--text'>Total earnings</p>
          </div>

          <div className='talent-sidebar-right__job-history--wrapper stripe'>
            <p className='talent-sidebar-right__job-payment--number'>324</p>
            <p className='talent-sidebar-right__job-payment--text'>Total jobs</p>
          </div>

          <div className='talent-sidebar-right__job-history--wrapper'>
            <p className='talent-sidebar-right__job-payment--number'>1027</p>
            <p className='talent-sidebar-right__job-payment--text'>Total ours</p>
          </div>
    </div>

    <div className='talent-sidebar-right-text'>
            <p className='talent-sidebar-right-text-title'>
                Available
            </p>

            <p className='talent-sidebar-right-text-gray'>More than 40 hrs/week</p>
    </div>

    <div className='talent-sidebar-right-text'>
            <p className='talent-sidebar-right-text-title'>
                Verifications
            </p>

            <span className='talent-sidebar-right-text-gray'>ID: Verified</span> <img src={starIcon}/>
    </div>

    <div className='talent-sidebar-right-text'>
            <p className='talent-sidebar-right-text-title'>
                Languages
            </p>

            <p className='talent-sidebar-right-text-gray'>English: C2 - Native speaker</p>
            <p className='talent-sidebar-right-text-gray'>Russian: B2 - Upper Intermediate</p>
    </div>

    <div className='talent-sidebar-right-text'>
            <p className='talent-sidebar-right-text-title'>
                Educations
            </p>

            <p className='talent-sidebar-right-text-gray'>
                Skans School of Accountancy
                Other, ACCA (Association of Chartered Certified Accountant)
                2012-2018
            </p> 

            <p className='talent-sidebar-right-text-gray'>
                Aptech Computer Education
                Other, Software and Website Development (ASP.NET C#)
                2010-2011
            </p>
    </div>

    <div className='talent-sidebar-right-text'>
            <p className='talent-sidebar-right-text-title'>
                Experience
            </p>

            <p className='talent-sidebar-right-text-gray'> NAPA Automotive: UX UI Designer</p> 
            <p className='talent-sidebar-right-text-gray'>March 2022 - Now</p>
    </div>

    <div className='talent-sidebar-right-text'>
            <p className='talent-sidebar-right-text-title'>
                Skills
            </p>

            <button className='talent-sidebar-right-btn'>Figma</button>
            <button className='talent-sidebar-right-btn'>html</button>
            <button className='talent-sidebar-right-btn'>Adobe PhotoShop</button>
    </div>
    
    <div className='talent-sidebar-right-text'>
            <p className='talent-sidebar-right-text-title'>
                Living address
            </p>

            <p className='talent-sidebar-right-text-gray'>Tashkent, Uzbekistan</p>
    </div>

    <div className='talent-sidebar-right-text'>
            <p className='talent-sidebar-right-text-title'>
                Member since
            </p>

            <p className='talent-sidebar-right-text-gray'>June 9, 2022</p>
    </div>
    </div>
  )
}

export default TalentSidebarCardView;