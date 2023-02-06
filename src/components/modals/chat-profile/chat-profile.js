import picture from "../../../img/user-picture.png";
import starIcon from "../../../img/star-icon.svg";
import seem from "../../../img/seem.svg";
import "./chat-profile.scss";

function ChatProfile({ user }) {
  return (
    <li className="chat-profile">
      <div className="chat-profile__picture-wrapper">
        <img
          src={picture}
          className="chat-profile__picture"
          alt="chat user picture"
          width="60"
          height="60"
        />
        {user.isOnline ? (
          <span className="chat-profile__picture-circle"></span>
        ) : null}
      </div>
      <div className="chat-profile__info">
        <div className="chat-profile__name-wrapper">
          <h3 className="chat-profile__name">{user.name}</h3>
          <img
            src={starIcon}
            className="chat-profile__name-indicator"
            width="18"
            height="18"
          />
        </div>
        <p className="chat-profile__text">{user.text}</p>
      </div>
      <div className="chat-profile__indicator">
        <p className="chat-profile__date">{user.date}</p>
        {!user.isSeem ? (
          <span className="chat-profile__indicator-circle"></span>
        ) : (
          <img src={seem} alt="seem icon" width="18" height="18" />
        )}
      </div>
    </li>
  );
}

export default ChatProfile;
