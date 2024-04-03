import calender from "../../../../assets/calender.svg";
import DownloadButton from "../../../../utils/DownloadButton";
import {
  useMovieDetailsQuery,
  usePerPgaeMovieQuery,
} from "../../../../redux/features/movies/movieApi";
import { Link, useNavigate, useParams } from "react-router-dom";
import JoinTelegramBtn from "../../../../utils/JoinTelegramBtn";
import DetailsPosterCard from "../../../../components/details-poster-card/DetailsPosterCard";
import RelatedPost from "../../../../components/related-post/RelatedPost";
import AdvertisementSection from "../../../../components/advertisement/AdvertisementSection";
import Breadcum from "../../../../utils/breadcum/Breadcum";
import UploadedDate from "../../../../utils/uploaded-date/UploadedDate";
import { Helmet } from "react-helmet";
import CountryList from "../../../../components/advertisement/CountryList";
import { useEffect } from "react";
import { useSiteConfig } from "../../../../utils/configHooks/ConfigHooks";
import DownloadInfos from "../../../../components/seo-related-content/DownloadInfos";
import StoryTitle from "../../../../components/seo-related-content/StoryTitle";
import TagsList from "../../../../components/seo-related-content/TagsList";
import MobileStoryTitle from "../../../../components/seo-related-content/MobileStoryTitle";
import SiteNews from "../../../../components/SiteNews/SiteNews";
import SectionTitle from "../../../../utils/theme1-contents/section-title/SectionTitle";
import Theme1Card from "../../../../components/movie-card/theme1-card/Theme1Card";

const MovieDetailsTheme1 = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { siteName } = useSiteConfig();
  const { data: movieDetails } = useMovieDetailsQuery(id);
  const details = movieDetails?.data;
  console.log(details);
  const { data: movieList, isLoading: movieLoading } = usePerPgaeMovieQuery(1);

  useEffect(() => {
    if (movieDetails?.status === false) {
      navigate("/404");
    }
  }, [movieDetails, navigate]);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <div className="bg-[#18181a]">
      <Helmet>
        <title>
          {`${siteName} || ${details?.post_title ? details?.post_title : ""} `}
        </title>
        <meta
          name={details?.post_title ? details?.post_title : ""}
          content={details?.post_content}
        />
        <meta name="keywords" content="movies" />
      </Helmet>

      <SiteNews />

      {/* ===========> Latest Movies <===========*/}
      <>
        <SectionTitle>Latest Movies </SectionTitle>
        <div className=" mt-5 grid grid-cols-8 gap-5">
          {movieList?.data?.data?.slice(0, 8)?.map((item, i) => (
            <Theme1Card key={i} item={item} />
          ))}
        </div>
      </>

      <section className=" w-[1300px] mx-auto ">
        <Breadcum
          children1="Movies"
          children2={details?.post_title}
          redirect={"/movies/page/1"}
        />

        <div className="bg-[#262626]">
          <div className=" flex gap-x-5 w-full p-5 border-b">
            <img
              src={details?.poster_image_url}
              alt=""
              className="w-[150px] h-[230px]"
            />

            <div className="w-full">
              <h2 className="text-[22px] font-bold text-[#CDCDCD]">
                {details?.post_title}
              </h2>

              <div className="mt-4 flex gap-x-5">
                <div className="w-[65%] flex flex-col gap-y-1">
                  {/* Genres */}
                  <p className="text-base flex items-center gap-x-1">
                    <span className="text-white font-bold">Genre:</span>
                    <span>
                      {details?.additional_data?.genres?.map((item, i) => (
                        <Link
                          to=""
                          key={i}
                          className="text-[#FFA113] underline mx-1"
                        >
                          {item?.term?.name},
                        </Link>
                      ))}
                    </span>
                  </p>

                  {/* Directors */}
                  <p className="text-base flex items-center gap-x-1">
                    <span className="text-white font-bold">Director:</span>
                    <span>
                      {details?.additional_data?.dtdirector?.map((item, i) => (
                        <Link
                          to=""
                          key={i}
                          className="text-[#FFA113] underline mx-1"
                        >
                          {item?.term?.name}
                        </Link>
                      ))}
                    </span>
                  </p>

                  {/* Actors */}
                  <p className="text-base flex gap-x-1">
                    <span className="text-white font-bold">Actors:</span>
                    <span>
                      {details?.additional_data?.dtcast?.map((item, i) => (
                        <Link
                          to=""
                          key={i}
                          className="text-[#FFA113] underline mx-1"
                        >
                          {item?.term?.name}
                        </Link>
                      ))}
                    </span>
                  </p>

                  {/* Country */}
                  <p className="text-base flex items-center gap-x-1">
                    <span className="text-white font-bold">Actors:</span>
                    {details?.country ? (
                      <span className="text-[#FFA113] underline mx-1">
                        {details?.country}
                      </span>
                    ) : (
                      <span className="text-slate-400">N/A</span>
                    )}
                  </p>
                </div>

                <div className="w-[35%]  flex flex-col gap-y-1">
                  {/* Release Year */}
                  <p className="text-base flex items-center gap-x-1">
                    <span className="text-white font-bold">Release Year:</span>
                    <span className="text-[#FFA113] underline mx-1">
                      {" "}
                      {details?.release_date?.slice(0, 4)}{" "}
                    </span>
                  </p>

                  {/* Directors */}
                  <p className="text-base flex items-center gap-x-1">
                    <span className="text-white font-bold">Director:</span>
                    <span className="text-[#FFA113] underline mx-1">
                      {" "}
                      {details?.runtime} min{" "}
                    </span>
                  </p>

                  {/* Actors */}
                  <p className="text-base flex gap-x-1">
                    <span className="text-white font-bold">Actors:</span>
                    <span>
                      {details?.additional_data?.prquality?.map((item, i) => (
                        <Link
                          to=""
                          key={i}
                          className="text-[#FFA113] underline mx-1"
                        >
                          {item?.term?.name}
                        </Link>
                      ))}
                    </span>
                  </p>
                </div>
              </div>

              {/* Story Line */}
              <p className="mt-1 text-base flex gap-x-1">
                <span className="text-white font-bold">Director:</span>
                <span className="text-[#FFA113] underline mx-1">
                  {details?.post_content}
                </span>
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MovieDetailsTheme1;
