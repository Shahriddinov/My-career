import React, { useState } from "react";
import dropDown from "../../img/drop-down.svg";
import useStore from "../../StoreZustand/StoreZustand";
import Contract from "../modals/contract/Contract";
import Chat from "../modals/chat/chat";
import "./user-selector.scss";
import { useNavigate } from "react-router-dom";

function UserSelector({ userPicture, props }) {
  const navigate = useNavigate();
  const options = [
    { id: "0", label: "Profile", value: "profile" },
    { id: "1", label: "Notifications", value: "notifications" },
    { id: "2", label: "Contracts", value: "contracts" },
    { id: "3", label: "My jobs", value: "my jobs" },
    { id: "4", label: "Chats", value: "chats" },
    { id: "5", label: "Log out", value: "log out" },
  ];
  const [activeValue, setActiveValue] = useState(options[0].label);
  const [isUserSelectOpen, setUserSelectOpen] = useState(false);
  const [chatStatus, setChatStatus] = useState(
    activeValue === "chats" ? true : false
  );

  function handleSelectorClicked(evt) {
    let evtValue = evt.target.dataset.value;

    setActiveValue(evtValue);
    setUserSelectOpen(!isUserSelectOpen);

    if (evtValue === "chats") {
      setChatStatus(true);
    } else if (evtValue === "profile") {
      navigate("/myProfile");
    }

    if (evtValue === "log out") {
      localStorage.clear();
    }
  }
  const { contract, contractHendler } = useStore();

  return (
    <div className="user-selector__window">
      <div className="user-selector">
        <button
          onClick={() => setUserSelectOpen(!isUserSelectOpen)}
          className="user-selector__wrapper"
        >
          <img src={userPicture} alt="user picture" width="36" height="36" />
          <p className="user-selector__title">{activeValue}</p>
          <img src={dropDown} width="13" height="7" />
        </button>
        <ul
          className={`user-selector__list ${
            isUserSelectOpen ? "user-selector__opened" : "user-selector__closed"
          }`}
        >
          {options.map((opt) => {
            return (
              <li
                key={opt.id}
                onClick={handleSelectorClicked}
                className="user-selector__item"
                data-value={opt.value}
              >
                {opt.label}
              </li>
            );
          })}
        </ul>
      </div>

      {chatStatus ? (
        <Chat isModalOpened={chatStatus} closeModal={setChatStatus} />
      ) : null}
      {contract ? (
        <Contract isModalOpened={chatStatus} closeModal={setChatStatus} />
      ) : null}
    </div>
  );
}

export default UserSelector;
