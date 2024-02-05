import joinTelegran from "../../assets/join telegram.png";
import ads from "../../assets/ads.png";
import { Link, useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet";
import { useSiteNameUSerQuery } from "../../redux/features/settings/settingApi";
import { IoSearch } from "react-icons/io5";
import { collectSearchItem } from "../../redux/features/search/searchSlice";
import { useDispatch } from "react-redux";
import { useState } from "react";

const NotFound = () => {
  const { data: siteName } = useSiteNameUSerQuery();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [searchTermState, setSearchTerm] = useState("");

  const handleInputChange = (e) => {
    setSearchTerm(e.target.value);
  };



  const handleSubmit = (e) => {
    e.preventDefault();
    const res = dispatch(collectSearchItem(searchTermState));
    if (res !== null) {
      return navigate("/search-list");
    }
  };

  return (
    <div className="bg-[#27272A] min-h-screen">

      <Helmet>
        <title> {`${siteName?.data} || 404`}</title>
      </Helmet>

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

          <form
        onSubmit={handleSubmit}
        className=" w-[80%] h-[90px] lg:w-[453px] lg:h-[40px] mt-[15px] lg:mt-0 flex items-center justify-between rounded-[15px] lg:rounded-[8px] border border-slate-600"
      >
        <input
          type="text"
          value={searchTermState}
          onChange={handleInputChange}
          placeholder="Search Movie/TV Shows"
          className="w-full h-full border-0 focus:outline-none px-5 bg-[#18181B] rounded-s-[15px] lg:rounded-s-[8px] text-[27px] placeholder:text-[24px] lg:placeholder:text-[16px] lg:text-[14px] text-slate-300"
        />

        <button type="submit" className="text-[40px] lg:text-[24px] text-white px-6 lg:px-4 h-full bg-slate-700 rounded-e-[15px] lg:rounded-e-[8px]">
          <IoSearch />
        </button>
        
      </form>

          <div className="m-10 ml-20">
            <Link to="/">
              <button className="border border-slate-60 text-whit px-[80px] py-2 rounded-md text-blue-600 border-blue-600 hover:bg-slate-600 hover:text-white hover:border-slate-600">
                Back To Home
              </button>
            </Link>
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
