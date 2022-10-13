import React, { useEffect } from "react";
import AOS from "aos";
import "./chat.scss";
import ModalCloseBtn from "../../modal-close-btn/modal-close-btn";
import ChatSidebar from "../chat-sidebar/chat-sidebar";
import ChatPage from "../chat-page/chat-page";

function Chat(props) {
  const { isModalOpened, closeModal } = props;

  const users = [
    {
      id: "1",
      name: "Michel Rodriges",
      text: "The company offers services to improve the efficiency of other companies.",
      date: "22:39",
      isSeem: false,
      isOnline: false,
    },
    {
      id: "2",
      name: "Michel Rodriges",
      text: "The company offers services to improve the efficiency of other companies.",
      date: "22:39",
      isSeem: false,
      isOnline: true,
    },
    {
      id: "3",
      name: "Michel Rodriges",
      text: "The company offers services to improve the efficiency of other companies.",
      date: "22:39",
      isSeem: false,
      isOnline: true,
    },
    {
      id: "4",
      name: "Michel Rodriges",
      text: "The company offers services to improve the efficiency of other companies.",
      date: "22:39",
      isSeem: false,
      isOnline: false,
    },
    {
      id: "5",
      name: "Michel Rodriges",
      text: "The company offers services to improve the efficiency of other companies.",
      date: "22:39",
      isSeem: true,
      isOnline: false,
    },
    {
      id: "6",
      name: "Michel Rodriges",
      text: "The company offers services to improve the efficiency of other companies.",
      date: "22:39",
      isSeem: false,
      isOnline: false,
    },
    {
      id: "7",
      name: "Michel Rodriges",
      text: "The company offers services to improve the efficiency of other companies.",
      date: "22:39",
      isSeem: false,
      isOnline: false,
    },
    {
      id: "8",
      name: "Michel Rodriges",
      text: "The company offers services to improve the efficiency of other companies.",
      date: "22:39",
      isSeem: false,
      isOnline: false,
    },
    {
      id: "9",
      name: "Michel Rodriges",
      text: "The company offers services to improve the efficiency of other companies.",
      date: "22:39",
      isSeem: false,
      isOnline: false,
    },
    {
      id: "10",
      name: "Michel Rodriges",
      text: "The company offers services to improve the efficiency of other companies.",
      date: "22:39",
      isSeem: false,
      isOnline: false,
    },
    {
      id: "11",
      name: "Michel Rodriges",
      text: "The company offers services to improve the efficiency of other companies.",
      date: "22:39",
      isSeem: false,
      isOnline: false,
    },
    {
      id: "12",
      name: "Michel Rodriges",
      text: "The company offers services to improve the efficiency of other companies.",
      date: "22:39",
      isSeem: false,
      isOnline: false,
    },
    {
      id: "13",
      name: "Michel Rodriges",
      text: "The company offers services to improve the efficiency of other companies.",
      date: "22:39",
      isSeem: false,
      isOnline: false,
    },
  ]

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
      <ChatSidebar users={users}/>
      <ChatPage user={users[0]}/>
    </div>
  );
}

export default Chat;
