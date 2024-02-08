import toast from "react-hot-toast";
import { base_url } from "../../config/config";

const FavIconUpLoader = ({ favIcon, setFavReFetch }) => {
  const getUserName = localStorage.getItem("user-info");
  const token = JSON.parse(getUserName)?.token;

  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];
    
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
          if (data?.status) {
            toast.success("Favicon Uploaded");
            setFavReFetch(data?.fav_icon);
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
    "block w-full px-4 py-2 text-gray-700 bg-white border border-gray-200 rounded-md focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring";

  return (
    <div className="w-full">
      <div>
        <label className="text-gray-800">FavIcon Upload: </label>
      </div>

      <div className="flex text-white gap-x-4 items-cente w-full mt-2">
        <img src={favIcon?.data} alt="" className="w-[80px] h-[50px] border border-slate-400 object-contain rounded-lg p-1"/>
        <input type="file" onChange={handleFileChange} className={inputStyle} />
      </div>

    </div>
  );
};

export default FavIconUpLoader;
