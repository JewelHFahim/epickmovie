import joinTelegran from "../../assets/join telegram.png";
import ads from "../../assets/ads.png";
import { useCountryListClientQuery } from "../../redux/features/movies/movieApi";
import { useJoinTelegramUserQuery } from "../../redux/features/settings/settingApi";
import { Link } from "react-router-dom";
import { collectFilteredItem } from "../../redux/features/search/searchSlice";
import { useDispatch } from "react-redux";

const AdvertisementSection = () => {
  const { data: countryList } = useCountryListClientQuery();
  const { data: joinTelegram } = useJoinTelegramUserQuery();
  const dispatch = useDispatch();


  const handleCountry = (country) => {
    dispatch(collectFilteredItem(country));
  }

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

      <div className="w-[299px]  bg-[#27272A] mt-[27px]">

        <p className="pl-[30px] pt-[15px] font-[500] font-inter text-[#F4F4F4C9] ">
          Countries
        </p>

        <hr className="w-full bg-[#494949] opacity-[.4]" />

        <div className="w-full px-4 py-2 grid grid-cols-2 gap-[8px]">
          {countryList?.data?.map((item, i) => (
            <Link key={i} to="/filter-list"
            onClick={() => handleCountry(item?.slug)}
              className="px-4 py-[4px] rounded-[4px] bg-[#f4f4f4c9] hover:bg-slate-700 hover:text-white border hover:border-slate-400 transition-all duration-200 text-[10px] text-[#27272A] font-inter font-medium"
            >
              {item?.name}
            </Link>
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
