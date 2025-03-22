import { useState } from "react";

import { useTranslation } from "react-i18next";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import { Avatar, Rating, Typography } from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

import ButtonComp from "../../../components/bits/Button";
import { InputField } from "../../../components/bits/InputField";

import { TComment } from "../types";
import { CommentTabContent } from "../constant";

type TCourseContentTabComments = {
  comments?: TComment[];
};

export default function CourseContentTabComments(
  props: TCourseContentTabComments
) {
  const { t } = useTranslation();

  const { comments = CommentTabContent } = props;
  const [comment, setComment] = useState<string>("");

  const onCommentChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setComment(e.target.value);
  };

  const handleOnClick = () => {
    console.log({ comment });
  };

  return (
    <div className="cc-tc">
      <div className="cc-tc-comments">
        {comments?.map((comment, j) => {
          return (
            <SingleComment
              index={j}
              comment={comment}
              key={`${j}-${comment.time_ago}`}
            />
          );
        })}
      </div>
      <div className="cc-tc-reply">
        <InputField
          fullWidth
          multiline
          minRows={12}
          maxRows={12}
          value={comment}
          onChange={onCommentChange}
          slotProps={{
            input: {
              className: "cc-tc-reply-input",
            },
          }}
        />
        <ButtonComp
          size="large"
          onClick={handleOnClick}
          className="cc-tc-reply-btn"
        >
          {t("send")}
        </ButtonComp>
      </div>
    </div>
  );
}

type TSingleComment = {
  comment: TComment;
  index: number;
};
const SingleComment = (props: TSingleComment) => {
  const { comment, index } = props;
  const { t } = useTranslation();

  const isEven = index % 2 === 0;
  const [reply, setReply] = useState<string>("");

  const onReplyChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setReply(e.target.value);
  };

  const handleOnClick = () => {
    console.log({ reply });
  };
  return (
    <div className="cc-tc-comments-item">
      <div className="cc-tc-comments-item-img">
        <Avatar src={comment?.user?.profile_picture}>
          {comment?.user?.name.charAt(0)}
        </Avatar>
      </div>
      <div className="cc-tc-comments-item-detail">
        <div className="cc-tc-comments-item-detail-name">
          <Typography component="div" fontWeight={500} color="black">
            {comment?.user?.name}
          </Typography>

          <Typography
            variant="body2"
            color="textSecondary"
            className="cc-tc-comments-item-detail-time"
          >
            {comment?.time_ago}
          </Typography>
        </div>
        <div className="cc-tc-comments-item-detail-stars">
          <Rating
            max={5}
            readOnly
            size="large"
            precision={0.5}
            name="star-rating"
            value={comment.rating}
          />
        </div>
        <Typography
          component="div"
          color="textSecondary"
          className="cc-tc-comments-item-detail-reply"
        >
          {comment.review_text}
        </Typography>

        <div className="cc-tc-comments-item-detail-actions">
          <div className="cc-tc-comments-item-detail-actions-like">
            {t("like")} <ThumbUpIcon color={isEven ? "primary" : "disabled"} />{" "}
            {comment.likes || ""}
          </div>
          <div className="cc-tc-comments-item-detail-actions-reply">
            {t("replies")} <KeyboardArrowDownIcon color="primary" />
          </div>
        </div>
        <div className="cc-tc-comments-item-detail-replies">
          <div className="cc-tc-comments-item-detail-replies-gap" />
          <div className="cc-tc-comments-item-detail-replies-input">
            <InputField
              fullWidth
              multiline
              maxRows={3}
              value={reply}
              onChange={onReplyChange}
              slotProps={{
                input: {
                  className: "cc-tc-comments-item-detail-replies-input-field",
                },
              }}
              endAdornment={
                <ButtonComp
                  size="small"
                  onClick={handleOnClick}
                  className="cc-tc-comments-item-detail-reply-input-btn"
                >
                  {t("send")}
                </ButtonComp>
              }
            />
          </div>
        </div>
      </div>
    </div>
  );
};
