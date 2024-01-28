/* eslint-disable react/prop-types */
import { useSuggessionMovieSeriesQuery } from "../../redux/features/search/searchApi";
import CardRelatedPost from "./CardRelatedPost"


const RelatedPost = ({ id }) => {
  const { data: suggessions } = useSuggessionMovieSeriesQuery(id);

  return (
    <div>
      <section className="mt-[33px] p-5">
        <h3 className="text-[50px] lg:text-[24px] text-[#AEABAB] font-[700] font-roboto">
          RELATED POSTS
        </h3>

        <div className="flex justify-center items-center">
        <div className="mt-[23px] grid grid-cols-2 lg:grid-cols-5 items-center gap-[25px] ">
          {suggessions?.data?.map((item, i) => (
            <CardRelatedPost item={item} key={i}/>
          ))}
        </div>
        </div>
      </section>
    </div>
  );
};

export default RelatedPost;
