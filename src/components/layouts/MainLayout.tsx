import React, { ReactNode } from "react";

import Header from "./header";
import { MainLayoutWrapper } from "./MainLayoutWrapper";

type TMainLayoutProps = {
  children: ReactNode;
  className?: string;
};

const MainLayout: React.FC<TMainLayoutProps> = ({ children }) => {
  return (
    <MainLayoutWrapper className="mlw">
      <Header />
      {children}
    </MainLayoutWrapper>
  );
};

export default MainLayout;
