import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useFeaturedPostsQuery } from "../../../redux/features/movies/movieApi";
import { formatDate } from "../FormateDateTheme3";
import "./FeturedSliderTheme3.css";

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
    <div className="featuredSlider3 mt-4">
      <Slider {...settings}>
        {featuredPosts?.data?.slice(0, 5)?.map((item, i) => (
          <div key={i} className="w-[160px] h-[290px] p-2">
            <img
              src={item?.poster_image_url}
              alt=""
              className="w-full h-[200px] object-cover"
            />

            <div className="mt-1">
              <p className="text-[12px] text-[#D8D8D8] font-bold">
                {item?.post_title?.length >= 60
                  ? `${item?.post_title.slice(0, 60)} ...`
                  : item?.post_title}
              </p>
              <p className="text-[#D8D8D8] text-[9px] mt-1">
                {formatDate(item?.updated_at)}
              </p>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default FeaturedSlider3;
