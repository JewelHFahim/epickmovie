import { MdOutlineDoubleArrow } from "react-icons/md";

const ChannelLoadingPage = () => {
  return (
    <div>
      {/* ============== HIGHLIGHTS CARD PC ================== */}
      <div className="mt-5 lg:flex items-center justify-between hidden">
        <div className="w-[640px] h-[350px] bg-slate-600 animate-pulse" />
        <div className="w-[640px] h-[350px] bg-slate-600 animate-pulse" />
      </div>

      {/* ============== HIGHLIGHTS CARD MB ================== */}
      <div className="mt-5 flex items-center justify-center lg:hidden">
        <div className="w-[80%] mx-auto h-[400px] bg-slate-600 animate-pulse" />
      </div>

      {/* ============= Categorywise Channels ================ */}
      <div className="w-[80%] mx-auto lg:w-full">
        <div className="mt-5 flex items-center justify-between font-jost text-[32px]">
          <div className="bg-slate-600 animate-pulse px-8 py-1">
            <p className="font-bold capitalize bg-slate-600 animate-pulse text-transparent">
              Entertainment
            </p>
          </div>

          <div className="flex items-center gap-1 font-semibold text-slate-600 animate-pulse">
            See More <MdOutlineDoubleArrow />
          </div>
        </div>

        <div className="mt-5 hidden lg:flex flex-wrap gap-5">
          {Array.from({ length: 6 }).map((item, i) => (
            <div
              key={i}
              className="w-full h-[580px] lg:w-[200px] lg:h-[320px] rounded-[10px]   bg-slate-600 animate-pulse"
            ></div>
          ))}
        </div>

        <div className="mt-5 grid grid-cols-2 gap-8 mx-auto lg:hidden">
          {Array.from({ length: 6 }).map((item, i) => (
            <div
              key={i}
              className="w-full h-[580px] lg:w-[200px] lg:h-[320px] rounded-[10px]   bg-slate-600 animate-pulse"
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ChannelLoadingPage;
