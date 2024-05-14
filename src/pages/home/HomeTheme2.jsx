import { Link } from "react-router-dom";
import SectionTitleTheme2 from "../../components/theme2-contents/SectionTitleTheme2";
import { usePerPgaeMovieQuery } from "../../redux/features/movies/movieApi";
import LazyLoadingTheme2 from "../../components/lazy-loading/LazyLoadingTheme2";
import SeoContentTheme2 from "../../components/theme2-contents/SeoContentTheme2";

const HomeTheme2 = () => {
  const { data: movieList, isLoading: movieLoading } = usePerPgaeMovieQuery(1);

  return (
    <div className="mx-auto md:w-[1200px] bg-[#A8A8A812] p-3 mt-14 pb-16">

      {/* ==================== MOVIES ======================== */}
      <div className="">
        <SectionTitleTheme2
          url="/"
          className="bg-[#009987]"
          textColor="text-[#009987]"
        >
          Latest Movies
        </SectionTitleTheme2>

        <div className="mt-5">
          {movieLoading ? (
            <LazyLoadingTheme2 length={movieList?.data?.data?.length} />
          ) : (
            <div className="flex flex-col gap-y-1 font-jost">
              {movieList?.data?.data?.map((item, i) => (
                <Link
                  key={i}
                  className="underline text-[#009987] font-medium text-[20px] hover:text-[#6bd4c8] transition-all ease-in-out"
                >
                  {item?.post_title}
                </Link>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* ==================== WEB-SERIES ===================== */}
      <div className="mt-8">
        <SectionTitleTheme2
          url="/"
          className="bg-[#FF0AE6]"
          textColor="text-[#FF0AE6]"
        >
          Latest Web-Series
        </SectionTitleTheme2>

        <div className="mt-5">
          {movieLoading ? (
            <LazyLoadingTheme2 length={movieList?.data?.data?.length} />
          ) : (
            <div className="flex flex-col gap-y-1 font-jost">
              {movieList?.data?.data?.map((item, i) => (
                <Link
                  key={i}
                  className="underline text-[#1FCD0F] font-medium text-[20px] hover:text-[#a1ea9a] transition-all ease-in-out"
                >
                  {item?.post_title}
                </Link>
              ))}
            </div>
          )}
        </div>
      </div>

      <hr className="my-5" />

      {/* ==================== SEO-CONTENT ===================== */}
      <SeoContentTheme2 />
    </div>
  );
};

export default HomeTheme2;
