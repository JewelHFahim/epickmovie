import { useEffect } from "react";
import { Helmet } from "react-helmet";
import DownloadSection from "./DownloadSection";
import Breadcum from "../../../utils/breadcum/Breadcum";
import { useNavigate, useParams } from "react-router-dom";
import SiteNews from "../../../components/SiteNews/SiteNews";
import JoinTelegramBtn from "../../../utils/JoinTelegramBtn";
import { useSiteConfig } from "../../../utils/configHooks/ConfigHooks";
import TagsList from "../../../components/seo-related-content/TagsList";
import RelatedMovieTv from "../../../components/theme1-contents/RelatedMovieTv";
import DetailsInfoCard from "../../../components/theme1-contents/DetailsInfoCard";
import SEOContentsTheme1 from "../../../components/theme1-contents/SEOContentsTheme1";
import LatestMovieTvShow from "../../../components/theme1-contents/LatestMovieTvShow";
import { useSuggessionMovieSeriesQuery } from "../../../redux/features/search/searchApi";
import { usePerPgaeTvShowQuery, useSeriesDetailsQuery } from "../../../redux/features/tv-show/tvShowApi";

const TvShowDetailsTheme1 = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { siteName } = useSiteConfig();
  const { data: seriesDetails, isLoading: detaislLoading } = useSeriesDetailsQuery(id);
  const details = seriesDetails?.data;
  const { data: perPageTvShow, isLoading: tvShowLoading } = usePerPgaeTvShowQuery(1);
  const { data: suggessions, isLoading: suggessionsLoading } = useSuggessionMovieSeriesQuery(id);


// Error handle, if id not found
  useEffect(() => {
    if (seriesDetails?.status === false) {
      navigate("/404");
    }
  }, [seriesDetails, navigate]);

// page scroll effect
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);



  return (
    <div className="bg-[#18181a]">
      
      {/* =============> SEO TITLE <=============*/}
      <Helmet>
        <title> {`${siteName} || ${details?.post_title ? details?.post_title : ""}`}</title>
        <meta name={details?.post_title ? details?.post_title : ""} content={details?.post_content}/>
        <meta name="keywords" content="web-series" />
      </Helmet>

      {/* =============> SITE NEWS <=============*/}
      <SiteNews />

      {/* ===========> Latest Movies <===========*/}
      <LatestMovieTvShow loading={tvShowLoading} perPageData={perPageTvShow} />

      <section className="lg:w-[1300px] mx-auto font-encode">
        <Breadcum children1="Web-Series" children2={details?.post_title} redirect={`/tv-show`}/>

        <div className="bg-[#262626]">
          {/* =============>> INFO CARD <<============= */}
          <DetailsInfoCard details={details} detaislLoading={detaislLoading}/>

          {/* ============>> SEO CONTENT <<============ */}
          <SEOContentsTheme1 details={details} type="Web-Series" />

          {/* ==========>> DOWNLOAD SECTION <<========= */}
          <DownloadSection details={details} />

          {/* ===========>> JOIN TELEGRAM <<=========== */}
          <JoinTelegramBtn />

          {/* =============>> TAG LIST <<============== */}
          <TagsList details={details} title="Movie" />

          {/* ===========> RELATED WEB-SERIES <=========*/}
          <RelatedMovieTv suggessions={suggessions} isLoading={suggessionsLoading} type="Web-Series"/>
        </div>
      </section>
    </div>
  );
};

export default TvShowDetailsTheme1;
