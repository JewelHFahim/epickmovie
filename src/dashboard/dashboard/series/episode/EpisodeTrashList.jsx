import toast from "react-hot-toast";
import {
  useDeleteAllEpisodeParmanetMutation,
  useDeleteEpisodeParmanetMutation,
  useEpisodeTrashListQuery,
  useRestoreEpisodeMutation,
} from "../../../../redux/features/trash/trashApi";

const EpisodeTrashList = () => {
  const { data: episodetrashList } = useEpisodeTrashListQuery();
  console.log(episodetrashList);

  const trashListData =
    episodetrashList?.data !== "Empty list." ? episodetrashList?.data : [];

  const [restoreEpisode] = useRestoreEpisodeMutation();
  const [deleteEpisodeParmanet] = useDeleteEpisodeParmanetMutation();
  const [deleteAllEpisodeParmanet] = useDeleteAllEpisodeParmanetMutation();

  // ===============>> HANDLE SINGLE DELETE PARMANET <<================
  const handleDeleteSingle = (id) => {
    const shouldDelete = window.confirm("Are you sure want delete this Episode?");
    if (shouldDelete) {
      deleteEpisodeParmanet(id);
      toast.error("Deleted");
    } else {
      console.log("Deletion cancle by user");
    }
  };

  // =====================>> HANDLE RESTORE <<=========================
  const handleRestoreSeason = (id) => {
    const shouldDelete = window.confirm("Are you sure want Restore?");
    if (shouldDelete) {
      restoreEpisode(id);
      toast.success("Restored");
    } else {
      console.log("Restored cancle by user");
    }
  };
  
  // ==================>>  ALL DELETE PARMANET <<======================
  const handleDeleteAll = () => {
    const shouldDelete = window.confirm("Are you sure want delete All Episode?");
    if (shouldDelete) {
      deleteAllEpisodeParmanet();
      toast.error("Deleted");
    } else {
      console.log("Deletion cancle by user");
    }
  };
  

  return (
    <div className="mx-auto bg-white border w-full h-full py-6 px-2">
      <div className="items-start justify-between md:flex">
        <div className="max-w-lg">
          <h3 className="text- text-xl text-slate-700 font-bold sm:text-2xl uppercase">
            Episode Trash - (
            {episodetrashList?.data !== "Empty list."
              ? episodetrashList?.data?.length
              : 0}
            )
          </h3>
        </div>

        {episodetrashList?.data !== "Empty list." && (
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

      <div className="mt-2 shadow-sm border rounded-lg overflow-x-auto">
        {episodetrashList?.data === "Empty list." ? (
          <p className="text-center text-2xl text-slate-400 uppercase">
            {episodetrashList?.data}
          </p>
        ) : (
          <table className="w-full table-auto text-sm text-left">
            <thead className="text-gray-600 font-medium border-b">
              <tr>
                <th></th>
                <th className="py-3 px-6">Title</th>
                <th className="py-3 px-6">Deleted</th>
                <th className="text-center"></th>
              </tr>
            </thead>

            <tbody className="divide-y">
              {trashListData?.map((item, idx) => (
                <tr
                  key={idx}
                  className={`odd:bg-gray-50 even:bg-white border-2`}
                >
                  <td className="px-2">{idx + 1}</td>

                  <td className="px-6 py-4 font-medium flex items-center gap-x-2">
                    {item?.episode_name}
                  </td>

                  <td className="px-6 py-4 whitespace-nowrap">
                    {item?.updated_at?.slice(0, 10)}
                  </td>

                  <td className="text-right px-6 whitespace-nowrap">
                    <button
                      onClick={() => handleRestoreSeason(item?.id)}
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

export default EpisodeTrashList;
