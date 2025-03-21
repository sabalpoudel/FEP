import React from "react";
import { AuthCarouselWrapper } from "./AuthCarouselWrapper";
import { CustomSwiper } from "../../../../components/bits/Swiper/SwiperComp";
import { Typography } from "@mui/material";
import { useTranslation } from "react-i18next";

type TAuthCarousel = { className?: string };

const slides = [
  {
    img_src: "/assets/images/banner/banner.webp",
    text_key: "celebrate_earth_day_with_us",
  },
  {
    img_src: "/assets/images/banner/banner.webp",
    text_key: "celebrate_earth_day_with_us",
  },
  {
    text_key: "celebrate_earth_day_with_us",
    img_src: "/assets/images/banner/banner.webp",
  },
];

const AuthCarousel: React.FC<TAuthCarousel> = (props) => {
  const {} = props;
  const { t } = useTranslation();

  const Slides = slides.map(({ text_key, img_src }, j: number) => {
    return (
      <div key={text_key} className="afw-wrapper-swiper-slide">
        <img
          src={img_src}
          alt={text_key}
          className="afw-wrapper-swiper-slide-img"
        />
        <Typography
          variant="h4"
          align="center"
          className="afw-wrapper-swiper-slide-text"
        >
          {t(`Banner.${text_key}`)}&nbsp;{j}
        </Typography>
      </div>
    );
  });

  return (
    <AuthCarouselWrapper className="afw">
      <div className="afw-wrapper">
        <CustomSwiper
          delay={5000}
          slides={Slides}
          autoplay={true}
          slidesPerView={1}
          pagination={true}
          className="afw-wrapper-swiper"
        />
      </div>
    </AuthCarouselWrapper>
  );
};

export default AuthCarousel;
