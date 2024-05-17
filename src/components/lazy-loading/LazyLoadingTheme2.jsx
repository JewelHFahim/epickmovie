/* eslint-disable react/prop-types */
const LazyLoadingTheme2 = ({ length }) => {
  return (
    <div className="flex flex-col gap-y-2">
      {Array.from({ length })?.map((item, i) => (
        <div
          key={i}
          className="h-[30px] bg-slate-700 animate-pulse rounded-[10px]"
        ></div>
      ))}
    </div>
  );
};

export default LazyLoadingTheme2;
