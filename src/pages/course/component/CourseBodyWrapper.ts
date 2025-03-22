import styled from "@emotion/styled";
import { Theme } from "@mui/material";

export const CourseBodyWrapper = styled.div<{ theme?: Theme }>`
  min-height: 50vh;
  background-color: ${({ theme }) => theme?.palette.background.paper2};
  .cbw {
    &-wrapper {
      margin: auto;
      padding: 2rem;
      max-width: var(--max-screen-width);

      .cd {
        padding: 2rem 0 4rem 0;
      }
    }
  }
`;
