import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useGetSeingleBlogQuery } from "../../redux/features/blogs/blogsApi";
import ThumbnailImage from "./ThumbnailImage";
import CleanContents from "./CLeanContents";

const BlogDetailsPage = () => {
  const { id } = useParams();
  const { data: detailsBlog, isLoading } = useGetSeingleBlogQuery(id);
  const details = detailsBlog?.data;

  // page scroll effect
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <div className="w-full lg:max-w-[850px] mx-auto py-7 lg:py-4 px-7 lg:px-5 lg:border border-white border-opacity-[5%] overflow-hidden">
      {isLoading ? (
        <div className="w-full h-[450px] bg-slate-700 animate-pulse"></div>
      ) : (
        <ThumbnailImage
          meta={details?.meta}
          className="w-full h-[450px] object-cover"
        />
      )}

      {/* ===============>> Post Title <<================= */}
      {isLoading ? (
        <div className="w-full h-[50px] bg-slate-700 animate-pulse mt-10"></div>
      ) : (
        <h2 className="mt-10 text-[35px] font-medium text-gray-200 text-center">
          {details?.post_title}
        </h2>
      )}

      {/* ===============>> Post Content <<================= */}

      {isLoading ? (
        <div className="flex flex-col gap-y-2 mt-10">
          {Array.from({ length: 10 })?.map((item, i) => (
            <div
              key={i}
              className="w-full h-[20px] bg-slate-700 animate-pulse"
            ></div>
          ))}
        </div>
      ) : (
        <CleanContents
          text={details?.post_content}
          className="mt-10 text-gray-200 text-2xl lg:text-base overflow-hidden"
        />
      )}

      
    </div>
  );
};

export default BlogDetailsPage;
