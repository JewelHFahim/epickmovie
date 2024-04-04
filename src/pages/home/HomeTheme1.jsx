import SiteNews from "../../components/SiteNews/SiteNews";
import LazyLoadingTheme1 from "../../components/lazy-loading/LazyLoadingTheme1";
import Theme1Card from "../../components/movie-card/theme1-card/Theme1Card";
import UpCommingTheme1 from "../../components/theme1-contents/UpCommingTheme1";
import {
  useFeaturedPostsQuery,
  usePerPgaeMovieQuery,
  useUpCommingPostsQuery,
} from "../../redux/features/movies/movieApi";
import { usePerPgaeTvShowQuery } from "../../redux/features/tv-show/tvShowApi";
import SectionTitle from "../../utils/theme1-contents/section-title/SectionTitle";

const HomeTheme1 = () => {
  const { data: featuredPosts, isLoading: featureLoading } =
    useFeaturedPostsQuery();
  const { data: tvShowList, isLoading: tvShowLoading } =
    usePerPgaeTvShowQuery(1);
  const { data: movieList, isLoading: movieLoading } = usePerPgaeMovieQuery(1);
  const { data: upCommingPosts, isLoading: upCommingLoading } =
    useUpCommingPostsQuery(1);

  return (
    <div>
      <SiteNews />

      {/* ==============> Feature Movies <=============*/}
      <>
        <SectionTitle> Feature Movies </SectionTitle>
        {featureLoading ? (
          <div className="w-full">
            <LazyLoadingTheme1 lazyLength={8} />
          </div>
        ) : (
          <div className=" mt-5 grid grid-cols-8 gap-5">
            {featuredPosts?.data?.slice(0, 8)?.map((item, i) => (
              <Theme1Card key={i} item={item} />
            ))}
          </div>
        )}
      </>

      {/* ==============> Latest Movies <==============*/}
      <>
        <SectionTitle>Latest Movies </SectionTitle>

        {movieLoading ? (
          <div className="w-full">
            <LazyLoadingTheme1 lazyLength={24} />
          </div>
        ) : (
          <div className=" mt-5 grid grid-cols-8 gap-5">
            {movieList?.data?.data?.map((item, i) => (
              <Theme1Card key={i} item={item} />
            ))}
          </div>
        )}
      </>

      {/* ==============> Latest Web-Series <===============*/}
      <>
        <SectionTitle> Latest Web-Series </SectionTitle>
        {tvShowLoading ? (
          <div className="w-full">
            <LazyLoadingTheme1 lazyLength={24} />
          </div>
        ) : (
          <div className=" mt-5 grid grid-cols-8 gap-5">
            {tvShowList?.data?.data?.map((item, i) => (
              <Theme1Card key={i} item={item} />
            ))}
          </div>
        )}
      </>

      {/* ========> Up Comming Movies/Tv Shows <========*/}
      <UpCommingTheme1 />
    </div>
  );
};

export default HomeTheme1;
