import { Swiper, SwiperSlide, SwiperProps, SwiperClass } from "swiper/react";
import {
  A11y,
  Autoplay,
  Scrollbar,
  Navigation,
  Pagination,
} from "swiper/modules";

import "swiper/css";
import "swiper/css/scrollbar";
import "swiper/css/navigation";
import "swiper/css/pagination";

type TProps = SwiperProps & {
  delay?: number;
  autoplay?: boolean;
  scrollbar?: boolean;
  pagination?: boolean;
  navigation?: boolean;
  spaceBetween?: number;
  slidesPerView?: number;
  slides: React.ReactNode[];
  onSwiper?: (swiper: SwiperClass) => void;
  onSlideChange?: (swiper: SwiperClass) => void;
};

export const CustomSwiper: React.FC<TProps> = ({
  slides,
  onSwiper,
  delay = 2500,
  onSlideChange,
  spaceBetween = 50,
  slidesPerView = 3,
  autoplay = false,
  scrollbar = false,
  pagination = false,
  navigation = false,
  ...rest
}) => {
  const handleOnSwiper = (swiper: SwiperClass) => {
    if (onSwiper) onSwiper(swiper);
  };

  const handleOnSlideChange = (swiper: SwiperClass) => {
    if (onSlideChange) onSlideChange(swiper);
  };

  return (
    <Swiper
      onSwiper={handleOnSwiper}
      spaceBetween={spaceBetween}
      slidesPerView={slidesPerView}
      onSlideChange={handleOnSlideChange}
      navigation={navigation || undefined}
      scrollbar={scrollbar ? { draggable: true } : undefined}
      pagination={pagination ? { clickable: true } : undefined}
      modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
      autoplay={autoplay ? { delay, disableOnInteraction: false } : undefined}
      {...rest}
    >
      {slides.map((slide, index) => (
        <SwiperSlide key={index}>{slide}</SwiperSlide>
      ))}
    </Swiper>
  );
};
