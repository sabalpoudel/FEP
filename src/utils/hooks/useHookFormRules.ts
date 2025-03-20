import { useTranslation } from "react-i18next";

import {
  isUrlRegex,
  isEmailRegex,
  isPhoneRegex,
  isNumberRegex,
  isIntegerRegex,
  strongPasswordRegex,
  isPhoneWithCodeRegex,
} from "..";
// import { TSelectOpt } from "@components/bits/Select";
export const useHookFormRules = () => {
  const { t } = useTranslation();
  return {
    required: t("HookForm.required"),
    invalidMsg: t("HookForm.invalid_value"),
    confirmPwMsg: t("HookForm.password_mismatch"),
    passwordPattern: {
      value: strongPasswordRegex,
      message: t("HookForm.weak_password"),
    },
    isUrlPattern: { value: isUrlRegex, message: t("HookForm.invalid_url") },
    emailPattern: { value: isEmailRegex, message: t("HookForm.invalid_email") },
    isPhonePattern: {
      value: isPhoneRegex,
      message: t("HookForm.invalid_phone"),
    },
    isPhoneWithCodePattern: {
      value: isPhoneWithCodeRegex,
      message: t("HookForm.invalid_phone"),
    },
    isNumberPattern: {
      value: isNumberRegex,
      message: t("HookForm.invalid_number"),
    },
    isIntegerPattern: {
      value: isIntegerRegex,
      message: t("HookForm.invalid_number"),
    },
    // validateEmail: (value: TSelectOpt<unknown> | string) => {
    validateEmail: (value: any | string) => {
      console.info({ isEmailValid: value });
      return (
        isEmailRegex.test(typeof value === "string" ? value : value?.label) ||
        t("HookForm.invalid_email")
      );
    },
  };
};
