import { useTranslation } from "react-i18next";

import ButtonComp from "../../components/bits/Button";
import MainLayout from "../../components/layouts/MainLayout";
import { DashboardPageWrapper } from "./DashboardPageWrapper";
import VideoCoursesComp from "./components/VideoCoursesComp";
import SalesItemComp from "./components/SalesItemComp";

export default function DashboardPage() {
  const { t } = useTranslation();

  return (
    <MainLayout>
      <DashboardPageWrapper className="dpw">
        <div className="dpw-top">
          <ButtonComp className="dpw-top-btn">
            <b>{t("create")}</b>
          </ButtonComp>
        </div>
        <div className="dpw-main">
          <VideoCoursesComp />
          <SalesItemComp />
        </div>
      </DashboardPageWrapper>
    </MainLayout>
  );
}
