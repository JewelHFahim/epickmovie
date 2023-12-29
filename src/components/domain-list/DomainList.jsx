import { useSiteNewsUserQuery } from "../../redux/features/settings/settingApi";

const DomainList = () => {
  const { data: siteNews } = useSiteNewsUserQuery();

  return (
    <div className="w-[90%] h-[28px] hidden lg:flex justify-center items-center bg-[#5C1EC2] mt-[8px]">
      <p className="text-[14px] font-[600] flex items-center gap-2 text-white">
        Our All Domains are <span className="text-[#F00]">Epickmovies.fun</span>
        {/* <span className="text-[#FFD600]">EpickMovies.link</span> |
        <span className="text-[#42FF00]">EpicMovies.shop</span>|
        <span className="text-[#69C9FF]"> movieshub.pro</span> |
        <span className="text-[#F00]">mlwbd.lat</span> |
        <span className="text-[#FFD600]">mlwbd.team</span>|
        <span className="text-[#42FF00]">mkvcinema.blog</span> |
        <span className="text-[#FFA113]">10bestmovies.com</span> */}
        {siteNews?.data}
      </p>
    </div>
  );
};

export default DomainList;
