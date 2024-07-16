// components/UserVisitTracker.js
import { useEffect, useState } from "react";
import { getLocalStorageItem, setLocalStorageItem } from "./localStorageUtils";
import { generateUniqueId } from "./uniqueId";
import { useSiteConfig } from "../configHooks/ConfigHooks";
import { FaTelegram } from "react-icons/fa6";

const UserVisitTracker = () => {
  const [showPopup, setShowPopup] = useState(false);
  const { siteName, telegramLink, noticeMessage } = useSiteConfig();

  useEffect(() => {
    const userIdKey = "userId";
    const lastVisitKey = "lastVisit";
    const currentTime = Date.now();
    const oneDay = 86400000; //24Hour
    // const oneDay = 60000; //1min

    let userId = getLocalStorageItem(userIdKey);
    if (!userId) {
      // Generate and store a unique identifier for the user
      userId = generateUniqueId();
      setLocalStorageItem(userIdKey, userId);
      // Show popup on the first visit
      setShowPopup(true);
      setLocalStorageItem(lastVisitKey, currentTime);
    } else {
      // Check the last visit time
      const lastVisit = getLocalStorageItem(lastVisitKey);
      if (!lastVisit || currentTime - lastVisit > oneDay) {
        // Show popup if revisiting after 24 hours
        setShowPopup(true);
        setLocalStorageItem(lastVisitKey, currentTime);
      }
    }
  }, []);

  const handleClosePopup = () => {
    setShowPopup(false);
  };

  return (
    <>
      {showPopup && (
        <div className=" fixed z-[9999] flex justify-center items-center bg-black bg-opacity-[50%] top-0 left-0 right-0 bottom-0">
          <div className=" bg-gray-300 w-[90%] lg:w-[50%] h-[50%] p-[20px] rounded-[5px] text-center">
            <div className="border border-slate-500 w-full h-full rounded-[6px] relative flex flex-col justify-cente">
              <h1 className="font-bold text-4xl lg:text-2xl underline">
                {siteName}
              </h1>

              <div className="flex flex-col justify-center items-center w-full h-full">
                <p className="text-5xl lg:text-2xl">{noticeMessage}</p>

                <div className="flex justify-center items-center mt-8 lg:mt-3">
                  <a
                    href={telegramLink}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center justify-center border text-cyan-600 w-[300px] h-[70px] lg:w-[200px] lg:h-[40px] rounded-lg text-3xl lg:text-lg font-semibold gap-2 border-cyan-600 hover:bg-cyan-600 hover:text-white transition-all duration-200"
                  >
                    <FaTelegram />
                    Join Telegram
                  </a>
                </div>
              </div>

              <button
                onClick={handleClosePopup}
                className="absolute -top-2 -right-2 w-[80px] h-[80px] lg:w-[35px] lg:h-[35px] bg-red-400 hover:bg-red-500 text-white text-3xl lg:text-xl hover:scale-[1.3] transition-all duration-300 ease-in-out rounded-full"
              >
                X
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default UserVisitTracker;
