import { useLocation } from "react-router-dom";
import CardTheme3 from "../../../components/theme3-contents/card-theme3/CardTheme3";
import { useTvShowTheme3Query } from "../../../redux/features/tv-show/tvShowApi";
import PaginationTheme1 from "../../../utils/common-pagination/pagination-theme1/PaginationTheme1";

const TvShowTheme3 = () => {
  const location = useLocation();
  const currentRoute = location?.pathname;
  const currentP = Number(currentRoute?.slice(14)) === 0 ? 1 : Number(currentRoute?.slice(14));
  const { data: tvShowsList, isLoading: tvLoading } = useTvShowTheme3Query({
    quantity: 42,
    page: currentP || 1,
  });

  return (
    <div className="mt-4 lg:mr-4 px-4 lg:px-0 border-b lg:border-0 pb-10 lg:w-[850px]">
       <div className="px-4 h-[70px] lg:h-[53px] flex items-center justify-between bg-[#D9D9D914]">
        <p className="text-white text-[35px] lg:text-xl border-l-4 border-red-600 pl-1">
          Latest Web-Series
        </p>
      </div>

      <div className="mt-4 grid grid-cols-3 lg:grid-cols-5 gap-2">
        {tvLoading
          ? Array.from({ length: 42 }).map((item, i) => (
              <div
                key={i}
                className="lg:w-[160px] h-[550px] lg:h-[280px] flex flex-col justify-between"
              >
                <div className="w-full h-[85%] bg-slate-700 animate-pulse"></div>

                <div className="w-full h-[12%] bg-slate-700 animate-pulse"></div>
              </div>
            ))
          : tvShowsList?.data?.data?.map((item, i) => (
              <CardTheme3 key={i} item={item} />
            ))}
      </div>

      {/* =================== PAGINATIONS ===================== */}
      <div className="">
        <PaginationTheme1
          currentPage={currentP}
          perPgaeMovie={tvShowsList}
          type="movies"
          btnColor="bg-[#009987]"
        />
      </div>
    </div>
  );
};

export default TvShowTheme3;
