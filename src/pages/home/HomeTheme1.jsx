import SiteNews from "../../components/SiteNews/SiteNews";
import LazyLoadingTheme1 from "../../components/lazy-loading/LazyLoadingTheme1";
import Theme1Card from "../../components/movie-card/theme1-card/Theme1Card";
import UpCommingTheme1 from "../../components/theme1-contents/UpCommingTheme1";
import {
  useFeaturedPostsQuery,
  usePerPgaeMovieQuery,
} from "../../redux/features/movies/movieApi";
import { usePerPgaeTvShowQuery } from "../../redux/features/tv-show/tvShowApi";
import SectionTitle from "../../utils/theme1-contents/section-title/SectionTitle";

const HomeTheme1 = () => {
  const { data: featuredPosts, isLoading: featureLoading } = useFeaturedPostsQuery();
  const { data: tvShowList, isLoading: tvShowLoading } = usePerPgaeTvShowQuery(1);
  const { data: movieList, isLoading: movieLoading } = usePerPgaeMovieQuery(1);

  return (
    <div className="px-10 lg:px-0">
      <SiteNews />

      {/* ==============> Feature Movies <==============*/}
      <div>
        <SectionTitle url=""> Feature Movies </SectionTitle>
        {featureLoading ? (
          <div className="w-full">
            <div className="hidden lg:block">
              <LazyLoadingTheme1 lazyLength={8} />
            </div>
            <div className="block lg:hidden">
              <LazyLoadingTheme1 lazyLength={3} />
            </div>
          </div>
        ) : (
          <>
            <div className="mt-5 lg:grid grid-cols-8 gap-2 hidden">
              {featuredPosts?.data?.slice(0, 8)?.map((item, i) => (
                <Theme1Card key={i} item={item} isLoading={featureLoading}/>
              ))}
            </div>

            <div className="mt-5 grid grid-cols-3 gap-5 lg:hidden">
              {featuredPosts?.data?.slice(0, 3)?.map((item, i) => (
                <Theme1Card key={i} item={item} isLoading={featureLoading}/>
              ))}
            </div>
          </>
        )}
      </div>

      {/* ==============> Latest Movies <===============*/}
      <div>
        <SectionTitle url="/movies">Latest Movies </SectionTitle>

        {movieLoading ? (
          <div className="w-full">
            <LazyLoadingTheme1 lazyLength={24} />
          </div>
        ) : (
          <>
          <div className=" mt-5 lg:grid grid-cols-8 gap-2 hidden">
            {movieList?.data?.data?.map((item, i) => (
              <Theme1Card key={i} item={item} isLoading={movieLoading}/>
            ))}
          </div>
          <div className="mt-5 grid grid-cols-3 gap-5 lg:hidden">
            {movieList?.data?.data?.slice(0,12)?.map((item, i) => (
              <Theme1Card key={i} item={item} isLoading={movieLoading}/>
            ))}
          </div>
          </>
        )}
      </div>

      {/* ============> Latest Web-Series <=============*/}
      <div>
        <SectionTitle url="/tv-show"> Latest Web-Series </SectionTitle>
        {tvShowLoading ? (
          <div className="w-full">
            <LazyLoadingTheme1 lazyLength={24} />
          </div>
        ) : (
          <>
          <div className=" mt-5 lg:grid grid-cols-8 gap-2 hidden">
            {tvShowList?.data?.data?.map((item, i) => (
              <Theme1Card key={i} item={item} isLoading={tvShowLoading}/>
            ))}
          </div>
          <div className=" mt-5 grid grid-cols-3 gap-5 lg:hidden">
            {tvShowList?.data?.data?.slice(0,12)?.map((item, i) => (
              <Theme1Card key={i} item={item} isLoading={tvShowLoading}/>
            ))}
          </div>
          </>
        )}
      </div>

      {/* ========> Up Comming Movies/Tv Shows <========*/}
      <UpCommingTheme1 />
    </div>
  );
};

export default HomeTheme1;
