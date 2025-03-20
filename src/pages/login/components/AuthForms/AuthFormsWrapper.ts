"use client";
import { Theme } from "@mui/material";
import styled from "@emotion/styled";

export const AuthFormsWrapper = styled.div<{ theme?: Theme }>`
  height: 100%;
  display: flex;
  align-items: center;
  border-right: 1px solid;
  border-color: ${({ theme }) => theme?.palette.action.disabledBackground};
  .afw {
    &-wrapper {
      width: 100%;
      height: 100%;
      display: flex;
      padding: 4rem;
      flex-direction: column;
      justify-content: space-between;

      &-logo {
        width: 80%;
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
