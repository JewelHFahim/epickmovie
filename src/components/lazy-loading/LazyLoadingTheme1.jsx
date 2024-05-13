/* eslint-disable react/prop-types */
const LazyLoadingTheme1 = ({ lazyLength }) => {
  return (
    <div className="grid grid-cols-3 md:grid-cols-3 lg:grid-cols-8 gap-4 mt-5 animate-pulse w-full">
      {Array.from({ length: lazyLength }).map((item, i) => (
        <div
          key={i}
          className="h-[420px] lg:h-[280px] rounded-[10px] flex flex-col justify-between overflow-hidden "
        >
          <div className="h-full rounded-[10px] bg-slate-600"></div>
        </div>
      ))}
    </div>
  );
};

export default LazyLoadingTheme1;
