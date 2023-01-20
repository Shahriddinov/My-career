import vfw from '../../img/videoForWork.svg';
import ma1 from '../../img/mobileApp1.png';
import ma2 from '../../img/mobileApp2.png';
import "./talent-modal-page.scss";
import userPic from "../../img/user-picture.png";
import starIcon from "../../img/star-icon.svg";
import editPortf from "../../img/editOnProfile.svg";
import TalentModalCard from '../talent-modal-cards/talent-modal-card'
import { useState } from "react";


function TalentModalPage() {

  const [isClicked, setClicked] = useState(1)

  function handleClick(evt) {
      const eventValue = evt.target.dataset.id;
      setClicked(eventValue);
  }


  return (
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
              <img src={vfw} width='100%'/> 
            </div>
            
      </div>


      <div className='talent-modal__portfolio'>
        <div className='talent-modal-main-title'>portfolio (14) </div>
        <div className='talent-modal__portfolio--box'>
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
  )
}

export default TalentModalPage;