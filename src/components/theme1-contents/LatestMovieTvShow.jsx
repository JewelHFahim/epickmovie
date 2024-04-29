/* eslint-disable react/prop-types */
import SectionTitle from "../../utils/theme1-contents/section-title/SectionTitle";
import LazyLoadingTheme1 from "../lazy-loading/LazyLoadingTheme1";
import Theme1Card from "../movie-card/theme1-card/Theme1Card";

const LatestMovieTvShow = ({ loading, perPageData }) => {
  
  return (
    <div>
      <SectionTitle>Latest Movies </SectionTitle>
      {loading ? (
        <div className="w-full">
          <div className="hidden lg:block">
            <LazyLoadingTheme1 lazyLength={8} />
          </div>
          <div className="lg:hidden">
            <LazyLoadingTheme1 lazyLength={3} />
          </div>
        </div>
      ) : (
        <>
          <div className=" mt-5 lg:grid grid-cols-8 gap-2 hidden">
            {perPageData?.data?.data?.slice(0, 8)?.map((item, i) => (
              <Theme1Card key={i} item={item} isLoading={loading}/>
            ))}
          </div>

          <div className=" mt-5 grid grid-cols-3 gap-5 lg:hidden">
            {perPageData?.data?.data?.slice(0, 3)?.map((item, i) => (
              <Theme1Card key={i} item={item} isLoading={loading}/>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default LatestMovieTvShow;
