import { Link } from "react-router-dom";
import { useDeleteImageMutation, useGalleryListQuery } from "../../../redux/features/gallery/galleryApi";
import toast from "react-hot-toast";
import AddImgModal from "./AddImgModal";

const Gallery = () => {
  const { data: galleryList, isLoading } = useGalleryListQuery();
  const [deleteImage] = useDeleteImageMutation()


  const handleDelete = (url) => {
    console.log(url);
    const shouldDelete =  window.confirm("Are you sure want to delete this image?");
    if (shouldDelete) {
        deleteImage(url);
        toast.error("Deleted");
    } else {
        console.log("Deletion canceled by user");
    }
  }

  return (
    <div className="px-10 py-8">
      <div className="">
        <div className="flex justify-between items-center">
          <button className="text-[16px] lg:text-[32px] font-[700] text-slate-700 border-b-[1.4px] border-[#FF2345] p-0 mb-2 leading-[42px]">
            Gallery
          </button>
          <AddImgModal/>
        </div>

        <div className="mt-6 flex justify-center items-center">
          <div className="grid grid-cols-5 lg:grid-cols-8 gap-x-7 gap-y-5">
            {galleryList?.data?.map((item, i) => (
              <div key={i} className="w-[120px] h-[170px]  border-[3px] border-orange-700 flex flex-col justify-between">
                <img src={item} alt="" className="w-full h-[80%] object-contain border " />
                <button onClick={()=>handleDelete(item)} className="border h-[15%] w-full text-sm text-red-700 font-medium">Delete</button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
