const FeatureLazy = () => {
  return (
    <div className=" py-10 mx-auto animate-pulse">

      <div className="hidden lg:grid grid-cols-5 gap-[25px] my-[18px]">
        {Array.from({ length: 5 })?.map((item, i) => (
          <div
            key={i}
            className="w-[401px] h-[635px] lg:w-[205px] lg:h-[460px] p-[1.5px] lg:p-[2px] rounded-[10px]"
          >
            <div className=" bg-slate-600 rounded-lg h-[90%] w-full"></div>
            <h1 className="w-full h-[20px] mt-4 bg-slate-600 rounded-lg "></h1>
          </div>
        ))}
      </div>

      <div className="lg:hidden grid grid-cols-2  gap-[25px] my-[18px]">
        {Array.from({ length: 2 })?.map((item, i) => (
          <div
            key={i}
            className="w-[401px] h-[635px] lg:w-[205px] lg:h-[460px] p-[1.5px] lg:p-[2px] rounded-[10px]"
          >
            <div className=" bg-slate-600 rounded-lg h-[90%] w-full"></div>
            <h1 className="w-full h-[20px] mt-4 bg-slate-600 rounded-lg "></h1>
          </div>
        ))}
      </div>

    </div>
  );
};

export default FeatureLazy;
