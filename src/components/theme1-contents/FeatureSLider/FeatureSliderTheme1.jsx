/* eslint-disable react/prop-types */
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./FeatureSliderTheme1.css";
import Theme1Card from "../../movie-card/theme1-card/Theme1Card";
import Theme1CardMobile from "../../movie-card/theme1-card-mobile/Theme1CardMobile";

const FeatureSliderTheme1 = ({ featuredPosts, featureLoading }) => {
  
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 8,
    slidesToScroll: 1,
    autoplay: true,
    initialSlide: 0,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    arrows: true,
    draggable: true,
    className: "theme1slider",
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
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
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
    <div className="w-full mt-5 ">
      <Slider {...settings}>
        {featuredPosts?.data?.map((item, i) => (
          <div key={i} className="px-2">
            <div className="hidden lg:block">
              <Theme1Card item={item} isLoading={featureLoading} />
            </div>

            <div className="lg:hidden">
              <Theme1CardMobile item={item} isLoading={featureLoading} />
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default FeatureSliderTheme1;
