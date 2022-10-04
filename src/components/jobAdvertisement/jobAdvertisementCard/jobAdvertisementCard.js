import eyes from "../../../img/eyes.svg";
import "./jobAdvertisementCard.scss";

function JobAdvertisementCard() {
  const starterClass = "job-advertisement__card";

  return (
    <li className={starterClass}>
      <div className={`${starterClass}-head`}>
        <h3 className={`${starterClass}-title`}>Job in Angular | TypeScript</h3>
        <div className={`${starterClass}-head--right`}>
          <p className={`${starterClass}-text`}>
            <span className={`${starterClass}-text--span`}>Created:</span>
            Oct 21, 10:17
          </p>
          <div className={`${starterClass}-text`}>
            <img src={eyes} alt="eyes icon" width="20" height="20" />
            35
          </div>
        </div>
      </div>
      <div className={`${starterClass}-body`}>
        <p className={`${starterClass}-paragraph`}>
          Sit lacinia feugiat commodo hac tristique. Non lobortis in eu a,
          mattis ullamcorper nullam. Facilisi ipsum mattis hac urna scelerisque
          nunc id. Aliquam nullam turpis magna placerat. Amet aliquam eget
          dignissim odio leo, in adipiscing. Aliquet mattis in tortor, eros.
        </p>
        <div className={`${starterClass}-footer`}>
          <ul className={`${starterClass}-footer--list`}>
            <li className={`${starterClass}-footer--item`}>
              <p className={`${starterClass}-footer--span`}>50$</p>
              <p className={`${starterClass}-footer--subtitle`}>Price</p>
            </li>
            <li className={`${starterClass}-footer--item`}>
              <p className={`${starterClass}-footer--span`}>2</p>
              <p className={`${starterClass}-footer--subtitle`}>Days</p>
            </li>
            <li className={`${starterClass}-footer--item`}>
              <p className={`${starterClass}-footer--span`}>
                55
                <span className={`${starterClass}-footer--indicator`}>+3</span>
              </p>
              <p className={`${starterClass}-footer--subtitle`}>Proposals</p>
            </li>
          </ul>
          <div className={`${starterClass}-footer--right`}>
            <button className={`${starterClass}-footer--button clicked`}>
              Edit
            </button>
            <button className={`${starterClass}-footer--button`}>
              Deactivate
            </button>
            <button className={`${starterClass}-footer--button`}>Delete</button>
          </div>
        </div>
      </div>
    </li>
  );
}

export default JobAdvertisementCard;
