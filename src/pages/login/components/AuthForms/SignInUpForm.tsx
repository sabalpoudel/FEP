import { useState } from "react";
import { Button, IconButton } from "@mui/material";
import { useTranslation } from "react-i18next";
import { Controller, FieldErrors, useForm } from "react-hook-form";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";

import { TAuthType } from "../../types";
import { useHookFormRules } from "../../../../utils";
import { InputField } from "../../../../components/bits/InputField";

type TSignInUpForm = {
  type: TAuthType;
};

const defaultValues = {
  name: "",
  email: "",
  password: "",
  confirmPassword: "",
};

type TForm = typeof defaultValues;
const SignInUpForm = (props: TSignInUpForm) => {
  const { type } = props;

  const r = useHookFormRules();
  const { t } = useTranslation();

  const [showPassword, setShowPassword] = useState(false);

  const {
    watch,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues,
  });
  const isSignIn = type === "signin";
  const watchPassword = watch("password");

  const onSubmit = (data: TForm) => console.info({ onSubmit: data });
  const onError = (data: FieldErrors) => {
    console.error({ onError: data });
  };
  const handleMouseDownPassword = () => {
    setShowPassword(true);
  };

  const handleMouseUpPassword = () => {
    setShowPassword(false);
  };

  const handleOnClickPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };

  const IconEye = (
    <IconButton
      edge="end"
      onClick={handleOnClickPassword}
      onMouseUp={handleMouseUpPassword}
      aria-label="toggle password visibility"
      onMouseDown={handleMouseDownPassword}
    >
      {showPassword ? <VisibilityOff /> : <Visibility />}
    </IconButton>
  );

  return (
    <form onSubmit={handleSubmit(onSubmit, onError)} className="siu-form">
      <Controller
        name="name"
        control={control}
        rules={{ required: r.required }}
        render={({ field }) => (
          <InputField
            fullWidth
            id="name"
            size="medium"
            label={t("name")}
            className="siu-form-field"
            placeholder={t("enter_a_name")}
            helperText={errors?.name?.message}
            error={Boolean(errors?.name?.message)}
            slotProps={{ input: { type: "name", autoComplete: "username" } }}
            {...field}
          />
        )}
      />
      <Controller
        name="email"
        defaultValue=""
        control={control}
        rules={{ required: r.required, pattern: r.emailPattern }}
        render={({ field }) => (
          <InputField
            fullWidth
            id="email"
            size="small"
            label={t("email")}
            className="siu-form-field"
            placeholder="name@example.com"
            helperText={errors?.email?.message}
            error={Boolean(errors?.email?.message)}
            slotProps={{ input: { type: "email", autoComplete: "username" } }}
            {...field}
          />
        )}
      />
      <Controller
        name="password"
        control={control}
        rules={{ required: r.required, pattern: r.passwordPattern }}
        render={({ field }) => (
          <InputField
            fullWidth
            id="password"
            endAdornment={IconEye}
            label={t("password")}
            className="siu-form-field"
            placeholder="******************"
            helperText={errors?.password?.message}
            error={Boolean(errors?.password?.message)}
            slotProps={{
              input: {
                autoComplete: "new-password",
                type: showPassword ? "text" : "password",
              },
            }}
            {...field}
          />
        )}
      />
      {!isSignIn && (
        <Controller
          control={control}
          name="confirmPassword"
          rules={{
            required: r.required,
            validate: (value) => value === watchPassword || r.confirmPwMsg,
          }}
          render={({ field }) => (
            <InputField
              fullWidth
              id="confirm_password"
              endAdornment={IconEye}
              label={t("confirm_password")}
              className="siu-form-field"
              placeholder="******************"
              helperText={errors?.confirmPassword?.message}
              error={Boolean(errors?.confirmPassword?.message)}
              slotProps={{
                input: {
                  autoComplete: "new-password",
                  type: showPassword ? "text" : "password",
                },
              }}
              {...field}
            />
          )}
        />
      )}
      <Button
        fullWidth
        size="large"
        type="submit"
        disableElevation
        variant="contained"
        className="siu-form-button"
      >
        {t(isSignIn ? "sign_in" : "sign_up")}
      </Button>
    </form>
  );
};

export default SignInUpForm;
