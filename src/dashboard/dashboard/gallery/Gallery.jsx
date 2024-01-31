import { useDeleteImageMutation, useGalleryListQuery } from "../../../redux/features/gallery/galleryApi";
import toast from "react-hot-toast";
import AddImgModal from "./AddImgModal";
import { FaTrashAlt } from "react-icons/fa";


const Gallery = () => {
  const { data: galleryList } = useGalleryListQuery();
  const [deleteImage] = useDeleteImageMutation()


  const handleDelete = (url) => {
    console.log({path: url})

    const shouldDelete =  window.confirm("Are you sure want to delete this image?");
    if (shouldDelete) {
        deleteImage({path: url});
        toast.error("Deleted");
    } else {
        console.log("Deletion canceled by user");
    }

  }


  return (
    <div className="p-8">
      <div className="border shadow-md p-2 rounded-md">
        <div className="flex justify-between items-center">
          <button className="text-[16px] lg:text-[32px] font-[700] text-slate-700 border-b-[1.4px] border-[#FF2345] p-0 mb-2 leading-[42px]">
            Gallery
          </button>
          <AddImgModal/>
        </div>

        <div className="mt-6 flex justify-center items-center">
          <div className="grid grid-cols-5 lg:grid-cols-8 gap-x-7 gap-y-5">
            {galleryList?.data?.map((item, i) => (
              <div key={i} className="w-[120px] h-[170px]  border-[3px] border-orange-500 flex flex-col justify-between relative shadow-lg">
                <img src={item} alt="" className="w-full h-full object-cover border " />
                <button onClick={()=>handleDelete(item)} className="border border-red-600 w-[30px] h-[30px] rounded-full bg-red-100 shadow-md flex justify-center items-center text-sm text-red-700 font-medium absolute top-1 right-1 hover:bg-red-200 hover:text-red-900 transition-transform duration-200 ease-in-out hover:scale-[1.2]">
                <FaTrashAlt />
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
