import { useSuggessionMovieSeriesQuery } from "../../redux/features/search/searchApi";
import FeatureSticker from "../../utils/feature-sticker/FeatureSticker";

const RelatedPost = ({ id, redirect }) => {
  const { data: suggessions } = useSuggessionMovieSeriesQuery(id);

  return (
    <div>
      <section className="mt-[33px] p-5">
        <h3 className="text-[18px] lg:text-[22px] text-[#AEABAB] font-[700] font-roboto">
          RELATED POSTS
        </h3>

        <div className="mt-[23px] grid grid-cols-2 lg:grid-cols-5 items-center gap-[18px] ">
          {suggessions?.data?.map((item, i) => (
            <a href={`${redirect}/${item?.id}/${item?.post_title}`} key={i}>
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
          ))}
        </div>
      </section>
    </div>
  );
};

export default RelatedPost;
