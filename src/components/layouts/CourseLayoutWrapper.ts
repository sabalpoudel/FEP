import { Theme } from "@mui/material";
import styled from "@emotion/styled";

export const CourseLayoutWrapper = styled.div<{ theme?: Theme }>`
  --header-1-height: 40px;
  --header-2-height: 94px;
  --header-3-height: 50px;
  --header-height: calc(
    var(--header-1-height) + var(--header-2-height) + var(--header-3-height)
  );

  width: 100%;
  padding-top: var(--header-height);
`;
