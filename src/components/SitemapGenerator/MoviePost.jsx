import { usePerPgaeMovieQuery } from "../../redux/features/movies/movieApi";
import SitemapGenerator from "./SitemapGenerator";
import SitemapHeader from "./SitemapHeader";

const MoviePost = () => {
  const { data: perPgaeMovie } = usePerPgaeMovieQuery();

  const movieUrls = perPgaeMovie?.data?.data?.map(
    (movie) => `/movie/${movie.id}/${movie.post_title}`
  );

  return (
    <div>
      <SitemapHeader />
      <SitemapGenerator dynamicUrls={movieUrls} />
    </div>
  );
};

export default MoviePost;
