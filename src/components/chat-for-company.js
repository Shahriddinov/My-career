import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import RoutesPath from "../routes/routes";
import { connect, useDispatch } from "react-redux";
import {
  addSize,
  displayCircle,
  homeCircleVisible,
  showResume,
} from "../actions/careerAction";

import { BiSearch } from "react-icons/bi";
import { MdClose, MdVerified } from "react-icons/md";
import { RiCheckDoubleFill, RiCheckFill } from "react-icons/ri";
import { ImAttachment } from "react-icons/im";
import { BsThreeDotsVertical } from "react-icons/bs";

import UserImg from "../img/user-umid-aka.png";
import UserImg2 from "../img/user-picture.png";
import UserImg3 from "../img/5.png";
import UserImg4 from "../img/6.png";

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
          <div className="search-icon">
            <BiSearch />
          </div>
          <input type="text" placeholder="Search..." />
        </div>
        <div className="friends-list">
          <div className="one-friend">
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
                  The company offers services to improve the efficiency of other
                  companies. And projects getting ready as possible as fast.
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
          <div className="one-friend">
            <div className="profil-img">
              <img src={UserImg2} />
              {!isOnline ? <div className="isOnline"></div> : null}
            </div>
            <div className="user-information">
              <div className="user-name">
                <h3>Rayhona Olimova</h3>
                {!isVerified ? (
                  <div className="verified-icon">
                    <MdVerified />
                  </div>
                ) : null}
                <div className="last-time">22:30</div>
              </div>
              <div className="last-message">
                <p>
                  The company offers services to improve the efficiency of other
                  companies. And projects getting ready as possible as fast.
                </p>
                {isRead ? <RiCheckDoubleFill /> : <RiCheckFill />}
              </div>
            </div>
          </div>
          <div className="one-friend">
            <div className="profil-img">
              <img src={UserImg3} />
              {isOnline ? <div className="isOnline"></div> : null}
            </div>
            <div className="user-information">
              <div className="user-name">
                <h3>Nodira Qodirova</h3>
                {isVerified ? (
                  <div className="verified-icon">
                    <MdVerified />
                  </div>
                ) : null}
                <div className="last-time">22:30</div>
              </div>
              <div className="last-message">
                <p>
                  The company offers services to improve the efficiency of other
                  companies. And projects getting ready as possible as fast.
                </p>
                {isRead ? <RiCheckDoubleFill /> : <RiCheckFill />}
              </div>
            </div>
          </div>
          <div className="one-friend">
            <div className="profil-img">
              <img src={UserImg4} />
              {!isOnline ? <div className="isOnline"></div> : null}
            </div>
            <div className="user-information">
              <div className="user-name">
                <h3>Xadicha Qurbonova</h3>
                {!isVerified ? (
                  <div className="verified-icon">
                    <MdVerified />
                  </div>
                ) : null}
                <div className="last-time">22:30</div>
              </div>
              <div className="last-message">
                <p>
                  The company offers services to improve the efficiency of other
                  companies. And projects getting ready as possible as fast.
                </p>
                {!isRead ? <RiCheckDoubleFill /> : <RiCheckFill />}
              </div>
            </div>
          </div>
          <div className="one-friend">
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
                  The company offers services to improve the efficiency of other
                  companies. And projects getting ready as possible as fast.
                </p>
                {!isRead ? <RiCheckDoubleFill /> : <RiCheckFill />}
              </div>
            </div>
          </div>
          <div className="one-friend">
            <div className="profil-img">
              <img src={UserImg2} />
              {!isOnline ? <div className="isOnline"></div> : null}
            </div>
            <div className="user-information">
              <div className="user-name">
                <h3>Rayhona Olimova</h3>
                {!isVerified ? (
                  <div className="verified-icon">
                    <MdVerified />
                  </div>
                ) : null}
                <div className="last-time">22:30</div>
              </div>
              <div className="last-message">
                <p>
                  The company offers services to improve the efficiency of other
                  companies. And projects getting ready as possible as fast.
                </p>
                {isRead ? <RiCheckDoubleFill /> : <RiCheckFill />}
              </div>
            </div>
          </div>
          <div className="one-friend">
            <div className="profil-img">
              <img src={UserImg3} />
              {isOnline ? <div className="isOnline"></div> : null}
            </div>
            <div className="user-information">
              <div className="user-name">
                <h3>Nodira Qodirova</h3>
                {isVerified ? (
                  <div className="verified-icon">
                    <MdVerified />
                  </div>
                ) : null}
                <div className="last-time">22:30</div>
              </div>
              <div className="last-message">
                <p>
                  The company offers services to improve the efficiency of other
                  companies. And projects getting ready as possible as fast.
                </p>
                {isRead ? <RiCheckDoubleFill /> : <RiCheckFill />}
              </div>
            </div>
          </div>
          <div className="one-friend">
            <div className="profil-img">
              <img src={UserImg4} />
              {!isOnline ? <div className="isOnline"></div> : null}
            </div>
            <div className="user-information">
              <div className="user-name">
                <h3>Xadicha Qurbonova</h3>
                {!isVerified ? (
                  <div className="verified-icon">
                    <MdVerified />
                  </div>
                ) : null}
                <div className="last-time">22:30</div>
              </div>
              <div className="last-message">
                <p>
                  The company offers services to improve the efficiency of other
                  companies. And projects getting ready as possible as fast.
                </p>
                {!isRead ? <RiCheckDoubleFill /> : <RiCheckFill />}
              </div>
            </div>
          </div>
          <div className="one-friend">
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
                  The company offers services to improve the efficiency of other
                  companies. And projects getting ready as possible as fast.
                </p>
                {!isRead ? <RiCheckDoubleFill /> : <RiCheckFill />}
              </div>
            </div>
          </div>
          <div className="one-friend">
            <div className="profil-img">
              <img src={UserImg2} />
              {!isOnline ? <div className="isOnline"></div> : null}
            </div>
            <div className="user-information">
              <div className="user-name">
                <h3>Rayhona Olimova</h3>
                {!isVerified ? (
                  <div className="verified-icon">
                    <MdVerified />
                  </div>
                ) : null}
                <div className="last-time">22:30</div>
              </div>
              <div className="last-message">
                <p>
                  The company offers services to improve the efficiency of other
                  companies. And projects getting ready as possible as fast.
                </p>
                {isRead ? <RiCheckDoubleFill /> : <RiCheckFill />}
              </div>
            </div>
          </div>
          <div className="one-friend">
            <div className="profil-img">
              <img src={UserImg3} />
              {isOnline ? <div className="isOnline"></div> : null}
            </div>
            <div className="user-information">
              <div className="user-name">
                <h3>Nodira Qodirova</h3>
                {isVerified ? (
                  <div className="verified-icon">
                    <MdVerified />
                  </div>
                ) : null}
                <div className="last-time">22:30</div>
              </div>
              <div className="last-message">
                <p>
                  The company offers services to improve the efficiency of other
                  companies. And projects getting ready as possible as fast.
                </p>
                {isRead ? <RiCheckDoubleFill /> : <RiCheckFill />}
              </div>
            </div>
          </div>
          <div className="one-friend">
            <div className="profil-img">
              <img src={UserImg4} />
              {!isOnline ? <div className="isOnline"></div> : null}
            </div>
            <div className="user-information">
              <div className="user-name">
                <h3>Xadicha Qurbonova</h3>
                {!isVerified ? (
                  <div className="verified-icon">
                    <MdVerified />
                  </div>
                ) : null}
                <div className="last-time">22:30</div>
              </div>
              <div className="last-message">
                <p>
                  The company offers services to improve the efficiency of other
                  companies. And projects getting ready as possible as fast.
                </p>
                {!isRead ? <RiCheckDoubleFill /> : <RiCheckFill />}
              </div>
            </div>
          </div>
          <div className="one-friend">
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
                  The company offers services to improve the efficiency of other
                  companies. And projects getting ready as possible as fast.
                </p>
                {!isRead ? <RiCheckDoubleFill /> : <RiCheckFill />}
              </div>
            </div>
          </div>
          <div className="one-friend">
            <div className="profil-img">
              <img src={UserImg2} />
              {!isOnline ? <div className="isOnline"></div> : null}
            </div>
            <div className="user-information">
              <div className="user-name">
                <h3>Rayhona Olimova</h3>
                {!isVerified ? (
                  <div className="verified-icon">
                    <MdVerified />
                  </div>
                ) : null}
                <div className="last-time">22:30</div>
              </div>
              <div className="last-message">
                <p>
                  The company offers services to improve the efficiency of other
                  companies. And projects getting ready as possible as fast.
                </p>
                {isRead ? <RiCheckDoubleFill /> : <RiCheckFill />}
              </div>
            </div>
          </div>
          <div className="one-friend">
            <div className="profil-img">
              <img src={UserImg3} />
              {isOnline ? <div className="isOnline"></div> : null}
            </div>
            <div className="user-information">
              <div className="user-name">
                <h3>Nodira Qodirova</h3>
                {isVerified ? (
                  <div className="verified-icon">
                    <MdVerified />
                  </div>
                ) : null}
                <div className="last-time">22:30</div>
              </div>
              <div className="last-message">
                <p>
                  The company offers services to improve the efficiency of other
                  companies. And projects getting ready as possible as fast.
                </p>
                {isRead ? <RiCheckDoubleFill /> : <RiCheckFill />}
              </div>
            </div>
          </div>
          <div className="one-friend">
            <div className="profil-img">
              <img src={UserImg4} />
              {!isOnline ? <div className="isOnline"></div> : null}
            </div>
            <div className="user-information">
              <div className="user-name">
                <h3>Xadicha Qurbonova</h3>
                {!isVerified ? (
                  <div className="verified-icon">
                    <MdVerified />
                  </div>
                ) : null}
                <div className="last-time">22:30</div>
              </div>
              <div className="last-message">
                <p>
                  The company offers services to improve the efficiency of other
                  companies. And projects getting ready as possible as fast.
                </p>
                {!isRead ? <RiCheckDoubleFill /> : <RiCheckFill />}
              </div>
            </div>
          </div>
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
            <div className="company-message-box"></div>
          </div>
          <div className="send-message-box">
            <div className="send-file-icon">
              <ImAttachment />
            </div>
            <div className="type-message">
              <input type="text" placeholder="Type message..." />
            </div>
            <div className="send-btn">
              <button>Send</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatForCompany;
