import closeIcon from '../images/close-icon.svg';

function ModalCloseBtn({className, closeFunction}) {
  return(
    <button className={className} onClick={closeFunction}>
        <span className='job-modal__close-icon'>
          <img src={closeIcon} width='21' height='21' alt='close icon' />
        </span>
      </button>
  )
}

export default ModalCloseBtn