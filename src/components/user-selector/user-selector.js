import React, { useState } from "react";
import dropDown from "../../img/drop-down.svg";
import "./user-selector.scss";

function UserSelector({ userPicture, props }) {
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

  function handleSelectorClicked(evt) {
    let evtValue = evt.target.dataset.value;

    setActiveValue(evtValue);
    setUserSelectOpen(!isUserSelectOpen);
  }

  return (
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
  );
}

export default UserSelector;
