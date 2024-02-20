import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./FeaturedMovies.css";
import MainSliderSlick from "./MainSliderSlick/MainSliderSlick";
import { useFeaturedPostsQuery } from "../../redux/features/movies/movieApi";
import FeatureLazy from "./FeatureLazy";

export default function FeaturedMovies() {
  const { data: featuredPosts, isLoading: featureLoading } =
    useFeaturedPostsQuery();

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
