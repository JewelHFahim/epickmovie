import { useEffect, useState } from "react";
import FeatureSticker from "../../utils/feature-sticker/FeatureSticker";

const CardRelatedPost = ({ item }) => {
  const [url, setUrl] = useState();

  useEffect(() => {
    const encodedTitle = encodeURIComponent(item?.post_title);
    const cleanedTitle = encodedTitle.replace(/%20/g, "-").toLowerCase();
    setUrl(`${item?.post_type === "movies" ? `/movie` : `/series`}/${item?.id}/${cleanedTitle}`);
  }, [item]);

  return (
    <a href={url} key={item?.id}>
      <div className="w-[180px] lg:w-[205px] h-[390px] bg-gradient-to-t from-[#ff1818] to-[#fdd506] lg:bg-none lg:h-[420px] flex flex-col items-center text-center rounded-[10px] p-[1.5px] relative">
        <img
          src={item?.poster_image_url}
          alt=""
          className="w-full h-[267px] lg:h-[322px] rounded-tl-[10px] rounded-tr-[10px] bg-[#27272A]"
        />
        <p className="text-[14px] text-white font-[700] pt-[9px] bg-[#27272A] h-full rounded-b-[10px]">
          {item?.post_title}
        </p>

        {item?.stickerLabel?.length > 0 && (
          <div className="absolute left-2 top-2">
            <FeatureSticker item={item} />
          </div>
        )}
      </div>
    </a>
  );
};

export default CardRelatedPost;
