import { Typography } from "@mui/material";
import { useTranslation } from "react-i18next";

import CachedIcon from "@mui/icons-material/Cached";
import LanguageIcon from "@mui/icons-material/Language";

import { OverviewTabContent } from "../constant";

type TCourseContentTabOverview = {
  data?: typeof OverviewTabContent;
};

export default function CourseContentTabOverview(
  props: TCourseContentTabOverview
) {
  const {
    data: {
      title,
      videos,
      language,
      description,
      skill_level,
      last_updated,
      total_duration,
      students_enrolled,
    } = OverviewTabContent,
  } = props;

  const { t } = useTranslation();
  return (
    <div className="cs-to">
      <Typography
        variant="h6"
        gutterBottom
        fontWeight={600}
        className="cs-to-title"
      >
        {title}
      </Typography>
      <Typography
        color="textSecondary"
        className="cs-to-last_updated cs-to-flex"
      >
        <CachedIcon />
        {t("last_updated")} {last_updated}
      </Typography>
      <Typography
        gutterBottom
        color="textSecondary"
        className="cs-to-language cs-to-flex"
      >
        <LanguageIcon />
        {language}
      </Typography>
      <div className="cs-to-detail">
        <div className="cs-to-detail-left">
          <Typography gutterBottom>
            {t("skill_level")}: &nbsp;{skill_level}
          </Typography>
          <Typography gutterBottom>
            {t("students_enrolled")}: &nbsp;{students_enrolled}
          </Typography>
          <Typography gutterBottom>
            {t("language")}: &nbsp;{language}
          </Typography>
        </div>
        <div className="cs-to-detail-right">
          <Typography gutterBottom>
            {t("videos")}: &nbsp;{videos}
          </Typography>
          <Typography gutterBottom>
            {t("time")}: &nbsp;{total_duration}
          </Typography>
        </div>
      </div>
      <Typography className="cs-to-description">
        <span>{t("description")}</span>
        <span>{description}</span>
      </Typography>
    </div>
  );
}
