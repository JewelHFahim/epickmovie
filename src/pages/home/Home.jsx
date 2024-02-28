import { useFeaturedPostsQuery } from "../../redux/features/movies/movieApi";
import { useQuickMenuUserQuery } from "../../redux/features/settings/settingApi";
import FeaturedMovies from "../../components/featured-movies/FeaturedMovies";
import LazyLoading from "../../components/lazy-loading/LazyLoading";
import { useSiteName } from "../../utils/configHooks/ConfigHooks";
import MovieCard from "../../components/movie-card/MovieCard";
import HomePageSeeAllBtn from "../../utils/HomePageSeeAllBtn";
import SiteNews from "../../components/SiteNews/SiteNews";
import SubMenuButton from "../../utils/SubMenuButton";
import { Link, useLocation } from "react-router-dom";
import { Helmet } from "react-helmet";
import { useEffect } from "react";
import { useMovieList, useTvShowList } from "../../utils/hooks/api-hooks/ApiHooks";

const Home = () => {
  const { movieList, isLoading: movieLoading } = useMovieList(1);
  const { tvShowList, isLoading: tvShowLoading } = useTvShowList(1);
  const { data: featuredPosts, isLoading: featureLoading } = useFeaturedPostsQuery();

  const { data: quickMenu } = useQuickMenuUserQuery();
  const siteName = useSiteName();

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
    <section className="bg-[#27272A] lg:bg-[#18181a] min-h-screen flex flex-col justify-center items-center">
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
      <SiteNews/>

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
      <HomePageSeeAllBtn total={totalMovies} redirect={"/movies"}>
        Movies
      </HomePageSeeAllBtn>

      <div>
        {movieLoading ? (
          <LazyLoading />
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-5 gap-[25px] my-[18px]">
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
          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-5 gap-[25px] my-[18px]">
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
