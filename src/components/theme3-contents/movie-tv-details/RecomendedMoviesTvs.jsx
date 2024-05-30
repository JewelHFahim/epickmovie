/* eslint-disable react/prop-types */
import RelatedCardTheme3 from "../../../pages/movies/movie-details/movie-details-theme3/RelatedCardTheme3";

const RecomendedMoviesTvs = ({ suggessions, suggessionsLoading }) => {
  return (
    <div className="mt-8">
      <span className=" text-2xl lg:text-lg"> ⬇️ </span>
      <span className="text-gray-500 font-medium text-2xl lg:text-base">Recommended Movies:</span>

      <div className="flex flex-col mt-4 gap-y-3">
        {suggessionsLoading
          ? Array.from({ length: 5 }).map((item, i) => (
              <div
                key={i}
                className="w-full h-[40px] bg-slate-700 animate-pulse"
              ></div>
            ))
          : suggessions?.data?.map((item, i) => (
              <RelatedCardTheme3 item={item} key={i} />
            ))}
      </div>
    </div>
  );
};

export default RecomendedMoviesTvs;
