import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

import ButtonComp from "../../../components/bits/Button";
import { Typography } from "@mui/material";

const Data = [
  {
    type: "Private",
    username: "mohammed razi",
    title: "Arduino pack: Design, Manage and Launch Arduino",
    desc: "A course by mohammed razi, electronic trainer and developer",
  },
  {
    type: "Private",
    username: "mohammed razi",
    title: "Arduino pack: Design, Manage and Launch Arduino",
    desc: "A course by mohammed razi, electronic trainer and developer",
  },
  {
    type: "Private",
    username: "mohammed razi",
    title: "Arduino pack: Design, Manage and Launch Arduino",
    desc: "A course by mohammed razi, electronic trainer and developer",
  },
];

const highlightText = (text?: string, searchText?: string) => {
  if (!searchText || !text) return text;

  // Create a regex to match the search term (case-insensitive)
  const regex = new RegExp(`(${searchText})`, "gi");

  return text.split(regex).map((part, index) =>
    part.toLowerCase() === searchText.toLowerCase() ? (
      <Typography
        key={index}
        variant="body2"
        component={"span"}
        sx={{ color: "black", fontWeight: "600" }}
      >
        {part}
      </Typography>
    ) : (
      part
    )
  );
};

function VideoCoursesComp() {
  return (
    <ul className="vcc-ul">
      {Data.map((item, j) => {
        return (
          <li key={j} className="vcc-ul-li">
            <div className="vcc-ul-li-img">
              <img
                alt={`${item.username}-vid-${j + 1}`}
                src={`/assets/images/data/vid-${j + 1}.webp`}
              />
            </div>
            <div className="vcc-ul-li-content">
              <div className="vcc-ul-li-content-detail">
                <Typography variant="h6">{item.title}</Typography>
                <Typography variant="body2">
                  {highlightText(item.desc, item.username)}
                </Typography>
              </div>
              <div className="vcc-ul-li-action">
                <ButtonComp
                  size="small"
                  className="vcc-ul-li-action-btn"
                  endIcon={
                    <KeyboardArrowDownIcon htmlColor="white" fontSize="small" />
                  }
                >
                  {item.type}
                </ButtonComp>
              </div>
            </div>
          </li>
        );
      })}
    </ul>
  );
}

export default VideoCoursesComp;
