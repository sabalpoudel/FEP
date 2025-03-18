// import { Link, Outlet } from "react-router-dom";

import { changeLanguage } from "i18next";
import { useTranslation } from "react-i18next";

export default function LoginPage() {
  const { t } = useTranslation();
  return (
    <div>
      <h1>This is Login page</h1>
      <div>
        <h1>{t("test_translation")}</h1>
        <span onClick={() => changeLanguage("en")}>en</span>&emsp;
        <span onClick={() => changeLanguage("ar")}>ar</span>
      </div>
    </div>
  );
}
