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
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import { theme } from "../../config/config";
import HomeDefault from "./HomeDefault";
import HomeTheme1 from "./HomeTheme1";

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

  return <>{theme === "theme1" ?  <HomeTheme1 featuredPosts={featuredPosts} movieList={movieList} tvShowList={tvShowList}/> : <HomeDefault />}</>;
};

export default Home;
