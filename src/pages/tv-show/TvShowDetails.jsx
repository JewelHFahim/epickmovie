import calender from "../../assets/calender.svg";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useSeriesDetailsQuery } from "../../redux/features/tv-show/tvShowApi";
import JoinTelegramBtn from "../../utils/JoinTelegramBtn";
import RelatedPost from "../../components/related-post/RelatedPost";
import AdvertisementSection from "../../components/advertisement/AdvertisementSection";
import Breadcum from "../../utils/breadcum/Breadcum";
import UploadedDate from "../../utils/uploaded-date/UploadedDate";
import DetailsPosterCard from "../../components/details-poster-card/DetailsPosterCard";
import { Helmet } from "react-helmet";
import CountryList from "../../components/advertisement/CountryList";
import { useEffect } from "react";
import CachedImage from "../../utils/cache-img/CachedImage";
import { useSiteConfig } from "../../utils/configHooks/ConfigHooks";
import DownloadSeason from "./DownloadSeason";
import StoryTitle from "../../components/seo-related-content/StoryTitle";
import MobileStoryTitle from "../../components/seo-related-content/MobileStoryTitle";
import DownloadInfos from "../../components/seo-related-content/DownloadInfos";
import TagsList from "../../components/seo-related-content/TagsList";
import TvShowDetailsDefault from "./tvshow-details-default/TvShowDetailsDefault";

const TvShowDetails = () => {
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
    <>
    <TvShowDetailsDefault/>
    </>
  );
};

export default TvShowDetails;
