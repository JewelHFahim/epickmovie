const LazyLoading = () => {
  return (
    <section>
      <div className="px-6 py-10 mx-auto animate-pulse">
        <div className="grid grid-cols-2 lg:grid-cols-5 gap-[17px] lg:gap-[25px] my-[18px]">
          {Array.from({ length: 20 })?.map((item, i) => (
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

 
    </section>
  );
};

export default LazyLoading;
