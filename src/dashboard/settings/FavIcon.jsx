import { useState } from "react";
import toast from "react-hot-toast";
import { base_url } from "../../config/config";

const FavIconUpLoader = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const getUserName = localStorage.getItem("user-info");
  const token = JSON.parse(getUserName)?.token;

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleUpload = () => {
    if (selectedFile) {
      const formData = new FormData();
      formData.append("fav_icon", selectedFile);
      fetch(`${base_url}/admin/upload-icon`, {
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
          console.log("File uploaded:", data);
          toast.success("Fav Uploaded");
          setSelectedFile("");
        })
        .catch((error) => {
          console.error("There was a problem uploading the file:", error);
        });
    } else {
      console.error("No file selected.");
    }
  };

  const inputStyle =
    "block w-full px-4 py-2 mt- text-gray-700 bg-white border border-e-0 border-gray-200 rounded-s-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring";

  return (
    <div className="w-full">
      <label className="text-gray-200">FavIcon Upload </label>

      <div className="flex text-white items-cente w-full mt-2">
        <input type="file" onChange={handleFileChange} className={inputStyle} />

        <button
          onClick={handleUpload}
          className="w-[150px] border border-slate-600  text-white uppercase rounded-e-md bg-slate-900 hover:bg-slate-600"
        >
          Upload
        </button>
      </div>
    </div>
  );
};

export default FavIconUpLoader;
