import star from '../images/star.svg';
import blueStar from '../images/blue-star.svg';
import dropDown from '../../img/drop-down.svg';
import verified from '../images/verificated.svg';
import userPicture from '../images/user-picture.jpg';
import { Rate } from 'antd';
import "antd/dist/antd.css"
import './talent-modal-card.scss'; 

function TalentModalCard() {



  return (
    <>

      
    <div className='talent-modal-card'>
      <h3 className='talent-modal-card__title'>Odoo 13.0 Implementation Support</h3>
      <div className='talent-modal-card__subtitles-wrapper'>
        <Rate allowHalf disabled defaultValue={4.5} />
        <span className='talent-modal-card__subtitles-time'>4:00</span>
        <p className='talent-modal-card__subtitles-date'>
          Aug 5, 2021 - Oct 21, 2021
        </p>
      </div>
      <div className='talent-modal-card__description'>
        <p>
          The company offers services to improve the efficiency of other
          companies. With the help of our highly qualified specialists and
          modern technologies, we integrate our knowledge and skills to increase
          efficiency.
        </p>
        <img src={dropDown} className='talent-modal-card__drop-down' width='20' height='11' />
      </div>
      <div className='talent-modal-card__user'>
        <img
          src={userPicture}
          className='talent-modal-card__user-picture'
          width='54'
          height='54'
          alt='user picture'
        />
        <div className='talent-modal-card__user-name--wrapper'>
          <h3 className='talent-modal-card__user-name'>Michel Rodriges</h3>
          <p className='talent-modal-card__user-subtext'>
            <img
              className='talent-modal-card__user-subtext--icon'
              src={verified}
              width='17'
              height='17'
              alt='user verificated'
            />
            Verified
          </p>
        </div>
        <div className='talent-modal-history__user-info'>
          <div className='talent-modal-history__user-info--wrapper'>
            <p className='talent-modal-history__user-info--title'>5$</p>
            <p className='talent-modal-history__user-info--subtitle'>Hourly</p>
          </div>
          <div className='talent-modal-history__user-info--wrapper'>
            <p className='talent-modal-history__user-info--title'>10</p>
            <p className='talent-modal-history__user-info--subtitle'>Hours</p>
          </div>
          <div className='talent-modal-history__user-info--wrapper'>
            <p className='talent-modal-history__user-info--title'>50$</p>
            <p className='talent-modal-history__user-info--subtitle'>Totally paid</p>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}

export default TalentModalCard;
