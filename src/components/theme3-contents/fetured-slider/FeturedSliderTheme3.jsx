import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useFeaturedPostsQuery } from "../../../redux/features/movies/movieApi";
import "./FeturedSliderTheme3.css";
// import FeaturedCardTheme3 from "./FeaturedCardTheme3";
import CardTheme3 from "../card-theme3/CardTheme3";

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
        <>
          <div className="hidden lg:flex justify-between mt-5">
            {Array.from({ length: 5 }).map((item, i) => (
              <div
                key={i}
                className="w-[300px] mx-auto h-[600px] lg:w-[160px] lg:h-[285px] flex flex-col justify-between"
              >
                <div className="w-full h-[82%] bg-slate-600 animate-pulse"></div>
                <div className="w-full h-[15%] bg-slate-600 animate-pulse"></div>
              </div>
            ))}
          </div>

          <div className="flex lg:hidden justify-between mt-5">
            {Array.from({ length: 3 }).map((item, i) => (
              <div
                key={i}
                className="w-[300px] mx-auto h-[600px] lg:w-[160px] lg:h-[285px] flex flex-col justify-between"
              >
                <div className="w-full h-[480px] bg-slate-600 animate-pulse"></div>
                <div className="w-full h-[100px] bg-slate-600 animate-pulse"></div>
              </div>
            ))}
          </div>
        </>
      ) : (
        <div className="featuredSlider3 mt-4">
          <Slider {...settings}>
            {featuredPosts?.data?.slice(0, 5)?.map((item, i) => (
              <div key={i} className="p-[5px] lg:p-0 h-[550px] lg:h-full"><CardTheme3  item={item}/></div>
              // <FeaturedCardTheme3 key={i} item={item} />
            ))}
          </Slider>
        </div>
      )}
    </>
  );
};

export default FeaturedSlider3;
