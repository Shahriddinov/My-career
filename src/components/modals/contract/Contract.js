import AOS from "aos";
import React, { useEffect, useState } from 'react'
import useStore from "../../../StoreZustand/StoreZustand";
import './Contract.scss'
import contractletter from '../../../img/contract-letter.png'
import contractphone from '../../../img/contract-phone.png'
import contractloc from '../../../img/contract-loc.png'
import closeIcon from '../../images/close-icon.svg';
import RoutesPath from "../../../routes/routes";
import { NavLink } from "react-router-dom";
function Contract(props) {
  const {contract,contractHendler ,ContractPassportHendler,ContractCartaHendler,ContractInnHendler,ContractInpsHendler,ContractBankHendler,ContractInnBankHendler,ContractTranzitHendler,ContractMfoHendler} = useStore()
  const { isModalOpened, closeModal } = props;

  function chatopen () {
    contractHendler(false)
    closeModal(!isModalOpened);
  }
  return (
    <div className="contract"
    data-aos="fade-right"
    data-aos-duration="350"
    data-aos-easing="ease-in-sine">
      <p className="contract__text">Contract</p>
      <div className="contract__employe">
        <p className="contract__employe-text">Employer</p>
        <div className="contract__employe-body">
          <div className="contract__employe-info">
              <img src="https://picsum.photos/id/48/318/184 " alt="company-user" />
              <div className="contract__employe-column">
                <h3>ООО “NAPA AUTOMOTIVE”</h3>
                <span>CEO</span>
                <p>Umid Abdusattarov</p>
              </div>
          </div>
          <div className="contract__employe-contacts">
              <div className="contract__employe-contact">
                <div className="contract__employe-df">
                  <img src={contractphone} alt="" />
                  <p>+998 90 005 00 34</p>
                </div>
                <div className="contract__employe-df">
                  <img src={contractletter} alt="" />
                  <p>user@name.com</p>
                </div>
              </div>
              <div className="contract__employe-df contract__employe-bottom">
                  <img src={contractloc} alt="" />
                  <p>17, Little Ring Road street, Tashkent, Uzbekistan</p>
              </div>
          </div>
        </div>
        <p className="contract__employe-subtext">The company offers services to improve the efficiency of other companies. With the help of our highly qualified specialists and modern technologies, we integrate our knowledge and skills to increase efficiency.
Sit lacinia feugiat commodo hac tristique. Non lobortis in eu a, mattis ullamcorper nullam. Facilisi ipsum mattis hac urna scelerisque nunc id. Aliquam nullam turpis magna placerat. Amet aliquam eget dignissim odio leo, in adipiscing. Aliquet mattis in tortor, eros.</p>
      </div>

      <div className="contract__employe">
        <p className="contract__employe-text">Employee</p>
        <div className="contract__employe-body">
          <div className="contract__employe-info">
              <img src="https://picsum.photos/id/55/318/184 " alt="company-user" />
              <div className="contract__employe-column">
                <h3>Michel Rodriges</h3>
                <p>Web-designer</p>
              </div>
          </div>
          <div className="contract__employe-contacts">
              <div className="contract__employe-contact">
                <div className="contract__employe-df">
                  <img src={contractphone} alt="" />
                  <p>+998 90 005 00 34</p>
                </div>
                <div className="contract__employe-df">
                  <img src={contractletter} alt="" />
                  <p>user@name.com</p>
                </div>
              </div>
              <div className="contract__employe-df contract__employe-bottom">
                  <img src={contractloc} alt="" />
                  <p>17, Little Ring Road street, Tashkent, Uzbekistan</p>
              </div>
          </div>
        </div>
        <p className="contract__employe-subtext">The company offers services to improve the efficiency of other companies. With the help of our highly qualified specialists and modern technologies, we integrate our knowledge and skills to increase efficiency.
Sit lacinia feugiat commodo hac tristique. Non lobortis in eu a, mattis ullamcorper nullam. Facilisi ipsum mattis hac urna scelerisque nunc id. Aliquam nullam turpis magna placerat. Amet aliquam eget dignissim odio leo, in adipiscing. Aliquet mattis in tortor, eros.</p>
      <div className="contract__employe-between">
        <div className="contract__employe-item">
          <span>Price</span>
          <p>$5 hourly</p>
        </div>
        <div className="contract__employe-item">
          <span>Level</span>
          <p>Middle</p>
        </div>
        <div className="contract__employe-item">
          <span>Skills</span>
          <p>Figma | Adobe Photoshop | Adobe Illustrator</p>
        </div>
       </div>
      </div>

      <div className="contract__employe">
        <p className="contract__employe-text">About job</p>
        <p className="contract__employe-card-text">Business Card Design</p>
        <p className="contract__employe-subtext">The company offers services to improve the efficiency of other companies. With the help of our highly qualified specialists and modern technologies, we integrate our knowledge and skills to increase efficiency.
          Sit lacinia feugiat commodo hac tristique. Non lobortis in eu a, mattis ullamcorper nullam. Facilisi ipsum mattis hac urna scelerisque nunc id. Aliquam nullam turpis magna placerat. Amet aliquam eget dignissim odio leo, in adipiscing. Aliquet mattis in tortor, eros.</p>
        <div className="contract__about-info">
          <div className="contract__about-item">
            <p>Price</p>
            <span>$60 by project</span>
          </div>
          <div className="contract__about-item">
            <p>Required level</p>
            <span>Middle</span>
          </div>
          <div className="contract__about-item">
            <p>Deadline</p>
            <span>3 days (22.10.2022-24.10.2022)</span>
          </div>
          <div className="contract__about-item">
            <p>Required skills</p>
            <span>Figma | Adobe Photoshop | Adobe Illustrator</span>
          </div>
        </div>
      </div>

      <div className="contract__form">
          <p className="contract__form-text">Реквизиты исполнителя</p>
          <div className="contract__form-content">
            <div className="contract__form-item">
              <span>Серия паспорта</span>
              <input type="number" placeholder="AA 00000" onChange={(e) => ContractPassportHendler(e.target.value)} />
            </div>
            <div className="contract__form-item">
              <span>Номер карты</span>
              <input type="number" placeholder="0000 0000 0000 0000" onChange={(e) => ContractCartaHendler(e.target.value)}/>
            </div>
            <div className="contract__form-item">
              <span>ИНН</span>
              <input type="number" placeholder="000 000 000" onChange={(e) => ContractInnHendler(e.target.value)}/>
            </div>
            <div className="contract__form-item">
              <span>ИНПС</span>
              <input type="number" placeholder="0000 0000 0000 00" onChange={(e) => ContractInpsHendler(e.target.value)} />
            </div>
            <div className="contract__form-item">
              <span>Наименование банка</span>
              <input type="text" placeholder="000 000 000" onChange={(e) => ContractBankHendler(e.target.value)}/>
            </div>
            <div className="contract__form-item">
              <span>ИНН банка</span>
              <input type="number" placeholder="000 000 000" onChange={(e) => ContractInnBankHendler(e.target.value)}/>
            </div>
            <div className="contract__form-item">
              <span>Транзит счёт</span>
              <input type="number" placeholder="000 000 000" onChange={(e) => ContractTranzitHendler(e.target.value)}/>
            </div>
            <div className="contract__form-item">
              <span>МФО</span>
              <input type="number" placeholder="00000" onChange={(e) => ContractMfoHendler(e.target.value)}/>
            </div>
          </div>
      </div>
      <p className="contract__text-bottoms">Убедитесь в правильности вышеуказанной информации. Нажимая "подписать" вы даёте своё согласие на заключение договора с данным работадателем.</p>
      <NavLink to={`/${RoutesPath.contract}`} className="contract__apply">Apply</NavLink>
      <button className="contract__close" onClick={chatopen}>
          <span className='contract__close-icon'>
            <img src={closeIcon} width='21' height='21' alt='close icon' />
          </span>
      </button>
    </div>
  )
}

export default Contract