import React from "react";
import { AuthFormsWrapper } from "./AuthFormsWrapper";

type TAuthForms = { className?: string };

const AuthForms: React.FC<TAuthForms> = (props) => {
  const {} = props;
  return (
    <AuthFormsWrapper className="afw">
      <div className="afw-wrapper"></div>
    </AuthFormsWrapper>
  );
};

export default AuthForms;
