import calender from "../../assets/calender.svg";
import { useParams } from "react-router-dom";
import { useSeriesDetailsQuery } from "../../redux/features/tv-show/tvShowApi";
import JoinTelegramBtn from "../../utils/JoinTelegramBtn";
import Accrodion from "../../components/accrodion/Accrodion";
import RelatedPost from "../../components/related-post/RelatedPost";
import AdvertisementSection from "../../components/advertisement/AdvertisementSection";
import Breadcum from "../../utils/breadcum/Breadcum";
import { useSiteNameUSerQuery } from "../../redux/features/settings/settingApi";
import UploadedDate from "../../utils/uploaded-date/UploadedDate";
import StaticContent from "../../utils/Content/StaticContent";
import DetailsPosterCard from "../../components/details-poster-card/DetailsPosterCard";
import { Helmet } from "react-helmet";
import CountryList from "../../components/advertisement/CountryList";

const TvShowDetails = () => {
  const { id } = useParams();
  const { data: siteName } = useSiteNameUSerQuery();

  const { data: seriesDetails } = useSeriesDetailsQuery(id);
  const details = seriesDetails?.data;

  window.scrollTo({ top: 0, behavior: 'smooth' });


  return (
    <div className="bg-[#27272A]">
      
        <Helmet>
          <title> {`${siteName?.data} || ${details?.post_title} `}</title>
          <meta name="description" content={details?.post_content} />
          <meta name="keywords" content="tvshows" />
        </Helmet>


      <Breadcum
        children1="TV Show"
        children2={details?.post_title}
        redirect={`/tv-show`}
      />

      <section className=" py-4 px-10 lg:py-2 lg:px-5 flex justify-between">
        {/* >>>>>>> Column One <<<<<<< */}
        <div className="w-full  lg:w-[70%]">
          <div>
            <h4 className=" text-[50px] lg:text-[24px] text-white font-aclonica lg:max-w-[748px]">
              {details?.post_title}
            </h4>

            <div className=" flex items-center gap-2 mt-2">
              <img src={calender} alt="" className="w-[20px] h-[20px] lg:w-[12px] lg:h-[12px]" />
              <UploadedDate details={details} />
            </div>

            {/* Post Content */}
            {details?.post_content ? (
              <div className="mt-[11px] lg:mt-[48px] lg:max-w-[745px]">
                <p className="text-[30px] lg:text-[15px]  text-white font-roboto">
                  {details?.post_content}
                </p>
              </div>
            ) : (
              <StaticContent />
            )}

            <div className="my-[11px] lg:my-[15px]">
              <p className="text-[50px] lg:text-[24px] text-[#217703] font-[600] font-roboto">
                Series Details :
              </p>
            </div>

            {/* ============>> Poster Card <<============ */}
            <DetailsPosterCard details={details} />

            <div className="lg:max-w-[715px] mt-[13px]">
              <h3 className="text-[50px] leading-none lg:text-[24px] font-[600] font-roboto text-[#217703] text-left lg:text-center">
                <a href={details?.guid}> {details?.post_title} ~ EpicSeries </a>
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

            <div className="mt-[13px] lg:mt-[30px] font-roboto">
              <h3 className="text-[50px] lg:text-[24px] font-[600] text-[#217703] text-center lg:text-left">
                Screenshots:
              </h3>
            </div>
          </div>

          {/* ==========>> SCREEN SHOTS <<=============*/}
          <div className="flex flex-col gap-4 mt-3">
            {details?.screenshots?.slice(0, 3)?.map((item, i) => (
              <img key={i} src={item} alt="" className="w-full h-[400px] object-cover"/>
            ))}
          </div>

          <div className="lg:max-w-[745px] my-[28px]">
            <p className="text-[30px] text-white font-roboto font-[700] text-center">
              {details?.post_title}
            </p>
          </div>

          {/* ==========>> DOWNLOAD BUTTOJN <<=============*/}
          <div className="w-[80%] lg:max-w-[400px] mx-auto">
            <Accrodion details={details} url={"jkj"} />
          </div>

          {/* ===========>> TELEGRAM BUTTON <<=============*/}
          <JoinTelegramBtn />

          {/* =============>> COUNTRY LIST <<===============*/}

          <div className="mt-16 lg:hidden ">
            <h2 className="text-white text-[40px] font-medium px-4">Browse By Country:</h2>
          <div className="bg-[#1b1b1e] p-4  h-[300px] overflow-y-auto  grid grid-cols-3 gap-4">
            <CountryList />
          </div>
          </div>
        </div>

        {/* >>>>>>> Column Two <<<<<<<<*/}
        <AdvertisementSection />
      </section>

      {/* ===========>> RELETED POST <<=========== */}
      <RelatedPost id={id} redirect={`/series`} />
    </div>
  );
};

export default TvShowDetails;
