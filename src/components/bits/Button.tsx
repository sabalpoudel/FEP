// LoadingButton.tsx
import React from "react";
import { Theme } from "@mui/material";
import { useTheme } from "@emotion/react";
import Button, { ButtonProps } from "@mui/material/Button";

import { Spinner } from "./Spinner";

type TButton = ButtonProps & {
  isLoading?: boolean;
};

const ButtonComp: React.FC<TButton> = ({
  isLoading = false,
  disabled,
  children,
  sx = {},
  ...props
}) => {
  const isDisabled = disabled || isLoading;
  const theme = useTheme() as Theme;

  console.log({ theme });
  return (
    <Button
      disableElevation
      variant="contained"
      disabled={isDisabled}
      {...props}
      sx={{
        position: "relative",
        color: theme.palette.common.white,
        background: theme.palette.background.gradient,
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
