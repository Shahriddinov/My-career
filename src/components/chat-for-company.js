import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import RoutesPath from "../routes/routes";
import { connect, useDispatch } from "react-redux";
import {
  HubConnectionBuilder,
  HttpTransportType,
  LogLevel,
} from "@microsoft/signalr";
import POST from "../API/POST";
import {
  addSize,
  displayCircle,
  homeCircleVisible,
  showResume,
} from "../actions/careerAction";

import { BaseUrl, token } from "../API/POST";

import { BiSearch } from "react-icons/bi";
import { MdClose, MdVerified } from "react-icons/md";
import { RiCheckDoubleFill, RiCheckFill } from "react-icons/ri";
import { ImAttachment } from "react-icons/im";
import { BsThreeDotsVertical } from "react-icons/bs";

import UserImg from "../img/user-umid-aka.png";
import UserImg2 from "../img/user-picture.png";
import UserImg3 from "../img/5.png";
import UserImg4 from "../img/6.png";

let access_token = "";

export function setAccessToken(value) {
  access_token = value;
}

export const connection = new HubConnectionBuilder()
  .withUrl("http://localhost:5000/chat", {
    accessTokenFactory: async () => {
      let access_token_local = JSON.parse(localStorage.getItem("token"));
      return access_token ? access_token : access_token_local;
    },
  })
  .build();

let startHub = localStorage.getItem("start");
if (startHub === "ok") {
  connection.start();
}

const ChatForCompany = (props) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { initialValue } = props;

  const [isRead, setRead] = useState(false);
  const [haveNewMessage, setHaveNewMessage] = useState(false);

  useEffect(() => {
    dispatch(displayCircle());
  }, []);

  useEffect(() => {
    setRead(true);
  }, []);

  useEffect(() => {
    setHaveNewMessage(true);
  }, []);

  let isOnline = true;
  let isVerified = true;

  const [receiveMessages, setReceiveMessages] = useState({ message: [] });
  const [sendMessages, setSendMessages] = useState([]);
  const [friends, setFriends] = useState([]);

  connection.on("RecieveMessage", (message) => {
    console.log("Received Message: ", message, connection.connectionId);
    setReceiveMessages({ message: [...receiveMessages.message, message] });
  });

  const searchUsers = () => {
    let searchInput = document.querySelector(".searchInput")?.value;
    let jsonResult = "";
    connection.stream("SearchUsers", searchInput).subscribe({
      next: (item) => {
        jsonResult += item;
      },
      complete: () => {
        setFriends(JSON.parse(jsonResult));
      },
      error: (err) => console.log(err),
    });
  };

  const sendMessage = () => {
    let text = document.querySelector(".send-message")?.value;
    let filePaths = ["hello"];

    if (text) {
      let message = [
        {
          message: {
            fromId: friends[0].Id,
            toId: friends[1].Id,
            text: text,
            hasLink: false,
            hasMedia: false,
            hasFile: false,
            chatId: 1,
          },
          filePaths: filePaths,
        },
      ];
      setSendMessages([...sendMessages, message]);
      console.log("Send messsages: ", sendMessages);
      connection.send("WriteMessage", sendMessages);
    } else {
      console.log("Empty message");
    }
    document.querySelector(".send-message").value = "";
  };

  return (
    <div className="chat-for-company" id="">
      <div
        onClick={() => {
          dispatch(displayCircle());
          dispatch(homeCircleVisible(0));
          navigate(RoutesPath.home);
        }}
        className="forPrev"
      >
        <MdClose />
      </div>

      <div className="friends-field">
        <div className="search-field">
          <div className="search-icon" onClick={searchUsers}>
            <BiSearch />
          </div>
          <input type="text" className="searchInput" placeholder="Search..." />
        </div>
        <div className="friends-list">
          {
            (console.log("Friends: ", friends),
            friends?.map((friend, item) => {
              return (
                <div className="one-friend" key={item}>
                  <div className="profil-img">
                    <img src={UserImg} />
                    {isOnline ? <div className="isOnline"></div> : null}
                  </div>
                  <div className="user-information">
                    <div className="user-name">
                      <h3>Umid Abdusattarov</h3>
                      {isVerified ? (
                        <div className="verified-icon">
                          <MdVerified />
                        </div>
                      ) : null}
                      <div className="last-time">22:30</div>
                    </div>
                    <div className="last-message">
                      <p>
                        The company offers services to improve the efficiency of
                        other companies. And projects getting ready as possible
                        as fast.
                      </p>
                      {((isRead, haveNewMessage) => {
                        if (!isRead) {
                          return <RiCheckDoubleFill />;
                        } else if (haveNewMessage) {
                          return <div className="isRead"></div>;
                        } else {
                          return <RiCheckFill />;
                        }
                      })(isRead, haveNewMessage)}
                    </div>
                  </div>
                </div>
              );
            }))
          }
        </div>
      </div>
      <div className="body-chats">
        <div className="chat-header">
          <div className="profil-img">
            <img src={UserImg} />
            {isOnline ? <div className="isOnline"></div> : null}
          </div>
          <div className="user-information">
            <div className="user-name">
              <div className="special-div">
                <h3>Xadicha Qurbonova</h3>
                <p>Online</p>
              </div>
              {isVerified ? (
                <div className="verified-icon">
                  <MdVerified />
                </div>
              ) : null}
            </div>
          </div>
          <div className="contract-btn">
            <button>Contract</button>
          </div>
          <div className="three-btns">
            <BsThreeDotsVertical />
          </div>
        </div>
        <div className="chat-box-left">
          <div className="chat-box">
            <div className="company-message-box">
              {
                (console.log("Send messages: ", sendMessages),
                sendMessages?.message?.map((message, index) => (
                  <div className="send-chat-message" key={index}>
                    <div className="chat-message-text">{message.text}</div>
                  </div>
                )))
              }
              {/* {receiveMessages?.map((message, index) => (
                <div className="receive-chat-message" key={index}>
                  <div className="chat-message-text">{message.text}</div>
                </div>
              ))} */}
            </div>
          </div>
          <div className="send-message-box">
            <div className="send-file-icon">
              <ImAttachment />
            </div>
            <div className="type-message">
              <input
                type="text"
                className="send-message"
                placeholder="Type message..."
              />
            </div>
            <div className="send-btn">
              <button onClick={sendMessage}>Send</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatForCompany;
