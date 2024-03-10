import { usePerPgaeMovieQuery } from "../../redux/features/movies/movieApi";
import SitemapGenerator from "./SitemapGenerator";
import SitemapHeader from "./SitemapHeader";

const MoviePost =  () => {
  
  // const [currentPage, setCurrentPage] = useState(1);
  const { data: perPgaeMovie } = usePerPgaeMovieQuery();


  const movieUrls =  perPgaeMovie?.data?.data?.map(
    (movie) => `/movie/${movie?.id}/${movie?.post_title}`
  );

  return (
    <div>
      <SitemapHeader />
      <SitemapGenerator dynamicUrls={movieUrls} />

     {/* <div className="lg:w-[80%] mx-auto">
      <Pagination perPgaeMovie={perPgaeMovie} currentPage={currentPage} setCurrentPage={setCurrentPage} />
     </div> */}

    </div>
  );
};

export default MoviePost;
