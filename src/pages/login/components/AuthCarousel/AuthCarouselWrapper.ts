"use client";
import { Theme } from "@mui/material";
import styled from "@emotion/styled";

const AuthCarouselWrapper = styled.div<{ theme?: Theme }>`
  height: 100%;
  display: flex;
  align-items: center;
  background-color: ${({ theme }) => theme?.palette.common.white};
`;

export { AuthCarouselWrapper };
