import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Theme1Card from "../../movie-card/theme1-card/Theme1Card";
import {
  useCleanedTitle,
  useRedirect,
  useSiteConfig,
} from "../../../utils/configHooks/ConfigHooks";
import { FaPlay } from "react-icons/fa";

const FeatureSliderTheme1 = ({ featuredPosts, featureLoading }) => {
//   const { maskLink } = useSiteConfig();
//   const { url } = useCleanedTitle(item);
//   const handleRedirect = useRedirect(url, maskLink);

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
    <div className="w-full mt-5">
      <Slider {...settings}>
        {featuredPosts?.data?.slice(0, 8)?.map((item, i) => (
          <div key={i} className="px-1">
            <Theme1Card item={item} isLoading={featureLoading} />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default FeatureSliderTheme1;
