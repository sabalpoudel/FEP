import styled from "@emotion/styled";
import { Theme } from "@mui/material";

import { AfterUnderlineStyle } from "../../../style/mui/utilsStyle";

export const CourseHeaderWrapper = styled.div<{ theme?: Theme }>`
  width: 100%;
  height: var(--header-3-height);
  background-color: ${({ theme }) => theme?.palette.background.paper2};

  position: absolute;
  top: calc(var(--header-height) - var(--header-3-height));

  border-top: 1px solid lightgrey;
  border-bottom: 1px solid lightgrey;

  .chw {
    &-wrapper {
      width: 100%;
      height: 100%;
      margin: auto;
      padding: 0 1rem;
      max-width: var(--max-screen-width);
      &-ul {
        gap: 1rem;
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
        &-li {
          display: flex;
          align-items: center;
          img {
            width: 50px;
          }
          &-item {
            position: relative;
            transition: all 0.3s ease-in;
            ${({ theme }) =>
              AfterUnderlineStyle({
                left: "10%",
                height: "3px",
                bottom: "-0.2rem",
                bgColor: theme.palette.primary.main,
              })};
          }
        }
      }
    }
  }
`;
