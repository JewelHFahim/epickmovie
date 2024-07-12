/* eslint-disable react/prop-types */
import joinTelegran from "../../assets/join telegram.png";
import ads from "../../assets/ads.png";
import CountryList from "./CountryList";
import { Link } from "react-router-dom";
import LatestMoviesCard from "../latest-movies/LatestMoviesCard";
import { useSiteConfig } from "../../utils/configHooks/ConfigHooks";
const AdvertisementSection = ({ details }) => {
  const { telegramLink } = useSiteConfig();

  return (
    <div className="hidden lg:block  w-[30%] bg-[#1F1F22] p-4">
      {/* Join Telegram */}
      <div className="w-[299px] h-[193px] bg-[#27272A] flex flex-col">
        <p className="text-white font-inter font-[500] mt-[39px] ml-[18px]">
          
          Join Our Telegram
        </p>
        <hr className="w-full bg-[#494949] opacity-[.4]" />
        <Link to={telegramLink} target="_blank" rel="noopener noreferrer">
          <img
            src={joinTelegran}
            alt=""
            className="mt-[10px] w-[268px] h-[104px] mx-auto"
          />
        </Link>
      </div>

      {/* Latest Movies */}
      <div className="my-5">
        <h2 className="text-[#B8B8B8] font-aclonica my-2">
          Latest {details?.post_type === "movies" ? "Movies" : "TV Shows"}
        </h2>
        <LatestMoviesCard details={details} />
      </div>

      <div className="w-[299px] bg-[#27272A] mt-[27px]">
        <p className="pl-[16px] pt-[15px] font-[500] font-inter text-[#F4F4F4C9] ">
          Browse By Countries
        </p>

        <hr className="w-full bg-[#494949] opacity-[.4]" />

        <div className="w-full h-[412px] px-4 py-2 grid grid-cols-2 gap-[8px] overflow-y-auto">
          <CountryList />
        </div>
      </div>

      <div className="w-[299px] h-[271px] bg-[#27272A] mt-[25px]">
        <p className="px-[34px] pt-[15px] font-[500] text-[#F4F4F4C9] opacity-[.79] m-0">
          Ads
        </p>
        <img src={ads} alt="" />
      </div>
    </div>
  );
};

export default AdvertisementSection;
