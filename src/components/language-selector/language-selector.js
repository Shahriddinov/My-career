import { useState } from "react";
import "./language-selector.scss";

function LanguageSelector() {
  const langs = ["Eng", "Ru", "Uz"];
  const [isLanguageSelectorOpened, setLanguageSelectorOpened] = useState(false);
  const [currentLang, setCurrentLang] = useState(langs[0]);

  function handleLangClicked() {
    setLanguageSelectorOpened(!isLanguageSelectorOpened);
  }

  function handleChangeLanguage(evt) {
    const evtValue = evt.target.lang;

    setCurrentLang(evtValue);
    setLanguageSelectorOpened(!isLanguageSelectorOpened);
  }

  return (
    <div className="language-selector">
      <p className="language-selector__title">{currentLang}</p>
      <ul
        onClick={handleLangClicked}
        className={
          isLanguageSelectorOpened
            ? "language-selector__list lang-opened"
            : "language-selector__list lang-closed"
        }
      >
        {langs.map((label) => {
          return (
            <li className="language" onClick={handleChangeLanguage}>
              {label}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default LanguageSelector;
