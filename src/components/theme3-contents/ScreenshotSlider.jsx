/* eslint-disable react/prop-types */
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper/modules";

const ScreenshotSlider = ({ screenshots }) => {
  return (
    <>
      <Swiper
        slidesPerView={1}
        spaceBetween={10}
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 10,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 10,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 10,
          },
        }}
        modules={[Autoplay, Pagination]}
        className="mySwiper"
      >
        {screenshots?.map((item, i) => (
          <SwiperSlide key={i}>
            <img src={item} alt="" className="w-full h-full object-cover" />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default ScreenshotSlider;
