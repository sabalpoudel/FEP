"use client";
import { Theme } from "@mui/material";
import styled from "@emotion/styled";
import { breakpoint } from "../../../../style/mui/theme";

const AuthCarouselWrapper = styled.div<{ theme?: Theme }>`
  height: 100%;
  display: flex;
  align-items: center;
  background-color: ${({ theme }) => theme?.palette.common.white};
  ${breakpoint("ssm")} {
    display: none;
  }
`;

export { AuthCarouselWrapper };
