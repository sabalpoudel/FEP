import React from "react";
import { AuthCarouselWrapper } from "./AuthCarouselWrapper";

type TAuthCarousel = { className?: string };

const AuthCarousel: React.FC<TAuthCarousel> = (props) => {
  const {} = props;
  return (
    <AuthCarouselWrapper className="afw">
      <div className="afw-wrapper"></div>
    </AuthCarouselWrapper>
  );
};

export default AuthCarousel;
