import toast from "react-hot-toast";
import {
  useDeleteAllMovieSeriesParmanetMutation,
  useDeleteParmanetMutation,
  useRestoreMovieSeriesMutation,
  useTrashListQuery,
} from "../../../redux/features/trash/trashApi";

const TrashList = () => {
  const { data: trashList } = useTrashListQuery();
  console.log(trashList);

  const trashListData =
    trashList?.data !== "Empty list." ? trashList?.data : [];

  const [deleteParmanet] = useDeleteParmanetMutation();

  const [restoreMovieSeries] = useRestoreMovieSeriesMutation();

  const [deleteAllMovieSeriesParmanet] =
    useDeleteAllMovieSeriesParmanetMutation();

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

  // ===============>> HANDLE ALL DELETE PARMANETLY <<=================
  const handleDeleteAll = () => {
    deleteAllMovieSeriesParmanet();
    toast.success("All Clear");
  };

  return (
    <div className="mx-auto bg-white border w-full h-full py-6 px-2">
      <div className="items-start justify-between md:flex">
        <div className="max-w-lg">
          <h3 className="text- text-xl text-slate-700 font-bold sm:text-2xl uppercase">
            Trash List - (
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

      <div className="mt-8 shadow-sm border rounded-lg overflow-x-auto">
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
                  className={`odd:bg-gray-50 even:bg-white border-2 `}
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
          </table>
        )}

      </div>
    </div>
  );
};

export default TrashList;
