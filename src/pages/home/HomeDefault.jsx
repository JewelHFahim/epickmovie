import { Helmet } from "react-helmet";
import {
  useFeaturedPostsQuery,
  usePerPgaeMovieQuery,
} from "../../redux/features/movies/movieApi";
import { usePerPgaeTvShowQuery } from "../../redux/features/tv-show/tvShowApi";
import { useQuickMenuUserQuery } from "../../redux/features/settings/settingApi";
import { useSiteConfig } from "../../utils/configHooks/ConfigHooks";
import SiteNews from "../../components/SiteNews/SiteNews";
import { Link } from "react-router-dom";
import SubMenuButton from "../../utils/SubMenuButton";
import HomePageSeeAllBtn from "../../utils/HomePageSeeAllBtn";
import FeaturedMovies from "../../components/featured-movies/FeaturedMovies";
import LazyLoading from "../../components/lazy-loading/LazyLoading";
import MovieCard from "../../components/movie-card/MovieCard";

const HomeDefault = () => {
  const { data: featuredPosts, isLoading: featureLoading } =
    useFeaturedPostsQuery();
  const { data: tvShowList, isLoading: tvShowLoading } =
    usePerPgaeTvShowQuery(1);
  const { data: movieList, isLoading: movieLoading } = usePerPgaeMovieQuery(1);

  console.log(movieList)

  const { data: quickMenu } = useQuickMenuUserQuery();
  const { siteName } = useSiteConfig();

  const totalTvShow = tvShowList?.data?.total;
  const totalMovies = movieList?.data?.total;

  return (
    <section className="bg-[#27272A] lg:bg-[#18181a] flex flex-col justify-center items-center">
      <Helmet>
        <title>{siteName}</title>
      </Helmet>

      {/* ===================>> Quick Menus <<=================*/}
      <div className="hidden lg:flex items-center gap-[25px] mt-[6px]">
        {quickMenu?.data?.map((menu, i) => (
          <Link key={i} to={`/terms/${menu?.slug}/page/1`}>
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
            <div className="grid grid-cols-3 md:grid-cols-3 lg:grid-cols-6 gap-[22px] mt-10 animate-pulse w-full lg:px-5">
              {Array.from({ length: 18 }).map((item, i) => (
                <LazyLoading key={i} />
              ))}
            </div>
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
            <div className="grid grid-cols-3 md:grid-cols-3 lg:grid-cols-6 gap-[22px] mt-10 animate-pulse w-full lg:px-5">
              {Array.from({ length: 18 }).map((item, i) => (
                <LazyLoading key={i} />
              ))}
            </div>
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

      {/* ===========>> Up Comming Movies/TV Shows <<========*/}
      <HomePageSeeAllBtn total={totalTvShow} redirect={""}>
        Up Comming Movies & Tv Shows
      </HomePageSeeAllBtn>
      <div className="px-5 lg:px-0 w-full">
        {tvShowLoading ? (
          <div className="w-full">
            <div className="grid grid-cols-3 md:grid-cols-3 lg:grid-cols-6 gap-[22px] mt-10 animate-pulse w-full lg:px-5">
              {Array.from({ length: 6 }).map((item, i) => (
                <LazyLoading key={i} />
              ))}
            </div>
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

export default HomeDefault;
