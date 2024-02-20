import {
  useAllConfigQuery,
  useQuickMenuUserQuery,
} from "../../redux/features/settings/settingApi";
import { usePerPgaeTvShowQuery } from "../../redux/features/tv-show/tvShowApi";
import {
  useFeaturedPostsQuery,
  usePerPgaeMovieQuery,
} from "../../redux/features/movies/movieApi";
import LazyLoading from "../../components/lazy-loading/LazyLoading";
import MovieCard from "../../components/movie-card/MovieCard";
import HomePageSeeAllBtn from "../../utils/HomePageSeeAllBtn";
import SubMenuButton from "../../utils/SubMenuButton";
import { Link, useLocation } from "react-router-dom";
import { Helmet } from "react-helmet";
import { useEffect } from "react";
import FeaturedMovies from "../../components/featured-movies/FeaturedMovies";
import FeatureLazy from "../../components/featured-movies/FeatureLazy";
import SiteNews from "../../components/SiteNews/SiteNews";

const Home = () => {

  const { data: movieList, isLoading: movieLoading } = usePerPgaeMovieQuery(1);
  const { data: tvShowList, isLoading: tvShowLoading } = usePerPgaeTvShowQuery(1);
  const { data: featuredPosts, isLoading: featureLoading } = useFeaturedPostsQuery();
  const { data: quickMenu } = useQuickMenuUserQuery();
  const {data: allConfig} = useAllConfigQuery();

  const getSiteName = allConfig?.data?.find( (config) => config.name === "site_name");
  const siteName = getSiteName ? getSiteName.value : null;

  const totalTvShow = tvShowList?.data?.total;
  const totalMovies = movieList?.data?.total;

  const location = useLocation();
  const currentRoute = location.pathname;

  useEffect(() => {
    if (currentRoute === "/") {
      localStorage.removeItem("MovieCurrentPage");
      localStorage.removeItem("tvCurrentPage");
      localStorage.removeItem("banglaPagination");
      localStorage.removeItem("filterPagination");
    }
  }, [currentRoute]);

  return (
    <section className="min-h-screen flex flex-col justify-center items-center">
      <Helmet>
        <title>{siteName}</title>
      </Helmet>

      {/* ==================>> Quick Menus <<================*/}
      <div className="hidden lg:flex items-center gap-[25px] mt-[6px]">
        {quickMenu?.data?.map((menu, i) => (
          <Link key={i} to={`/terms/${menu?.slug}`}>
            <SubMenuButton>{menu.name}</SubMenuButton>
          </Link>
        ))}
      </div>

      {/* ====================>> Domains <<===================*/}
      <SiteNews allConfig={allConfig} />

      {/* ================>> Featured Movies <<================*/}
        <>
          <HomePageSeeAllBtn>Featured Movies</HomePageSeeAllBtn>
          <div className="my-[18px]"> <FeaturedMovies /></div>
        </>

      {/* ====================>> Movies <<====================*/}
      <HomePageSeeAllBtn total={totalMovies} redirect={"/movies"}>
        Movies
      </HomePageSeeAllBtn>

      <div>
        {movieLoading ? (
          <LazyLoading />
        ) : (
          <div className="grid grid-cols-2 lg:grid-cols-5 gap-[25px] my-[18px]">
            {movieList?.data?.data?.slice(0, 10)?.map((item) => (
              <MovieCard
                key={item?.id}
                item={item}
                redirect={`/movie/${item?.id}`}
              />
            ))}
          </div>
        )}
      </div>

      {/* ==================>> Tv Shows <<==================*/}
      <HomePageSeeAllBtn total={totalTvShow} redirect={"/tv-show"}>
        TV Show
      </HomePageSeeAllBtn>

      <div>
        {tvShowLoading ? (
          <LazyLoading />
        ) : (
          <div className="grid grid-cols-2 lg:grid-cols-5 gap-[25px] my-[18px]">
            {tvShowList?.data?.data?.slice(0, 10)?.map((item) => (
              <MovieCard
                key={item?.id}
                item={item}
                redirect={`/series/${item?.id}`}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default Home;
