import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useFeaturedPostsQuery } from "../../../redux/features/movies/movieApi";
import "./SliderTheme3.css";

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
          slidesToShow: 2,
          slidesToScroll: 2,
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
    <div className="slider-container sliderTheme3 mb-10">
      <Slider {...settings}>
        {featuredPosts?.data?.map((item, i) => (
          <div key={i} className="w-[380px] h-[240px] px-1">
            {featureLoading ? (
              <div className=" w-full h-[240px] bg-slate-700 animate-pulse"></div>
            ) : (
              <div className="relative w-full h-full flex flex-col justify-end items-center hover:scale-[1.02] transition-all ease-in-out">
                <div className="z-10 w-full h-full absolute bg-gradient-to-t from-black from-8% via-transparent via-40%"></div>
                <div className="absolute bottom-3 z-20 w-full mx-auto px-4 text-center">
                  <p className="text-[#DFDFDF] text-xl">
                    {item?.post_im_title}
                  </p>
                </div>
                <img
                  src={item?.poster_image_url}
                  alt="poster image"
                  className="w-full h-full object-cover "
                />
              </div>
            )}
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default SliderTheme3;
