import DownloadButton from "../../utils/DownloadButton";

const DownloadSeason = ({ details }) => {

  const myArray = details?.download_links;

  return (
    <div>

      {Object.keys(myArray || [])?.map((item, i) => (
        <div key={i} className="flex flex-col gap-y-2">
          <div className="px-5 flex flex-col gap-y-2 my-2">
            {myArray[item] && myArray[item]?.map((itm, i) => (
              <DownloadButton key={i} url={itm?.download_link} >
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
