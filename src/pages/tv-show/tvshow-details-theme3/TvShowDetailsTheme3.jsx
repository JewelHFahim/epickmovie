import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useSuggessionMovieSeriesQuery } from "../../../redux/features/search/searchApi";
import SynopsisTheme3 from "../../../components/theme3-contents/movie-tv-details/SynopsisTheme3";
import DetailsInfoCard from "../../../components/theme3-contents/movie-tv-details/DetailsInfoCard";
import SharedSocialTheme3 from "../../../components/theme3-contents/movie-tv-details/SharedSocialTheme3";
import DetailsJoinusTheme3 from "../../../components/theme3-contents/movie-tv-details/DetailsJoinusTheme3";
import RecomendedMoviesTvs from "../../../components/theme3-contents/movie-tv-details/RecomendedMoviesTvs";
import MovieTvYoutubeTrailer from "../../../components/theme3-contents/movie-tv-details/MovieTvYoutubeTrailer";
import TagsList from "../../../components/seo-related-content/TagsList";
import { useSeriesDetailsQuery } from "../../../redux/features/tv-show/tvShowApi";
import DownloadLinksTableTv from "./DownloadLinkTableTv";
import M3U8Player from "../../../components/theme3-contents/movie-tv-details/M3U8Player";

const TvShowDetailsTheme3 = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { data: tvShowDetails, isLoading: detaislLoading } =
    useSeriesDetailsQuery(id);
  const { data: suggessions, isLoading: suggessionsLoading } =
    useSuggessionMovieSeriesQuery(id);

  const details = tvShowDetails?.data;
  console.log(details)

  // Error handle, if id not found
  useEffect(() => {
    if (tvShowDetails?.status === false) {
      navigate("/404");
    }
  }, [tvShowDetails, navigate]);

  // page scroll effect
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

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
        />

        <hr className=" border-white border-opacity-[10%] mt-10" />

        {/* ========>> Sreen Shots <<========= */}
        {details?.screenshots && (
          <div className="my-7">
            {/* Large Devices */}
            <div className="hidden lg:flex  items-center gap-4">
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

            {/* Small Devices */}
            <div className="lg:hidden flex  items-center gap-4">
              {details?.screenshots?.slice(0, 2)?.map((item, i) => (
                <div key={i} className="w-full h-full mx-auto">
                  <img src={item} alt="" className="  object-cover" />
                </div>
              ))}
            </div>
            
          </div>
        )}

        <hr className=" border-white border-opacity-[10%]" />

        {/* =============>> Download Links <<============== */}
        <div className="mt-10">
          <div className="flex items-center gap-x-5 mb-5">
            <p className="text-2xl font-medium text-gray-600">Links</p>
            <p className="px-4 rounded-md bg-blue-600 text-white py-[2px] text-sm">
              Download
            </p>
          </div>

          <DownloadLinksTableTv details={details} />
        </div>

        {/* =============>> Player <<============ */}
        <div className="mt-10  ">
          <h2 className="text-center text-gray-300 text-3xl font-medium">
            Watch Movie/Web-Series
          </h2>
          <M3U8Player details={details}/>
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

export default TvShowDetailsTheme3;
