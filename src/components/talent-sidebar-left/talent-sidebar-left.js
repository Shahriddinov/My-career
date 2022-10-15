import React, { useState } from 'react'
import './TalentSidebarLeft.scss'
import userPic from "../../img/user-picture.png";
import starIcon from "../../img/star-icon.svg";
import mcma1 from "../../img/mc_ma1.svg";
import mcma2 from "../../img/mc_ma2.svg";
import videoWork from "../../img/user-sidebar-video.svg";
import TalentSidebarCard from '../talent-sidebar-left-cards/talent-sidebar-left-cards';
import {useNavigate} from 'react-router-dom'

const TalentSidebarLeft = () => {

    const [isClicked, setClicked] = useState(1)

    function handleClick(evt) {
        const eventValue = evt.target.dataset.id;
        setClicked(eventValue);
    }
    
  return (

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
        <div className='talent-sidebar-seeMore'>See more</div>
    </div>
  )
}

export default TalentSidebarLeft;