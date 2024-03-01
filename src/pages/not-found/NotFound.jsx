import { Link, useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet";
import { IoSearch } from "react-icons/io5";
import { collectSearchItem } from "../../redux/features/search/searchSlice";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { useSiteConfig } from "../../utils/configHooks/ConfigHooks";

const NotFound = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [searchTermState, setSearchTerm] = useState("");
  const {siteName} = useSiteConfig();

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
        <title> {`${siteName} || 404`}</title>
      </Helmet>

      <section className=" p-[32px] flex justify-center items-center h-screen">

        <div className="font-inter text-center">
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

            <button
              type="submit"
              className="text-[40px] lg:text-[24px] text-white px-6 lg:px-4 h-full bg-slate-700 rounded-e-[15px] lg:rounded-e-[8px]"
            >
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

      </section>
    </div>
  );
};

export default NotFound;
