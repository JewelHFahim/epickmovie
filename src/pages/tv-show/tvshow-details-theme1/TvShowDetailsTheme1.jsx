import { useEffect } from "react";
import { Helmet } from "react-helmet";
import Breadcum from "../../../utils/breadcum/Breadcum";
import SiteNews from "../../../components/SiteNews/SiteNews";
import JoinTelegramBtn from "../../../utils/JoinTelegramBtn";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useSiteConfig } from "../../../utils/configHooks/ConfigHooks";
import TagsList from "../../../components/seo-related-content/TagsList";
import Theme1Card from "../../../components/movie-card/theme1-card/Theme1Card";
import LazyLoadingTheme1 from "../../../components/lazy-loading/LazyLoadingTheme1";
import SectionTitle from "../../../utils/theme1-contents/section-title/SectionTitle";
import { useSuggessionMovieSeriesQuery } from "../../../redux/features/search/searchApi";
import {
  usePerPgaeTvShowQuery,
  useSeriesDetailsQuery,
} from "../../../redux/features/tv-show/tvShowApi";
import SEOContentsTheme1 from "../../../components/theme1-contents/SEOContentsTheme1";
import LatestMovieTvShow from "../../../components/theme1-contents/LatestMovieTvShow";
import DownloadSeason from "../DownloadSeason";
import DownloadButton from "../../../utils/DownloadButton";
import DownloadBtnTheme1 from "../../../utils/theme1-contents/DownloadBtnTheme1";

const TvShowDetailsTheme1 = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { siteName } = useSiteConfig();
  const { data: seriesDetails } = useSeriesDetailsQuery(id);
  const details = seriesDetails?.data;
  const { data: perPageTvShow, isLoading: tvShowLoading } =
    usePerPgaeTvShowQuery(1);
  const { data: suggessions, isLoading: suggessionsLoading } =
    useSuggessionMovieSeriesQuery(id);

  console.log(details);
  console.log(perPageTvShow);

  useEffect(() => {
    if (seriesDetails?.status === false) {
      navigate("/404");
    }
  }, [seriesDetails, navigate]);

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
        <meta name="keywords" content="web-series" />
      </Helmet>

      <SiteNews />

      {/* ===========> Latest Movies <===========*/}
      <LatestMovieTvShow loading={tvShowLoading} perPageData={perPageTvShow} />

      <section className=" w-[1300px] mx-auto font-encode">
        <Breadcum
          children1="Web-Series"
          children2={details?.post_title}
          redirect={`/tv-show/page/1`}
        />

        <div className="bg-[#262626]">
          {/*Info Card */}
          <div className="flex gap-x-5 w-full p-5 border-b">
            <img
              src={details?.poster_image_url}
              alt=""
              className="w-[150px] h-[230px]"
            />

            <div className="w-full">
              <h2 className="text-[22px] font-bold text-[#CDCDCD]">
                {details?.post_title}
              </h2>

              <div className="mt-5 flex gap-x-5">
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
                  <p className="text-base flex gap-x-1">
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
                    <span className="text-white font-bold">Country:</span>
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
                      {details?.release_date?.slice(0, 4)}
                    </span>
                  </p>

                  {/* Directors */}
                  <p className="text-base flex items-center gap-x-1">
                    <span className="text-white font-bold">Runtime:</span>
                    <span className="text-[#FFA113] underline mx-1">
                      {details?.runtime} min
                    </span>
                  </p>

                  {/* Actors */}
                  <p className="text-base flex gap-x-1">
                    <span className="text-white font-bold">Quality:</span>
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
                <span className="text-white font-bold">Storyline:</span>
                <span className="text-[#FFA113] mx-1">
                  {details?.post_content}
                </span>
              </p>
            </div>
          </div>

          {/* SEO Content */}
          <SEOContentsTheme1 details={details} />

          {/* Download Section */}
          <div className="w-full">
            <h2 className="text-[28px] text-[#1FCD0F] font-bold text-center px-8">
              {details?.post_title}:
            </h2>

            <div className="mt-7 bg-[#FFB800] w-[300px] mx-auto py-1.5 text-[24px] font-bold text-center">
              Download Links:
            </div>

            {/* ==========>> DOWNLOAD BUTTON <<=============*/}
            <div className="w-[600px] mx-auto mt-3">
              {details?.download_links?.length === 0 && (
                <p className="text-[18px] font-medium text-slate-500 text-center">
                  No Download Link
                </p>
              )}

              {details?.download_links &&
                Object.keys(details?.download_links) && (
                  <div className="">
                    {Object.keys(details?.download_links || [])?.map(
                      (item, i) => (
                        <div key={i} className="flex flex-col gap-y-2">
                          <div className="px-5 flex flex-col gap-y-2 my-2">
                            {details?.download_links[item] &&
                              details?.download_links[item]?.map((itm, i) => (
                                <DownloadBtnTheme1
                                  key={i}
                                  url={itm?.download_link}
                                >
                                  {itm?.label}
                                </DownloadBtnTheme1>
                              ))}
                          </div>
                        </div>
                      )
                    )}
                  </div>
                )}
            </div>

            <div className="mt-5">
              <p className="text-[#FFA113] text-[35px] text-center font-bold">
                [ How To Download ]
              </p>
            </div>

            {/* ===========>> JOIN TELEGRAM <<=========== */}
            <JoinTelegramBtn />
          </div>

          {/* Tag List */}
          <TagsList details={details} title="Movie" />

          {/* ===========> Latest Web-Series <===========*/}
          <div className="flex flex-col justify-center items-center p-5">
            <SectionTitle> Related Web-Series </SectionTitle>
            {suggessionsLoading ? (
              <div className="w-full">
                <LazyLoadingTheme1 lazyLength={5} />
              </div>
            ) : (
              <div className="w-full mt-5 flex justify-between">
                {suggessions?.data?.slice(0, 5)?.map((item, i) => (
                  <Theme1Card key={i} item={item} />
                ))}
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

export default TvShowDetailsTheme1;
