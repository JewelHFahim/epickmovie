// components/UserVisitTracker.js
import { useEffect, useState } from "react";
import { getLocalStorageItem, setLocalStorageItem } from "./localStorageUtils";
import { generateUniqueId } from "./uniqueId";

const UserVisitTracker = () => {
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    const userIdKey = "userId";
    const lastVisitKey = "lastVisit";
    const currentTime = Date.now();
    const oneDay = 86400000; //24Hour

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
          <div className=" bg-gray-300 w-[50%] h-[50%] p-[20px] rounded-[5px] text-center">
            <div className="border border-slate-400 w-full h-full rounded-[6px] relative flex justify-center items-center">
              <p className="text-3xl">Welcome to our website!</p>

              <button
                onClick={handleClosePopup}
                className="absolute -top-2 -right-2 w-[35px] h-[35px] bg-red-400 hover:bg-red-500 text-white text-xl hover:scale-[1.3] transition-all duration-300 ease-in-out rounded-full"
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
