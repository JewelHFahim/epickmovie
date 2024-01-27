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
        <Link to="/" className="w-[410px] lg:w-[240px] h-[80px] flex justify-center items-center">
          <img src={siteLogo?.data} alt="Epic Movie Logo" className="object-cover"/>
          {!siteLogo?.data && (
            <h1 className="text-[25px] font-medium text-white">
              {siteName?.data}
            </h1>
          )}
        </Link>
      )}

      <form
        onSubmit={handleSubmit}
        className=" w-[70%] h-[70px] lg:w-[453px] lg:h-[40px] mt-[15px] lg:mt-0 flex items-center justify-between rounded-[9px] "
      >
        <input
          type="text"
          value={searchTermState}
          onChange={handleInputChange}
          placeholder="Search Movie/TV Shows"
          className="w-full h-full border-0 focus:outline-none text-[12px] text-white px-5 bg-[#18181B] rounded-s-md text-lg placeholder:text-[16px]"
        />

        <button type="submit" className="text-[28px] text-white px-6 lg:px-4 h-full bg-slate-700 rounded-e-md">
          <IoSearch />
        </button>
        
      </form>
    </div>
  );
};

export default Header;
