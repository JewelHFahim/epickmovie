import { Link } from "react-router-dom";
import SectionTitleTheme3 from "../../components/theme3-contents/SectionTitleTheme3";
import { useGetAllBlogsQuery } from "../../redux/features/blogs/blogsApi";
import ThumbnailImage from "./ThumbnailImage";
import ShortDesClean from "./ShortdDesClean";

const Blogs = () => {
  const { data: blogs } = useGetAllBlogsQuery();

  return (
    <div className="mt-10">
      <SectionTitleTheme3 sideBtn={true}> Latest Blogs </SectionTitleTheme3>

      <div className="mt-10 grid grid-cols gap-y-5">
        {blogs?.data?.map((item, i) => (
          <Link
            to={`/blogs/${item?.id}`}
            key={i}
            className="flex items-center gap-x-4 border-b border-white border-opacity-[30%] p-2 pb-5"
          >
            <ThumbnailImage
              meta={item?.meta}
              className="w-[150px] h-[180px] lg:w-[67px] lg:h-[80px] object-cover"
            />

            <div className="text-white w-[90%]">
              <h2 className="text-[30px] lg:text-[18px] font-bold">
                {item?.post_title}
              </h2>

              <ShortDesClean
                text={
                  item?.post_content?.length >= 180
                    ? `${item?.post_content?.slice(0, 180)}...`
                    : item?.post_content
                }
              />
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Blogs;
