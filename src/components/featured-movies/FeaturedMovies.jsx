/* eslint-disable react/prop-types */
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import MainSliderSlick from "./MainSliderSlick/MainSliderSlick";
import FeatureLazy from "./FeatureLazy";

export default function FeaturedMovies({featuredPosts, featureLoading}) {

  return (
    <div>
      {featuredPosts?.data && (
        <>
          {featureLoading ? (
            <FeatureLazy />
          ) : (
            <MainSliderSlick featuredPosts={featuredPosts} />
          )}
        </>
      )}
    </div>
  );
}
