import React from "react";
import { useTranslation } from "react-i18next";
import { Link, useSearchParams } from "react-router-dom";

import { Button, Typography } from "@mui/material";

import { TAuthType } from "../../types";
import { AuthFormsWrapper } from "./AuthFormsWrapper";
import SignInUpForm from "./SignInUpForm";

type TAuthForms = { className?: string };

const AuthForms: React.FC<TAuthForms> = (props) => {
  const {} = props;

  const { t } = useTranslation();

  const [searchParams, setSearchParams] = useSearchParams();
  const queryType = searchParams.get("type");
  const type: TAuthType = queryType === "signup" ? "signup" : "signin";
  const isSignIn = type === "signin";

  const toggleAuthType = () => {
    setSearchParams({ type: isSignIn ? "signup" : "signin" });
  };

  return (
    <AuthFormsWrapper className="afw">
      <div className="afw-wrapper">
        <div className="afw-wrapper-logo">
          <img
            alt="FEP.Logo"
            className="afw-wrapper-logo"
            src="/assets/images/logo/Logo.png"
          />
        </div>
        <div className="afw-wrapper-title">
          <Typography align="center" variant="h3" component="h1">
            <strong>{t("get_started")}</strong>
          </Typography>
          <Typography
            align="center"
            variant="body2"
            component="div"
            className="afw-wrapper-title-sub"
          >
            <Typography color="textSecondary">
              {t(
                isSignIn ? "do_not_have_an_account" : "already_have_an_account"
              )}
            </Typography>
            <Button color="primary" onClick={toggleAuthType}>
              <u>{t(isSignIn ? "sign_up" : "sign_in")}</u>
            </Button>
          </Typography>
        </div>
        <div className="afw-wrapper-form">
          <SignInUpForm type={type} />
        </div>
        <div className="afw-wrapper-footer">
          <Typography
            variant="body2"
            component="div"
            color="textSecondary"
            className="afw-wrapper-footer-texts"
          >
            <Typography>{t("by_signing_up_you_agree_to_our")}</Typography>
            <Typography component={Link} to="/privacy" color="textSecondary">
              <u>{t("privacy_policy")}</u>
            </Typography>
          </Typography>
        </div>
      </div>
    </AuthFormsWrapper>
  );
};

export default AuthForms;
