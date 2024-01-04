import calender from "../../../assets/calender.svg";
import DownloadButton from "../../../utils/DownloadButton";
import { useMovieDetailsQuery } from "../../../redux/features/movies/movieApi";
import { useParams } from "react-router-dom";
import JoinTelegramBtn from "../../../utils/JoinTelegramBtn";
import DetailsPosterCard from "../../../components/details-poster-card/DetailsPosterCard";
import RelatedPost from "../../../components/related-post/RelatedPost";
import AdvertisementSection from "../../../components/advertisement/AdvertisementSection";
import Breadcum from "../../../utils/breadcum/Breadcum";
import { useSiteNameUSerQuery } from "../../../redux/features/settings/settingApi";

const MovieDetails = () => {
  const { id } = useParams();

  const { data: movieDetails } = useMovieDetailsQuery(id);
  const { data: siteName } = useSiteNameUSerQuery();

  const details = movieDetails?.data;
  console.log(details);

  const currentDate = new Date();
  const givenDate = new Date(details?.updated_at);

  // Calculate time difference in milliseconds
  const timeDifference = currentDate.getTime() - givenDate.getTime();

  // Convert milliseconds to days
  const daysDifference = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
  document.title = `${siteName?.data} || ${details?.post_title}`;


  return (
    <div className="bg-[#27272A]">


      <Breadcum children1="Movies" children2={details?.post_title} redirect={"/movies"}/>

      <section className=" p-2 lg:p-5 flex justify-between">
        <div className="w-full  lg:w-[70%]">
          <div>
            <h4 className=" text-[20px] lg:text-[24px] text-white font-aclonica max-w-[748px]">
              {details?.post_title}
            </h4>

            <div className=" flex items-center gap-2 mt-2">
              <img src={calender} alt="" className="w-[12px] h-[12px]" />
              <p className="text-[13px] text-white font-roboto">
                {daysDifference === 0
                  ? "Today Uploaded"
                  : `${daysDifference} Days Ago`}
              </p>
            </div>


            {details?.post_content ? (
              <div className="mt-[11px] lg:mt-[48px] max-w-[745px]">
                <p className="text-[13px] lg:text-[15px]  text-white font-roboto">
                  {details?.post_content}
                </p>
              </div>
            ) : (
              <div className="mt-[11px] lg:mt-[19px] max-w-[745px]">
                <p className="text-[13px] lg:text-[15px]  text-white font-roboto">
                  <span className="font-[700]"> EpickMovies</span> Provide You
                  With Super Quality Of Movies and
                  <span className="font-[700]">WEB Series.</span> We Provide
                  Google Drive Direct Download Links For Fast And Secure
                  <span className="font-[700]">Download.</span> You Can Join us
                  on Telegram For the Latest Updates.
                </p>
              </div>
            )}


            <div className="my-[11px] lg:my-[15px]">
              <p className="text-[18px] lg:text-[24px] text-[#217703] font-[600] font-roboto">
                Movie Details :
              </p>
            </div>

            {/* ===============>> Poster Card <<=============== */}
            <DetailsPosterCard details={details} />

            <div className="max-w-[715px] mt-[13px]">
              <h3 className="text-[18px] lg:text-[24px] font-[600] font-roboto text-[#217703] text-left lg:text-center">
                <a href={details?.guid}> {details?.post_title} ~ EpicMovies </a>
              </h3>
            </div>

            {/* Static Data */}
            <div className="max-w-[715px] mt-[13px] lg:mt-[30px] font-roboto">
              <h3 className="text-[18px] lg:text-[24px] font-[600] text-[#217703]">
                Storyline:
              </h3>
              <p className="text-white text-[16px] lg:text-[20px] mt-4">
                {details?.post_content}
              </p>
            </div>

            <div className="mt-[13px] lg:mt-[30px] font-roboto">
              <h3 className="text-[18px] lg:text-[24px] font-[600] text-[#217703] text-center lg:text-left">
                Screenshots:
              </h3>
            </div>
          </div>

          {/* ==========>> SCREEN SHOTS <<=============*/}
          <div className="flex flex-col gap-4 mt-3">
            {details?.screenshots?.slice(0, 3)?.map((item, i) => (
              <img
                key={i}
                src={item}
                alt=""
                className="w-full h-[156px] lg:h-[400px] object-cover"
              />
            ))}
          </div>

          <div className="max-w-[745px] my-[28px]">
            <p className="text-[16px] lg:text-[20px] text-white font-roboto font-[700] text-center">
              {details?.post_title}
            </p>
          </div>

          <div className=" max-w-[276px] lg:max-w-[399px] flex flex-col gap-3 mx-auto">
            {details?.download_links?.map((item, i) => (
              <DownloadButton key={i} url={item?.download_url}>
                {item?.label} {item?.px_quality} {item?.pr_quality} {item?.file_size}
              </DownloadButton>
            ))}
          </div>

          {/* ===========>> JOIN TELEGRAM <<=========== */}
          <JoinTelegramBtn />
        </div>

        {/* ===========>> ADVERTISEMENT <<=========== */}
        <AdvertisementSection />
      </section>

      {/* ===========>> RELETED POST <<=========== */}
      <RelatedPost id={id} redirect={"/movie"}/>

    </div>
  );
};

export default MovieDetails;
