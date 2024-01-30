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
    setSelectedFile(event.target.files[0]);
  };

  const handleUpload = () => {
    if (selectedFile) {
      const formData = new FormData();
      formData.append("image", selectedFile);
      fetch(`${base_url}/admin/upload-image`, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
        },
        body: formData,
      })
        .then((response) => {
          console.log(response);

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

  const inputStyle =
    "block w-full px-4 py-[5px]  text-gray-700 bg-white rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring";

  const btnStyle =
    "w-full px-4 py-2 text-sm font-medium tracking-wide text-gray-700 capitalize transition-colors duration-300 transform border border-gray-200 rounded-md dark:text-gray-200 dark:border-gray-700 dark:hover:bg-gray-800 hover:bg-gray-100 focus:outline-none focus:ring focus:ring-gray-300 focus:ring-opacity-40";

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
          <div className="flex items-end justify-center min-h-screen px-4 pt-4 pb-20 text-center sm:block sm:p-0">
            <span className="hidden sm:inline-block sm:h-screen sm:align-middle" aria-hidden="true">
              &#8203;
            </span>

            <div className="relative inline-block px-4 pt-5 pb-4 overflow-hidden text-left align-bottom transition-all transform bg-white rounded-lg shadow-xl dark:bg-gray-900 sm:my-8  w-[450px] sm:p-6 sm:align-top">
              <h3 className="font-medium  text-gray-800 capitalize dark:text-white" > Add Image </h3>

              <div className="flex flex-col text-white items-cente w-full mt-2">
                <input type="file" onChange={handleFileChange} className={inputStyle}/>

                <div className="mt-5 flex justify-between gap-x-6">
                  <button onClick={closeModal} className={btnStyle}> Cancel </button>
                  <button onClick={handleUpload} className={btnStyle}> Upload </button>
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
