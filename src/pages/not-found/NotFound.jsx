import joinTelegran from "../../assets/join telegram.png";
import ads from "../../assets/ads.png";
import search from "../../assets/Search Icon.svg";

const NotFound = () => {
  return (
    <div className="bg-[#27272A] mt-[22px] min-h-screen">
      <section className=" p-[32px] lg:flex justify-between">
        <div className=" lg:w-[70%] font-inter">
          <h3 className="text-[32px] font-[700]  text-[#727171]">
            Error 404 Not Found
          </h3>
          <p className="text-[15px] text-[#727171] mt-2">
            Oops! We couldnt find this Page.
          </p>
          <p className="text-[15px] text-[#727171] mb-2">
            Please check your URL or use the search form below.
          </p>

          <div className=" w-[320px] lg:w-[453px] h-[42px] mt-[15px] lg:mt-0 flex items-center justify-between rounded-[9px] bg-[#18181B]">
            <input
              type="text"
              placeholder="What are you looking for?"
              className="w-full h-full bg-transparent border-0 focus:outline-none text-[12px] text-white px-5"
            />
            <img src={search} alt="" className="h-full cursor-pointer" />
          </div>
        </div>

        <div className="hidden lg:block w-[30%] bg-[#1F1F22] p-4">
          <div className="w-[299px] h-[193px] bg-[#27272A] flex flex-col">
            <p className="text-white font-inter font-[500] mt-[39px] ml-[34px]">
              Join Our Telegram
            </p>
            <hr className="w-full bg-[#494949] opacity-[.4]" />
            <img
              src={joinTelegran}
              alt=""
              className="mt-[10px] w-[268px] h-[104px] mx-auto"
            />
          </div>

          <div className="w-[299px] h-[275px]  bg-[#27272A] mt-[27px]">
            <p className="pl-[30px] pt-[15px] font-[500] font-inter text-[#F4F4F4C9] ">
              Movies
            </p>

            <hr className="w-full bg-[#494949] opacity-[.4]" />

            <div className="px-4 py-2 grid grid-cols-4 gap-[8px]">
              {Array.from({ length: 32 }).map((item, i) => (
                <button
                  key={i}
                  className="w-[53px] h-[20px] rounded-[4px] bg-[#f4f4f4c9] text-[10px] text-[#27272A] font-inter"
                >
                  Bengali
                </button>
              ))}
            </div>
          </div>

          <div className="w-[299px] h-[271px] bg-[#27272A] mt-[25px]">
            <p className="px-[34px] pt-[15px] font-[500] text-[#F4F4F4C9] opacity-[.79] m-0">
              Ads
            </p>
            <img src={ads} alt="" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default NotFound;
