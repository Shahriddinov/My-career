import AOS from "aos";
import React, { useEffect, useState } from "react";
import "./ContractWiev.scss";
import contractWievletter from "../../img/contract-letter.png";
import contractWievphone from "../../img/contract-phone.png";
import contractWievloc from "../../img/contract-loc.png";
import closeIcon from "../images/close-icon.svg";
import useStore from "../../StoreZustand/StoreZustand";
function ContractWiev(props) {
  const {
    contractPassport,
    contractCarta,
    contractInn,
    contractInps,
    contractBank,
    contractInnBank,
    contractTranzit,
    contractMfo,
  } = useStore();
  return (
    <div className="contractWiev">
      <p className="contractWiev__text">Contract</p>
      <div className="contractWiev__employe">
        <p className="contractWiev__employe-text">Employer</p>
        <div className="contractWiev__employe-body">
          <div className="contractWiev__employe-info">
            <img
              src="https://picsum.photos/id/48/318/184 "
              alt="company-user"
            />
            <div className="contractWiev__employe-column">
              <h3>ООО “NAPA AUTOMOTIVE”</h3>
              <span>CEO</span>
              <p>Umid Abdusattarov</p>
            </div>
          </div>
          <div className="contractWiev__employe-contacts">
            <div className="contractWiev__employe-contact">
              <div className="contractWiev__employe-df">
                <img src={contractWievphone} alt="" />
                <p>+998 90 005 00 34</p>
              </div>
              <div className="contractWiev__employe-df">
                <img src={contractWievletter} alt="" />
                <p>user@name.com</p>
              </div>
            </div>
            <div className="contractWiev__employe-df contractWiev__employe-bottom">
              <img src={contractWievloc} alt="" />
              <p>17, Little Ring Road street, Tashkent, Uzbekistan</p>
            </div>
          </div>
        </div>
        <p className="contractWiev__employe-subtext">
          The company offers services to improve the efficiency of other
          companies. With the help of our highly qualified specialists and
          modern technologies, we integrate our knowledge and skills to increase
          efficiency. Sit lacinia feugiat commodo hac tristique. Non lobortis in
          eu a, mattis ullamcorper nullam. Facilisi ipsum mattis hac urna
          scelerisque nunc id. Aliquam nullam turpis magna placerat. Amet
          aliquam eget dignissim odio leo, in adipiscing. Aliquet mattis in
          tortor, eros.
        </p>
      </div>
      <div className="contractWiev__employe">
        <p className="contractWiev__employe-text">Employee</p>
        <div className="contractWiev__employe-body">
          <div className="contractWiev__employe-info">
            <img
              src="https://picsum.photos/id/55/318/184 "
              alt="company-user"
            />
            <div className="contractWiev__employe-column">
              <h3>Michel Rodriges</h3>
              <p>Web-designer</p>
            </div>
          </div>
          <div className="contractWiev__employe-contacts">
            <div className="contractWiev__employe-contact">
              <div className="contractWiev__employe-df">
                <img src={contractWievphone} alt="" />
                <p>+998 90 005 00 34</p>
              </div>
              <div className="contractWiev__employe-df">
                <img src={contractWievletter} alt="" />
                <p>user@name.com</p>
              </div>
            </div>
            <div className="contractWiev__employe-df contractWiev__employe-bottom">
              <img src={contractWievloc} alt="" />
              <p>17, Little Ring Road street, Tashkent, Uzbekistan</p>
            </div>
          </div>
        </div>
        <p className="contractWiev__employe-subtext">
          The company offers services to improve the efficiency of other
          companies. With the help of our highly qualified specialists and
          modern technologies, we integrate our knowledge and skills to increase
          efficiency. Sit lacinia feugiat commodo hac tristique. Non lobortis in
          eu a, mattis ullamcorper nullam. Facilisi ipsum mattis hac urna
          scelerisque nunc id. Aliquam nullam turpis magna placerat. Amet
          aliquam eget dignissim odio leo, in adipiscing. Aliquet mattis in
          tortor, eros.
        </p>
        <div className="contractWiev__employe-between">
          <div className="contractWiev__employe-item">
            <span>Price</span>
            <p>$5 hourly</p>
          </div>
          <div className="contractWiev__employe-item">
            <span>Level</span>
            <p>Middle</p>
          </div>
          <div className="contractWiev__employe-item">
            <span>Skills</span>
            <p>Figma | Adobe Photoshop | Adobe Illustrator</p>
          </div>
        </div>
      </div>
      <div className="contractWiev__employe">
        <p className="contractWiev__employe-text">About job</p>
        <p className="contractWiev__employe-card-text">Business Card Design</p>
        <p className="contractWiev__employe-subtext">
          The company offers services to improve the efficiency of other
          companies. With the help of our highly qualified specialists and
          modern technologies, we integrate our knowledge and skills to increase
          efficiency. Sit lacinia feugiat commodo hac tristique. Non lobortis in
          eu a, mattis ullamcorper nullam. Facilisi ipsum mattis hac urna
          scelerisque nunc id. Aliquam nullam turpis magna placerat. Amet
          aliquam eget dignissim odio leo, in adipiscing. Aliquet mattis in
          tortor, eros.
        </p>
        <div className="contractWiev__about-info">
          <div className="contractWiev__about-item">
            <p>Price</p>
            <span>$60 by project</span>
          </div>
          <div className="contractWiev__about-item">
            <p>Required level</p>
            <span>Middle</span>
          </div>
          <div className="contractWiev__about-item">
            <p>Deadline</p>
            <span>3 days (22.10.2022-24.10.2022)</span>
          </div>
          <div className="contractWiev__about-item">
            <p>Required skills</p>
            <span>Figma | Adobe Photoshop | Adobe Illustrator</span>
          </div>
        </div>
      </div>

      <div className="contractWiev__form">
        <p className="contractWiev__form-text">Реквизиты исполнителя</p>
        <div className="contractWiev__form-content">
          <div className="contractWiev__form-item">
            <p>Серия паспорта</p>
            <span>{contractPassport}</span>
          </div>
          <div className="contractWiev__form-item">
            <p>Номер карты</p>
            <span>{contractCarta}</span>
          </div>
          <div className="contractWiev__form-item">
            <p>ИНН</p>
            <span>{contractInn}</span>
          </div>
          <div className="contractWiev__form-item">
            <p>ИНПС</p>
            <span>{contractInps}</span>
          </div>
          <div className="contractWiev__form-item">
            <p>Наименование банка</p>
            <span>{contractBank}</span>
          </div>
          <div className="contractWiev__form-item">
            <p>ИНН банка</p>
            <span>{contractInnBank}</span>
          </div>
          <div className="contractWiev__form-item">
            <p>Транзит счёт</p>
            <span>{contractTranzit}</span>
          </div>
          <div className="contractWiev__form-item">
            <p>МФО</p>
            <span>{contractMfo}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContractWiev;
