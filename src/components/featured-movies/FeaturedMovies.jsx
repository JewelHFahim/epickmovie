import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "./FeaturedMovies.css";
import { Link } from "react-router-dom";
import { FaPlay } from "react-icons/fa";

export default function FeaturedMovies({ featuredPosts }) {

  console.log(featuredPosts)

  return (
    <>
      <Swiper
        breakpoints={{
          600: {
            slidesPerView: 1,
          },

          768: {
            slidesPerView: 1,
          },

          1024: {
            slidesPerView: 5,
            spaceBetween: 30,
          },
        }}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={false}
        loop={true}
        navigation={false}
        modules={[Autoplay, Pagination, Navigation]}
        className="grid grid-cols-2 lg:grid-cols-5 gap-[25px] my-[18px]"
      >


        {featuredPosts?.data?.map((item, i) => (
          <SwiperSlide key={i}>
            <div className="lg:bg-gradient-to-t from-[#ff1818] to-[#fdd506] h-[460px] p-[4px] lg:p-[2px] rounded-[10px] relative playBtnCont px-5 lg:px-[2px]">
              <Link to={item?.post_type === "movies" ? `/movie/${item?.id}/${item?.post_title}` : `/series/${item?.id}/${item?.post_title}`} 
                className={`w-full h-full rounded-[10px] flex flex-col items-center bg-[#27272A] overflow-hidden relative`}
              >
                <img
                  src={item?.poster_image_url}
                  className="w-full rounded-tr-[10px] rounded-tl-[10px] object-contain posterImg"
                />

                <p className="hidden lg:block text-center text-white font-[700] text-[33px] lg:text-[16px] p-4 lg:p-2 font-alef">
                  {item?.post_title?.length <= 80
                    ? item?.post_title
                    : item?.post_title?.slice(0, 80)}
                </p>

                <div className="lg:hidden absolute bottom-5 bg-black bg-opacity-[50%] px-8 py-5">
                  <p className=" text-[35px] text-white font-medium">
                    {item?.post_title?.length <= 80
                      ? item?.post_title
                      : item?.post_title?.slice(0, 80)}
                  </p>
                </div>

                <div className="playBtn">
                  <FaPlay className="text-[50px] text-white" />
                </div>
              </Link>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
