import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SliderCard from "./SliderCard";

function MainSliderSlick({ featuredPosts }) {

  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    initialSlide: 0,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    arrows: true,
    // draggable: true,

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
    <div className="slider-container w-[1170px] ml-4">
      <Slider {...settings}>
        {featuredPosts?.data?.map((item, i) => (
          <SliderCard key={i} item={item}/>
        ))}
      </Slider>
    </div>
  );
}

export default MainSliderSlick;
