import likeIcon from "../../img/like.svg";
import bgImage from "../images/portfolios-image.jpg";
import fileIcon from "../images/file-icon.svg";
import ClientHistory from "../client-history/client-history";
import "./job-modal-page.scss";

function JobModalPage() {
  return (
    <div className="job-modal__page">
      <div className="job-modal__head">
        <h2 className="job-modal__title">Business Card Design</h2>
        <p className="job-modal__price">5$</p>
        <span className="job-modal__like-icon">
          <img src={likeIcon} alt="like icon" width={"30"} height={"27"} />
        </span>
      </div>
      <p className="job-modal__text">
        Sit lacinia feugiat commodo hac tristique. Non lobortis in eu a, mattis
        ullamcorper nullam. Facilisi ipsum mattis hac urna scelerisque nunc id.
        Aliquam nullam turpis magna placerat. Amet aliquam eget dignissim odio
        leo, in adipiscing. Aliquet mattis in tortor, eros.
      </p>
      <a
        href="http://localhost:3000/static/media/portfolios-image.9b6e29ac3ce82702da78.jpg"
        target="_blank"
      >
        <img src={bgImage} width="830" height="464" alt="background image" />
      </a>
      <form action="get" className="job-modal__form">
        <label className="job-modal__form-price" for="price">
          <input className="input" id="price" placeholder="Price" />
          <span className="span">USD</span>
        </label>
        <label className="job-modal__form-terms" for="terms">
          <input className="input" id="terms" placeholder="Terms" />
          <span className="span">Days</span>
        </label>
        <textarea
          className="job-modal__form-covering--letter"
          placeholder="Covering Letter"
        />
        <label className="job-modal__form-file" for="file">
          PDF, DOC, JPG, PNG, ...
          <input id="file" className="input" type="file" />
          <span className="span">
            <img src={fileIcon} width="24" height="24" alt="file img" />
          </span>
        </label>
        <button className="job-modal__form-button" type="submit">
          Apply
        </button>
      </form>
      <div className="job-modal__clients-history">
        <ClientHistory />
      </div>
    </div>
  );
}

export default JobModalPage;
