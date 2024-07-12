import { useEffect } from "react";
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
import StreamingTrailer from "../../../../components/theme3-contents/movie-tv-details/StreamingTrailer";
import ScreenshotSlider from "../../../../components/theme3-contents/ScreenshotSlider";

const MovieDetailsTheme3 = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { data: movieDetails, isLoading: detaislLoading } = useMovieDetailsQuery(id);
  const details = movieDetails?.data;
  const { data: suggessions, isLoading: suggessionsLoading } = useSuggessionMovieSeriesQuery(id);

  // Error handle, if id not found
  useEffect(() => {
    if (movieDetails?.status === false) {
      navigate("/404");
    }
  }, [movieDetails, navigate]);

  // page scroll effect
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <div className="lg:w-[850px] pt-4 px-4">
      <div>
        {/* =============>> Stream / Youtube Trailer <<============ */}
        <StreamingTrailer details={details} />

        {/* =============>> Info Section <<================*/}
        <DetailsInfoCard details={details} detaislLoading={detaislLoading} />

        {/* ================>> Synopsis <<================ */}
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

        <hr className=" border-white border-opacity-[10%] my-10" />

        {/* ========>> Sreen Shots <<========= */}
        {details?.screenshots && (
          <>
            <ScreenshotSlider screenshots={details?.screenshots} />
            <hr className=" border-white border-opacity-[10%] mt-10" />
          </>
        )}

        {/* =============>> Download Links <<============== */}
        <div className="mt-10">
          <div className="flex items-center gap-x-5 mb-5">
            <p className="text-5xl lg:text-2xl font-medium text-gray-600">
              Links
            </p>
            <p className="px-5  rounded-md bg-blue-600 text-white py-1.5 lg:py-[2px] text-2xl lg:text-sm">
              Download
            </p>
          </div>

          <DownloadLinksTable details={details} />
        </div>

        <hr className=" border-white border-opacity-[10%] my-8" />

        {/* ============>> JOIN US <<============ */}
        <DetailsJoinusTheme3 />

        {/* ==============>> SHARED <<=========== */}
        <SharedSocialTheme3 />
      </div>
    </div>
  );
};

export default MovieDetailsTheme3;
