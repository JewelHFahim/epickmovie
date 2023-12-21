import toast from "react-hot-toast";
import { useState } from "react";
import { useDeleteAllParmanetMutation, useDeleteParmanetMutation, useRestoreMovieSeriesMutation, useTrashListQuery } from "../../../../redux/features/trash/trashApi";
import { useDispatch } from "react-redux";

const SeasonTrash = () => {



  const { data: trashList } = useTrashListQuery();
  console.log(trashList);
  const dispatch = useDispatch();

  const trashListData = trashList?.data !== "Empty list." ? trashList?.data : [];

  const [deleteParmanet] = useDeleteParmanetMutation();

  const [restoreMovieSeries] = useRestoreMovieSeriesMutation();

  const [deleteAllParmanet] = useDeleteAllParmanetMutation();

  // ===============>> HANDLE SINGLE DELETE PARMANET <<================
  const handleDeleteSingle = (id) => {
    deleteParmanet(id);
    toast.error("Deleted");
  };

  // =====================>> HANDLE RESTORE <<=========================
  const handleRestoreMovieSeries = (id) => {
    restoreMovieSeries(id);
    toast.success("Restored");
  };

  // ===============>> HANDLE ALL DELETE PARMANET <<===================
  const [selectedIds, setSelectedIds] = useState([]);
  const handleSelectAll = () => {
    const allIds = trashList?.data?.map((item) => parseInt(item.id));
    console.log(allIds);
    setSelectedIds(allIds);
  };

  const handleDeleteAll = () => {
    // dispatch(deleteAllParmanet({ids: [selectedIds]}));
  };

  console.log(selectedIds);
  const isSelected = (id) => {
    selectedIds.includes(id);
  };

  return (
    <div className="mx-auto bg-white border w-full h-full py-6 px-2">

      <div className="items-start justify-between md:flex">
        <div className="max-w-lg">
          <h3 className="text- text-xl text-slate-700 font-bold sm:text-2xl uppercase">
            Season Trash - (
            {trashList?.data !== "Empty list." ? trashList?.data?.length : 0})
          </h3>
        </div>

        {trashList?.data !== "Empty list." && (
          <div className="mt-3 md:mt-0">
            <button
              onClick={() => handleDeleteAll()}
              className="inline-block px-4 py-2 text-white duration-150 font-medium bg-slate-700 rounded-lg hover:bg-slate-600 md:text-sm"
            >
              Delete All
            </button>
          </div>
        )}
      </div>

      {trashList?.data !== "Empty list." && (
        <div className="flex justify-end items-center">
          <button
            onClick={handleSelectAll}
            className="mt-8 mx-5 text-sm font-medium rounded-lg text-blue-500  hover:text-blue-700 transform duration-200"
          >
            Select All
          </button>
        </div>
      )}

      <div className="mt-2 shadow-sm border rounded-lg overflow-x-auto">
        {trashList?.data === "Empty list." ? (
          <p className="text-center text-2xl text-slate-400 uppercase">
            {trashList?.data}
          </p>
        ) : (
          <table className="w-full table-auto text-sm text-left">
            <thead className="text-gray-600 font-medium border-b">
              <tr>
                <th></th>
                <th className="py-3 px-6">Poster & Title</th>
                <th className="py-3 px-6">Type</th>
                <th className="py-3 px-6">Deleted</th>
                <th className="text-center"></th>
              </tr>
            </thead>

            <tbody className="divide-y">
              {trashListData?.map((item, idx) => (
                <tr
                  key={idx}
                  className={`odd:bg-gray-50 even:bg-white border-2 ${
                    selectedIds?.includes(item.id)
                      ? "border-slate-500 opacity-[70%]"
                      : "border-transparent"
                  } `}
                >
                  <td className="px-2">{idx + 1}</td>

                  <td className="px-6 py-4 font-medium flex items-center gap-x-2">
                    {item?.post_title?.slice(0, 50)}
                  </td>

                  <td className="px-6 py-4 whitespace-nowrap">
                    {item?.post_type}
                  </td>

                  <td className="px-6 py-4 whitespace-nowrap">
                    {item?.updated_at?.slice(0, 10)}
                  </td>

                  <td className="px-6 py-4 whitespace-nowrap">
                    {item?.post_status}
                  </td>

                  <td className="text-right px-6 whitespace-nowrap">
                    <button
                      onClick={() => handleRestoreMovieSeries(item?.id)}
                      className="py-2 leading-none px-3 font-medium text-green-500 hover:text-green-600 duration-150 hover:bg-gray-50 rounded-lg"
                    >
                      Restore
                    </button>

                    <button
                      onClick={() => handleDeleteSingle(item?.id)}
                      className="py-2 leading-none px-3 font-medium text-red-600 hover:text-red-500 duration-150 hover:bg-gray-50 rounded-lg"
                    >
                      Delete Forever
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>

            {/* <tbody>
                {
                    Object.values(myArray).flatMap(subArray => subArray.map(item => item.name))

                    <tr>

                </tr>
                }
            </tbody> */}

          </table>
        )}

        {/* <Pagination
              currentPage={currentPage}
              setCurrentPage={setCurrentPage}
              perPgaeMovie={perPgaeMovie}
            /> */}
      </div>


    </div>
  );

};

export default SeasonTrash;
