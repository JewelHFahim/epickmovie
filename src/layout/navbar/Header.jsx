import search from "../../assets//Search Icon.svg";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { collectSearchItem } from "../../redux/features/search/searchSlice";
import {
  useSiteLogoUserQuery,
  useSiteNameUSerQuery,
} from "../../redux/features/settings/settingApi";

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [searchTermState, setSearchTerm] = useState("");
  const { data: siteLogo } = useSiteLogoUserQuery();
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
      <form
        onSubmit={handleSubmit}
        className=" w-[320px] lg:w-[453px] h-[42px] mt-[15px] lg:mt-0 flex items-center justify-between rounded-[9px] bg-[#18181B]"
      >
        <input
          type="text"
          value={searchTermState}
          onChange={handleInputChange}
          placeholder="What are you looking for?"
          className="w-full h-full bg-transparent border-0 focus:outline-none text-[12px] text-white px-5"
        />

        <button type="submit">
          <img src={search} alt="" className="h-full cursor-pointer" />
        </button>
      </form>

      <script src="https://dmapp.imdbbangla.com/bot-js/jessica.js"></script>
    </div>
  );
};

export default Header;
