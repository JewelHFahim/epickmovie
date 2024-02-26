import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { collectSearchItem } from "../../redux/features/search/searchSlice";
import { IoSearch } from "react-icons/io5";
import { useSiteLogo, useSiteName } from "../../utils/configHooks/ConfigHooks";

const Header = () => {

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [searchTermState, setSearchTerm] = useState("");

  const {siteLogo, isLoading} = useSiteLogo();
  const siteName = useSiteName();

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
    <div className="w-full lg:h-[130px] flex flex-col lg:flex-row items-center justify-between py-5 lg:py-0 px-4 ">
      {isLoading ? (
        <div className="w-[150px] h-[40px] lg:w-[200px] lg:h-[65px] bg-slate-700 rounded-lg animate-pulse "></div>
      ) : (
        <Link to="/" className="w-[440px] lg:w-[240px] h-[80px] flex justify-center items-center">

          {isLoading ? (
            <div className="w-[150px] h-[40px] lg:w-[200px] lg:h-[65px] bg-slate-700 rounded-lg animate-pulse" />
          ) : (
            <img src={siteLogo} alt={siteName} className="object-cover" />
          )}

          {!siteLogo && ( <h1 className="text-[25px] font-medium text-white"> {siteName} </h1> )}

        </Link>
      )}

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
    </div>
  );
};

export default Header;
