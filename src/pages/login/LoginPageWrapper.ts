"use client";
import { Theme } from "@mui/material";
import styled from "@emotion/styled";

export const LoginPageWrapper = styled.div<{ theme?: Theme }>`
  width: 100%;
  height: 100%;
  margin: auto;
  display: flex;
  align-items: center;
  max-width: var(--max-screen-width);
  background-color: ${({ theme }) => theme?.palette.common.white};

  & > div {
    height: 100%;
    width: var(--max-form-side-width);
  }
`;
