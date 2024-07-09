import { useEffect } from "react";
import { Helmet } from "react-helmet";
import DownloadSeason from "../DownloadSeason";
import calender from "../../../assets/calender.svg";
import Breadcum from "../../../utils/breadcum/Breadcum";
import JoinTelegramBtn from "../../../utils/JoinTelegramBtn";
import { Link, useNavigate, useParams } from "react-router-dom";
import UploadedDate from "../../../utils/uploaded-date/UploadedDate";
import { useSiteConfig } from "../../../utils/configHooks/ConfigHooks";
import RelatedPost from "../../../components/related-post/RelatedPost";
import CountryList from "../../../components/advertisement/CountryList";
import TagsList from "../../../components/seo-related-content/TagsList";
import StoryTitle from "../../../components/seo-related-content/StoryTitle";
import { useSeriesDetailsQuery } from "../../../redux/features/tv-show/tvShowApi";
import DownloadInfos from "../../../components/seo-related-content/DownloadInfos";
import MobileStoryTitle from "../../../components/seo-related-content/MobileStoryTitle";
import AdvertisementSection from "../../../components/advertisement/AdvertisementSection";
import DetailsPosterCard from "../../../components/details-poster-card/DetailsPosterCard";

const TvShowDetailsDefault = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { data: seriesDetails } = useSeriesDetailsQuery(id);
  const details = seriesDetails?.data;
  const { siteName } = useSiteConfig();

  useEffect(() => {
    if (seriesDetails?.status === false) {
      navigate("/404");
    }
  }, [seriesDetails, navigate]);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <div className="bg-[#27272A]">
      
      {/* ======================>> SEO Content <<===================== */}
      <Helmet>
        <title>
          {siteName} || Watch {details?.post_title ? details?.post_title : ""}
          Online Free on {siteName}
        </title>
        <meta
          name={details?.post_title ? details?.post_title : ""}
          content={details?.post_content}
        />
        <meta
          name="keywords"
          content="free movies, online movie, movie online, free movies online, tv show, series, episode, season, watch movies online free, free hd movies, watch movies online"
        />
      </Helmet>

      <Breadcum
        children1="TV Show"
        children2={details?.post_title}
        redirect={`/tv-show`}
      />

      <section className=" py-4 px-10 lg:py-2 lg:px-5 flex justify-between">
        {/* ========================>> Column One <<====================== */}
        <div className="w-full  lg:w-[70%]">
          <div>
            <h4 className="text-[50px] lg:text-[24px] text-white font-aclonica lg:max-w-[748px]">
              {details?.post_title}
            </h4>

            <div className=" flex items-center gap-2 mt-2">
              <img
                src={calender}
                alt=""
                className="w-[20px] h-[20px] lg:w-[12px] lg:h-[12px]"
              />
              <UploadedDate details={details} />
            </div>

            <div className="hidden lg:block">
              <StoryTitle details={details} type={"Web-Series"} />
            </div>

            <div className="lg:hidden">
              <MobileStoryTitle details={details} type={"Web-Series"} />
            </div>

            <div className="my-[11px] lg:my-[15px]">
              <p className="text-[50px] lg:text-[24px] text-[#217703] font-[600] font-roboto">
                Series Details :
              </p>
            </div>

            {/* ============>> Poster Card <<============ */}
            <DetailsPosterCard details={details} />

            <div className="lg:max-w-[715px] mt-[13px]">
              <h3 className="text-[50px] leading-none lg:text-[24px] font-[600] font-roboto text-[#217703] text-left lg:text-center">
                <Link to={details?.guid}>
                  {details?.post_title} ~ EpicSeries
                </Link>
              </h3>
            </div>

            {/* Static Data */}
            <div className="lg:max-w-[715px] mt-[13px] lg:mt-[30px] font-roboto">
              <h3 className="text-[50px] lg:text-[24px] font-[600] text-[#217703]">
                Storyline:
              </h3>
              <p className="text-white text-[30px] lg:text-[20px] mt-4">
                {details?.post_content}
              </p>
            </div>
          </div>

          {/* ==========>> Download Infos <<=============*/}
          <DownloadInfos details={details} type="Web-Series" />

          <div className="lg:max-w-[745px] my-[28px]">
            <p className="text-[30px] text-white font-roboto font-[700] text-center">
              {details?.post_title}
            </p>
          </div>

          {/* ==========>> DOWNLOAD BUTTON <<=============*/}
          <div className="w-[80%] lg:max-w-[440px] mx-auto">
            {details?.download_links?.length === 0 && (
              <p className="text-[18px] font-medium text-slate-500 text-center">
                No Download Link
              </p>
            )}

            {details?.download_links &&
              Object.keys(details?.download_links) && (
                <DownloadSeason details={details} />
              )}
          </div>

          {/* ===========>> TELEGRAM BUTTON <<=============*/}
          <JoinTelegramBtn />

          <div className="mt-32 lg:mt-10">
            <TagsList details={details} title="Web-Series" />
          </div>

          {/* =============>> COUNTRY LIST <<===============*/}

          <div className="mt-16 lg:hidden ">
            <h2 className="text-white text-[40px] font-medium px-4">
              Browse By Country:
            </h2>
            <div className="bg-[#1b1b1e] p-4  h-[300px] overflow-y-auto  grid grid-cols-3 gap-4">
              <CountryList />
            </div>
          </div>
        </div>

        {/* ========================>> Column Two <<====================== */}
        <AdvertisementSection />
      </section>

      {/* ===========>> RELETED POST <<=========== */}
      <RelatedPost id={id} redirect={`/series`} />
    </div>
  );
};

export default TvShowDetailsDefault;
