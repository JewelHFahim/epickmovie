import { usePerPgaeTvShowQuery } from "../../redux/features/tv-show/tvShowApi";
import SitemapGenerator from "./SitemapGenerator";
import SitemapHeader from "./SitemapHeader";

const TvShowPost = () => {
  const { data: perPgaeMovie } = usePerPgaeTvShowQuery();

  const movieUrls = perPgaeMovie?.data?.data?.map(
    (movie) => `/series/${movie.id}/${movie.post_title}`
  );

  return (
    <div>
      <SitemapHeader />
      <SitemapGenerator dynamicUrls={movieUrls} />
    </div>
  );
};

export default TvShowPost;
