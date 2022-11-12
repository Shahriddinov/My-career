import './talent-modal.scss';
import ModalCloseBtn from '../modal-close-btn/modal-close-btn';
import React, {useEffect} from "react";
import AOS from "aos";
import TalentModalPage from '../talent-modal-page/talent-modal-page'
import TalentModalSidebar from '../talent-modal-sidebar/talent-modal-sidebar';

function TalentModal(props) {
  const { isModalOpened, closeModal } = props;

  function closeFunction() {
    closeModal(!isModalOpened)
  }
    useEffect(() => {
        AOS.init()
    });

  return (
    <div className='talent-modal'
         data-aos="fade-left"
         data-aos-duration="350"
         data-aos-easing="ease-in-sine">
      <ModalCloseBtn className="job-modal__close-btn" closeFunction={closeFunction}/>

    <TalentModalPage/>
    <TalentModalSidebar/>

    </div>
  );
}

export default TalentModal;
