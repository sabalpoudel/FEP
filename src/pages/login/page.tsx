// import { changeLanguage } from "i18next";
// import { useTranslation } from "react-i18next";
import AuthForms from "./components/AuthForms";
import AuthCarousel from "./components/AuthCarousel";
import AuthenticationLayout from "../../components/layouts/AuthenticationLayout";
import { LoginPageWrapper } from "./LoginPageWrapper";

export default function LoginPage() {
  // const { t } = useTranslation();
  return (
    <AuthenticationLayout className="alw">
      <LoginPageWrapper className="lpw">
        <AuthForms />
        <AuthCarousel />
      </LoginPageWrapper>
    </AuthenticationLayout>
  );
}
