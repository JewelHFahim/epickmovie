/* eslint-disable react/prop-types */

import DownloadBtnTheme1 from "../../../utils/theme1-contents/DownloadBtnTheme1";

const DownloadLinksTableTv = ({ details }) => {
  return (
    <div>
      {details?.download_links && Object.keys(details?.download_links) && (
        <div className="">
          {Object.keys(details?.download_links || [])?.map((item, i) => (
            <div key={i} className="flex flex-col mt-5">

              <div key={i} className="bg-[#FF2345] w-full lg:w-[580px] transition-all duration-200 mx-auto h-[80px] lg:h-[50px] text-[#D7D7D7] text-[28px] lg:text-[22px] font-bold flex justify-center items-center">
                {item}
              </div>

              <div className="px-5 flex flex-col">
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
  );
};

export default DownloadLinksTableTv;
