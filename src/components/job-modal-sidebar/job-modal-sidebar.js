import userPic from '../images/user-img.jpg';
import verified from '../images/verificated.svg';
import emailIcon from '../images/email.svg';
import phoneIcon from '../images/phone.svg';
import locationIcon from '../images/location.svg';
import telegram from '../images/telegram.svg';
import whatsapp from '../images/whatsapp.svg';
import twitter from '../images/twitter.svg';
import instagram from '../images/instagramm.svg';
import facebook from '../images/facebook.svg';
import github from '../images/github.svg';
import "./job-modal-sidebar.scss";
import ModalLink from '../modal-link/modal-link';

function JobModalSidebar({isLinkNeed = true}) {
  return (
    <div className='job-modal__sidebar'>
      {
        isLinkNeed ? <ModalLink/> : null
      }
      <div className='job-modal__sidebar-user'>
        <div className='user__job-history'>
          <div className='user__job-history--wrapper stripe'>
            <p className='user__job-payment--number'>$5936</p>
            <p className='user__job-payment--text'>Totally paid</p>
          </div>
          <div className='user__job-history--wrapper'>
            <p className='user__job-payment--number'>324</p>
            <p className='user__job-payment--text'>Posted jobs</p>
          </div>
        </div>
        <div className='user__info'>
          <div className='user__image-wrapper'>
            <img
              className='user__img'
              src={userPic}
              width='90'
              height='90'
              alt='user image'
            />
            <img
              className='user__icon'
              src={verified}
              width='24'
              height='24'
              alt='user verificated'
            />
          </div>
          <div className='user__text-wrapper'>
            <a href="/jobAdvertisement" target='_blank'>
              <h2 className='user__name'>
                Umid
                <br /> Abdusattorov
              </h2>
            </a>
            <p className='user__job'>CEO</p>
            <a className='user__company-link' href='/' target='_blank'>
              Napa Automotive
            </a>
          </div>
        </div>
        <div className='user__contact'>
          <div className='user__contact--wrapper'>
            <img src={emailIcon} width='24' height='19' alt='email icon' />
            <p className='user__contact-email'>user@name.com</p>
          </div>
          <div className='user__contact--wrapper'>
            <img src={phoneIcon} width='24' height='24' alt='phone icon' />
            <p className='user__contact-number'>+998 90 005 00 34</p>
          </div>
          <div className='user__contact--wrapper'>
            <img
              src={locationIcon}
              width='20'
              height='25'
              alt='location icon'
            />
            <p className='user__contact-location'>
              17, Little Ring Road street, <br /> Tashkent, Uzbekistan
            </p>
          </div>
        </div>
        <div className='user__verification'>
          <h2 className='user__verification-title'>Verifications</h2>
          <div className='user__verification-wrapper'>
            <p>ID: Verified</p>
            <img
              src={verified}
              width='17'
              height='17'
              alt='user verificated'
            />
          </div>
        </div>
        <div className='user__company'>
          <h2 className='user__company-title'>About company</h2>
          <p className='user__company-text'>
            The company offers services to improve the efficiency of other
            companies. With the help of our highly qualified specialists and
            modern technologies, we integrate our knowledge and skills to
            increase efficiency. <br /><br /> Sit lacinia feugiat commodo hac tristique.
            Non lobortis in eu a, mattis ullamcorper nullam. Facilisi ipsum
            mattis hac urna scelerisque nunc id. Aliquam nullam turpis magna
            placerat. Amet aliquam eget dignissim odio leo, in adipiscing.
            Aliquet mattis in tortor, eros.
          </p>
        </div>
        <div className='user__employee'>
          <h2 className='user__employee-title'>The number of employees</h2>
          <p className='user__employee-count'>37</p>
        </div>
        <div className='user__website'>
          <h2 className='user__website-title'>Website links</h2>
          <a className='user__website-link' target="_blank">https://www.behance.net/mjuraev676ba95</a>
        </div>
        <div className='user__social-media'>
          <h2 className='user__social-media--title'>Social media</h2>
          <div className='user__social-media--links'>
            <a className='user__social-media--link'>
              <img src={telegram} className='user__social-media--icon' width='24' height='24' alt='social media link' />
              t.me/Murphy_design_2001
            </a>
            <a className='user__social-media--link'>
              <img src={whatsapp} className='user__social-media--icon' width='24' height='24' alt='social media link' />
              t.me/Murphy_design_2001
            </a>
            <a className='user__social-media--link'>
              <img src={facebook} className='user__social-media--icon' width='24' height='24' alt='social media link' />
              t.me/Murphy_design_2001
            </a>
            <a className='user__social-media--link'>
              <img src={github} className='user__social-media--icon' width='24' height='24' alt='social media link' />
              t.me/Murphy_design_2001
            </a>
            <a className='user__social-media--link'>
              <img src={instagram} className='user__social-media--icon' width='24' height='24' alt='social media link' />
              t.me/Murphy_design_2001
            </a>
            <a className='user__social-media--link'>
              <img src={twitter} className='user__social-media--icon' width='24' height='24' alt='social media link' />
              t.me/Murphy_design_2001
            </a>
          </div>
        </div>
        <div className='user__established'>
          <h2 className='user__established-title'>Established year</h2>
          <p className='user__established-text'>June 9, 2022</p>
        </div>
      </div>
    </div>
  )
}

export default JobModalSidebar;