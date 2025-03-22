import React, { ReactNode } from "react";

import Header from "./header";
import Footer from "./footer";
import { CourseLayoutWrapper } from "./CourseLayoutWrapper";

type TMainLayoutProps = {
  children: ReactNode;
  className?: string;
};

const CourseLayout: React.FC<TMainLayoutProps> = ({ children }) => {
  return (
    <CourseLayoutWrapper className="clw">
      <Header />
      {children}
      <Footer />
    </CourseLayoutWrapper>
  );
};

export default CourseLayout;
