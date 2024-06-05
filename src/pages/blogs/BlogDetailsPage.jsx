import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useGetSeingleBlogQuery } from "../../redux/features/blogs/blogsApi";
import ThumbnailImage from "./ThumbnailImage";

const BlogDetailsPage = () => {
  const { id } = useParams();

  const { data: detailsBlog } = useGetSeingleBlogQuery(id);

  const details = detailsBlog?.data;

  console.log(detailsBlog);

  // page scroll effect
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <div className="w-full max-w-[850px] py-4 px-5">
      <ThumbnailImage meta={details?.meta}  className="w-full h-[450px] object-cover"/>

      <h2 className="mt-5 text-[35px] font-medium text-gray-200 text-center">
        {details?.post_title}
      </h2>

      <p className="mt-5 font-medium text-gray-200">{details?.post_content}</p>
    </div>
  );
};

export default BlogDetailsPage;
