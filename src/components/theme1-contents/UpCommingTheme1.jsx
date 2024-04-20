import { useUpCommingPostsQuery } from "../../redux/features/movies/movieApi";
import SectionTitle from "../../utils/theme1-contents/section-title/SectionTitle";
import LazyLoadingTheme1 from "../lazy-loading/LazyLoadingTheme1";
import Theme1Card from "../movie-card/theme1-card/Theme1Card";

const UpCommingTheme1 = () => {
  const { data: upCommingPosts, isLoading: upCommingLoading } =
    useUpCommingPostsQuery(1);

  return (
    <div>
      <SectionTitle> Upcomming Movies & Web-Series </SectionTitle>

      {upCommingLoading ? (
        <div className="w-full">
          <div className="hidden lg:block">
            <LazyLoadingTheme1 lazyLength={8} />
          </div>
          <div className="block lg:hidden">
            <LazyLoadingTheme1 lazyLength={3} />
          </div>
        </div>
      ) : (
        <>
          <div className=" mt-5 lg:grid grid-cols-8 gap-5 hidden">
            {upCommingPosts?.data?.slice(0, 8)?.map((item, i) => (
              <Theme1Card key={i} item={item} />
            ))}
          </div>
          <div className="mt-5 grid grid-cols-3 gap-5 lg:hidden">
            {upCommingPosts?.data?.slice(0, 3)?.map((item, i) => (
              <Theme1Card key={i} item={item} />
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default UpCommingTheme1;
