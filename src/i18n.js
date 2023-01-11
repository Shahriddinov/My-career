import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import transUzb from "./Languages/uz.json";
import transRus from "./Languages/ru.json";
import transEng from "./Languages/en.json";

const resources = {
  en: {
    translation: transEng,
  },
  uz: {
    translation: transUzb,
  },
  ru: {
    translation: transRus,
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: "en",
  fallbackLng: "uz",
  fallbackLng: "ru",

  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
