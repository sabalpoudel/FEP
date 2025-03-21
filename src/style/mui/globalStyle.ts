import styled from "@emotion/styled";
import { MAX_WIDTH } from "./constant";

const GlobalStyleWrapper = styled.div`
  margin: auto;
  width: 100vw;
  height: 100vh;
  --max-screen-width: ${MAX_WIDTH};

  a {
    text-decoration: none;
  }
  .gsw {
    &-main {
      width: 100%;
      height: 100%;
      margin: auto;
    }
  }
  .my-toast[data-sonner-toast] button[data-close-button] {
    right: 0;
    left: unset;
    transform: translate(35%, -35%);
  }

  [data-sonner-toaster][data-theme="light"] {
    --normal-bg: var(--background);
    --normal-border: var(--background-start-rgb);
    --normal-text: #3d4548; /* Matches light palette text.primary */

    --success-bg: var(--success-light);
    --success-border: var(--success-medium);
    --success-text: #ffffff; /* Color code for success text */

    --info-bg: var(--info-light);
    --info-border: var(--info-medium);
    --info-text: #ffffff; /* Color code for info text */

    --warning-bg: var(--warning-light);
    --warning-border: var(--warning-medium);
    --warning-text: #ffffff; /* Color code for warning text */

    --error-bg: var(--error-light);
    --error-border: var(--error-medium);
    --error-text: #ffffff; /* Color code for error text */
  }
`;
export { GlobalStyleWrapper };
