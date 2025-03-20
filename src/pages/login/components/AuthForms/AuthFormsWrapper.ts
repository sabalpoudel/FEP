"use client";
import { Theme } from "@mui/material";
import styled from "@emotion/styled";

export const AuthFormsWrapper = styled.div<{ theme?: Theme }>`
  height: 100%;
  display: flex;
  align-items: center;
  border-right: 1px solid;
  background-color: ${({ theme }) => theme?.palette.common.white};
  border-color: ${({ theme }) => theme?.palette.action.disabledBackground};
`;
