import React, { useEffect } from "react";
import AOS from "aos";
import "./chat.scss";
import ModalCloseBtn from "../../modal-close-btn/modal-close-btn";
import ChatSidebar from "../chat-sidebar/chat-sidebar";

function Chat(props) {
  const { isModalOpened, closeModal } = props;

  function closeFunction() {
    closeModal(!isModalOpened);
  }
  useEffect(() => {
    AOS.init();
  });
  
  return (
    <div
      className="chat"
      data-aos="fade-right"
      data-aos-duration="350"
      data-aos-easing="ease-in-sine"
    >
      <ModalCloseBtn
        className="chat__close-btn"
        closeFunction={closeFunction}
      />
      <ChatSidebar/>
    </div>
  );
}

export default Chat;
