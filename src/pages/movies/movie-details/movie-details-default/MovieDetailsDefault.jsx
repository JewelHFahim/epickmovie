import { useEffect } from "react";
import { Helmet } from "react-helmet";
import calender from "../../../../assets/calender.svg";
import Breadcum from "../../../../utils/breadcum/Breadcum";
import DownloadButton from "../../../../utils/DownloadButton";
import { Link, useNavigate, useParams } from "react-router-dom";
import JoinTelegramBtn from "../../../../utils/JoinTelegramBtn";
import UploadedDate from "../../../../utils/uploaded-date/UploadedDate";
import RelatedPost from "../../../../components/related-post/RelatedPost";
import { useSiteConfig } from "../../../../utils/configHooks/ConfigHooks";
import CountryList from "../../../../components/advertisement/CountryList";
import TagsList from "../../../../components/seo-related-content/TagsList";
import StoryTitle from "../../../../components/seo-related-content/StoryTitle";
import { useMovieDetailsQuery } from "../../../../redux/features/movies/movieApi";
import DownloadInfos from "../../../../components/seo-related-content/DownloadInfos";
import MobileStoryTitle from "../../../../components/seo-related-content/MobileStoryTitle";
import DetailsPosterCard from "../../../../components/details-poster-card/DetailsPosterCard";
import AdvertisementSection from "../../../../components/advertisement/AdvertisementSection";

const MovieDetailsDefault = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { siteName } = useSiteConfig();
  const { data: movieDetails } = useMovieDetailsQuery(id);
  const details = movieDetails?.data;

  useEffect(() => {
    if (movieDetails?.status === false) {
      navigate("/404");
    }
  }, [movieDetails, navigate]);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <div className="bg-[#27272A]">
      
      {/* ==================>> SEO Content <<============ */}
      <Helmet>
        <title>
          {siteName} || Watch {details?.post_title ? details?.post_title : ""}{" "}
          Online Free on {siteName}
        </title>
        <meta
          name={details?.post_title ? details?.post_title : ""}
          content={details?.post_content}
        />
        <meta
          name="keywords"
          content="free movies, online movie, movie online, free movies online, watch movies online free, free hd movies, watch movies online"
        />
      </Helmet>

      <Breadcum
        children1="Movies"
        children2={details?.post_title}
        redirect={"/movies"}
      />

      <section className="py-4 px-10 lg:py-2 lg:px-5 flex justify-between">
        <div className="w-full  lg:w-[70%]">
          <div>
            <h4 className="text-[50px] lg:text-[24px] text-white font-aclonica lg:max-w-[748px]">
              {details?.post_title}
            </h4>

            <div className="flex items-center gap-2 mt-2">
              <img
                src={calender}
                alt=""
                className="w-[18px] h-[18px] lg:w-[12px] lg:h-[12px]"
              />
              <UploadedDate details={details}></UploadedDate>
            </div>

            <div className="hidden lg:block">
              <StoryTitle details={details} type={"Movies"} />
            </div>

            <div className="lg:hidden">
              <MobileStoryTitle details={details} type={"Movies"} />
            </div>

            <div className="my-[11px] lg:my-[15px]">
              <p className="text-[50px] lg:text-[24px] text-[#217703] font-[600] font-roboto">
                Movie Details :
              </p>
            </div>

            {/* ===============>> Poster Card <<=============== */}
            <DetailsPosterCard details={details} />

            <div className="lg:max-w-[715px] mt-[13px]">
              <h3 className="text-[50px] lg:text-[24px] font-[600] font-roboto text-[#217703] text-left lg:text-center leading-none">
                <Link to={details?.guid}>
                  {details?.post_title} ~ {siteName}
                </Link>
              </h3>
            </div>

            {/* Post Content*/}
            <div className="lg:max-w-[715px] mt-[13px] lg:mt-[30px] font-roboto">
              <h3 className="text-[50px] lg:text-[24px] font-[600] text-[#217703]">
                Storyline:
              </h3>
              <p className="text-white text-[30px] lg:text-[20px] mt-4">
                {details?.post_content}
              </p>
            </div>

            <DownloadInfos details={details} type="Movies" />
          </div>

          <div className="my-[28px]">
            <p className="text-[50px] lg:text-[20px] text-white font-roboto font-[700] text-center">
              {details?.post_title}
            </p>
          </div>

          <div className="max-w-[80%] lg:max-w-[399px] flex flex-col gap-5 lg:gap-3 mx-auto">
            {details?.download_links.length > 0 ? (
              details?.download_links?.map((item, i) => (
                <DownloadButton key={i} url={item?.download_url}>
                  {item?.label} {item?.px_quality} {item?.file_size}
                </DownloadButton>
              ))
            ) : (
              <p className="text-[18px] font-medium text-slate-500 text-center">
                No Download Link
              </p>
            )}
          </div>

          {/* ===========>> JOIN TELEGRAM <<=========== */}
          <JoinTelegramBtn />

          <div className="mt-32 lg:mt-10">
            <TagsList details={details} title="Movie" />
          </div>

          <div className="mt-16 lg:hidden ">
            <h2 className="text-white text-[40px] font-medium px-4">
              Browse By Country:
            </h2>
            <div className="bg-[#1b1b1e] p-4 h-[300px] overflow-y-auto  grid grid-cols-3 gap-4">
              <CountryList />
            </div>
          </div>
        </div>

        {/* ===========>> ADVERTISEMENT <<=========== */}
        <AdvertisementSection details={details} />
      </section>

      {/* ===========>> RELETED POST <<=========== */}
      <div className="px-10">
        <RelatedPost id={id} redirect={`/movie`} />
      </div>
    </div>
  );
};

export default MovieDetailsDefault;
