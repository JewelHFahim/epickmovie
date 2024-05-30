/* eslint-disable react/prop-types */
import DownloadBtnTheme1 from "../../../utils/theme1-contents/DownloadBtnTheme1";

const DownloadSection = ({ details }) => {
  

  return (
    <div className="w-full">
      <h2 className="text-[36px] lg:text-[28px] text-[#1FCD0F] font-bold text-center px-8">
        {details?.post_title}:
      </h2>

      <div className="mt-7 bg-[#FFB800] w-[300px] mx-auto py-1.5 text-[24px] font-bold text-center">
        Download Links:
      </div>

      {/* ==========>> DOWNLOAD BUTTON <<=============*/}
      <div className=" w-[80%] lg:w-[600px] mx-auto mt-3">
        {details?.download_links?.length === 0 && (
          <p className="text-[28px] lg:text-[22px] font-medium text-slate-500 text-center">
            No Download Link
          </p>
        )}

        {details?.download_links && Object.keys(details?.download_links) && (
          <div className="">
            {Object.keys(details?.download_links || [])?.map((item, i) => (
              <div key={i} className="flex flex-col gap-y-2">
                <div className="px-5 flex flex-col gap-y-2 my-2">
                  {details?.download_links[item] &&
                    details?.download_links[item]?.map((itm, i) => (
                      <DownloadBtnTheme1 key={i} url={itm?.download_link}>
                        {itm?.label}
                      </DownloadBtnTheme1>
                    ))}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      <div className="mt-5">
        <p className="text-[#FFA113] text-[35px] text-center font-bold">
          [ How To Download ]
        </p>
      </div>
    </div>
  );
};

export default DownloadSection;
