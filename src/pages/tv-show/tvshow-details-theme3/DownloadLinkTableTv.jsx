/* eslint-disable react/prop-types */

import DownloadBtnTheme1 from "../../../utils/theme1-contents/DownloadBtnTheme1";

const DownloadLinksTableTv = ({ details }) => {
  return (
    <div>
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
  );
};

export default DownloadLinksTableTv;
