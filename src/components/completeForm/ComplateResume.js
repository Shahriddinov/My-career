import React from 'react'
import "./ffff.scss"
import Napabg from '../../img/Napabg.png'
import Napalogo from '../../img/White-logo-napa.svg'
import './ComplateResume.scss'
import userImg from '../../img/user_img.png'
import corPic1 from '../../img/corPic1.png'
import corPic2 from '../../img/corPic2.png'
import resumebg2 from '../../img/resumebg2.png'
import resume3bg2 from '../../img/resume3bg2.png'
import phone from '../../img/phone.svg'
import loc from '../../img/location.svg'
import letter from '../../img/letter.svg'
import backimg from '../../img/backimg.png'
import { NavLink } from 'react-router-dom'
import useStore from '../../StoreZustand/StoreZustand'
import res6_rght from '../../img/resume6right.png'

function ComplateResume({user, resumeActive,inputList}) {
  const {tags,hobs,FreelancFirstName, FreelancLastName, FreelancEmail, FreelancPhone, FreelancLivingAddress, FreelancRegion, FreelancStreet, FreelancPositions,FreelancDateOfBirth,FreelancSkills,FreelancHobbies,FreelancDeskYourself,FreelancLanguage,FreelancLanguageDegree,FreelancDescrobe,FreelancWebsite,FreelancDataList,FreelancDataListJob} = useStore()

  if (resumeActive === 1) {
    return (
      <>
        <div className='ComplateResume'>
          <div>
             <img src={Napabg} alt="" />
             <img className='ComplateResume__logo' src={Napalogo} alt="logo" />
          </div>
          <div className="talents-pattern ComplateResume__pattern">
              <img src="./images/white-ell1.svg" alt="pattern" />
              <img src="./images/white-ell2.svg" alt="pattern" />
              <img src="./images/white-ell3.svg" alt="pattern" />
              <img src="./images/white-ell4.svg" alt="pattern" />
              <img src="./images/white-ell5.svg" alt="pattern" />
          </div>
          <NavLink className="ComplateResume__back" to="/complete"><img src={backimg} alt="back" /></NavLink>
         <div className='resume2_1 resume-watch'>
        <div className='resume2_1-head'>
                <p className='resume2_1-head-name'>{FreelancFirstName} {FreelancLastName}</p>
                <p className='resume2_1-head-job'>{FreelancPositions}</p>
        </div>
        <div className='resume2_1-body'>
            <div className='resume2_1-left'>
                <div className='resume2_1-left-img'>
                    <img src={userImg}/>
                    <span>personal info</span>
                </div>
                <hr/>

                <div className='resume2_1-left-contacts'>
                    <div className='resume2_1-left-contacts__texts'>
                        <p className='resume2_1-left-contacts__text'>phone:</p>
                        <span>{FreelancPhone}</span>
                    </div>

                    <div className='resume2_1-left-contacts__texts'>
                        <p className='resume2_1-left-contacts__text'>email:</p>
                        <span>{FreelancEmail}</span>
                    </div>

                    <div className='resume2_1-left-contacts__texts'>
                        <p className='resume2_1-left-contacts__text'>skills</p>
                        {
                            tags.map((item,i) => {
                                return <span key={i}>{item}</span>
                            })
                        }
                    </div>

                    <div className='resume2_1-left-contacts__texts'>
                        <p className='resume2_1-left-contacts__text'>languages</p>
                        {
                            inputList.map((item,i) => {
                                return  <span key={i}>{item.language} - {item.level}</span>
                            }) 
                        }
                    </div>

                    <div className='resume2_1-left-contacts__texts'>
                        <p className='resume2_1-left-contacts__text'>Hobbies</p>
                        {
                            hobs.map((item,i) => {
                                return <span key={i}>{item}</span>
                            })
                        }
                    </div>

                    <div className='resume2_1-left-contacts__texts'>
                        <p className='resume2_1-left-contacts__text'>Work experience</p>
                        {
                            FreelancDataListJob.map((item,i) => {
                                return <span key={i+1}>{item.company}</span>
                            })
                        }
                    </div>
                    
                    <div className='resume2_1-left-contacts__texts'>
                        <p className='resume2_1-left-contacts__text'>Education</p>
                        {
                            FreelancDataList.map((item,i) => {
                                return <span key={i}>{item.school}</span>
                            })
                        }
                    </div>

                </div>
            </div>

            <div className='resume2_1-right'>
                <div className='resume2_1-right-head'>
                    <p>{FreelancDateOfBirth}</p>
                    <p>{FreelancFirstName} {FreelancLastName}</p>
                    <p>{FreelancPositions}</p>
                </div>

                <div className='resume2_1-right-body'>
                    <div className='resume2_1-right-body-text'> 
                        {FreelancDescrobe}
                    </div>
                </div>
            </div>
        </div>
    </div>
        </div>
      </>
    )
  }
  if (resumeActive === 2) {
    return (
      <>
        <div className='ComplateResume'>
          <div>
             <img src={Napabg} alt="" />
             <img className='ComplateResume__logo' src={Napalogo} alt="logo" />
          </div>
          <div className="talents-pattern ComplateResume__pattern">
              <img src="./images/white-ell1.svg" alt="pattern" />
              <img src="./images/white-ell2.svg" alt="pattern" />
              <img src="./images/white-ell3.svg" alt="pattern" />
              <img src="./images/white-ell4.svg" alt="pattern" />
              <img src="./images/white-ell5.svg" alt="pattern" />
          </div>

          <NavLink className="ComplateResume__back" to="/complete"><img src={backimg} alt="back" /></NavLink>
          <div className='resume2_2 resume-watch'>
        <div className='resume2_2-top'>
            <div className='resume2_2-top-left'>
                <div className='resume2_2-top-left-img'>
                    <img src={user.image}/>
                </div>
            </div>

            <div className='resume2_2-top-right'>
                <div className='resume2_2-top-right-fullname'>
                    <span className='top-right-fullname'>{FreelancFirstName}</span>
                    <br/>
                    <span className='top-right-fullname'>{FreelancLastName}</span>
                    <br/>
                    <span  className='top-right-job'>{FreelancPositions}</span>
                </div>

                <div className='resume2_2-top-right-contact'>
                    <div>
                        <span className='resume2_2-contact-title'>phone:</span>
                        <br/>
                        <span>{FreelancPhone}</span>
                    </div>

                    <div>
                        <span className='resume2_2-contact-title'>email:</span>
                        <br/>
                        <span>{FreelancEmail}</span>
                    </div>

                    <div>
                        <span className='resume2_2-contact-title'>adress:</span>
                        <br/>
                        <span>{FreelancLivingAddress} {FreelancRegion} {FreelancStreet}</span>
                    </div>
                </div>
            </div>
        </div>


        <div className='resume2_2-bottom'>
            <div className='resume2_2-bottom-left'>
                <div className='resume2_2-title'>education</div>
                 {
                      FreelancDataList.map((item,i) => {
                            return <div className='resume2_2-bottom-left-info'>
                            <p>{item.start.substring(0, 4)} - {item.end.substring(0, 4)}</p>
                            <p>{item.degree}</p>
                            <p>{item.school}</p>
                        </div>
                          })
                      }

                <div>
                    <div className='resume2_2-title'>hobbies</div>

                     <ul>
                          {
                            hobs.map((item,i) => {
                                return  <li key={i}>{item}</li>
                            })
                        }
                     </ul>
                </div>
            </div>

            <div className='resume2_2-bottom-right'>
                <div className='resume2_2-title'>experience</div>
                {
                      FreelancDataListJob.map((item,i) => {
                        return   <div className='resume2_2-bottom-right-card'>
                        <div className='bottom-card-left'>
                            <p>{item.start.substring(0, 4)} - {item.end.substring(0, 4)}</p>
                            <p>{item.company}</p>
                        </div>

                        <div className='bottom-card-right'>
                            <b>{item.job}</b>
                            <p>
                                {item.tagName}
                            </p>
                        </div>
                    </div>
                      })
                  }

                <div className='resume2_2-title'>skills</div>

                <div className='resume2__card-skills'>
                {
                    tags.map((item,i) => {
                        return <div className='resume2__card-skills-item'>{item} <div className='resume2__card-skills-dot'><span></span><span></span><span></span><span></span><span></span></div></div>
                    })
                }
                </div>
            </div>
        </div>

    </div>
        </div>
      </>
    )
  }
  if (resumeActive === 4) {
    return (
      <>
        <div className='ComplateResume'>
          <div>
             <img src={Napabg} alt="" />
             <img className='ComplateResume__logo' src={Napalogo} alt="logo" />
          </div>
          <div className="talents-pattern ComplateResume__pattern">
              <img src="./images/white-ell1.svg" alt="pattern" />
              <img src="./images/white-ell2.svg" alt="pattern" />
              <img src="./images/white-ell3.svg" alt="pattern" />
              <img src="./images/white-ell4.svg" alt="pattern" />
              <img src="./images/white-ell5.svg" alt="pattern" />
          </div>
        <NavLink className="ComplateResume__back" to="/complete"><img src={backimg} alt="back" /></NavLink>
        <div className='resume2_3 resume-watch'>
             <div className='resume2_3-left'>
             <div className='resume2_3-left-top'>
                 <img className='corPic1' src={corPic2}/>
                 <img className='corPic2' src={corPic1}/>
                 <img className='userPic' src={user.image}/>
             </div>
            <div className='resume2_3-left-bottom'>
                <div className='resume2_3-left-bottom-contacts'>
                <div> <span className='bottom-contacts-icon'> p </span> <span>{FreelancPhone}</span></div>
                <div> <span className='bottom-contacts-icon'> m </span> <span>{FreelancEmail}</span></div>
                <div> <span className='bottom-contacts-icon'> w </span> <span>{FreelancWebsite}</span></div>
                </div>
                 <div className='resume2_3-bottom-title title-bg-cl1'>education</div>
                 {
                    FreelancDataList.map((item,i) => {
                    return <div className='resume2_3-left-bottom-degree' key={i+1}>
                    <b>{item.degree}</b>
                    <br/>
                    <span>{item.school}</span>
                    <br/>
                    <span>{item.start.substring(0, 4)} - {item.end.substring(0, 4)}</span>
                </div>
                        })
                    }
                 <div className='resume2_3-bottom-title title-bg-cl1'>skills</div>

                <div className='resume2_3-left-bottom-skills'>
                {
                       tags.map((item,i) => {
                           return <div className='bottom-skills-item' key={i+1}> 
                           <p className='skills-text'>{item}</p> <p className='skills-level'> </p> 
                           </div>
                       })
                }
                </div>

                </div>
                </div>

                <div className='resume2_3-right'>
                <div className='resume2_3-right-top'>
                    <img className='right-top-img' src={resumebg2}/>
                    <div className='resume2_3-right-top-name'>{FreelancFirstName} {FreelancLastName}</div>

                    <div>
                        <div className='resume2_3-right-top-job'>{FreelancPositions}</div>
                        <div className='resume2_3-right-top-just'></div>
                        <img src={resume3bg2}/>

                    </div>
                </div>

                <div className='resume2_3-right-bottom'>
                    <div className='resume2_3-bottom-title title-bg-cl1'>profile</div>
                    <div className='resume2_3-right-bottom-profile'>             
                       
                    </div>
                    <div className='resume2_3-bottom-title title-bg-cl2'>work</div>
                     {
                        FreelancDataListJob.map((item,i) => {
                            return <div className='resume2_3-right-bottom-cd' key={i+1}>
                                <div className='bottom-cd-1'>
                                    <b>{item.job}</b> <span>{item.start.substring(0, 4)} - {item.end.substring(0, 4)}</span>
                                </div>
            
                                <div className='bottom-cd-2'>{item.company}</div>
            
                                <div className='bottom-cd-3'>
                                     {item.tagName}
                                </div>
                            </div>
                         })
                     }

                </div>
                </div>
            </div>
        </div>
      </>
    )
  }
  if (resumeActive === 3) {
    return (
      <>
        <div className='ComplateResume'>
          <div>
             <img src={Napabg} alt="" />
             <img className='ComplateResume__logo' src={Napalogo} alt="logo" />
          </div>
          <div className="talents-pattern ComplateResume__pattern">
              <img src="./images/white-ell1.svg" alt="pattern" />
              <img src="./images/white-ell2.svg" alt="pattern" />
              <img src="./images/white-ell3.svg" alt="pattern" />
              <img src="./images/white-ell4.svg" alt="pattern" />
              <img src="./images/white-ell5.svg" alt="pattern" />
          </div>
        <NavLink className="ComplateResume__back" to="/complete"><img src={backimg} alt="back" /></NavLink>
         <div className='resume4 resume-watch'>
            <div className='resume4-left'>
                <div className='resume4-left-user-pic'>
                    <img src={user.image} />
                </div>

                <div className='resume4-left-info'>
                    <div className='resume4_title-l r4lt'>education</div>
                    {
                            FreelancDataList.map((item,i) => {
                                return  <div className='resume4-left-info-class' key={i+1}>
                                <b>{item.degree}</b>
                                <br/>
                                <span>{item.school}</span>
                                <br/>
                                <span>{item.start.substring(0, 4)} - {item.end.substring(0, 4)}</span>
                            </div>
                                })
                            }
                </div>

                <div className='resume4-left-info'>
                    <div className='resume4_title-l r4lt'>reference</div>
                    {
                        FreelancDataListJob.map((item,i) => {
                        return <div className='resume4-left-info-class' key={i+1}>
                        <b>{item.job}</b>
                        <br/>
                        <span>{item.company}</span>
                        <br/>
                        <span>{item.start.substring(0, 4)} - {item.end.substring(0, 4)}</span>
                    </div>
                         })
                     }
                </div>
                
                
                <div className='resume4-left-contact'>

                    <div className='resume4-left-contact-title'>phone</div>
                    <p className='resume4-left-contact-text'>{FreelancPhone}</p>

                    <div className='resume4-left-contact-title'>email</div>
                    <p className='resume4-left-contact-text'>{FreelancEmail}</p>

                    <div className='resume4-left-contact-title'>website</div>
                    <p className='resume4-left-contact-text'>{FreelancWebsite}</p>

                    <div className='resume4-left-contact-title'>adsress</div>
                    <p className='resume4-left-contact-text'>{FreelancLivingAddress} {FreelancRegion} {FreelancStreet}</p>

                </div>

            </div>

            <div className='resume4-right'>
                <div className='resume4-right-name'>
                    <div className='resume4-right-user-name'> {FreelancFirstName} {FreelancLastName}</div>
                    <div className='resume4-right-user-title'>{FreelancPositions}</div>

                </div>

                <div className='resume4-all-about-user'>
                    <div className='resume4-right-user-about'>
                        <div className='resume4_title-l r4rt'>about me</div>

                        <div>
                            {FreelancDescrobe}
                        </div> 

                    </div> 


                    <div className='resume4-right-user-works'>
                        <div className='resume4_title-l r4rt'>work experience</div>
                        {
                         FreelancDataListJob.map((item,i) => {
                            return <div className='resume4-right-user-job' key={i+1}>
                            <div className='user-experience-year'>{item.start.substring(0, 4)} - {item.end.substring(0, 4)}</div>
                            <div>
                                <b>{item.job}</b>
                                <br/>
                                <span>{item.company}</span>
                                <p>
                                   {item.tagName}
                                </p>
                            </div>
                        </div>
                             })
                         }

                    </div>       

                    <div className='resume4_title-l r4rt'>software skill</div>
                    <div className='resume4-right-user-skill'>
                        <div className='resume4-skill-cl'>
                        {
                            tags.map((item,i) => {
                                return  <div key={i+1}>
                                <span>{item}</span>
                                <p className='resume4-skill-lvl'></p>
                            </div>  
                            })
                        }                     
                        </div>
                    </div>
                </div>

            </div>
        </div>
        </div>
      </>
    )
  }
  if (resumeActive === 5) {
    return (
      <>
        <div className='ComplateResume'>
          <div>
             <img src={Napabg} alt="" />
             <img className='ComplateResume__logo' src={Napalogo} alt="logo" />
          </div>
          <div className="talents-pattern ComplateResume__pattern">
              <img src="./images/white-ell1.svg" alt="pattern" />
              <img src="./images/white-ell2.svg" alt="pattern" />
              <img src="./images/white-ell3.svg" alt="pattern" />
              <img src="./images/white-ell4.svg" alt="pattern" />
              <img src="./images/white-ell5.svg" alt="pattern" />
          </div>
        <NavLink className="ComplateResume__back" to="/complete"><img src={backimg} alt="back" /></NavLink>
         <div className='resume2_5 resume-watch'>
            <div className='resume2_5__top-contents'>
                <div className='resume2_5-top-left'>
                    <div className='resume2_5-top-left-name'>
                        <span className='resume2_5-firstname'>{FreelancFirstName}</span>
                        <br/>
                        <span className='resume2_5-lastname'>{FreelancLastName}</span>
                        <p className='resume2_5-job'>{FreelancPositions}</p>
                    </div>
                </div>

                <div className='resume2_5-top-right'>
                    <div className='resume2_5-user-img'>
                        <img src={user.image}/>
                    </div>
                </div>
            </div>

            <div className='resume2_5-bottom'>
                <div className='resume2_5-bottom-left'>
                    <div className='resume2_5-bottom-left-wrapper'>
                        <div className='resume2_5-bottom-title res2_5_color1'>education</div>
                        <div className='resume2_5-bottom-text-div'>
                         {
                            FreelancDataList.map((item,i) => {
                                    return <div key={i+1}>
                                    <b>{item.degree}</b>
                                    <p>{item.school}</p>
                                    <span>{item.start.substring(0, 4)} - {item.end.substring(0, 4)}</span>
                                </div>
                                })
                            }
                        </div>

                        <div className='resume2_5-bottom-title res2_5_color1'>experience</div>
                        {
                            FreelancDataListJob.map((item,i) => {
                            return   <div className='resume2_5-bottom-text-div' key={i+1}>
                                <div className='resume2_5-bottom-text'>
                                    <b>{item.job}</b>
                                    <br/>
                                    <br/>
                                    <div>
                                        <span  className='resume2_5-year'>{item.start.substring(0, 4)} - {item.end.substring(0, 4)}</span> 
                                        <span>{item.company}</span>
                                    </div>
                                    <br />
                                    <p>
                                    {item.tagName}
                                    </p>
                                </div>
                            </div>
                            })
                        }

                        <div className='resume2_5-bottom-title res2_5_color1'>expertise</div>
                        <div className='resume2_5-bottom-circles'>
                            {
                                tags.map((item,i) => {
                                    return  <div className='resume2_5-bottom-circle' key={i+1}>
                                    <span>{item}</span>
                                </div>
                                })
                            }
                        </div>

                    </div>
                </div>

                <div className='resume2_5-bottom-right'>
                    <div className='resume2_5-bottom-right-wrapper'>

                        <div className='resume2_5-bottom-title res2_5_color2'>About me</div>
                        <div className='resume2_5-bottom-right-text'>
                            <p>
                            {FreelancDescrobe}
                            </p>
                        </div>

                        <div className='resume2_5-bottom-title res2_5_color2'>contacts</div>
                        <div className='resume2_5-bottom-right-contacts'>
                            <div>
                                <b>Phone:</b>
                                <p>{FreelancPhone}</p>
                            </div> 

                            <div>
                                <b>Email:</b>
                                <p>{FreelancEmail}</p>
                            </div>

                            <div>
                                <b>Area:</b>
                                <p>{FreelancWebsite}</p>
                            </div>
                        </div>


                        <div className='resume2_5-bottom-title res2_5_color2'>hobbies</div>
                        <div className='resume2_5-bottom-right-hobbies'>
                        {
                            hobs.map((item,i) => {
                                return <div key={i+1}>
                                <p>{item}</p>
                            </div>
                            })
                        }
                        </div>
                    </div>
                </div>
            
            </div>
        </div>
        </div>
      </>
    )
  }
  if (resumeActive === 6) {
    return (
      <>
        <div className='ComplateResume'>
          <div>
             <img src={Napabg} alt="" />
             <img className='ComplateResume__logo' src={Napalogo} alt="logo" />
          </div>
          <div className="talents-pattern ComplateResume__pattern">
              <img src="./images/white-ell1.svg" alt="pattern" />
              <img src="./images/white-ell2.svg" alt="pattern" />
              <img src="./images/white-ell3.svg" alt="pattern" />
              <img src="./images/white-ell4.svg" alt="pattern" />
              <img src="./images/white-ell5.svg" alt="pattern" />
          </div>
            <NavLink className="ComplateResume__back" to="/complete"><img src={backimg} alt="back" /></NavLink>
           <div className='resume2_6 resume-watch'>
        <div className='resume2_6-top'>
            <div className='resume2_6-top-left'>
                <div className='resume2_6-top-left-name'>
                    <p className='resume2_6-top-left-user-name'>{FreelancFirstName} {FreelancLastName}</p>
                    <p className='resume2_6-top-left-user-job'>{FreelancPositions}</p>
                </div>

                <div className='resume2_6-top-left-user-contact'>
                    <p> <img src={phone} /> {FreelancPhone}</p>
                    <p> <img src={letter} /> {FreelancEmail}</p>
                    <p> <img src={loc} /> {FreelancLivingAddress} {FreelancRegion} {FreelancStreet}</p>
                    <p> <img src={loc} />{FreelancWebsite}</p>
                </div>
            </div>

            <div className='resume2_6-top-right'>
                <img className='resume2_6-top-right-img' src={user.image} width={'100%'}/>
            </div>
        </div>

        <div className='resume2_6-bottom'>
            <div className='resume2_6-bottom-left'>
                <div className='resume2_6-bottom-title'>profile</div>
                <div className='resume2_6-bottom-left-text'>
                    <span>
                        {FreelancDescrobe}
                    </span>
                </div>

                <div className='resume2_6-bottom-title'>education</div>
                <div  className='resume2_6-bottom-left-text'>
                {
                      FreelancDataList.map((item,i) => {
                              return  <>
                                <div> <img src={res6_rght} className='resume2_6-bottom-right__img'/> <b>{item.school}</b> <span>{item.start.substring(0, 4)} - {item.end.substring(0, 4)}</span> </div>
                               <p>
                                 {item.degree}
                               </p>
                              </>
                          })
                      }
                </div>

                <div className='resume2_6-bottom-title'>language</div>
                <div  className='resume2_6-bottom-left-text'>
                    <div className='language-lvl'> 
                        <span>ENGLISH</span> 
                        <p className='resume2_6-cirlces'></p>
                        <p className='resume2_6-cirlces'></p>
                        <p className='resume2_6-cirlces'></p>
                        <p className='resume2_6-cirlces'></p>
                        <p className='resume2_6-cirlces'></p>
                        <p className='resume2_6-cirlces'></p>
                        <p className='resume2_6-cirlces'></p>
                     </div>
                    <div className='language-lvl'> 
                        <span>FRENCH</span> 
                        <p className='resume2_6-cirlces'></p> 
                        <p className='resume2_6-cirlces'></p>
                        <p className='resume2_6-cirlces'></p>
                    </div>
                    <div className='language-lvl'> 
                        <span>GERMAN</span> 
                        <p className='resume2_6-cirlces'></p>
                        <p className='resume2_6-cirlces'></p>
                        <p className='resume2_6-cirlces'></p>
                        <p className='resume2_6-cirlces'></p>
                        <p className='resume2_6-cirlces'></p>
                     </div>
                </div>
            </div>

            <div className='resume2_6-bottom-right'>
                <div className='resume2_6-bottom-title'>work experience</div>
                {
                 FreelancDataListJob.map((item,i) => {
                    return  <div  className='resume2_6-bottom-left-text' key={i+1}>
                    <div> 
                        <img src={res6_rght} className="resume2_6-bottom-right__img"/>
                        <b>{item.job}</b>
                        <b>{item.start.substring(0, 4)} - {item.end.substring(0, 4)}</b>
                        <p>{item.company}</p>
                    </div>
                    <div>
                          {item.tagName}
                    </div>
                </div>
                      })
                  }

                <div className='resume2_6-bottom-title'>skills</div>
                <div  className='resume2_6-bottom-left-text'>
                       {
                            tags.map((item,i) => {
                                return <div key={i+1}>
                                <b>{item}</b>
                            </div>
                            })
                        }
                     </div>
                </div>
              </div>
           </div>
        </div>
      </>
    )
  }
}

export default ComplateResume