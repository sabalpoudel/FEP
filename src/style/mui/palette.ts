import { PaletteMode } from "@mui/material";

const lightPalette = {
  mode: "light" as PaletteMode, // light or dark
  common: {
    black: "#222",
    white: "#fff",
  },
  background: {
    paper: "#E8EBEF",
    light: "#FFF7DD",
    default: "#FAFAFA",
    // default: "#FDF1B8",
    gradient: "linear-gradient(90deg, #F9A825 0%, #FDE992 100%)",
  },
  primary: {
    main: "#F9A825",
    dark: "#D48806",
    light: "#FFECB3",
    contrastText: "#222",
  },
  success: {
    light: "#42ba96",
    main: "#42ba96",
    dark: "#2E7D32",
    contrastText: "#fff",
  },
  secondary: {
    light: "#EAF6FF",
    main: "#87cefa",
    dark: "#0071b4",
    contrastText: "#fff",
  },
  warning: {
    light: "#FFEE58",
    main: "#FBC02D",
    dark: "#F57F17",
    contrastText: "#222",
  },
  error: {
    light: "#E57373",
    main: "#D32F2F",
    dark: "#9F3B23",
    contrastText: "#fff",
  },
  text: {
    text2: "#7a6982",
    primary: "#3D4548",
    secondary: "#5C5C5C",
    disabled: "rgba(0, 0, 0, 0.38)",
    hint: "rgba(0, 0, 0, 0.38)",
  },
  action: {
    active: "rgba(0, 0, 0, 0.54)",
    hover: "rgba(0, 0, 0, 0.08)",
    hoverOpacity: 0.08,
    selected: "rgba(0, 0, 0, 0.14)",
    disabled: "rgba(0, 0, 0, 0.26)",
    disabledBackground: "rgba(0, 0, 0, 0.12)",
  },
};

export { lightPalette };
