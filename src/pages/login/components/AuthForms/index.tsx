import React from "react";
import { Typography } from "@mui/material";
import { useTranslation } from "react-i18next";

import { AuthFormsWrapper } from "./AuthFormsWrapper";

type TAuthForms = { className?: string };

const AuthForms: React.FC<TAuthForms> = (props) => {
  const {} = props;
  const { t } = useTranslation();

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
              {t("already_have_an_account")}
            </Typography>
            <Typography component="u" color="primary">
              {t("sign_in")}
            </Typography>
          </Typography>
        </div>
        <div className="afw-wrapper-form"></div>
        <div className="afw-wrapper-footer">
          <Typography
            variant="body2"
            color="textSecondary"
            component="div"
            className="afw-wrapper-footer-texts"
          >
            <Typography>{t("by_signing_up_you_agree_to_our")}</Typography>
            <Typography component="u">{t("privacy_policy")}</Typography>
          </Typography>
        </div>
      </div>
    </AuthFormsWrapper>
  );
};

export default AuthForms;
