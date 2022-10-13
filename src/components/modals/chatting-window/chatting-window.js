import { PaperClipOutlined } from "@ant-design/icons";
import arrowLeft from "../../images/arrow-left.svg";
import "./chatting-window.scss";

function ChattingWindow({ chatWindow, mediasArray, changeWindow }) {
  if (chatWindow == "Media") {
    return <MediaPage mediasArray={mediasArray} changeWindow={changeWindow} />;
  }

  if (chatWindow == "Files") {
    return <FilesPage changeWindow={changeWindow} />;
  }

  if (chatWindow == "Links") {
    return <LinksPage changeWindow={changeWindow} />
  }

  return (
    <div className="chat-page__messaging">
      <div className="chat-page__messages"></div>
      <label htmlFor="message" className="chat-page__messaging-control--bar">
        <input id="message" placeholder="Text message..." />
        <label className="chat-page__file-icon" htmlFor="file">
          <PaperClipOutlined className="paperClip" />
          <input id="file" type="file" />
        </label>
        <button className="chat-page__messaging-button" htmlFor="message">
          Send
        </button>
      </label>
    </div>
  );
}

export function MediaPage({mediasArray, changeWindow}) {
  return (
    <div className="chat-page__window">
      <button onClick={() => changeWindow()} className="chat-page__back-btn">
        <img src={arrowLeft}  width="9" height="18" />
        Back
      </button>
      <div className="chat-page__media-wrapper">
        {mediasArray.map(media => {
          return(
            <img className="chat-page__media-item" src={media} alt="media image" width="190" height="190" />
          )
        })}
      </div>
    </div>
  );
}

export function FilesPage({changeWindow}) {
  return (
    <div className="chat-page__window">
      <button onClick={() => changeWindow()} className="chat-page__back-btn">
        <img src={arrowLeft} width="9" height="18" />
        Back
      </button>
      <div className="chat-page__files-wrapper">
        <div className="chat-page__file">
          <span className="chat-page__file-embed">ZIP</span>
          <div className="chat-page__file-card">
            <p className="chat-page__file-name">
              technology-conc.ept-...mesh-text-space.zip
            </p>
            <p className="chat-page__file-size">2.2 MB</p>
            <p className="chat-page__file-date">2022 | Aug 27 | 18:32</p>
          </div>
        </div>
        <div className="chat-page__file">
          <span className="chat-page__file-embed">AI</span>
          <div className="chat-page__file-card">
            <p className="chat-page__file-name">
              Lorem semper vulputate tortor tincidunt.ai
            </p>
            <p className="chat-page__file-size">2.2 MB</p>
            <p className="chat-page__file-date">2022 | Aug 27 | 18:32</p>
          </div>
        </div>
        <div className="chat-page__file">
          <span className="chat-page__file-embed chat-page__file-embed--picture"></span>
          <div className="chat-page__file-card">
            <p className="chat-page__file-name">
              Ut erat est vivamus turpis laoreet. Viverra.png
            </p>
            <p className="chat-page__file-size">2.2 MB</p>
            <p className="chat-page__file-date">2022 | Aug 27 | 18:32</p>
          </div>
        </div>
        <div className="chat-page__file">
          <span className="chat-page__file-embed">TXT</span>
          <div className="chat-page__file-card">
            <p className="chat-page__file-name">
              technology-conc.ept-...mesh-text-space.txt
            </p>
            <p className="chat-page__file-size">2.2 MB</p>
            <p className="chat-page__file-date">2022 | Aug 27 | 18:32</p>
          </div>
        </div>
        <div className="chat-page__file">
          <span className="chat-page__file-embed">AI</span>
          <div className="chat-page__file-card">
            <p className="chat-page__file-name">
              Lorem semper vulputate tortor tincidunt.ai
            </p>
            <p className="chat-page__file-size">2.2 MB</p>
            <p className="chat-page__file-date">2022 | Aug 27 | 18:32</p>
          </div>
        </div>
        <div className="chat-page__file">
          <span className="chat-page__file-embed chat-page__file-embed--picture"></span>
          <div className="chat-page__file-card">
            <p className="chat-page__file-name">
              Ut erat est vivamus turpis laoreet. Viverra.png
            </p>
            <p className="chat-page__file-size">2.2 MB</p>
            <p className="chat-page__file-date">2022 | Aug 27 | 18:32</p>
          </div>
        </div>
        <div className="chat-page__file">
          <span className="chat-page__file-embed chat-page__file-embed--picture"></span>
          <div className="chat-page__file-card">
            <p className="chat-page__file-name">
              Ut erat est vivamus turpis laoreet. Viverra.png
            </p>
            <p className="chat-page__file-size">2.2 MB</p>
            <p className="chat-page__file-date">2022 | Aug 27 | 18:32</p>
          </div>
        </div>
        <div className="chat-page__file">
          <span className="chat-page__file-embed">AI</span>
          <div className="chat-page__file-card">
            <p className="chat-page__file-name">
              Lorem semper vulputate tortor tincidunt.ai
            </p>
            <p className="chat-page__file-size">2.2 MB</p>
            <p className="chat-page__file-date">2022 | Aug 27 | 18:32</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export function LinksPage({ changeWindow }) {
  return (
    <div className="chat-page__window">
      <button onClick={() => changeWindow()} className="chat-page__back-btn">
        <img src={arrowLeft} width="9" height="18" />
        Back
      </button>
      <div className="chat-page__links-wrapper">
        <div className="chat-page__link">
          <span className="chat-page__link-embed">T</span>
          <div className="chat-page__link-card">
            <p className="chat-page__link-name">
              technology-conc.ept-...mesh-text-space.zip
            </p>
            <p className="chat-page__link-date">2022 | Aug 27 | 18:32</p>
          </div>
        </div>
        <div className="chat-page__link">
          <span className="chat-page__link-embed">T</span>
          <div className="chat-page__link-card">
            <p className="chat-page__link-name">
              technology-conc.ept-...mesh-text-space.zip
            </p>
            <p className="chat-page__link-date">2022 | Aug 27 | 18:32</p>
          </div>
        </div>
        <div className="chat-page__link">
          <span className="chat-page__link-embed">T</span>
          <div className="chat-page__link-card">
            <p className="chat-page__link-name">
              technology-conc.ept-...mesh-text-space.zip
            </p>
            <p className="chat-page__link-date">2022 | Aug 27 | 18:32</p>
          </div>
        </div>
        <div className="chat-page__link">
          <span className="chat-page__link-embed">T</span>
          <div className="chat-page__link-card">
            <p className="chat-page__link-name">
              technology-conc.ept-...mesh-text-space.zip
            </p>
            <p className="chat-page__link-date">2022 | Aug 27 | 18:32</p>
          </div>
        </div>
        <div className="chat-page__link">
          <span className="chat-page__link-embed">T</span>
          <div className="chat-page__link-card">
            <p className="chat-page__link-name">
              technology-conc.ept-...mesh-text-space.zip
            </p>
            <p className="chat-page__link-date">2022 | Aug 27 | 18:32</p>
          </div>
        </div>
        <div className="chat-page__link">
          <span className="chat-page__link-embed">T</span>
          <div className="chat-page__link-card">
            <p className="chat-page__link-name">
              technology-conc.ept-...mesh-text-space.zip
            </p>
            <p className="chat-page__link-date">2022 | Aug 27 | 18:32</p>
          </div>
        </div>
        <div className="chat-page__link">
          <span className="chat-page__link-embed">T</span>
          <div className="chat-page__link-card">
            <p className="chat-page__link-name">
              technology-conc.ept-...mesh-text-space.zip
            </p>
            <p className="chat-page__link-date">2022 | Aug 27 | 18:32</p>
          </div>
        </div>
      </div>
    </div>
  );
}
export function ProfilePage() {
  return (
    <div className="chat-page__media">
      <p>Files Page</p>
    </div>
  );
}
export function CleaningPage() {
  return (
    <div className="chat-page__media">
      <p>Files Page</p>
    </div>
  );
}

export default ChattingWindow;
