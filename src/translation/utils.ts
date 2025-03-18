import i18next from "./i18n";

const changeLanguage = (lng: "en" | "ar") => {
  i18next.changeLanguage(lng);
};

export { changeLanguage };
