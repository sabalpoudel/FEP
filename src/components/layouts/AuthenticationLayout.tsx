import React, { ReactNode } from "react";
import { AuthenticationLayoutWrapper } from "./AuthenticationLayoutWrapper";

type TAuthenticationLayoutProps = {
  children: ReactNode;
  className?: string;
};

const AuthenticationLayout: React.FC<TAuthenticationLayoutProps> = ({
  children,
}) => {
  return (
    <AuthenticationLayoutWrapper className="alw">
      <div className="alw-wrapper">{children}</div>
    </AuthenticationLayoutWrapper>
  );
};

export default AuthenticationLayout;
