// InputField.tsx
import React from "react";
import { InputProps } from "@mui/material";
import InputAdornment from "@mui/material/InputAdornment";
import TextField, { TextFieldProps } from "@mui/material/TextField";

type TInputField = TextFieldProps & {
  endAdornment?: React.ReactNode;
  startAdornment?: React.ReactNode;
};

export const InputField: React.FC<TInputField> = ({
  slotProps,
  endAdornment,
  startAdornment,
  ...props
}) => {
  const ip = slotProps?.input as InputProps;
  return (
    <TextField
      variant="standard"
      {...props}
      slotProps={{
        htmlInput: { ...slotProps?.htmlInput },
        inputLabel: { ...slotProps?.inputLabel },
        input: {
          ...ip,
          startAdornment: startAdornment ? (
            <InputAdornment position="start">{startAdornment}</InputAdornment>
          ) : (
            ip?.startAdornment
          ),
          endAdornment: endAdornment ? (
            <InputAdornment position="end">{endAdornment}</InputAdornment>
          ) : (
            ip?.endAdornment
          ),
        },
      }}
    />
  );
};
