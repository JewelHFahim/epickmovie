import { useState } from "react";
import toast from "react-hot-toast";

const MainBackdropModal = ({ setSelectedMainback, remainigImg }) => {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  const handleSelect = (images) => {
    setSelectedMainback(images);
    toast.success("Image(s) Added");
  };

  return (
    <div className="relative flex justify-center">
      <button
        onClick={openModal}
        className="w-full py-2 uppercase border-2 border-dashed border-slate-500 bg-slate-100 rounded-md text-black font-medium mb-2"
      >
        Add Image
      </button>

      {isOpen && (
        <div
          className="fixed inset-0 z-10 overflow-y-auto"
          aria-labelledby="modal-title"
          role="dialog"
          aria-modal="true"
        >
          <div className="flex items-end justify-center min-h-screen h-full px-4 pt-4 pb-20 text-center sm:block sm:p-0 bg-black bg-opacity-[80%]">
            <span
              className="hidden sm:inline-block sm:h-screen sm:align-middle"
              aria-hidden="true"
            >
              &#8203;
            </span>

            <div className="relative inline-block overflow-hidden text-left transition-all transform bg-white rounded-lg shadow-xl w-[80%] h-[90%] align-middle p-5">
              <div onClick={closeModal} className="absolute right-4 top-4">
                <button className="text-xl font-medium w-[40px] h-[40px] border border-red-400 rounded-full text-red-600 hover:bg-red-400 hover:text-white transition-all duration-200">
                  X
                </button>
              </div>
              <div className="flex justify-center">
                <h3 className="text-xl border-b-2 border-red-600 font-medium">
                  Select Images
                </h3>
              </div>

              <div className="mt-6 flex justify-center items-center">
                <div className="grid grid-cols-5 lg:grid-cols-8 gap-x-7 gap-y-5">
                  {remainigImg?.map((item, i) => (
                    <div
                      onClick={() => handleSelect(item)}
                      key={i}
                      className="w-[120px] h-[170px]  border-[3px] border-orange-500 flex flex-col justify-between shadow-lg overflow-hidden cursor-pointer"
                    >
                      <img
                        src={item?.url}
                        alt=""
                        className="w-full h-full object-cover border hover:scale-[1.2] transition-transform duration-150 ease-in-out"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MainBackdropModal;
