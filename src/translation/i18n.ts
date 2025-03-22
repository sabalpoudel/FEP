import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// async function loadResources() {
//   return {
//     en: { translation: (await import("./messages/en.json")).default },
//     ar: { translation: (await import("./messages/ar.json")).default },
//   };
// }

// const resources = await loadResources();

const resources = {
  en: {
    translation: () => import("./messages/en.json").then((m) => m.default),
  },
  ar: {
    translation: () => import("./messages/ar.json").then((m) => m.default),
  },
};

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    lng: "en",
    fallbackLng: "en",
    interpolation: {
      escapeValue: false, // react already safes from xss
    },
  });

export default i18n;
