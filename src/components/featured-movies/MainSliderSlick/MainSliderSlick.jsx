import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaPlay } from "react-icons/fa";
import "./MainSliderSlick.css";
import { useState } from "react";
import { ad_url } from "../../../config/config";

function MainSliderSlick({ featuredPosts }) {
  const [initialVisite, setInitialVisite] = useState(1);

  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
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
          <div
            key={i}
            className="mainSlider bg-gradient-to-t from-[#ff1818] to-[#fdd506] p-[1.5px] h-[460px] rounded-[10px] relative playBtnCont"
          >
            <button
              onClick={() =>{
  
                if (initialVisite > 1) {
                  window.open(item?.post_type === "movies" ? `/movie/${item?.id}/${item?.post_title}` : `/series/${item?.id}/${item?.post_title}`, "_blank");
                } else {
                  window.open(ad_url, "_blank")
                }
                setTimeout(() => {
                  setInitialVisite(1);
                }, 50000);
                
                setInitialVisite(initialVisite + 1);
              }
               }
              className={`w-full h-full rounded-[10px] flex flex-col items-center bg-[#27272A] overflow-hidden relative`}
            >
              <img
                src={item?.poster_image_url}
                className="w-full  rounded-tr-[10px] rounded-tl-[10px] posterImg"
              />

              <p className="hidden lg:block text-center  text-white font-[700] text-[33px] lg:text-[16px] p-4 lg:p-2 font-alef">
                {item?.post_title?.length <= 80
                  ? item?.post_title
                  : item?.post_title?.slice(0, 80)}
              </p>

              <p className="absolute lg:hidden text-center bg-black bg-opacity-[50%] mx-auto bottom-5 p-5 max-w-[80%]  text-white font-[700] text-[33px] lg:text-[16px] lg:p-2 font-alef">
                {item?.post_title?.length <= 80
                  ? item?.post_title
                  : item?.post_title?.slice(0, 80)}
              </p>

              <div className="playBtn">
                <FaPlay className="text-[50px] text-white" />
              </div>
            </button>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default MainSliderSlick;
