import React from "react";
import { ThemeProvider, CssBaseline, Box } from "@mui/material";

import { MainRoutes } from "./MainRoutes";
import { getTheme } from "./style/mui/theme";
import { GlobalStyleWrapper } from "./style/mui/globalStyle";
import "./style/globals.css";

export default function MyApp() {
  const cusTheme = getTheme({});

  return (
    <React.Fragment>
      <ThemeProvider theme={cusTheme}>
        <CssBaseline enableColorScheme />
        <GlobalStyleWrapper className={"gsw"}>
          <Box className="gsw-main">
            <MainRoutes />
          </Box>
        </GlobalStyleWrapper>
      </ThemeProvider>
    </React.Fragment>
  );
}
