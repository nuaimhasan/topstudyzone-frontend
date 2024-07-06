import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper/modules";

export default function BannerSlider() {
  return (
    <section>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img
            src="/images/banner.png"
            alt=""
            className="w-full h-32 sm:h-52"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="/images/banner.png"
            alt=""
            className="w-full h-32 sm:h-52"
          />
        </SwiperSlide>
      </Swiper>
    </section>
  );
}
