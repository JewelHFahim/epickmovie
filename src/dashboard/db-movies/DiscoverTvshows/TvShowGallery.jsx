import { useState } from "react";
import { imgBaseUrl } from "../../../utils/Importants";
import { useDispatch, useSelector } from "react-redux";
import ImageLoader from "../../../utils/loading/img-loader/ImageLoader";
import { IoCheckmarkDoneCircleOutline } from "react-icons/io5";
import { bulkTvShowImport, setBulkData, singleTvShowImport } from "../../../redux/features/tv-show/tvShowSlice";

const TvShowGallery = ({ tvShows }) => {

  console.log(tvShows)

  const dispatch = useDispatch();
  const { isLoading } = useSelector((state) => state.movie);
  const [selectedIds, setSelectedIds] = useState([]);
  console.log(selectedIds)

  const handleImageClick = async (id) => {
    id = parseInt(id, 10);
    console.log(id)
    if (selectedIds.includes(id)) {
      setSelectedIds(selectedIds.filter((selectedId) => selectedId !== id));
    } else {
      setSelectedIds([...selectedIds, id]);
    }

    // ===============>> SINGLE DATA  IMPORT <<================

    const data = { tmdb_id: id };
    await dispatch(singleTvShowImport(data));
  };

  const handleSelectAll = () => {
    const allIds = tvShows?.map((image) => parseInt(image.id));
    setSelectedIds(allIds);
    dispatch(setBulkData(allIds))
  };

  const isSelected = (id) => {
    selectedIds?.includes(id);
  };

  console.log(selectedIds);

  // ===================>> BULK DATA IMPORT <<====================
  const HandleBulkTvShowImport = async () => {
    const data = { tmdb_ids: selectedIds};
    const res = await dispatch(bulkTvShowImport(data));
    console.log(res);
  };

  const notificationList = tvShows?.results?.filter((item) =>
    selectedIds?.includes(item.id)
  );

  const clearNotificationList = () => {
    setSelectedIds([]);
  };

  return (
    <div>

      {
        notificationList?.length > 0 && 
        <div className="w-full h-full p-5 bg-slate-200 flex flex-col gap-2">
        {notificationList?.map((item) => (
          <div
            key={item?.id}
            className="w-full bg-white hover:bg-slate-50 shadow-lg h-[50px] flex justify-between items-center px-5 rounded-lg"
          >
            <div className="flex items-center gap-x-8 text-sm">
              <p className="  font-medium text-green-600 uppercase">Imported</p>
              <p className="uppercase">Movie</p>
              <button className="border text-sm px-3 py-[2px] rounded-lg text-blue-700">
                Edit
              </button>
              <p className="text-blue-700 ml-10">{item?.title.slice(0,15)}</p>
            </div>
            <div>
              <IoCheckmarkDoneCircleOutline className="text-green-500" />
            </div>
          </div>
        ))}
      </div>
      }

      {notificationList?.length > 0 && (
        <div className="w-full h-[25px] flex justify-center items-center bg-slate-50">
          <button
            onClick={() => clearNotificationList()}
            className="text-sm text-blue-700 font-medium"
          >
            Clear
          </button>
        </div>
      )}

      <div className=" w-full flex justify-between items-center pl-2 pr-[85px]">
        <button className="text-[16px] lg:text-[32px] font-[700] text-slate-700 border-b-[1.4px] border-[#FF2345] p-0 mb-2">
          Tv Shows
        </button>

        <button
          onClick={handleSelectAll}
          className="border px-4 py-1 text-sm rounded-lg text-blue-500 border-blue-500 hover:bg-blue-500 hover:text-white transform duration-200"
        >
          Select All
        </button>
      </div>

      <div style={{ display: "flex", flexWrap: "wrap" }}>

        {tvShows?.map((image) => (
          <div key={image.id} 
          onClick={() => handleImageClick(image.id)}
            style={{ border: isSelected(image.id) ? "2px solid blue" : "2px solid transparent", margin: "8px", cursor: "pointer"}}
            className="relative"
          >
            {isLoading === true && parseInt(selectedIds) === image.id && (
              <div className="absolute text-white right-0 bottom-0 bg-red-500 bg-opacity-[60%]">
                <ImageLoader />
              </div>
            )}

            <img src={`${imgBaseUrl}${image?.poster_path}`} alt="" style={{ width: "120px", height: "150px" }}/>
            <div className="text-center">
              <p>{image?.name?.slice(0,12)}</p>
              <p className="text-sm">{image?.first_air_date}</p>
            </div>

          </div>
        ))}
      </div>

      <div>
        <p>Selected Image IDs: [{selectedIds.join(", ")}]</p>
      </div>

    </div>
  );
};

export default TvShowGallery;
