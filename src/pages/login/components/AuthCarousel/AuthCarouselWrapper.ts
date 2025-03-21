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
  .afw {
    &-wrapper {
      width: 100%;
      height: 100%;
      &-swiper {
        width: 100%;
        height: 100%;
        &-slide {
          width: 100%;
          height: 100%;
          position: relative;
          &-img {
            width: 100%;
            height: 100%;
            object-fit: cover;
          }
          &-text {
            left: 0;
            right: 0;
            color: #fff;
            bottom: 2rem;
            padding: 1rem;
            position: absolute;
          }
        }
      }
    }
  }
`;

export { AuthCarouselWrapper };
