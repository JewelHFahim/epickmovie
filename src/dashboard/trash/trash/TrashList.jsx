import toast from "react-hot-toast";
import {
  useDeleteParmanetMutation,
  useRestoreMovieSeriesMutation,
  useTrashListQuery,
} from "../../../redux/features/trash/trashApi";

const TrashList = () => {
  const { data: trashList } = useTrashListQuery();
  console.log(trashList);
  const [deleteParmanet] = useDeleteParmanetMutation();

  const [restoreMovieSeries] = useRestoreMovieSeriesMutation();

  const handleDeleteSingle = (id) => {
    deleteParmanet(id);
    toast.error("Deleted");
  };

  const handleRestoreMovieSeries = (id) => {
    restoreMovieSeries(id);
    toast.success("Restored");
  };

  return (
    <div className="mx-auto bg-white border w-full h-full py-6 px-2">
      <div className="items-start justify-between md:flex">
        <div className="max-w-lg">
          <h3 className="text- text-xl text-slate-700 font-bold sm:text-2xl uppercase">
            Trash List - ({trashList?.data?.length})
          </h3>
        </div>

        <div className="mt-3 md:mt-0">
          <a
            href="/admin/dashboard/add-season"
            className="inline-block px-4 py-2 text-white duration-150 font-medium bg-slate-700 rounded-lg hover:bg-slate-600 md:text-sm"
          >
            Delete All
          </a>
        </div>
      </div>

      <div className="mt-10 shadow-sm border rounded-lg overflow-x-auto">
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
            {trashList?.data?.map((item, idx) => (
              <tr key={idx} className="odd:bg-gray-50 even:bg-white">
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

        {/* <Pagination
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          perPgaeMovie={perPgaeMovie}
        /> */}
      </div>
    </div>
  );
};

export default TrashList;
