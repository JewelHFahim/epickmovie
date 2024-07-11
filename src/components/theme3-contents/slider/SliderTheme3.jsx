import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useFeaturedPostsQuery } from "../../../redux/features/movies/movieApi";
import "./SliderTheme3.css";
import SliderCardTheme3 from "./SliderCardTheme3";

const SliderTheme3 = () => {
  const { data: featuredPosts, isLoading: featureLoading } = useFeaturedPostsQuery();

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
        <div className="flex items-center justify-between gap-x-2 mb-4">
          {Array.from({ length: 2 }).map((item, i) => (
            <div
              key={i}
              className="w-full h-[247px] bg-slate-700   animate-pulse"
            ></div>
          ))}
        </div>
      ) : (
        <div className="slider-container sliderTheme3 mb-10">
          <Slider {...settings}>
            {featuredPosts?.data?.map((item, i) => (
              <div key={i} className="w-full h-[400px] lg:w-[380px] lg:h-[240px] px-1 cursor-pointer">
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
