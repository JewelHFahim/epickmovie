/* eslint-disable react/prop-types */
import { useCleanedTitle, useRedirect, useSiteConfig } from "../../utils/configHooks/ConfigHooks";

const LatestMCard = ({ item }) => {
    
  const {maskLink} = useSiteConfig();
  const { url } = useCleanedTitle(item);
  const handleRedirect = useRedirect(url, maskLink);

  return (
    <button
      onClick={() => handleRedirect()}
      className="flex justify-start items-center gap-x-3 bg-[#202020] p-1 shadow-md"
    >
      <div className="bg-gradient-to-t from-[#ff1818] to-[#fdd506] p-[2px] w-[55px] h-[70px]">
        <img
          src={item?.poster_image_url}
          alt=""
          className="w-full h-full object-cover"
        />
      </div>

      <h3 className="text-[#D6D6D6D6] text-opacity-[60%] font-aclonica w-[80%] text-[11px] text-left">
        {item?.post_title}
      </h3>
    </button>
  );
};

export default LatestMCard;
