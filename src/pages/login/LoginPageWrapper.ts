"use client";
import { Theme } from "@mui/material";
import styled from "@emotion/styled";

export const LoginPageWrapper = styled.div<{ theme?: Theme }>`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  background-color: ${({ theme }) => theme?.palette.common.white};

  & > div {
    height: 100%;
    // border: 1px solid;
    width: var(--max-form-side-width);
    // border-color: ${({ theme }) => theme?.palette.text.hint};
  }
`;
