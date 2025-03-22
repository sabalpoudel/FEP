"use client";
import { Theme } from "@mui/material";
import styled from "@emotion/styled";

export const MainLayoutWrapper = styled.div<{ theme?: Theme }>`
  --header-1-height: 40px;
  --header-2-height: 94px;
  --header-height: calc(var(--header-1-height) + var(--header-2-height));

  width: 100%;
  padding-top: var(--header-height);

  .mlw {
    &-main {
      width: 100%;
      margin: auto;
      padding: 1rem;
      overflow: hidden;
      min-height: 50vh;
      max-width: var(--max-screen-width);
    }
  }
`;
