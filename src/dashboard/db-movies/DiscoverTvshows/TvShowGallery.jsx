import { useState } from "react";
import { imgBaseUrl } from "../../../utils/Importants";
import { useDispatch, useSelector } from "react-redux";
import ImageLoader from "../../../utils/loading/img-loader/ImageLoader";
import { IoCheckmarkDoneCircleOutline } from "react-icons/io5";
import { setBulkData, singleTvShowImport } from "../../../redux/features/tv-show/tvShowSlice";
import { useAlreadyUploadedMovieSeriesIdsQuery } from "../../../redux/features/movies/movieApi";

const TvShowGallery = ({ tvShows }) => {
  const dispatch = useDispatch();
  const { isLoading, status } = useSelector((state) => state.movie);
  const [selectedIds, setSelectedIds] = useState([]);
  const {data: uploadedIds } = useAlreadyUploadedMovieSeriesIdsQuery();

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
    console.log(selectedIds?.includes(id));
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
        status && 
        <div className="w-full h-full p-5 bg-slate-200 flex flex-col gap-2">
        {notificationList?.map((item) => (
          <div
            key={item?.id}
            className="w-full bg-white hover:bg-slate-50 shadow-lg h-[50px] flex justify-between items-center px-5 rounded-lg"
          >
            <div className="flex items-center gap-x-8 text-sm">
              <p className="  font-medium text-green-600 uppercase">Imported</p>
              <p className="uppercase">TV Show</p>
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

      <div className=" w-full flex justify-between items-center pl-2 pr-[40px]">
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
          onClick={() => {
            if (!uploadedIds?.data?.includes(image.id.toString())) {
              handleImageClick(image.id);
            }}}
            className={`relative cursor-pointer ${ uploadedIds?.data?.includes(image.id.toString()) ? "cursor-not-allowed" : ""} m-[8px]
             ${selectedIds.includes(image.id) ? "border-2 border-green-900": "border-2 border-transparent"}`}
          >
             {isLoading === true && parseInt(selectedIds) === image.id && (
              <div className="absolute text-white right-5 bottom-5 bg-red-500 bg-opacity-[60%]">
                <ImageLoader />
              </div>
            )}

            <img src={`${imgBaseUrl}${image?.poster_path}`} alt="" style={{ width: "120px", height: "150px" }}/>
            <div className="text-center">
              <p>{image?.name?.slice(0,12)}</p>
              <p className="text-sm">{image?.first_air_date}</p>
              <p className="text-sm">{image?.id}</p>
            </div>

            {
              uploadedIds?.data?.includes(image.id.toString()) && <div className="absolute w-full h-full bg-black bg-opacity-[40%] top-0 left-0">
                <p className="text-white flex justify-end text-2xl p-4"><IoCheckmarkDoneCircleOutline />
            </p>
              </div>
            }
          </div>
        ))}
      </div>
    </div>
  );
};

export default TvShowGallery;
