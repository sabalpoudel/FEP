// LoadingButton.tsx
import React from "react";
import { Theme } from "@mui/material";
import { useTheme } from "@emotion/react";
import Button, { ButtonProps } from "@mui/material/Button";

import { Spinner } from "./Spinner";

type TButton = ButtonProps & {
  isLoading?: boolean;
  noGradient?: boolean;
};

const ButtonComp: React.FC<TButton> = ({
  sx = {},
  children,
  disabled,
  noGradient = false,
  isLoading = false,
  ...props
}) => {
  const theme = useTheme() as Theme;
  const isDisabled = disabled || isLoading;

  return (
    <Button
      disableElevation
      variant="contained"
      disabled={isDisabled}
      {...props}
      sx={{
        position: "relative",
        color: noGradient ? undefined : theme.palette.common.white,
        background: noGradient ? undefined : theme.palette.background.gradient,
        ...sx,
      }}
    >
      {isLoading && (
        <Spinner size={16} color="inherit" style={{ marginRight: 8 }} />
      )}
      {children}
    </Button>
  );
};

export default ButtonComp;
