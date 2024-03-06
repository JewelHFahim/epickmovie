import DownloadButton from "../../utils/DownloadButton";

const DownloadSeason = ({ details }) => {
  const myArray = details?.download_links;
  console.log(details);

  return (
    <div className="">
      {Object.keys(myArray || [])?.map((item, i) => (
        <div key={i} className="flex flex-col gap-y-2">
          <div className=" group relative flex w-full mx-auto justify-center items-center rounded-lg border-0 hover:bg-gradient-to-t from-[#ff1818] to-[#fdd506]  hover:text-white bg-white px-5 text-left text-slate-800 transition [overflow-anchor:none] hover:z-[2] focus:z-[3] focus:outline-none text-[30px] lg:text-[16px] font-semibold py-5 lg:py-2">
            {item}
          </div>

          <div className="px-5 flex flex-col gap-1">
            {myArray[item]?.map((itm, i) => (
              <DownloadButton key={i} url={itm?.download_link}>
                {itm?.label}
              </DownloadButton>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default DownloadSeason;
