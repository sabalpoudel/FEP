import styled from "@emotion/styled";
import { Theme } from "@mui/material";
import { AfterUnderlineStyle } from "../../../style/mui/utilsStyle";

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
      .cc {
        .cct-ul {
          gap: 2rem;
          display: flex;
          border-bottom: 1px solid lightgrey;
          padding: 0rem 0.5rem 0.1rem 0.5rem;
          .cct-ul-li {
            cursor: pointer;
            position: relative;
            transition: all 0.3s ease-in;
            ${({ theme }) =>
              AfterUnderlineStyle({
                left: "10%",
                height: "2px",
                bottom: "-0.6rem",
                bgColor: theme.palette.primary.main,
              })};
            &-active {
              &::after {
                left: 0;
                height: 2px;
                width: 105%;
              }
            }
          }
        }
      }
      .cc-tc-ul {
        display: flex;
        padding: 3rem 0;
        flex-direction: column;
        &-li {
          display: flex;
          padding-bottom: 6rem;
          &-vid {
            flex: 1;
            display: flex;
            flex-direction: column;
            &-title {
              gap: 1rem;
              display: flex;
              align-items: center;
              &-sub {
                gap: 0.5rem;
                display: flex;
                align-items: center;
              }
            }
            &-video {
              width: 100%;
              margin: 2rem 0;
              max-width: 700px;
              overflow: hidden;
              border-radius: 16px;
              background-color: ${({ theme }) =>
                theme?.palette.background.paper};
            }
          }
          &-progress {
            gap: 2rem;
            display: flex;
            padding: 0 1rem;
            flex-direction: column;
            &-title {
              font-weight: 100;
              text-transform: uppercase;
            }
            &-ul {
              gap: 1rem;
              display: flex;
              flex-direction: column;
              &-a {
                gap: 1rem;
                display: flex;
                align-items: center;

                &-avatar {
                  font-size: 1rem;
                }
                &-title {
                  flex: 1;
                  min-width: 150px;
                }
              }
            }
          }
        }
      }
      .cs-to {
        gap: 1rem;
        display: flex;
        padding: 3rem 0;
        flex-direction: column;
        &-flex {
          gap: 0.3rem;
          display: flex;
          align-items: center;
        }
        &-language {
          padding-bottom: 2rem;
        }
        &-detail {
          padding-bottom: 6rem;
          border-top: 1px solid lightgrey;
          border-bottom: 1px solid lightgrey;

          display: flex;
          &-left {
            flex: 1;
            padding-top: 3rem;
            padding-bottom: 2rem;
            border-right: 1px solid lightgrey;
          }
          &-right {
            flex: 3;
            padding-top: 3rem;
            padding-left: 2rem;
          }
        }

        &-description {
          gap: 3rem;
          display: flex;
          max-width: 800px;
          padding-top: 2rem;
        }
      }

      .cc-tr {
        gap: 1rem;
        display: flex;
        padding: 3rem 0;
        flex-direction: column;
      }

      .cc-tc {
        gap: 6rem;
        display: flex;
        padding: 3rem 0;
        flex-direction: column;

        &-comments {
          gap: 2rem;
          display: flex;
          flex-direction: column;

          &-item {
            padding: 1rem;
            border-radius: 25px;
            box-shadow: 0px 0px 3px 0px #d1c4c4;
            background-color: ${({ theme }) => theme?.palette.background.paper};

            gap: 1rem;
            display: flex;
            &-detail {
              flex: 1;
              &-name {
                gap: 1rem;
                display: flex;
                align-items: center;
              }
              &-stars {
              }
              &-reply {
                padding: 1rem 0;
              }
              &-actions {
                gap: 2rem;
                display: flex;
                align-items: center;
                padding-bottom: 1rem;
                &-like {
                  gap: 0.5rem;
                  display: flex;
                  align-items: center;
                }
                &-reply {
                  gap: 0.2rem;
                  display: flex;
                  align-items: center;
                }
              }
              &-replies {
                gap: 4rem;
                display: flex;
                align-items: center;
                &-input {
                  flex: 1;
                  &-field {
                    border: none;
                    padding: 0.5rem;
                    border-radius: 16px;
                    box-shadow: 0px 0px 3px 0px #d1c4c4;
                    background: ${({ theme }) => theme?.palette.common.white};
                    &:after {
                      border: transparent;
                    }
                    &:before {
                      border: transparent;
                    }
                    textarea {
                      padding: 0 1rem;
                    }
                    .MuiInputAdornment-root {
                      padding: 0 0.4rem;
                    }
                  }
                }
              }
            }
          }
        }
        &-reply {
          position: relative;
          &-input {
            border: none;
            padding: 0.5rem;
            border-radius: 16px;
            box-shadow: inset 1px 1px 4px rgba(0, 0, 0, 0.2);
            background-color: ${({ theme }) => theme?.palette.background.paper};
            &:after {
              border: transparent;
            }
            &:before {
              border: transparent;
            }
            textarea {
              padding: 0 1rem;
            }
            .MuiInputAdornment-root {
              padding: 0 0.4rem;
            }
          }
          &-btn {
            right: 1rem;
            bottom: 1rem;
            min-width: 100px;
            position: absolute;
          }
        }
      }
    }
  }
`;
