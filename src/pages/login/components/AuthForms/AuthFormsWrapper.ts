"use client";
import { Theme } from "@mui/material";
import styled from "@emotion/styled";
import { breakpoint } from "../../../../style/mui/theme";

export const AuthFormsWrapper = styled.div<{ theme?: Theme }>`
  height: 100%;
  display: flex;
  align-items: center;
  border-right: 1px solid;
  border-color: ${({ theme }) => theme?.palette.action.disabledBackground};
  .afw {
    &-wrapper {
      width: 350px;
      margin: auto;
      height: 100%;
      display: flex;
      padding: 4rem 0;
      flex-direction: column;
      justify-content: space-between;

      ${breakpoint("xs")} {
        width: 300px;
      }

      &-logo {
        width: 100%;
        margin: auto;
        margin-bottom: 2rem;

        img {
          width: 100%;
          height: 100px;
        }
      }
      &-title {
        &-sub {
          gap: 1rem;
          display: flex;
          align-items: center;
          justify-content: center;
        }
      }
      &-form {
        flex: 1;

        .siu-form {
          gap: 2.5rem;
          height: 100%;
          display: flex;
          align-items: center;
          align-content: center;
          flex-direction: column;
          justify-content: center;
          ${breakpoint("xs")} {
            gap: 1.5rem;
          }
          &-field {
            label {
              font-size: 1.2rem;
            }
            input {
              font-weight: bold;
              font-size: 1.35rem;
            }
            ${breakpoint("xs")} {
              label {
                font-size: 1rem;
              }
              input {
                font-size: 1.1rem;
              }
            }
          }
          &-button {
            padding: 1rem;
            margin-top: 1rem;
            border-radius: 25px;
            color: ${({ theme }) => theme?.palette.common.white};
          }
        }
      }
      &-footer {
        &-texts {
          gap: 1rem;
          display: flex;
          align-items: center;
          justify-content: center;
        }
      }
    }
  }
`;
