import { useState } from "react";
import userPicture from "../../../img/user-picture.png";
import ChattingWindow from "../chatting-window/chatting-window";
import "./chat-page.scss";

function ChatPage({ user }) {
    const [isSettingsClicked, setSettingsClicked] = useState(false);
    const [clickedSetting, setClickedSetting] = useState(null);

    const settingsList = [
      "Media",
      "Files",
      "Links",
      "See Profile",
      "Clean the history",
    ];

    const mediasArray = [
      "https://cdn.searchenginejournal.com/wp-content/uploads/2021/09/16-reasons-why-social-media-is-important-to-your-company-616d3200e6dc6-sej.png",
      "https://s3-ap-south-1.amazonaws.com/ricedigitals3bucket/AUPortalContent/2020/07/02030224/mediaimgblog.jpg",
      "https://www.thekickassentrepreneur.com/wp-content/uploads/2020/04/Ways-to-get-in-the-media.jpg",
      "https://cdn.pixabay.com/photo/2020/05/18/16/17/social-media-5187243__340.png",
      "https://cdn.searchenginejournal.com/wp-content/uploads/2021/09/16-reasons-why-social-media-is-important-to-your-company-616d3200e6dc6-sej.png",
      "https://s3-ap-south-1.amazonaws.com/ricedigitals3bucket/AUPortalContent/2020/07/02030224/mediaimgblog.jpg",
      "https://www.thekickassentrepreneur.com/wp-content/uploads/2020/04/Ways-to-get-in-the-media.jpg",
      "https://cdn.pixabay.com/photo/2020/05/18/16/17/social-media-5187243__340.png",
      "https://cdn.searchenginejournal.com/wp-content/uploads/2021/09/16-reasons-why-social-media-is-important-to-your-company-616d3200e6dc6-sej.png",
      "https://s3-ap-south-1.amazonaws.com/ricedigitals3bucket/AUPortalContent/2020/07/02030224/mediaimgblog.jpg",
      "https://www.thekickassentrepreneur.com/wp-content/uploads/2020/04/Ways-to-get-in-the-media.jpg",
      "https://cdn.pixabay.com/photo/2020/05/18/16/17/social-media-5187243__340.png",
      "https://cdn.searchenginejournal.com/wp-content/uploads/2021/09/16-reasons-why-social-media-is-important-to-your-company-616d3200e6dc6-sej.png",
      "https://s3-ap-south-1.amazonaws.com/ricedigitals3bucket/AUPortalContent/2020/07/02030224/mediaimgblog.jpg",
      "https://www.thekickassentrepreneur.com/wp-content/uploads/2020/04/Ways-to-get-in-the-media.jpg",
      "https://cdn.pixabay.com/photo/2020/05/18/16/17/social-media-5187243__340.png",
      "https://cdn.searchenginejournal.com/wp-content/uploads/2021/09/16-reasons-why-social-media-is-important-to-your-company-616d3200e6dc6-sej.png",
      "https://s3-ap-south-1.amazonaws.com/ricedigitals3bucket/AUPortalContent/2020/07/02030224/mediaimgblog.jpg",
      "https://www.thekickassentrepreneur.com/wp-content/uploads/2020/04/Ways-to-get-in-the-media.jpg",
      "https://cdn.pixabay.com/photo/2020/05/18/16/17/social-media-5187243__340.png",
      "https://cdn.searchenginejournal.com/wp-content/uploads/2021/09/16-reasons-why-social-media-is-important-to-your-company-616d3200e6dc6-sej.png",
      "https://s3-ap-south-1.amazonaws.com/ricedigitals3bucket/AUPortalContent/2020/07/02030224/mediaimgblog.jpg",
      "https://www.thekickassentrepreneur.com/wp-content/uploads/2020/04/Ways-to-get-in-the-media.jpg",
      "https://cdn.pixabay.com/photo/2020/05/18/16/17/social-media-5187243__340.png",
      "https://cdn.searchenginejournal.com/wp-content/uploads/2021/09/16-reasons-why-social-media-is-important-to-your-company-616d3200e6dc6-sej.png",
      "https://s3-ap-south-1.amazonaws.com/ricedigitals3bucket/AUPortalContent/2020/07/02030224/mediaimgblog.jpg",
      "https://www.thekickassentrepreneur.com/wp-content/uploads/2020/04/Ways-to-get-in-the-media.jpg",
      "https://cdn.pixabay.com/photo/2020/05/18/16/17/social-media-5187243__340.png",
      "https://cdn.searchenginejournal.com/wp-content/uploads/2021/09/16-reasons-why-social-media-is-important-to-your-company-616d3200e6dc6-sej.png",
      "https://s3-ap-south-1.amazonaws.com/ricedigitals3bucket/AUPortalContent/2020/07/02030224/mediaimgblog.jpg",
      "https://www.thekickassentrepreneur.com/wp-content/uploads/2020/04/Ways-to-get-in-the-media.jpg",
      "https://cdn.pixabay.com/photo/2020/05/18/16/17/social-media-5187243__340.png",
    ];

    function setClickedSettingFunction() {
      setClickedSetting(null);
    }

    function handleClick() {
        setSettingsClicked(!isSettingsClicked);
    }

    return (
      <div className="chat-page">
        <div className="chat-page__header">
          <div className="chat-page__user-wrapper">
            <div className="chat-page__user-picture--wrapper">
              <img
                src={userPicture}
                className="chat-page__user-picture"
                width="60"
                height="60"
              />
              <span className="chat-page__user-picture--circle"></span>
            </div>
            <div className="chat-page__user-informations">
              <div className="chat-page__user-name--wrapper">
                <p className="chat-page__user-name">{user.name}</p>
                <span className="chat-page__user-indicator">
                  {user.isOnline ? "online" : "Last seen recently"}
                </span>
              </div>
            </div>
          </div>
          <div
            className="chat-page__user-settings--wrapper"
            onClick={handleClick}
          >
            <span className="chat-page__user-settings--btn"></span>
            <ul
              className={
                isSettingsClicked
                  ? "chat-page__user-settings chat-page__user-settings--opened"
                  : "chat-page__user-settings chat-page__user-settings--closed"
              }
            >
              {settingsList.map((setting) => {
                return (
                  <li
                    className="chat-page__user-setting"
                    onClick={() => setClickedSetting(setting)}
                  >
                    {setting}
                  </li>
                );
              })}
            </ul>
          </div>
        </div>

        <ChattingWindow chatWindow={clickedSetting} mediasArray={mediasArray} changeWindow={setClickedSettingFunction} />
      </div>
    );
}

export default ChatPage;