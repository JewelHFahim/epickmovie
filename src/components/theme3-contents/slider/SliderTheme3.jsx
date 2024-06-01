import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useFeaturedPostsQuery } from "../../../redux/features/movies/movieApi";
import "./SliderTheme3.css";
import SliderCardTheme3 from "./SliderCardTheme3";

const SliderTheme3 = () => {
  const { data: featuredPosts, isLoading: featureLoading } =
    useFeaturedPostsQuery();

  var settings = {
    dots: true,
    autoplay: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 2,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <>
      {featureLoading ? (
        <div className="flex items-center justify-between gap-x-5 my-4">
          {Array.from({ length: 2 }).map((item, i) => (
            <div
              key={i}
              className="w-full h-[240px] bg-slate-700   animate-pulse"
            ></div>
          ))}
        </div>
      ) : (
        <div className="slider-container sliderTheme3 mb-10">
          <Slider {...settings}>
            {featuredPosts?.data?.map((item, i) => (
              <div
                key={i}
                className="w-full h-[400px] lg:w-[380px] lg:h-[240px] px-1 cursor-pointer"
              >
                {/* <div className="relative w-full h-full flex flex-col justify-end items-center hover:scale-[1.02] transition-all ease-in-out">
                  <div className="z-10 w-full h-full absolute bg-gradient-to-t from-black from-8% via-transparent via-40%"></div>
                  <div className="absolute bottom-3 z-20 w-full mx-auto px-4 text-center">
                    <p className="text-[#DFDFDF] text-[35px] lg:text-xl">
                      {item?.post_im_title}
                    </p>
                  </div>
                  <img
                    src={item?.poster_image_url}
                    alt="poster image"
                    className="w-full h-full object-cover "
                  />

                  <div className="absolute z-50 bottom-0 right-0 bg-red-700 px-4 lg:px-2 lg:text-sm text-white capitalize py-[2px]">
                    {item?.post_type}
                  </div>
                </div> */}

                <SliderCardTheme3 key={i} item={item} />
              </div>
            ))}
          </Slider>
        </div>
      )}
    </>
  );
};

export default SliderTheme3;
