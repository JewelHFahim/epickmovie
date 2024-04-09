import { useUpCommingPostsQuery } from "../../redux/features/movies/movieApi";
import SectionTitle from "../../utils/theme1-contents/section-title/SectionTitle";
import LazyLoadingTheme1 from "../lazy-loading/LazyLoadingTheme1";
import Theme1Card from "../movie-card/theme1-card/Theme1Card";

const UpCommingTheme1 = () => {
  const { data: upCommingPosts, isLoading: upCommingLoading } = useUpCommingPostsQuery(1);

  return (
    <>
      <SectionTitle> Upcomming Movies & Web-Series </SectionTitle>

      {upCommingLoading ? (
        <div className="w-full">
          <LazyLoadingTheme1 lazyLength={8} />
        </div>
      ) : (
        <div className=" mt-5 grid grid-cols-8 gap-5">
          {upCommingPosts?.data?.slice(0, 8)?.map((item, i) => (
            <Theme1Card key={i} item={item} />
          ))}
        </div>
      )}
    </>
  );
};

export default UpCommingTheme1;
