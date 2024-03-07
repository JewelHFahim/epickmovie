import { useState } from "react";

const AdBlockerPopup = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative flex justify-center">
      {isOpen && (
        <div
          className="fixed inset-0 z-10 overflow-y-auto"
          aria-labelledby="modal-title"
          role="dialog"
          aria-modal="true"
        >
          <div className="flex items-end justify-center min-h-screen px-4 pt-4 pb-20 text-center sm:block sm:p-0">
            <span
              className="hidden sm:inline-block sm:align-middle sm:h-screen"
              aria-hidden="true"
            >
              &#8203;
            </span>

            <div className="relative inline-block px-4 pt-5 pb-4 overflow-hidden text-left align-bottom transition-all transform bg-white rounded-lg shadow-xl rtl:text-right dark:bg-gray-900 sm:my-8 sm:align-middle sm:max-w-sm sm:w-full sm:p-6 border">
              <div>
                <div className="mt-2 text-center">
                  <h3
                    className="text-lg font-medium leading-6 text-gray-800 capitalize dark:text-white"
                    id="modal-title"
                  >
                    Close Your Ad Blocker
                  </h3>
                  <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Aspernatur dolorum aliquam ea, ratione deleniti porro
                    officia? Explicabo maiores suscipit.
                  </p>
                </div>
              </div>

              <div className="mt-5 flex justify-center">
                <div className="sm:flex sm:items-center">
                  <button
                    onClick={() => setIsOpen(false)}
                    className="w-full px-4 py-2 mt-2 text-sm font-medium tracking-wide text-gray-700 capitalize transition-colors duration-300 transform border border-gray-200 rounded-md sm:mt-0 sm:w-auto sm:mx-2 dark:text-gray-200 dark:border-gray-700 dark:hover:bg-gray-800 hover:bg-gray-100 focus:outline-none focus:ring focus:ring-gray-300 focus:ring-opacity-40"
                  >
                    OK
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdBlockerPopup;
