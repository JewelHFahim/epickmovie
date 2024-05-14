/* eslint-disable react/prop-types */
import SectionTitle from "../../utils/theme1-contents/section-title/SectionTitle";
import LazyLoadingTheme1 from "../lazy-loading/LazyLoadingTheme1";
import Theme1Card from "../movie-card/theme1-card/Theme1Card";

const RelatedMovieTv = ({ suggessions, isLoading, type }) => {

  return (
    <div className="flex flex-col justify-center items-center p-5">
      <SectionTitle> Related {type} </SectionTitle>
      {isLoading ? (
        <div className="w-full">
          <div className="hidden lg:block">
            <LazyLoadingTheme1 lazyLength={5} />
          </div>
          <div className="lg:hidden">
            <LazyLoadingTheme1 lazyLength={3} />
          </div>
        </div>
      ) : (
        <>
          <div className="w-full mt-5 lg:flex justify-between hidden">
            {suggessions?.data?.slice(0, 6)?.map((item, i) => (
              <Theme1Card key={i} item={item} isLoading={isLoading}/>
            ))}
          </div>

          <div className="w-full mt-5 flex justify-between gap-5 lg:hidden">
            {suggessions?.data?.slice(0, 3)?.map((item, i) => (
              <Theme1Card key={i} item={item} isLoading={isLoading} />
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default RelatedMovieTv;
