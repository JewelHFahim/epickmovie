import { useEffect } from "react";
import { Helmet } from "react-helmet";
import DownloadSection from "./DownloadSection";
import { useNavigate, useParams } from "react-router-dom";
import Breadcum from "../../../../utils/breadcum/Breadcum";
import SiteNews from "../../../../components/SiteNews/SiteNews";
import JoinTelegramBtn from "../../../../utils/JoinTelegramBtn";
import { useSiteConfig } from "../../../../utils/configHooks/ConfigHooks";
import TagsList from "../../../../components/seo-related-content/TagsList";
import RelatedMovieTv from "../../../../components/theme1-contents/RelatedMovieTv";
import DetailsInfoCard from "../../../../components/theme1-contents/DetailsInfoCard";
import SEOContentsTheme1 from "../../../../components/theme1-contents/SEOContentsTheme1";
import LatestMovieTvShow from "../../../../components/theme1-contents/LatestMovieTvShow";
import { useMovieDetailsQuery, usePerPgaeMovieQuery } from "../../../../redux/features/movies/movieApi";
import { useSuggessionMovieSeriesQuery } from "../../../../redux/features/search/searchApi";

const MovieDetailsTheme1 = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { siteName } = useSiteConfig();
  const { data: movieDetails, isLoading: detaislLoading } = useMovieDetailsQuery(id);
  const details = movieDetails?.data;
  const { data: perPageMovie, isLoading: movieLoading } = usePerPgaeMovieQuery(1);
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
    <div className="bg-[#18181a] px-10 lg:px-0 ">

      {/* =============> SEO TITLE <=============*/}
      <Helmet>
        <title> {`${siteName} || ${details?.post_title ? details?.post_title : ""}`} </title>
        <meta name={details?.post_title ? details?.post_title : ""} content={details?.post_content}/>
        <meta name="keywords" content="movies" />
      </Helmet>

      {/* =============> SITE NEWS <=============*/}
      <SiteNews />

      {/* ===========> LATEST MOVIES <===========*/}
      <LatestMovieTvShow loading={movieLoading} perPageData={perPageMovie} />

      <section className="lg:w-[1300px] mx-auto font-encode">

        <Breadcum children1="movies" children2={details?.post_title} redirect="/movies"/>

        <div className="bg-[#262626] w-full">
          {/* ===========> INFO CARD <===========*/}
          <DetailsInfoCard details={details} detaislLoading={detaislLoading}/>

          {/* ==========> SEO CONTENT <==========*/}
          <SEOContentsTheme1 details={details} type="Movies" />

          {/* =======> DOWNLOAD SECTION <========*/}
          <DownloadSection details={details} />

          {/* =======>> JOIN TELEGRAM <<======== */}
          <JoinTelegramBtn />

          {/* ===========> TAG LIST <============*/}
          <TagsList details={details} title="Movie" />

          {/* ========> RELATED MOVIES <=========*/}
          <RelatedMovieTv suggessions={suggessions} isLoading={suggessionsLoading} type="Movies"/>
        </div>

      </section>
    </div>
  );
};

export default MovieDetailsTheme1;
