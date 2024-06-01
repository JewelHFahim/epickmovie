import { useEffect } from "react";
import DownloadPlayer from "./DownloadPlayer";
import DownloadLinksTable from "./DownloadLinksTable";
import { useNavigate, useParams } from "react-router-dom";
import TagsList from "../../../../components/seo-related-content/TagsList";
import { useMovieDetailsQuery } from "../../../../redux/features/movies/movieApi";
import { useSuggessionMovieSeriesQuery } from "../../../../redux/features/search/searchApi";
import SynopsisTheme3 from "../../../../components/theme3-contents/movie-tv-details/SynopsisTheme3";
import DetailsInfoCard from "../../../../components/theme3-contents/movie-tv-details/DetailsInfoCard";
import SharedSocialTheme3 from "../../../../components/theme3-contents/movie-tv-details/SharedSocialTheme3";
import DetailsJoinusTheme3 from "../../../../components/theme3-contents/movie-tv-details/DetailsJoinusTheme3";
import RecomendedMoviesTvs from "../../../../components/theme3-contents/movie-tv-details/RecomendedMoviesTvs";
import MovieTvYoutubeTrailer from "../../../../components/theme3-contents/movie-tv-details/MovieTvYoutubeTrailer";

const MovieDetailsTheme3 = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { data: movieDetails, isLoading: detaislLoading } =
    useMovieDetailsQuery(id);
  const details = movieDetails?.data;
  const { data: suggessions, isLoading: suggessionsLoading } =
    useSuggessionMovieSeriesQuery(id);

  // Error handle, if id not found
  useEffect(() => {
    if (movieDetails?.status === false) {
      navigate("/404");
    }
  }, [movieDetails, navigate]);

  // page scroll effect
  // useEffect(() => {
  //   window.scrollTo({ top: 0, behavior: "smooth" });
  // }, []);

  return (
    <div className="lg:w-[850px] mt-4 px-4">
      <div className="">
        {/* ==============>> YOUTUBE TRAILER <<============== */}
        <MovieTvYoutubeTrailer />

        {/* =============>> INFO SECTION <<===========*/}
        <DetailsInfoCard details={details} detaislLoading={detaislLoading} />

        <SynopsisTheme3 details={details} />

        {/* ==========>> Recommended Movies <<======== */}
        <RecomendedMoviesTvs
          suggessions={suggessions}
          suggessionsLoading={suggessionsLoading}
        />

        {/* ================>> TAGS <<============= */}
        <TagsList
          details={details}
          className="px-0 mt-12 text-white text-opacity-[40%]"
          textSize="text-3xl lg:text-base"
        />

        <hr className=" border-white border-opacity-[10%] mt-10" />

        {/* ========>> Sreen Shots <<========= */}
        {details?.screenshots && (
          <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-4 my-7">
            {details?.screenshots?.slice(0, 3)?.map((item, i) => (
              <div key={i} className="w-full h-full mx-auto">
                <img
                  src={item}
                  alt=""
                  className=" w-[80%] mx-auto lg:w-full h-[400px] lg:h-full object-cover"
                />
              </div>
            ))}
          </div>
        )}

        <hr className=" border-white border-opacity-[10%]" />

        {/* How to download Video */}
        <div className="mt-8 border-[4px] border-red-700 flex flex-col items-center p-5">
          <h2 className="text-red-600 text-[40px] lg:text-[30px] font-medium">
            How To Download Movies
          </h2>

          <DownloadPlayer />
        </div>

        {/* =============>> Download Links <<============== */}
        <div className="mt-10">
          <div className="flex items-center gap-x-5 mb-5">
            <p className=" text-5xl lg:text-2xl font-medium text-gray-600">
              Links
            </p>
            <p className="px-4 rounded-md bg-blue-600 text-white py-[2px] text-xl lg:text-sm">
              Download
            </p>
          </div>

          <DownloadLinksTable details={details} />
        </div>

        {/* ============>> JOIN US <<============ */}
        <DetailsJoinusTheme3 />

        {/* ==============>> SHARED <<=========== */}
        <SharedSocialTheme3 />

        <hr className=" border-white border-opacity-[10%] my-8" />
      </div>
    </div>
  );
};

export default MovieDetailsTheme3;