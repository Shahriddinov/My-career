import { useState } from "react";

import dropDown from "../../img/drop-down.svg";
import "./language-selector.scss";

function LanguageSelector() {
  const langs = [
    { id: 0, label: "Eng", value: "eng" },
    { id: 1, label: "Rus", value: "rus" },
    { id: 2, label: "Uzb", value: "uzb" },
  ];
  const [isLanguageSelectorOpened, setLanguageSelectorOpened] = useState(false);
  const [currentLang, setCurrentLang] = useState(langs[0].label);

  function handleLangClicked() {
    setLanguageSelectorOpened(!isLanguageSelectorOpened);
  }

  function handleChangeLanguage(evt) {
    const evtValue = evt.target.dataset.value;

    setCurrentLang(evtValue);
    setLanguageSelectorOpened(!isLanguageSelectorOpened);
  }

  return (
    <div className="language-selector__window">
      <div className="language-selector">
        <button
          onClick={() => setLanguageSelectorOpened(!isLanguageSelectorOpened)}
          className="language-selector__wrapper"
        >
          <p className="language-selector__title">{currentLang}</p>
          <img src={dropDown} width="13" height="7" />
        </button>
        <ul
          onClick={handleLangClicked}
          className={`language-selector__list
          ${
            isLanguageSelectorOpened
              ? "language-selector__opened"
              : "language-selector__closed"
          }`}
        >
          {langs.map((lan) => {
            return (
              <li
                className="language-selector__item"
                key={lan.id}
                data-value={lan.value}
                onClick={handleChangeLanguage}
              >
                {lan.label}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default LanguageSelector;
