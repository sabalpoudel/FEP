import { useTranslation } from "react-i18next";

import { Avatar, Typography } from "@mui/material";

import DoneIcon from "@mui/icons-material/Done";
import AccessTimeIcon from "@mui/icons-material/AccessTime";

import { ContentTabData } from "../constant";
import { Link } from "react-router-dom";
import CustomVideoPlayer from "../../../components/bits/files/CustomVideo";

export default function CourseContentTabContent() {
  const { t } = useTranslation();
  return (
    <ul className="cc-tc-ul">
      {ContentTabData.map(
        ({ title, duration, description, videoUrl }, index) => {
          return (
            <li id={title} key={title + index} className="cc-tc-ul-li">
              <div className="cc-tc-ul-li-vid">
                <div className="cc-tc-ul-li-vid-title">
                  <Typography variant="h4" fontWeight="bold">
                    {title}
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    className="cc-tc-ul-li-vid-title-sub"
                  >
                    -&nbsp;&nbsp;
                    <AccessTimeIcon fontSize="small" /> {duration}
                  </Typography>
                </div>
                <Typography variant="h6">{description}</Typography>

                <CustomVideoPlayer
                  title={title}
                  src={videoUrl}
                  className="cc-tc-ul-li-vid-video"
                />
              </div>
              {index === 0 && (
                <div className="cc-tc-ul-li-progress">
                  <Typography
                    variant="h6"
                    fontWeight="bold"
                    className="cc-tc-ul-li-progress-title"
                  >
                    {t("course_summary")}
                  </Typography>
                  <ul className="cc-tc-ul-li-progress-ul">
                    {ContentTabData.map(({ title }, index) => {
                      return (
                        <li key={title + index}>
                          <Typography
                            color="black"
                            to={`#${title}`}
                            component={Link}
                            className="cc-tc-ul-li-progress-ul-a"
                          >
                            <Avatar className="cc-tc-ul-li-progress-ul-a-avatar">
                              U{index + 1}
                            </Avatar>
                            <Typography className="cc-tc-ul-li-progress-ul-a-title">
                              {title}
                            </Typography>
                            <DoneIcon color="primary" />
                          </Typography>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              )}
            </li>
          );
        }
      )}
    </ul>
  );
}
