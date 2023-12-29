// import { useForm } from "react-hook-form";
// import toast from "react-hot-toast";
// import { useLogoUploadMutation } from "../../redux/features/settings/settingApi";
// import { useDispatch } from "react-redux";

// const LogoUploader = () => {
//   const { handleSubmit, register, reset } = useForm();
//   const [logoUpload] = useLogoUploadMutation()
//   const dispatch = useDispatch();

//   const onSubmit = (data) => {
//     console.log(data);
//     logoUpload(data);
//     reset();
//   };

//   const inputStyle =
//     "block w-full px-6 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring";
//   return (
//     <div>
//       <form
//         onSubmit={handleSubmit(onSubmit)}
//         className="flex items-center gap-[150px]"
//       >
//         <div>

//           <label htmlFor="image" className="block text-sm text-white"> Site Logo </label>

//           <input  type="file"  {...register("site_logo")}  className={inputStyle}/>

//         </div>

//         <button type="submit" className="border px-4 py-1">Submit</button>

//       </form>
//     </div>
//   );
// };

// export default LogoUploader;


import { useState } from 'react';

const LogoUploader = () => {
  const [selectedFile, setSelectedFile] = useState(null);

  console.log(selectedFile)

  const getUserName = localStorage.getItem("user-info");
const token = JSON.parse(getUserName)?.token;

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleUpload = () => {

    if (selectedFile) {
      const formData = new FormData();

    formData.append('site_logo', selectedFile);
    
    // const logo = {'site_logo': selectedFile?.name}
    // formData.append('site_logo', logo);
    // console.log(logo);

      fetch('https://fapi.epickmovies.online/api/admin/upload-logo', {
        method: 'POST',
        headers: {
            "content-type": "application/json",
            "X-API-KEY": "dtmgNfrv6AJDXV3nPEhkaQ",
            "Authorization": `Bearer ${token}`
          },
        body: formData
      })
        .then(response => {
          if (response.ok) {
            return response.json();
          }
          throw new Error('Network response was not ok.');
        })
        .then(data => {
          console.log('File uploaded:', data);
        })
        .catch(error => {
          console.error('There was a problem uploading the file:', error);
        });
    } else {
      console.error('No file selected.');
    }
  };

  return (
    <div>
      <input type="file" onChange={handleFileChange} />
      <button onClick={handleUpload}>Upload</button>
    </div>
  );
};

export default LogoUploader;