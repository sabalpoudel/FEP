import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import enTranslation from "./messages/en.json";
import arTranslation from "./messages/ar.json";

const resources = {
  en: { translation: enTranslation },
  ar: { translation: arTranslation },
};

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    lng: "en",
    fallbackLng: "en",
    debug: import.meta.env.DEV,
    react: { useSuspense: false },
    interpolation: { escapeValue: false },
  });

export default i18n;
