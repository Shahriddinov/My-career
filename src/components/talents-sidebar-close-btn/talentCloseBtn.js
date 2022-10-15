import closeIcon from '../images/close-icon.svg';

function TalentCloseBtn({closeSidebar}) {
  return(
    <button
        onClick={closeSidebar}
      >
        <span className='job-modal__close-icon'>
          <img src={closeIcon} width='21' height='21' alt='close icon' />
        </span>
      </button>
  )
}

export default TalentCloseBtn