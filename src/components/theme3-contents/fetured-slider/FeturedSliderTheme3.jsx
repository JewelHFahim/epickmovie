import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useFeaturedPostsQuery } from "../../../redux/features/movies/movieApi";
import "./FeturedSliderTheme3.css";
import FeaturedCardTheme3 from "./FeaturedCardTheme3";

const FeaturedSlider3 = () => {
  const { data: featuredPosts, isLoading: featureLoading } =
    useFeaturedPostsQuery();

  var settings = {
    dots: false,
    autoplay: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
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
        <div className="flex justify-between mt-5">
          {Array.from({ length: 5 }).map((item, i) => (
            <div
              key={i}
              className="w-[160px] h-[280px] flex flex-col justify-between"
            >
              <div className="w-full h-[220px] bg-slate-600 animate-pulse"></div>
              <div className="w-full h-[40px] bg-slate-600 animate-pulse"></div>
            </div>
          ))}
        </div>
      ) : (
        <div className="featuredSlider3 mt-4">
          <Slider {...settings}>
            {featuredPosts?.data?.slice(0, 5)?.map((item, i) => (
              // <CardTheme3 key={i} item={item} />
              <FeaturedCardTheme3 key={i} item={item}/>
            ))}
          </Slider>
        </div>
      )}
    </>
  );
};

export default FeaturedSlider3;
