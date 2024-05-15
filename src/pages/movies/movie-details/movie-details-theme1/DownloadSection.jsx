/* eslint-disable react/prop-types */
import DownloadBtnTheme1 from "../../../../utils/theme1-contents/DownloadBtnTheme1";

const DownloadSection = ({ details, textColor, textSize }) => {
  return (
    <div>
      
      <h2 className={`text-[35px] lg:text-[28px] text-[#1FCD0F] font-bold text-center px-8 ${textColor} ${textSize}`}>
        {details?.post_title}:
      </h2>

      <div className="mt-7 bg-[#FFB800] w-[300px] mx-auto py-1.5 text-[28px] lg:text-[24px] font-bold text-center">
        Download Links:
      </div>

      <div className="mt-7 w-full mx-auto flex justify-center items-center">
        <div className="w-[80%] flex flex-col gap-y-4">
          {details?.download_links.length ? (
            <>
              {details?.download_links?.map((item, i) => (
                <DownloadBtnTheme1 key={i} url={item?.download_url}>
                  {item?.label} {item?.px_quality} {item?.file_size}
                </DownloadBtnTheme1>
              ))}
            </>
          ) : (
            <p className="text-[28px] lg:text-[18px] font-medium text-slate-500 text-center">
              No Download Link
            </p>
          )}
        </div>
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
