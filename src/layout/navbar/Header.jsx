import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { collectSearchItem } from "../../redux/features/search/searchSlice";
import { IoSearch } from "react-icons/io5";
import { useSiteConfig } from "../../utils/configHooks/ConfigHooks";

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [searchTermState, setSearchTerm] = useState("");
  const [lastSearchTime, setLastSearchTime] = useState(null);
  const [showPopup, setShowPopup] = useState(false);
  const [popupNumbers, setPopupNumbers] = useState([]);
  const [userAnswer, setUserAnswer] = useState("");
  const { siteLogo, siteName, isLoading } = useSiteConfig();

  const handleInputChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (lastSearchTime && Date.now() - lastSearchTime < 3000) {
      setShowPopup(true);
      const num1 = Math.floor(Math.random() * 9) + 1;
      const num2 = Math.floor(Math.random() * 9) + 1;
      setPopupNumbers([num1, num2]);
    } else {
      // Proceed with the search
      const res = dispatch(collectSearchItem(searchTermState));
      if (res !== null) {
        setLastSearchTime(Date.now());
        navigate(`/search-list/${searchTermState}`);
        setSearchTerm("");
      }
    }
  };

  const handleAuthenticate = () => {
    const sum = popupNumbers.reduce((acc, num) => acc + num, 0);
    const difference = popupNumbers.reduce((acc, num) => acc - num, 0);

    if (userAnswer === sum.toString() || userAnswer === difference.toString()) {
      setLastSearchTime(Date.now());
      setShowPopup(false);
      const res = dispatch(collectSearchItem(searchTermState));
      if (res !== null) {
        setLastSearchTime(Date.now());
        navigate(`/search-list/${searchTermState}`);
        setSearchTerm("");
        setUserAnswer("");
      }
    } else {
      alert("Incorrect answer. Please try again.");
    }
  };

  return (
    <div className="w-full lg:h-[130px] flex flex-col lg:flex-row items-center justify-between py-5 lg:py-0 px-4 ">
      {isLoading ? (
        <div className="w-[150px] h-[40px] lg:w-[200px] lg:h-[65px] bg-slate-700 rounded-lg animate-pulse "></div>
      ) : (
        <Link
          to="/"
          className="w-[440px] lg:w-[240px] h-[80px] flex justify-center items-center"
        >
          {isLoading ? (
            <div className="w-[150px] h-[40px] lg:w-[200px] lg:h-[65px] bg-slate-700 rounded-lg animate-pulse" />
          ) : (
            <img src={siteLogo} alt={siteName} className="object-cover" />
          )}

          {!siteLogo && (
            <h1 className="text-[25px] font-medium text-white"> {siteName} </h1>
          )}
        </Link>
      )}

      <form
        onSubmit={handleSubmit}
        className="w-[80%] h-[90px] lg:w-[453px] lg:h-[40px] mt-[15px] lg:mt-0 flex items-center justify-between rounded-[15px] lg:rounded-[8px] border border-slate-600"
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

      {showPopup && (
        <div className="absolute z-[9999] top-0 left-0 w-full h-full bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-gray-300 p-8 rounded-lg flex flex-col items-center">
            <p className="font-medium">Verify that you are not robot...</p>
            <p className="font-medium">
              {popupNumbers[0]} + {popupNumbers[1]} = ?
            </p>
            <div className=" mt-2 rounded-md">
              <input
                type="text"
                value={userAnswer}
                onChange={(e) => setUserAnswer(e.target.value)}
                className=" border-black outline-none rounded-s-md px-2 h-[30px]"
              />
              <button
                onClick={handleAuthenticate}
                className=" px-5 bg-gray-600 text-white rounded-e-md text-sm h-[30px]"
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      )}

      <div className="w-[50%] lg:w-[200px] mt-[15px] lg:mt-0 flex items-center justify-between rounded-[15px] lg:rounded-[8px]">
        <Link
          to="/tv"
          className="border border-yellow-500 text-yellow-500 hover:bg-yellow-500 hover:text-white rounded-md font-semiboldpx-4 w-full mx-auto py-4 lg:py-[7px] flex justify-center items-center text-[30px] lg:text-base font-semibold transition-all ease-in-out"
        >
          Live TV Channels
        </Link>
      </div>
    </div>
  );
};

export default Header;
