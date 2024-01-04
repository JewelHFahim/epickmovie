const LazyLoading = () => {
  return (
    <section>
      <div className="px-6 py-10 mx-auto animate-pulse">
        <div className="grid grid-cols-2 lg:grid-cols-5 gap-[17px] lg:gap-[25px] my-[18px]">
          {Array.from({ length: 20 })?.map((item, i) => (
            <div
              key={i}
              className="w-[180px] min-h-[100%] lg:w-[205px] lg:h-[460px] p-[1.5px] lg:p-[2px] rounded-[10px]"
            >
              <div className="w-full h-64 bg-slate-600 rounded-lg md:h-[360px]"></div>
              <h1 className="w-full h-[10px] mt-4 bg-slate-600 rounded-lg "></h1>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LazyLoading;
