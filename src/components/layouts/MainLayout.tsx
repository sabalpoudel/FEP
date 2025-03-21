import React, { ReactNode } from "react";

import Header from "./header";
import { MainLayoutWrapper } from "./MainLayoutWrapper";
import Footer from "./footer";

type TMainLayoutProps = {
  children: ReactNode;
  className?: string;
};

const MainLayout: React.FC<TMainLayoutProps> = ({ children }) => {
  return (
    <MainLayoutWrapper className="mlw">
      <Header />
      <main className="mlw-main">{children}</main>
      <Footer />
    </MainLayoutWrapper>
  );
};

export default MainLayout;
