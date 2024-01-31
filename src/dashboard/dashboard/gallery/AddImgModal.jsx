import { useState } from "react";
import toast from "react-hot-toast";
import { base_url } from "../../../config/config";

const AddImgModal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedFile, setSelectedFile] = useState(null);
  const getUserToken = localStorage.getItem("user-info");
  const token = JSON.parse(getUserToken)?.token;

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];

    if (file) {
      const formData = new FormData();
      formData.append("image", file);

      fetch(`${base_url}/admin/upload-image`, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
        },
        body: formData,
      })
        .then((response) => {
          if (response.ok) {
            return response.json();
          }
          throw new Error("Network response was not ok.");
        })
        .then((data) => {
          if (data?.status) {
            toast.success("Image Uploaded");
            setSelectedFile("");
            window.location.reload();
          }
        })
        .catch((error) => {
          console.error("There was a problem uploading the file:", error);
        });
    } else {
      console.error("No file selected.");
    }
  };


  return (
    <div className="relative flex justify-center">

      <button onClick={openModal} className="inline-block px-4 py-[6px] text-white duration-150 font-medium bg-slate-700 rounded-lg hover:bg-slate-600 md:text-sm"> Add Image </button>

      {isOpen && (
        <div
          className="fixed inset-0 z-10 overflow-y-auto"
          aria-labelledby="modal-title"
          role="dialog"
          aria-modal="true"
        >
          <div className="flex items-end justify-center min-h-screen px-4 pt-4 pb-20 text-center sm:block sm:p-0 bg-black bg-opacity-[50%]">
            <span className="hidden sm:inline-block sm:h-screen sm:align-middle" aria-hidden="true">
              &#8203;
            </span>

            <div className="relative inline-block px-4 pt-5 pb-4 overflow-hidden text-left align-bottom transition-all transform bg-white rounded-lg shadow-xl  sm:my-8  w-[450px] sm:p-6 sm:align-top border border-slate-400">
              <h3 className="font-medium   capitalize dark:text-white" > Add Image </h3>

              <div className="flex flex-col text-white items-cente w-full mt-2">
                <input type="file" onChange={handleFileChange} className="block w-full px-4 py-[5px]  text-black bg-slate-200 rounded-md focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring border border-slate-400"/>

                <div className="mt-5 flex justify-between gap-x-6">
                  <button onClick={closeModal} className="w-1/3 mx-auto px-4 py-2 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform rounded-md  hover:bg-slate-900 focus:outline-none focus:ring focus:ring-gray-300 focus:ring-opacity-40 bg-slate-800 hover:text-red-500 border-2 hover:border-red-600"> Cancel </button>
                </div>
              </div>

            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AddImgModal;
