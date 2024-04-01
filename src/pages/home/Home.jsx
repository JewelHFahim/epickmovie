import {
  useFeaturedPostsQuery,
  usePerPgaeMovieQuery,
} from "../../redux/features/movies/movieApi";
import { useQuickMenuUserQuery } from "../../redux/features/settings/settingApi";
import { usePerPgaeTvShowQuery } from "../../redux/features/tv-show/tvShowApi";
import FeaturedMovies from "../../components/featured-movies/FeaturedMovies";
import LazyLoading from "../../components/lazy-loading/LazyLoading";
import { useSiteConfig } from "../../utils/configHooks/ConfigHooks";
import MovieCard from "../../components/movie-card/MovieCard";
import HomePageSeeAllBtn from "../../utils/HomePageSeeAllBtn";
import SiteNews from "../../components/SiteNews/SiteNews";
import SubMenuButton from "../../utils/SubMenuButton";
import { Link, useLocation } from "react-router-dom";
import { Helmet } from "react-helmet";
import { useEffect } from "react";

const Home = () => {
  const { data: featuredPosts, isLoading: featureLoading } =
    useFeaturedPostsQuery();
  const { data: tvShowList, isLoading: tvShowLoading } =
    usePerPgaeTvShowQuery(1);
  const { data: movieList, isLoading: movieLoading } = usePerPgaeMovieQuery(1);

  const { data: quickMenu } = useQuickMenuUserQuery();
  const { siteName } = useSiteConfig();

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
    <section className="bg-[#27272A] lg:bg-[#18181a] flex flex-col justify-center items-center">
      <Helmet>
        <title>{siteName}</title>
      </Helmet>

      {/* ===================>> Quick Menus <<=================*/}
      <div className="hidden lg:flex items-center gap-[25px] mt-[6px]">
        {quickMenu?.data?.map((menu, i) => (
          <Link key={i} to={`/terms/${menu?.slug}`}>
            <SubMenuButton>{menu.name}</SubMenuButton>
          </Link>
        ))}
      </div>

      {/* =====================>> Domains <<===================*/}
      <SiteNews />

      {/* ================>> Featured Movies <<================*/}
      <>
        <HomePageSeeAllBtn>Featured Movies</HomePageSeeAllBtn>
        <div className="my-[18px]">
          <FeaturedMovies
            featuredPosts={featuredPosts}
            featureLoading={featureLoading}
          />
        </div>
      </>

      {/* ====================>> Movies <<====================*/}
      <HomePageSeeAllBtn total={totalMovies} redirect={"/movies/page/1"}>
        Movies
      </HomePageSeeAllBtn>

      <div className="px-5 lg:px-0 w-full">
        {movieLoading ? (
          <div className="w-full">
            <LazyLoading />
          </div>
        ) : (
          <div>
            <div className="hidden lg:grid grid-cols-3 md:grid-cols-3 lg:grid-cols-6 gap-[20px] lg:gap-[25px] my-[18px]">
              {movieList?.data?.data?.slice(0, 18)?.map((item) => (
                <MovieCard
                  key={item?.id}
                  item={item}
                  redirect={`/movie/${item?.id}`}
                />
              ))}
            </div>
            <div className="grid lg:hidden grid-cols-3 md:grid-cols-3 lg:grid-cols-6 gap-[20px] lg:gap-[25px] my-[18px]">
              {movieList?.data?.data?.slice(0, 9)?.map((item) => (
                <MovieCard
                  key={item?.id}
                  item={item}
                  redirect={`/movie/${item?.id}`}
                />
              ))}
            </div>
          </div>
        )}
      </div>

      {/* ==================>> Tv Shows <<==================*/}
      <HomePageSeeAllBtn total={totalTvShow} redirect={"/tv-show/page/1"}>
        TV Show
      </HomePageSeeAllBtn>

      <div className="px-5 lg:px-0 w-full">
        {tvShowLoading ? (
          <div className="w-full">
          <LazyLoading />
        </div>
        ) : (
          <div>
            <div className="hidden lg:grid grid-cols-3 md:grid-cols-3 lg:grid-cols-6 gap-[20px] lg:gap-[25px] my-[18px]">
              {tvShowList?.data?.data?.slice(0, 18)?.map((item) => (
                <MovieCard
                  key={item?.id}
                  item={item}
                  redirect={`/series/${item?.id}`}
                />
              ))}
            </div>

            <div className="grid lg:hidden grid-cols-3 md:grid-cols-3 lg:grid-cols-6 gap-[20px] lg:gap-[25px] my-[18px]">
              {tvShowList?.data?.data?.slice(0, 9)?.map((item) => (
                <MovieCard
                  key={item?.id}
                  item={item}
                  redirect={`/series/${item?.id}`}
                />
              ))}
            </div>
          </div>
        )}
      </div>

      {/* ==================>> Up Comming Movies/TV Shows <<==================*/}
      <HomePageSeeAllBtn total={totalTvShow} redirect={""}>
        Up Comming Movies & Tv Shows
      </HomePageSeeAllBtn>
      <div className="px-5 lg:px-0 w-full">
        {tvShowLoading ? (
         <div className="w-full">
         <LazyLoading />
       </div>
        ) : (
          <div>
            <div className="grid grid-cols-3 md:grid-cols-3 lg:grid-cols-6 gap-[20px] lg:gap-[25px] my-[18px]">
              {tvShowList?.data?.data?.slice(0, 6)?.map((item) => (
                <MovieCard
                  key={item?.id}
                  item={item}
                  redirect={`/series/${item?.id}`}
                />
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Home;
