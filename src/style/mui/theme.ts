import { arEG, enUS } from "@mui/material/locale";
import { createTheme, Direction } from "@mui/material/styles";

import { BREAKPOINTS } from "./constant";
import { lightPalette } from "./palette";
import { TLang } from "../../config/config";

export type customInitialProps = {
  lang?: TLang;
  rtl?: boolean;
  darkTheme?: boolean;
};

export type ThemeExtended = customInitialProps;

const cusTheme = {
  dir: "ltr",
  direction: "ltr",
  palette: lightPalette,
  typography: {
    fontFamily: ["Roboto", '"Helvetica Neue"', "sans-serif"].join(","),
    button: {
      textTransform: "capitalize" as const,
    },
  },
  components: {
    MuiDivider: {
      styleOverrides: {
        root: { height: "3px" },
      },
    },
    MuiButton: {
      styleOverrides: {},
    },
  },
};

const getTheme = ({
  rtl = false,
  lang = "en",
  darkTheme = false,
}: ThemeExtended) => {
  let palette = darkTheme ? lightPalette : lightPalette;
  let styles = {
    ...cusTheme,
    palette,
    dir: rtl ? "rtl" : "ltr",
    direction: rtl ? "rtl" : ("ltr" as Direction),
  };
  return createTheme({ ...styles }, lang === "en" ? enUS : arEG); // TS_FIX_ME
};

export const breakpoint = (
  size: string,
  hw: "height" | "width" = "width",
  pos: "max" | "min" = "max"
) => `@media (${pos}-${hw}: ${BREAKPOINTS[hw][size]})`;

export { cusTheme, getTheme };
