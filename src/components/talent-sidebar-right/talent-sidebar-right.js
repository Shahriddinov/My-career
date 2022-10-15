import React from 'react'
import './TalentSidebarRight.scss'
import starIcon from "../../img/star-icon.svg";
import TalentModalLink from '../Talent-modal-link/talent-modal-link';

function TalentSidebarRight  (props) {
    const {newTabBtn = true} = props
  return (

  <div className='talent-sidebar-new-right'>
      {
        newTabBtn ? <TalentModalLink/> : null
      }

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

export default TalentSidebarRight