const LazyLoading = () => {
  return (
    <div className="grid grid-cols-3 md:grid-cols-3 lg:grid-cols-6 gap-[22px] mt-10 animate-pulse w-full lg:px-5">
      {Array.from({ length: 12 }).map((item, i) => (
        <div
          key={i}
          className="h-[450px] lg:h-[338px] rounded-[10px] flex flex-col justify-between overflow-hidden "
        >
          <div className="h-[90%] rounded-[10px] bg-slate-600"></div>
          <div className="bg-slate-600 h-[5%] rounded-[10px]"></div>
        </div>
      ))}
    </div>
  );
};

export default LazyLoading;
