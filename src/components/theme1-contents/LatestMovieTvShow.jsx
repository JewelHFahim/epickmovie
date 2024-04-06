import SectionTitle from "../../utils/theme1-contents/section-title/SectionTitle";
import LazyLoadingTheme1 from "../lazy-loading/LazyLoadingTheme1";
import Theme1Card from "../movie-card/theme1-card/Theme1Card";

const LatestMovieTvShow = ({ loading, perPageData }) => {
  return (
    <>
      <SectionTitle>Latest Movies </SectionTitle>
      {loading ? (
        <div className="w-full">
          <LazyLoadingTheme1 lazyLength={8} />
        </div>
      ) : (
        <div className=" mt-5 grid grid-cols-8 gap-5">
          {perPageData?.data?.data?.slice(0, 8)?.map((item, i) => (
            <Theme1Card key={i} item={item} />
          ))}
        </div>
      )}
    </>
  );
};

export default LatestMovieTvShow;
