import { useState } from "react";
import dropDown from "../../img/drop-down.svg";
import cross from "../../img/cross.svg";
import "./filter-card.scss";

function FilterCard(props) {
  const { className } = props;
  const [isOpen, setOpen] = useState(false);
  const [isClicked, setClicked] = useState("Junior");
  const [isClicked2, setClicked2] = useState("Middle");

  function handleClick(evt) {
    let evtValue = evt.target.dataset.id;

    setOpen(evtValue);
  }

  function handleChecked(evt) {
    let evtValue = evt.target.dataset.id;

    if (evt.target.dataset.type == 1) {
      setClicked(evtValue);
      setOpen(false);
    } else {
      setClicked2(evtValue);
      setOpen(false);
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <form
      method="get"
      onSubmit={handleSubmit}
      className={`${className ? className : ""} filter-card`}
    >
      <h2 className="filter-card__title">Filter</h2>
      <div className="filter-card__payment">
        <h3 className="filter-card__payment-title">Payment amount</h3>
        <div className="filter-card__payment-labels">
          <label className="filter-card__payment-from">
            From
            <input
              className="filter-card__payment-from--input"
              placeholder="10$"
            />
          </label>
          <label className="filter-card__payment-to">
            To
            <input
              className="filter-card__payment-to--input"
              placeholder="20$"
            />
          </label>
        </div>
      </div>
      <div className="filter-card__success">
        <h3 className="filter-card__success-title">Job successs</h3>
        <input
          className="filter-card__success-input"
          placeholder="More than 80%"
        />
      </div>
      <div className="filter-card__level">
        <h3 className="filter-card__level-title">Required level</h3>
        <div className="filter-card__level-selects">
          <div className="filter-card__level">
            <span className="filter-card__level-from--span">From</span>
            <div className="filter-card__level-select">
              <span
                className="filter-card__select-span"
                data-id="1"
                onClick={handleClick}
              >
                {isClicked}
              </span>
              <img src={dropDown} width="12" height="6" />
            </div>
            <ul
              className={`filter-card__level-list ${
                isOpen == 1 ? "active" : "inactive"
              }`}
            >
              <li
                className="filter-card__list-item"
                data-id="Junior"
                data-type="1"
                onClick={handleChecked}
              >
                Junior
              </li>
              <li
                className="filter-card__list-item"
                data-id="Middle"
                data-type="1"
                onClick={handleChecked}
              >
                Middle
              </li>
              <li
                className="filter-card__list-item"
                data-id="Senior"
                data-type="1"
                onClick={handleChecked}
              >
                Senior
              </li>
            </ul>
          </div>
          <div className="filter-card__level">
            <span className="filter-card__level-to--span">To</span>
            <div className="filter-card__level-select">
              <span
                className="filter-card__select-span"
                data-id="2"
                onClick={handleClick}
              >
                {isClicked2}
              </span>
              <img src={dropDown} width="12" height="6" />
            </div>
            <ul
              className={`filter-card__level-list ${
                isOpen == 2 ? "active" : "inactive"
              }`}
            >
              <li
                className="filter-card__list-item"
                data-id="Junior"
                data-type="2"
                onClick={handleChecked}
              >
                Junior
              </li>
              <li
                className="filter-card__list-item"
                data-id="Middle"
                data-type="2"
                onClick={handleChecked}
              >
                Middle
              </li>
              <li
                className="filter-card__list-item"
                data-id="Senior"
                data-type="2"
                onClick={handleChecked}
              >
                Senior
              </li>
            </ul>
          </div>
        </div>
      </div>
      <label className="filter-card__employee">
        <input type="checkbox" />
        Verified employee
      </label>
      <div className="filter-card__region">
        <span className="filter-card__region-text">Region</span>
        <div className="filter-card__region-wrapper">
          <div className="filter-card__region-choices">
            <div className="filter-card__region-choice">
              <span className="filter-card__region-choice--text">
                Uzbekistan
              </span>
              <img
                className="filter-card__region-choice--icon"
                src={cross}
                width="12"
                height="12"
              />
            </div>
            <div className="filter-card__region-choice">
              <span className="filter-card__region-choice--text">Russian</span>
              <img
                className="filter-card__region-choice--icon"
                src={cross}
                width="12"
                height="12"
              />
            </div>
          </div>
          <span className="filter-card__region-image">
            <img src={dropDown} width="12" height="6" />
          </span>
        </div>
      </div>
      <label className="filter-card__jobs">
        Completed jobs (minimum)
        <input
          className="filter-card__jobs-input"
          type="number"
          placeholder="10"
        />
      </label>
      <div className="filter-card__skills">
        <span className="filter-card__skills-span">Required skills</span>
        <div className="filter-card__skills-choices">
          <div className="filter-card__skills-choice">
            <span className="filter-card__skills-choice--text">Figma</span>
            <img
              className="filter-card__skills-choice--icon"
              src={cross}
              width="12"
              height="12"
            />
          </div>
          <div className="filter-card__skills-choice">
            <span className="filter-card__skills-choice--text">html</span>
            <img
              className="filter-card__skills-choice--icon"
              src={cross}
              width="12"
              height="12"
            />
          </div>
        </div>
      </div>
      <button className="filter-card__button" type="submit">
        Apply filter
      </button>
    </form>
  );
}

export default FilterCard;
