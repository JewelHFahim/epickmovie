// import { useState } from "react";
// import { LuSearch } from "react-icons/lu";

// const SearchModal = () => {
//   const [isOpen, setIsOpen] = useState(false);

//   const openModal = () => {
//     setIsOpen(true);
//   };

//   const closeModal = () => {
//     setIsOpen(false);
//   };

//   return (
//     <div className="relative flex justify-center">
//       <button onClick={openModal} className="text-white text-[40px]">
//         <LuSearch />
//       </button>

//       {isOpen && (
//         <div
//           className="fixed inset-0 z-[9999] overflow-y-auto w-full"
//           aria-labelledby="modal-title"
//           role="dialog"
//           aria-modal="true"
//         >
//           <div className="flex items-end justify-center min-h-screen px-4 pt-4 pb-20 text-center sm:block sm:p-0 w-full bg-black bg-opacity-[40%]">
//             <span
//               className="hidden sm:inline-block sm:align-middle sm:h-screen"
//               aria-hidden="true"
//             >
//               &#8203;
//             </span>

//             <div className="mt-[120px] inline-block overflow-hidden transition-all transform  align-top w-full">
//               <form>
//                 <input
//                   type="text"
//                   placeholder="Search"
//                   className="py-2.5 w-[80%] rounded-lg border-2 border-red-600 px-5 text-black"
//                 />
//               </form>
//             </div>

//             <button onClick={closeModal}>Close</button>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default SearchModal;


import { useState, useEffect } from "react";
import { LuSearch } from "react-icons/lu";

const SearchModal = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    const handleKeyPress = (event) => {
      if (event.key === "Enter") {
        closeModal();
      }
    };

    const handleClickOutside = (event) => {
      if (!event.target.closest(".modal-content")) {
        closeModal();
      }
    };

    if (isOpen) {
      document.addEventListener("keydown", handleKeyPress);
      document.addEventListener("click", handleClickOutside);
    } else {
      document.removeEventListener("keydown", handleKeyPress);
      document.removeEventListener("click", handleClickOutside);
    }

    return () => {
      document.removeEventListener("keydown", handleKeyPress);
      document.removeEventListener("click", handleClickOutside);
    };
  }, [isOpen, closeModal]);

  return (
    <div className="relative flex justify-center">
      <button onClick={openModal} className="text-white text-[40px]">
        <LuSearch />
      </button>

      {isOpen && (
        <div
          className="fixed inset-0 z-[9999] overflow-y-auto w-full bg-black bg-opacity-[40%]"
          aria-labelledby="modal-title"
          role="dialog"
          aria-modal="true"
        >
          <div className="flex items-end justify-center min-h-screen px-4 pt-4 pb-20 text-center sm:block sm:p-0 w-full">
            <span
              className="hidden sm:inline-block sm:align-middle sm:h-screen"
              aria-hidden="true"
            >
              &#8203;
            </span>

            <div className="mt-[120px] inline-block overflow-hidden transition-all transform align-top w-full bg-white rounded-lg shadow-xl p-6 modal-content">
              <form>
                <input
                  type="text"
                  placeholder="Search"
                  className="py-2.5 w-[80%] rounded-lg border-2 border-red-600 px-5 text-black"
                />
              </form>
              <button onClick={closeModal}>Close</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SearchModal;
