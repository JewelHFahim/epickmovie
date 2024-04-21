import { useEffect } from "react";
import { Helmet } from "react-helmet";
import Breadcum from "../../../utils/breadcum/Breadcum";
import SiteNews from "../../../components/SiteNews/SiteNews";
import JoinTelegramBtn from "../../../utils/JoinTelegramBtn";
import {  useNavigate, useParams } from "react-router-dom";
import { useSiteConfig } from "../../../utils/configHooks/ConfigHooks";
import TagsList from "../../../components/seo-related-content/TagsList";
import { useSuggessionMovieSeriesQuery } from "../../../redux/features/search/searchApi";
import {
  usePerPgaeTvShowQuery,
  useSeriesDetailsQuery,
} from "../../../redux/features/tv-show/tvShowApi";
import SEOContentsTheme1 from "../../../components/theme1-contents/SEOContentsTheme1";
import LatestMovieTvShow from "../../../components/theme1-contents/LatestMovieTvShow";
import DownloadBtnTheme1 from "../../../utils/theme1-contents/DownloadBtnTheme1";
import DetailsInfoCard from "../../../components/theme1-contents/DetailsInfoCard";
import RelatedMovieTv from "../../../components/theme1-contents/RelatedMovieTv";

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

      <section className="lg:w-[1300px] mx-auto font-encode">
        <Breadcum
          children1="Web-Series"
          children2={details?.post_title}
          redirect={`/tv-show`}
        />

        <div className="bg-[#262626]">
          {/*Info Card */}
          <DetailsInfoCard details={details} />

          {/* SEO Content */}
          <SEOContentsTheme1 details={details} type="Web-Series"/>

          {/* Download Section */}
          <div className="w-full">
            <h2 className="text-[28px] text-[#1FCD0F] font-bold text-center px-8">
              {details?.post_title}:
            </h2>

            <div className="mt-7 bg-[#FFB800] w-[300px] mx-auto py-1.5 text-[24px] font-bold text-center">
              Download Links:
            </div>

            {/* ==========>> DOWNLOAD BUTTON <<=============*/}
            <div className=" w-[80%] lg:w-[600px] mx-auto mt-3">
              {details?.download_links?.length === 0 && (
                <p className="text-[28px] lg:text-[22px] font-medium text-slate-500 text-center">
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

          {/* ===========> Related Web-Series <===========*/}
          <RelatedMovieTv
            suggessions={suggessions}
            isLoading={suggessionsLoading}
            type="Web-Series"
          />
        </div>
      </section>
    </div>
  );
};

export default TvShowDetailsTheme1;
