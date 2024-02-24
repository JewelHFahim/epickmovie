/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import FeatureSticker from "../../utils/feature-sticker/FeatureSticker";
import { Link } from "react-router-dom";
import { RedirectAdPage } from "../../utils/RedirectAdPage";

const CardRelatedPost = ({ item }) => {
  const [url, setUrl] = useState();

  useEffect(() => {
    const encodedTitle = encodeURIComponent(item?.post_title);
    const cleanedTitle = encodedTitle.replace(/%20/g, "-").toLowerCase();
    setUrl(`${item?.post_type === "movies" ? `/movie` : `/series`}/${item?.id}/${cleanedTitle}`);
  }, [item]);

  return (
    <Link to={url} key={item?.id} onClick={()=> RedirectAdPage()}>
      <div className=" w-[401px] lg:w-full min-h-[635px] h-full lg:min-h-[460px] bg-gradient-to-t from-[#ff1818] to-[#fdd506] lg:bg-none  flex flex-col items-center  text-center rounded-[10px] p-[1.5px] relative">

        <img src={item?.poster_image_url} alt="" className="w-full h-full rounded-tl-[10px] rounded-tr-[10px] bg-[#27272A]"/>

        <p className="text-[30px] lg:text-[14px] text-white font-[700] py-4 px-2  bg-[#27272A] h-full rounded-b-[10px] w-full"> {
        item?.post_title?.length <= 70 ? item?.post_title : item?.post_title.slice(0,70) 
        }</p>

        {item?.stickerLabel?.length > 0 && (
          <div className="absolute left-2 top-4">
            <FeatureSticker item={item} />
          </div>
        )}
      </div>
    </Link>
  );
};

export default CardRelatedPost;
