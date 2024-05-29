import { Link, useNavigate, useParams } from "react-router-dom";
import { useMovieDetailsQuery } from "../../../../redux/features/movies/movieApi";
import { useSuggessionMovieSeriesQuery } from "../../../../redux/features/search/searchApi";
import { useEffect, useState } from "react";
import { formatDate } from "../../../../components/theme3-contents/FormateDateTheme3";
import {
  FaFacebookF,
  FaPinterest,
  FaStar,
  FaTwitter,
  FaUserCircle,
  FaWhatsapp,
  FaYoutube,
} from "react-icons/fa";
import RelatedCardTheme3 from "./RelatedCardTheme3";
import TagsList from "../../../../components/seo-related-content/TagsList";
import DownloadPlayer from "./DownloadPlayer";
import DownloadLinksTable from "./DownloadLinksTable";
import telegram from "../../../../assets/join tg.png";
import facebook from "../../../../assets/join fb.png";
import { useSiteConfig } from "../../../../utils/configHooks/ConfigHooks";
import { IoPlayCircle } from "react-icons/io5";

const MovieDetailsTheme3 = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { data: movieDetails, isLoading: detaislLoading } =
    useMovieDetailsQuery(id);
  const details = movieDetails?.data;
  const { data: suggessions, isLoading: suggessionsLoading } =
    useSuggessionMovieSeriesQuery(id);
  const { telegramLink } = useSiteConfig();
  const [trailer, setTrailer] = useState(false);

  console.log(details);

  // Error handle, if id not found
  useEffect(() => {
    if (movieDetails?.status === false) {
      navigate("/404");
    }
  }, [movieDetails, navigate]);

  // page scroll effect
  // useEffect(() => {
  //   window.scrollTo({ top: 0, behavior: "smooth" });
  // }, []);

  const customizedDate = details?.release_date
    ? formatDate(details.release_date)
    : "No date available";

  const handleTralerVideo = () => {
    setTrailer(!trailer);
  };

  return (
    <div className="lg:w-[850px] mt-4 px-4">
      <div className="">
        {/* ==============>> TRAILER <<============== */}

        {!trailer && (
          <button
            onClick={() => handleTralerVideo()}
            className="w-full  border border-white border-opacity-[10%] flex items-center justify-between h-[100px] px-[30px] cursor-pointer"
          >
            <p className="flex items-center gap-x-4">
              <IoPlayCircle className="text-gray-700 text-[25px]" />
              <span className="text- font-medium text-gray-200 hover:text-blue-600">
                Watch trailer
              </span>
              <span className="text-slate-600">youtube.com</span>
            </p>

            <p className="text-[30px] text-gray-500 hover:text-red-700 transition-all ease-in-out">
              <FaYoutube />
            </p>
          </button>
        )}

        {/* ==========>> YOYTUBE PLAYER <<==========*/}
        {trailer && (
          <div className="p-1">
            <iframe
              width="100%"
              height="400"
              src="https://www.youtube.com/embed/vqu4z34wENw?si=EqZRclTD0_GJKU5a"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowfullscreen
            ></iframe>

            <div className="bg-black bg-opacity-[40%] flex justify-between px-5 py-5">
              <p className="text-xl font-medium text-gray-200">Video Source</p>

              <p className="flex items-center gap-x-2">
                <span className="border border-white border-opacity-[20%] px-4 text-center py-1 text-blue-600 bg-black rounded-md text-sm">Report Error</span>
                <span className="text-gray-400 font-medium">112 views</span>
              </p>

            </div>
          </div>
        )}

        {/* =============>> INFO SECTION <<===========*/}
        <div className="mt-5 flex flex-col lg:flex-row gap-4 shadow-sm border-b border-gray-200 pb-5 border-opacity-[20%]">
          <img
            src={details?.poster_image_url}
            alt=""
            className=" mx-auto w-[70%] lg:w-[200px] lg:h-[300px]"
          />

          <div className="w-full">
            <h1 className="text-[30px] text-gray-200 font-medium">
              {details?.post_title}
            </h1>

            <div className="text-gray-400 flex items-center gap-x-4 border-b pb-4 border-gray-700">
              <p>{customizedDate}</p>
              <p>{details?.country ? details?.country : "N/A"}</p>
              <p>{details?.runtime} Min</p>
            </div>

            <div className="py-4 flex items-center gap-x-3 border-b border-gray-700">
              <p className="text-[30px] font-medium text-gray-200 w-[80px] text-center bg-gray-500 bg-opacity-[20%] rounded-md">
                {details?.imdb_rating}
              </p>
              <div className="flex gap-x-4">
                <div>
                  <p className="flex items-center gap-x-1 text-lg text-blue-600">
                    {Array.from({ length: 10 }).map((item, i) => (
                      <FaStar key={i} />
                    ))}
                  </p>
                  <p className="flex items-center gap-x-1 text-sm mt-[2px] text-gray-400">
                    <FaUserCircle />
                    579 votes
                  </p>
                </div>

                <p className="text-gray-200 h-[30px] bg-gray-500 bg-opacity-[20%] px-4 py-[3px] text-sm rounded-md">
                  Your rating: 10
                </p>
              </div>
            </div>

            <div className="mt-2">
              {/* Directors */}
              <p className="flex items-start gap-x-1 text-gray-400 text-sm">
                <span className="text-gray-200 text-base">Directors:</span>
                <span>
                  {details?.additional_data?.dtdirector?.map((item, i) => (
                    <Link to="" key={i} className="underline mx-1">
                      {item?.term?.name}
                    </Link>
                  ))}
                </span>
              </p>

              {/* Actors */}
              <p className="mt-2 flex items-start gap-x-1 text-gray-400 text-sm">
                <span className="text-gray-200 text-base">Actors:</span>
                <span>
                  {details?.additional_data?.dtcast?.map((item, i) => (
                    <Link to="" key={i} className="underline mx-1">
                      {item?.term?.name}
                    </Link>
                  ))}
                </span>
              </p>
            </div>
          </div>
        </div>

        {/* ================>> Synopsis <<============ */}
        <div className="mt-10">
          <h2 className="text-[25px] text-gray-300 font-medium">Synopsis</h2>

          <div className="text-gray-300 mt-5 text-lg">
            ✅ {details?.post_title}: This is one of the best movies based on
            {details?.additional_data?.genres &&
              details?.additional_data?.genres?.map((item, i) => (
                <span key={i}>
                  <Link
                    to={`/terms/${item?.term?.slug}`}
                    className="text-red-600 font-semibold mx-1 underline"
                  >
                    {item.term.name}
                  </Link>
                </span>
              ))}
            .
            {details?.additional_data?.prquality && (
              <>
                <p>This Movie is available in</p>
                <>
                  {details?.additional_data?.pxquality?.map((item, i) => (
                    <Link
                      to={`/terms/${item?.term?.slug}`}
                      key={i}
                      className="text-green-600 font-semibold m-1"
                    >
                      {item.term.name}
                    </Link>
                  ))}
                </>
                <>
                  qualities with
                  {details?.additional_data?.prquality?.map((item, i) => (
                    <Link
                      to={`/terms/${item?.term?.slug}`}
                      key={i}
                      className="text-green-600 font-semibold ml-1"
                    >
                      {item.term.name}
                    </Link>
                  ))}
                  .
                </>
              </>
            )}
            This Movie is Hindi with English Subtitles. Click on the Download
            links below to proceed.
          </div>
        </div>

        {/* ==========>> Recommended Movies <<======== */}
        <div className="mt-8">
          <span className="text-lg"> ⬇️ </span>
          <span className="text-gray-500 font-medium">Recommended Movies:</span>

          <div className="flex flex-col mt-4 gap-y-3">
            {suggessions?.data?.map((item, i) => (
              <RelatedCardTheme3 item={item} key={i} />
            ))}
          </div>
        </div>

        {/* ================>> TAGS <<============= */}
        <TagsList
          details={details}
          className="px-0 mt-12 text-white text-opacity-[40%]"
        />

        <hr className=" border-white border-opacity-[10%] mt-10" />

        {/* ========>> Sreen Shots <<========= */}
        <div className="flex flex-col lg:flex-row items-center gap-4 my-7">
          {details?.screenshots?.slice(0, 3)?.map((item, i) => (
            <div key={i} className="w-full h-full mx-auto">
              <img src={item} alt="" className="w-full h-[450px] lg:h-full object-cover"/>
            </div>
          ))}
        </div>

        <hr className=" border-white border-opacity-[10%]" />

        {/* How to download Video */}
        <div className="mt-8 border-[4px] border-red-700 flex flex-col items-center p-5">
          <h2 className="text-red-600 text-[30px] font-medium">
            How To Download Movies
          </h2>

          <DownloadPlayer />
        </div>

        {/* =============>> Download Links <<============== */}
        <div className="mt-10">
          <div className="flex items-center gap-x-5 mb-5">
            <p className="text-2xl font-medium text-gray-600">Links</p>
            <p className="px-4 rounded-md bg-blue-600 text-white py-[2px] text-sm">
              Download
            </p>
          </div>

          <DownloadLinksTable details={details}/>
        </div>

        {/* ============>> JOIN US <<============= */}
        <div className="hidden  border-[4px] lg:flex items-start justify-evenly border-red-700 mt-8 py-10">
          {/* Telegram */}

          <Link
            to={telegramLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col justify-center items-center gap-y-2"
          >
            <h2 className="text-[40px] lg:text-[25px] text-center text-orange-600 font-medium">
              JOIN US ON TELEGRAM
            </h2>
            <img src={telegram} alt="" className="w-[220px] h-[90px]" />
          </Link>

          {/* Facebook */}
          <Link
            to=""
            className="flex flex-col justify-center text-center items-center gap-y-2"
          >
            <h2 className="text-[40px] lg:text-[25px] text-orange-600 font-medium">
              JOIN US ON FACEBOOK
            </h2>
            <img src={facebook} alt="" className="w-[220px] h-[80px]" />
          </Link>
        </div>

        {/* ==============>> SHARED <<=========== */}
        <div className="hidden mt-2 lg:flex items-center gap-x-4">
          <p className="font-medium text-gray-100 flex items-center gap-x-4 border-r border-gray-700 max-w-fit pr-3">
            <span className="text-gray-500">Shared</span> <span>0</span>
          </p>

          <div className="flex items-center gap-x-1 bg-blue-900 px-2 rounded-md text-gray-100 py-[2px]">
            <FaFacebookF />
            <p>facebook</p>
          </div>

          <div className="flex items-center gap-x-1 bg-[#03a9f4] px-2 rounded-md text-gray-100 py-[2px]">
            <FaTwitter />

            <p>twitter</p>
          </div>

          <div className=" bg-red-800 px-3 rounded-md text-gray-100 py-[7px]">
            <FaPinterest />
          </div>

          <div className=" bg-green-600 px-3 rounded-md text-gray-100 py-[7px]">
            <FaWhatsapp />
          </div>
        </div>

        <hr className=" border-white border-opacity-[10%] my-8" />
      </div>
    </div>
  );
};

export default MovieDetailsTheme3;
