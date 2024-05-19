/* eslint-disable react/prop-types */
import LazyLoadingTheme2 from "../../lazy-loading/LazyLoadingTheme2";
import MovieCardTheme2 from "./MovieCardTheme2";

const Theme2Card = ({ isLoading, dataList, className }) => {
  return (
    <div className="mt-5">
      {isLoading ? (
        <LazyLoadingTheme2 length={dataList?.data?.data?.length} />
      ) : (
        <div className={`flex flex-col gap-y-3 lg:gap-y-1.5 font-jost ${className}`}>
          {dataList?.data?.data?.map((item, i) => (
            <MovieCardTheme2 key={i} item={item} className={className}/>
          ))}
        </div>
      
      )}
    </div>
  );
};

export default Theme2Card;
