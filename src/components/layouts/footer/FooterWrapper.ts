import { Theme } from "@mui/material";
import styled from "@emotion/styled";
import { AfterUnderlineStyle } from "../../../style/mui/utilsStyle";

const FooterWrapper = styled.footer<{ theme?: Theme }>`
  .fw {
    &-size {
      width: 100%;
      margin: auto;
      padding: 1rem;
      overflow: hidden;
      max-width: var(--max-screen-width);
    }
    &-1 {
      width: 100%;
      background-color: ${({ theme }) => theme?.palette.primary.light};
      &-content {
        gap: 2rem;
        width: 100%;
        display: flex;
        padding: 6rem 0;
        overflow: hidden;
        align-items: center;
        justify-content: space-around;
        &-right {
          gap: 2.5rem;
          display: flex;
          flex-direction: column;
          &-item {
            gap: 0.5rem;
            display: flex;
            position: relative;
            align-items: center;
            transition: all 0.3s ease-in;
            ${({ theme }) =>
              AfterUnderlineStyle({
                left: "0",
                height: "2px",
                bottom: "-0.5rem",
                bgColor: theme.palette.primary.main,
              })};
            svg {
              font-size: 1rem;
            }
            &-text {
              max-width: 175px;
              line-height: 1rem;
            }
          }
        }

        &-left {
          gap: 6rem;
          display: flex;
          justify-content: end;
          &-section {
            gap: 1rem;
            display: flex;
            flex-direction: column;
            &-ul {
              gap: 0.75rem;
              display: flex;
              flex-direction: column;
              &-item {
                position: relative;
                transition: all 0.3s ease-in;
                ${({ theme }) =>
                  AfterUnderlineStyle({
                    left: "0",
                    height: "2px",
                    bottom: "-0.2rem",
                    bgColor: theme.palette.primary.main,
                  })};
              }
            }
          }
        }
      }
    }
    &-2 {
      flex: 3;
      background-color: ${({ theme }) => theme?.palette.warning.main};
    }
  }
`;

export { FooterWrapper };
