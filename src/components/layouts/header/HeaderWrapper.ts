"use client";
import { Theme } from "@mui/material";
import styled from "@emotion/styled";
import { AfterUnderlineStyle } from "../../../style/mui/utilsStyle";

const HeaderWrapper = styled.div<{ theme?: Theme }>`
  top: 0;
  right: 0;
  z-index: 3;
  width: 100vw;
  position: fixed;
  .hw {
    &-size {
      width: 100%;
      margin: auto;
      padding: 0.5rem;
      max-width: var(--max-screen-width);
    }
    &-1 {
      height: var(--header-1-height);
      background: ${({ theme }) => theme?.palette.background.gradient};
      &-content {
        display: flex;
        align-items: center;
        &-contact {
          flex: 3;
          gap: 1rem;
          display: flex;
          align-items: center;
          &-item {
            gap: 0.2rem;
            display: flex;
            align-items: center;
            svg {
              font-size: 1rem;
            }
          }
        }
        &-socials {
          flex: 1;
          gap: 0.2rem;
          display: flex;
          align-items: center;
          &-item {
            svg {
              font-size: 1rem;
            }
          }
        }
      }
    }
    &-2 {
      height: var(--header-2-height);
      background: ${({ theme }) => theme?.palette.background.paper};
      &-content {
        display: flex;
        align-items: center;
        &-left {
          flex: 1;
          gap: 1rem;
          display: flex;
          align-items: center;
          &-a {
            img {
              height: 70px;
            }
          }
          &-label {
            padding-left: 0.5rem;
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
          &-line {
            height: 50px;
            border-right: 1px solid;
          }
        }
        &-right {
          flex: 1;
          text-align: right;
          margin-left: auto;
          gap: 1rem;
          display: flex;
          align-items: center;
          justify-content: space-between;
          &-menu {
            gap: 1.5rem;
            display: flex;
            align-items: center;
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
              &-active {
                &::after {
                  left: 2%;
                  width: 115%;
                  height: 3px;
                }
              }
            }
          }
          &-end {
            gap: 1rem;
            display: flex;
            align-items: center;
            &-search {
              &-input {
                border: none;
                border-radius: 25px;
                background: ${({ theme }) => theme?.palette.common.white};
              }
              fieldset {
                border: none;
              }
            }
            &-profile {
              &-avatar {
                background: ${({ theme }) => theme?.palette.primary.main};
              }
            }
          }
        }
      }
    }
  }
`;

export { HeaderWrapper };
