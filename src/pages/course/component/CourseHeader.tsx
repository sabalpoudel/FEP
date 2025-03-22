import { Link } from "react-router-dom";
import { Typography } from "@mui/material";

import { CourseHeaderWrapper } from "./CourseHeaderWrapper";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";

const Menu = [
  { key: "Courses", href: "/courses" },
  { key: "Arduino", href: "/arduino" },
];

export default function CourseHeader() {
  return (
    <CourseHeaderWrapper className="chw">
      <nav className="chw-wrapper">
        <ul className="chw-wrapper-ul">
          <li className="chw-wrapper-ul-li">
            <Typography to={"/"} component={Link} color="textPrimary">
              <img
                alt="course-logo"
                src="/assets/images/logo/course-logo.png"
              />
            </Typography>
          </li>
          {Menu.map((item) => {
            return (
              <Typography
                component="li"
                key={item.key}
                color="textPrimary"
                className="chw-wrapper-ul-li"
              >
                <KeyboardArrowRightIcon />
                <Typography
                  to={item.href}
                  component={Link}
                  color="textPrimary"
                  className="chw-wrapper-ul-li-item"
                >
                  {item.key}
                </Typography>
              </Typography>
            );
          })}
        </ul>
      </nav>
    </CourseHeaderWrapper>
  );
}
