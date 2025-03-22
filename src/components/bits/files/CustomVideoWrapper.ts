import styled from "@emotion/styled";
import { Theme } from "@mui/material";

export const CustomVideoWrapper = styled.div<{ theme?: Theme }>`
  margin: auto;
  position: relative;
  background: ${({ theme }) => theme?.palette.background.paper};

  .cvw {
    &-video {
      width: 100%;
      cursor: pointer;
    }
    &-controls {
      bottom: 0;
      z-index: 1;
      width: 100%;
      position: absolute;
      &-bar {
        flex: 1;
        height: 0.5rem;
        background: #444;
        cursor: pointer;
        position: relative;
        &-progress {
          height: 100%;
          transition: width 0.2s;
          background: ${({ theme }) => theme?.palette.primary.main};
        }
      }
    }
    &-pause-play {
      inset: 0;
      cursor: pointer;
      position: absolute;
      background: transparent;

      display: flex;
      justify-content: center;
      align-items: center;
      &-btn {
        font-size: 6rem;
      }
    }
  }
`;
