import { Typography } from "@mui/material";

const highlightText = (text?: string, searchText?: string) => {
  if (!searchText || !text) return text;

  // Create a regex to match the search term (case-insensitive)
  const regex = new RegExp(`(${searchText})`, "gi");

  return text.split(regex).map((part, index) =>
    part.toLowerCase() === searchText.toLowerCase() ? (
      <Typography
        key={index}
        variant="inherit"
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

type TCourseDetails = {
  title?: string;
  username?: string;
  description?: string;
};

export default function CourseDetails(props: TCourseDetails) {
  const {
    username = "mohammed razi",
    title = "Arduino pack: Design, Manage and Launch Arduino",
    description = "A course by mohammed razi, electronic trainer and developer",
  } = props;
  return (
    <div className="cd">
      <Typography variant="h4" component="h1" fontWeight={800} gutterBottom>
        {title}
      </Typography>
      <Typography variant="h6" color="textSecondary">
        {highlightText(description, username)}
      </Typography>
    </div>
  );
}
