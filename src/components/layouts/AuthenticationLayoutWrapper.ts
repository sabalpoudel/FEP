"use client";
import { Theme } from "@mui/material";
import styled from "@emotion/styled";

export const AuthenticationLayoutWrapper = styled.div<{ theme?: Theme }>`
  --max-form-width: 100%;
  --max-form-height: 100%;
  --max-form-side-width: 50%;

  max-width: var(--max-form-width);

  margin: auto;
  height: 100vh;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  background-color: ${({ theme }) => theme?.palette.background.default};

  .alw {
    &-wrapper {
      width: 100%;
      height: 100%;
      border: 1px solid;
      max-height: var(--max-form-height);
      border-color: ${({ theme }) => theme?.palette.action.disabledBackground};
    }
  }
`;
