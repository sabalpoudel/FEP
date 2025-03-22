import styled from "@emotion/styled";
import { Theme } from "@mui/material";
import { AfterUnderlineStyle } from "../../../style/mui/utilsStyle";

export const CourseBodyWrapper = styled.div<{ theme?: Theme }>`
  min-height: 50vh;
  background-color: ${({ theme }) => theme?.palette.background.paper2};
  .cbw {
    &-wrapper {
      margin: auto;
      padding: 2rem;
      max-width: var(--max-screen-width);

      .cd {
        padding: 2rem 0 4rem 0;
      }
        .cc{
        border-bottom: 1px solid lightgrey;
        .cct-ul{
          gap: 2rem;
          display: flex;
          padding: 0rem  0.5rem 0.1rem 0.5rem;
            .cct-ul-li{
                cursor: pointer;
                position: relative;
            transition: all 0.3s ease-in;
            ${({ theme }) =>
              AfterUnderlineStyle({
                left: "10%",
                height: "2px",
                bottom: "-0.6rem",
                bgColor: theme.palette.primary.main,
              })};
              &-active {
                &::after {
                  left:0;
                  height: 2px;
                  width: 105%;

                }
              }
            }
        }
    }
  }
`;
