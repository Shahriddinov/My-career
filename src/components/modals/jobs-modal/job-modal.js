import './job-modal.scss';
import ModalCloseBtn from '../../modal-close-btn/modal-close-btn';
import JobModalPage from '../../job-modal-page/job-modal-page';
import JobModalSidebar from '../../job-modal-sidebar/job-modal-sidebar';
import React, {useEffect} from "react";
import AOS from "aos";


function JobModal(props) {
  const { isModalOpened, closeModal } = props;

  function closeFunction() {
    closeModal(!isModalOpened)
  }
    useEffect(() => {
        AOS.init()
    });

  return (
    <div className='job-modal'
         data-aos="fade-left"
         data-aos-duration="350"
         data-aos-easing="ease-in-sine">
      <ModalCloseBtn className="job-modal__close-btn" closeFunction={closeFunction}/>

      <JobModalPage/>
      <JobModalSidebar/>
    </div>
  );
}

export default JobModal;
