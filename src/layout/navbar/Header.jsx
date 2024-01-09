import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { collectSearchItem } from "../../redux/features/search/searchSlice";
import { useSiteLogoUserQuery, useSiteNameUSerQuery} from "../../redux/features/settings/settingApi";
import { IoSearch } from "react-icons/io5";


const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [searchTermState, setSearchTerm] = useState("");
  const { data: siteLogo, isLoading } = useSiteLogoUserQuery();
  const { data: siteName } = useSiteNameUSerQuery();

  const handleInputChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Searching for:", searchTermState);
    const res = dispatch(collectSearchItem(searchTermState));
    if (res !== null) {
      return navigate("/search-list");
    }
  };

  return (
    <div className="w-full lg:h-[130px] flex flex-col lg:flex-row items-center justify-between py-2 lg:py-0 px-4 ">
      {isLoading ? (
        <div className=" w-[150px] h-[40px] lg:w-[200px] lg:h-[65px] bg-slate-700 rounded-lg animate-pulse"></div>
      ) : (
        <Link to="/" className=" w-[173px] h-[60px] lg:w-[200px] lg:h-[75px]">
          <img
            src={siteLogo?.data}
            alt="Epic Movie Logo"
            className="w-full h-full object-contain"
          />
          {!siteLogo?.data && (
            <h1 className="text-[25px] font-medium text-white">
              {siteName?.data}
            </h1>
          )}
        </Link>
      )}

      <form
        onSubmit={handleSubmit}
        className=" w-[320px] lg:w-[453px] h-[42px] mt-[15px] lg:mt-0 flex items-center justify-between rounded-[9px] "
      >
        <input
          type="text"
          value={searchTermState}
          onChange={handleInputChange}
          placeholder="Search Movie/TV Shows"
          className="w-full h-full  border-0 focus:outline-none text-[12px] text-white px-5 bg-[#18181B] rounded-s-md"
        />

        <button type="submit" className="text-[25px] text-white px-4 py-2 bg-slate-700 rounded-e-md">
          <IoSearch />
        </button>
        
      </form>
    </div>
  );
};

export default Header;
