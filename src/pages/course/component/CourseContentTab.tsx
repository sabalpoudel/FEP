import { CourseTab } from "../constant";
import { TCourseTab } from "../types";
import { Typography } from "@mui/material";
import { useTranslation } from "react-i18next";

type TCourseContentTab = {
  activeTab: TCourseTab;
  toggleTab: (tab: TCourseTab) => void;
};
export default function CourseContentTab(props: TCourseContentTab) {
  const { activeTab, toggleTab } = props;
  const { t } = useTranslation();
  return (
    <ul className="cct-ul">
      {CourseTab?.map((item) => {
        const isActive = activeTab === item ? "active" : "";
        return (
          <Typography
            key={item}
            component="li"
            onClick={() => toggleTab(item)}
            className={`cct-ul-li cct-ul-li-${isActive}`}
          >
            {t(item)}
          </Typography>
        );
      })}
    </ul>
  );
}
