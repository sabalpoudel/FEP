"use client";
import { Theme } from "@mui/material";
import styled from "@emotion/styled";

export const DashboardPageWrapper = styled.div<{ theme?: Theme }>`
  .dpw {
    &-top {
      text-align: right;
      &-btn {
        width: 200px;
        font-size: 1.2rem;
      }
    }
    &-main {
      padding: 2rem 0;
      .vcc-ul {
        gap: 2rem;
        display: flex;
        flex-direction: column;
        &-li {
          gap: 2rem;
          display: flex;
          padding-bottom: 2rem;
          border-bottom: 1px solid lightgrey;
          &-img {
            width: 240px;
            height: 150px;
            overflow: hidden;
            font-size: 0.65rem;
            border-radius: 8px;
            background: ${({ theme }) => theme?.palette.background.paper};
            img {
              width: 100%;
              height: 100%;
              object-fit: cover;
            }
          }
          &-content {
            gap: 2rem;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            h6 {
              font-weight: 600;
            }
          }
          &-action {
            &-btn {
              padding: 0;
              width: 100px;
            }
          }
        }
      }
      .sic-ul {
        gap: 2rem;
        display: flex;
        padding: 2rem 0;
        flex-wrap: wrap;
        padding: 3rem 0;
        border-bottom: 1px solid lightgrey;

        &-li {
          gap: 1rem;
          display: flex;
          flex-direction: column;
          &-img {
            width: 240px;
            height: 150px;
            overflow: hidden;
            font-size: 0.65rem;
            border-radius: 16px;
            background: ${({ theme }) => theme?.palette.background.paper};
            img {
              width: 100%;
              height: 100%;
              object-fit: cover;
            }
          }
        }
      }
      .lic-ul {
        gap: 2rem;
        display: flex;
        padding: 2rem 0;
        flex-wrap: wrap;
        padding: 3rem 0;
        &-li {
          gap: 1rem;
          display: flex;
          flex-direction: column;
          &-skeleton {
            border-radius: 16px;
            background: ${({ theme }) => theme?.palette.background.paper};
          }
        }
      }
    }
  }
`;
