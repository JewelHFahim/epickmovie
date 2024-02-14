import {
  useQuickMenuUserQuery,
  useSiteNameUSerQuery,
} from "../../redux/features/settings/settingApi";
import { usePerPgaeTvShowQuery } from "../../redux/features/tv-show/tvShowApi";
import { usePerPgaeMovieQuery } from "../../redux/features/movies/movieApi";
import LazyLoading from "../../components/lazy-loading/LazyLoading";
import DomainList from "../../components/domain-list/DomainList";
import MovieCard from "../../components/movie-card/MovieCard";
import HomePageSeeAllBtn from "../../utils/HomePageSeeAllBtn";
import SubMenuButton from "../../utils/SubMenuButton";
import { Link, useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
import { Helmet } from "react-helmet";
import { useEffect } from "react";
import FeaturedMovies from "../../components/featured-movies/FeaturedMovies";

const Home = () => {
  const dispatch = useDispatch();
  const userInfo = JSON.parse(localStorage.getItem("user-info"));
  const { data: movieList, isLoading: movieLoading } = usePerPgaeMovieQuery(1);
  const { data: tvShowList, isLoading: tvShowLoading } =
    usePerPgaeTvShowQuery(1);

  const { data: quickMenu } = useQuickMenuUserQuery();
  const totalTvShow = tvShowList?.data?.total;
  const totalMovies = movieList?.data?.total;
  const { data: siteName } = useSiteNameUSerQuery();

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

  // auto logout after 24hr
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      localStorage.removeItem("user-info");
      dispatch(userInfo?.token(null));
    }, 24 * 60 * 60 * 1000);

    return () => {
      clearTimeout(timeoutId);
    };
  }, [dispatch, userInfo]);

  return (
    <section className="min-h-screen flex flex-col justify-center items-center">
      <Helmet>
        <title>{siteName?.data}</title>
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
      <DomainList />

      {/* ================>> Featured Movies <<================*/}
      <HomePageSeeAllBtn redirect={"/movies"}>
        Featured Movies
      </HomePageSeeAllBtn>

      <div className="my-[18px]">
        <FeaturedMovies movieList={movieList} />
      </div>

      <HomePageSeeAllBtn total={totalMovies} redirect={"/movies"}>
        Movies
      </HomePageSeeAllBtn>

      {/* ====================>> Movies <<====================*/}
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

      <HomePageSeeAllBtn total={totalTvShow} redirect={"/tv-show"}>
        TV Show
      </HomePageSeeAllBtn>

      {/* ==================>> Tv Shows <<==================*/}
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
