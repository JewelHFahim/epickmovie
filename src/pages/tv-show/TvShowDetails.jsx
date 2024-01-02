import { AiOutlineDoubleRight } from "react-icons/ai";
import calender from "../../assets/calender.svg";
import { useParams } from "react-router-dom";
import { useSeriesDetailsQuery } from "../../redux/features/tv-show/tvShowApi";
import JoinTelegramBtn from "../../utils/JoinTelegramBtn";
import Accrodion from "../../components/accrodion/Accrodion";
import RelatedPost from "../../components/related-post/RelatedPost";
import AdvertisementSection from "../../components/advertisement/AdvertisementSection";
import Breadcum from "../../utils/breadcum/Breadcum";

const TvShowDetails = () => {
  const { id } = useParams();
  const { data: seriesDetails } = useSeriesDetailsQuery(id);
  const details = seriesDetails?.data;
  console.log(details);

  const currentDate = new Date();
  const givenDate = new Date(details?.updated_at);

  // Calculate time difference in milliseconds
  const timeDifference = currentDate.getTime() - givenDate.getTime();

  // Convert milliseconds to days
  const daysDifference = Math.floor(timeDifference / (1000 * 60 * 60 * 24));

  // Given date
  const publishedDate = new Date(details?.updated_at);

  // Format the date
  const formattedDate = publishedDate.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  const keysList = Object?.keys(details?.download_links || {});
  console.log(keysList);

  return (
    <div className="bg-[#27272A]">
      <Breadcum children1="TV Show" children2={details?.post_title} />

      <section className=" p-2 lg:p-5 flex justify-between">
        {/* >>>>>>> Column One <<<<<<< */}
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
                  : `${daysDifference} "Days Ago" `}
              </p>
            </div>

            {/* Post Content */}
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
                Series Details :
              </p>
            </div>

            {/* ===============>> Poster Card <<=============== */}
            <div className=" lg:w-[715px] lg:min-h-[272px] lg:max-h-[100%] rounded-[20px] bg-[#1B1E21] p-[14px] flex flex-col lg:flex-row gap-[18px] lg:gap-[26px]">
              <div className="bg-gradient-to-t from-[#ff1818] to-[#fdd506] lg:min-w-[182px] lg:h-[250px] p-[1.5px] rounded-[6px]">
                <img
                  src={details?.poster_image_url}
                  alt=""
                  className="w-full h-full rounded-[3px]"
                />
              </div>

              <div className="font-roboto lg:w-[70%]">
                <h3 className="text-[20px] text-[#FFA113]">
                  {details?.post_title}
                </h3>

                <p className="text-[10px] text-white">{formattedDate}</p>

                <p className="text-[13px] text-[#AEABAB] mt-[10px] flex items-start gap-1 max-w-[100%]">
                  Director:
                  <span>
                    {details?.additional_data?.dtcreator?.map((item, i) => (
                      <a
                        href=""
                        key={i}
                        className="text-[#FFA113] underline mx-1"
                      >
                        {item?.term?.name}
                      </a>
                    ))}
                  </span>
                </p>

                {/* Nedd Summery*/}
                <p className="text-[13px] text-[#AEABAB] font-[700] max-w-[455px]">
                  Summary:{" "}
                  <a href="" className="text-white font-[400]">
                    A high-octane action thriller which outlines the emotional
                    journey of a man who is set to rectify the wrongs in the
                    society.
                  </a>
                </p>

                {/* IMDB Section */}
                <>
                  <p className="text-[11px] text-[#AEABAB] mt-[22px]">
                    Countries:
                    <span className="text-white ">
                      {" "}
                      {details?.country !== null ? details?.country : "N/A"}
                    </span>
                  </p>

                  <p className="text-[11px] text-[#AEABAB]">
                    Source:{" "}
                    <a href="" className="text-[#FFA113] font-[700]">
                      {" "}
                      imdb.com{" "}
                    </a>
                  </p>

                  <p className="text-[11px] text-[#AEABAB]">
                    IMBDb RATING:{" "}
                    <a href="" className="text-[#FFA113] font-[700]">
                      {" "}
                      {details?.imdb_rating}{" "}
                    </a>
                  </p>
                </>
              </div>
            </div>

            {/* ===> CARD END <=== */}
            <div className="max-w-[715px] mt-[13px]">
              <h3 className="text-[18px] lg:text-[24px] font-[600] font-roboto text-[#217703] text-left lg:text-center">
                <a href={details?.guid}> {details?.post_title} ~ EpicSeries </a>
              </h3>
            </div>

            {/* Static Data */}
            <div className="max-w-[715px] mt-[13px] lg:mt-[30px] font-roboto">
              <h3 className="text-[18px] lg:text-[24px] font-[600] text-[#217703]">
                Storyline:
              </h3>
              <p className="text-white text-[16px] lg:text-[20px] mt-4">
                A high-octane action thriller which outlines the emotional
                journey of a man who is set to rectify the wrongs in the
                society.
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

          {/* ==========>> DOWNLOAD BUTTOJN <<=============*/}
          <div className="max-w-[400px] mx-auto">
            <Accrodion details={details} />
          </div>

          {/* ===========>> TELEGRAM BUTTON <<=============*/}
          <JoinTelegramBtn />
        </div>

        {/* >>>>>>> Column Two <<<<<<<<*/}
        <AdvertisementSection />
      </section>

      {/* ===========>> RELETED POST <<=========== */}
      <RelatedPost id={id} redirect={"/series"} />
    </div>
  );
};

export default TvShowDetails;
