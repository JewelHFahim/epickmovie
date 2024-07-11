import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import SubMenuButton from "../../utils/SubMenuButton";
import {
  useFeaturedPostsQuery,
  usePerPgaeMovieQuery,
  useUpCommingPostsQuery,
} from "../../redux/features/movies/movieApi";
import { usePerPgaeTvShowQuery } from "../../redux/features/tv-show/tvShowApi";
import { useQuickMenuUserQuery } from "../../redux/features/settings/settingApi";
import { useSiteConfig } from "../../utils/configHooks/ConfigHooks";
import SiteNews from "../../components/SiteNews/SiteNews";
import HomePageSeeAllBtn from "../../utils/HomePageSeeAllBtn";
import LazyLoading from "../../components/lazy-loading/LazyLoading";
import MovieCard from "../../components/movie-card/MovieCard";
import MainSliderSlick from "../../components/featured-movies/MainSliderSlick/MainSliderSlick";
import SliderCardLazyLoader from "../../components/featured-movies/MainSliderSlick/SliderCardLazyLoader";

const HomeDefault = () => {
  const { siteName } = useSiteConfig();
  const { data: quickMenu } = useQuickMenuUserQuery();
  const { data: movieList, isLoading: movieLoading } = usePerPgaeMovieQuery(1);
  const { data: tvShowList, isLoading: tvShowLoading } =
    usePerPgaeTvShowQuery(1);
  const { data: featuredPosts, isLoading: featureLoading } =
    useFeaturedPostsQuery();
  const { data: upCommingPosts, isLoading: upCommingLoading } =
    useUpCommingPostsQuery(1);

  const totalTvShow = tvShowList?.data?.total;
  const totalMovies = movieList?.data?.total;

  return (
    <section className="bg-[#27272A] lg:bg-[#18181a] flex flex-col justify-center items-center">
      <Helmet>
        <title>
          {siteName} || Watch Movies Online Free on {siteName}
        </title>

        <link rel="canonical" href="http://localhost:3000/movies" />
        <meta
          name="description"
          content="The best place to watch movies online for free with HD quality. No ADS! No registration is required!"
        />
        <meta
          name="keywords"
          content="free movies, online movie, movie online, free movies online, watch movies online free, free hd movies, watch movies online"
        />
      </Helmet>

      {/* <Helmet>
        <title>My Page Title</title>
        <meta
          name="description"
          content="This is the description of my page."
        />
        <link rel="canonical" href="https://www.example.com/my-page" />
        <script type="application/ld+json">
          {`
          {
            "@context": "http://schema.org",
            "@type": "WebPage",
            "name": "My Page Title",
            "description": "This is the description of my page."
          }
        `}
        </script>
      </Helmet> */}

      {/* ===================>> Quick Menus <<=================*/}
      <div className="hidden lg:flex items-center gap-[25px] mt-[6px]">
        {quickMenu?.data?.map((menu, i) => (
          <Link key={i} to={`/terms/${menu?.slug}`}>
            <SubMenuButton>{menu.name}</SubMenuButton>
          </Link>
        ))}
      </div>

      {/* =====================>> SiteNews <<===================*/}
      <SiteNews />

      {/* ================>> Featured Movies <<================*/}
      <>
        <HomePageSeeAllBtn> Featured Movies </HomePageSeeAllBtn>
        <div className="my-[18px] w-full">
          {featureLoading ? (
            <>
              <div className=" grid lg:hidden grid-cols-3 gap-5">
                {Array.from({ length: 3 }).map((item, i) => (
                  <SliderCardLazyLoader key={i} />
                ))}
              </div>

              <div className="hidden lg:grid grid-cols-6 gap-2">
                {Array.from({ length: 6 }).map((item, i) => (
                  <SliderCardLazyLoader key={i} />
                ))}
              </div>
            </>
          ) : (
            <MainSliderSlick featuredPosts={featuredPosts} />
          )}
        </div>
      </>

      {/* ====================>> Movies <<====================*/}
      <HomePageSeeAllBtn total={totalMovies} redirect={"/movies/page/1"}>
        Movies
      </HomePageSeeAllBtn>

      <div className="px-5 lg:px-0 w-full">
        {movieLoading ? (
          <div className="w-full">
            <div className="grid grid-cols-3 md:grid-cols-3 lg:grid-cols-6 gap-[22px] lg:gap-[10px] mt-10 animate-pulse w-full lg:px-5">
              {Array.from({ length: 18 }).map((item, i) => (
                <LazyLoading key={i} />
              ))}
            </div>
          </div>
        ) : (
          <div>
            <div className="hidden lg:grid grid-cols-3 md:grid-cols-3 lg:grid-cols-6 gap-[20px] lg:gap-[10px] my-[18px]">
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
            <div className="grid grid-cols-3 md:grid-cols-3 lg:grid-cols-6 gap-[22px] lg:gap-[10px] mt-10 animate-pulse w-full lg:px-5">
              {Array.from({ length: 18 }).map((item, i) => (
                <LazyLoading key={i} />
              ))}
            </div>
          </div>
        ) : (
          <div>
            <div className="hidden lg:grid grid-cols-3 md:grid-cols-3 lg:grid-cols-6 gap-[20px] lg:gap-[10px] my-[18px]">
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
        {upCommingLoading ? (
          <div className="w-full">
            <div className="grid grid-cols-3 md:grid-cols-3 lg:grid-cols-6 gap-[22px] lg:gap-[10px] mt-10 animate-pulse w-full lg:px-5">
              {Array.from({ length: 6 }).map((item, i) => (
                <LazyLoading key={i} />
              ))}
            </div>
          </div>
        ) : (
          <div>
            <div className="grid grid-cols-3 md:grid-cols-3 lg:grid-cols-6 gap-[20px] lg:gap-[10px] my-[18px]">
              {upCommingPosts?.data?.data?.slice(0, 6)?.map((item) => (
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
