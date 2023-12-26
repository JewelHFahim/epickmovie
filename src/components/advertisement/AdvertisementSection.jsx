import joinTelegran from "../../assets/join telegram.png";
import ads from "../../assets/ads.png";
import { useCountryListClientQuery } from "../../redux/features/movies/movieApi";
import { useJoinTelegramConfigQuery } from "../../redux/features/settings/settingApi";

const AdvertisementSection = () => {
  const { data: countryList } = useCountryListClientQuery();
  const { data: joinTelegram } = useJoinTelegramConfigQuery();

  return (
    <div className="hidden lg:block  w-[30%] bg-[#1F1F22] p-4">
      <div className="w-[299px] h-[193px] bg-[#27272A] flex flex-col">
        <p className="text-white font-inter font-[500] mt-[39px] ml-[34px]">
          Join Our Telegram
        </p>
        <hr className="w-full bg-[#494949] opacity-[.4]" />
        <a href={joinTelegram?.data} target="_blank" rel="noopener noreferrer">
          <img
            src={joinTelegran}
            alt=""
            className="mt-[10px] w-[268px] h-[104px] mx-auto"
          />
        </a>
      </div>

      <div className="w-[299px] h-[275px]  bg-[#27272A] mt-[27px]">
        <p className="pl-[30px] pt-[15px] font-[500] font-inter text-[#F4F4F4C9] ">
          Countries
        </p>

        <hr className="w-full bg-[#494949] opacity-[.4]" />

        <div className="w-full px-4 py-2 grid grid-cols-2 gap-[8px]">
          {countryList?.data?.map((item, i) => (
            <button
              key={i}
              className="px-4 py-[4px] rounded-[4px] bg-[#f4f4f4c9] text-[10px] text-[#27272A] font-inter font-medium"
            >
              {item?.name}
            </button>
          ))}
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