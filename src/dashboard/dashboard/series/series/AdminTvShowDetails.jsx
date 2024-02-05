import { useForm } from "react-hook-form";
import { Link, useParams } from "react-router-dom";
import { useAdminTvShowDetailsQuery } from "../../../../redux/features/tv-show/tvShowApi";
import { FaTrashAlt } from "react-icons/fa";
import { MdRemoveRedEye } from "react-icons/md";
import { useDeleteSeasonMutation } from "../../../../redux/features/trash/trashApi";
import toast from "react-hot-toast";
import { FiTrash } from "react-icons/fi";
import Loading from "../../../../utils/loading/Loading";

const AdminTvShowDetails = () => {
  const { id } = useParams();
  const { register } = useForm();
  const { data: tvShowDetails, isLoading } = useAdminTvShowDetailsQuery(id);
  const details = tvShowDetails?.data;
  console.log(details);
  const [deleteSeason] = useDeleteSeasonMutation();

  const handleDeleteSeason = (seasonId) => {
    const shouldDelete = window.confirm(
      "Are you sure want to delete this Season?"
    );
    if (shouldDelete) {
      deleteSeason(seasonId);
      toast.error("Deleted");
    } else {
      console.log("Deletion canceled by user");
    }
  };

  const inputStyle =
    "py-1 focus:outline-blue-500 border px-4 placeholder:text-sm";

  return (
    <main className="w-full bg-white p-10">
      <div className="flex justify-center">
        <h3 className="text-xl font-bold sm:text-2xl uppercase">
          TV Show Details
        </h3>
      </div>

      {isLoading ? (
        <Loading />
      ) : (
        <div className="space-y-5">
          {/* ==================>> Tv Show INFO <<============== */}
          <h2 className="text-[20px]">Tv Show Info</h2>
          <div className="px-8 bg-slate-100 p-5">
            <div className="flex flex-col">
              <label className="">Series Title</label>
              <input
                type="text"
                readOnly
                defaultValue={details?.post_title}
                className={inputStyle}
              />
            </div>

            <div className="flex flex-col mt-2">
              <label className="">Poster</label>
              <input
                type="text"
                readOnly
                defaultValue={details?.additional_data[0]?.meta_value}
                className={inputStyle}
              />
            </div>

            <div className="flex flex-col mt-2">
              <label className="">Main Backdrops</label>
              <input
                type="text"
                readOnly
                defaultValue={details?.additional_data[1]?.meta_value}
                className={inputStyle}
              />
            </div>

            <div className="flex flex-col mt-2">
              <label className="">Backdrops</label>
              <textarea
                type="text"
                rows={2}
                readOnly
                defaultValue={details?.additional_data[2]?.meta_value}
                className={inputStyle}
              />
            </div>

            <div className="flex flex-col lg:w-1/2 mt-2">
              <label className="">Video Trailer</label>
              <input
                type="text"
                readOnly
                name="video_trailer"
                {...register("video_trailer")}
                placeholder="Add id Youtube video"
                className={inputStyle}
              />
            </div>
          </div>

          {/* ==================>> More Data <<================== */}
          <h2 className="text-[20px]">More Data</h2>
          <div className="px-8 bg-slate-100 p-5 gap-5">
            <div className="flex flex-col mt-2">
              <label className="">Original Name</label>
              <input
                type="text"
                readOnly
                defaultValue={details?.additional_data[9]?.meta_value}
                className={inputStyle}
              />
            </div>

            <div className="flex flex-col mt-2 lg:w-1/2">
              <label className="">First Air Date</label>
              <input
                type="date"
                readOnly
                defaultValue={details?.additional_data[5]?.meta_value}
                className={inputStyle}
              />
            </div>

            <div className="flex flex-col mt-2 lg:w-1/2">
              <label className="">Last Air Date</label>
              <input
                readOnly
                type="date"
                defaultValue={details?.additional_data[6]?.meta_value}
                className={inputStyle}
              />
            </div>

            <div className="flex flex-col mt-2 lg:w-1/2">
              <label className="">Content Total Posted</label>
              <div className="flex items-center gap-5 w-full">
                <input
                  type="text"
                  readOnly
                  defaultValue={`${details?.additional_data[8]?.meta_value} Seaosns`}
                  className={`${inputStyle} w-1/2`}
                />

                <input
                  type="text"
                  readOnly
                  defaultValue={`${details?.additional_data[7]?.meta_value} Episode`}
                  className={`${inputStyle} w-1/2`}
                />
              </div>
            </div>

            <div className="flex flex-col mt-2 lg:w-1/2">
              <label className="">Rating TMDb</label>
              <div className="flex items-center gap-5 w-full">
                <input
                  type="text"
                  readOnly
                  defaultValue={details?.additional_data[0]?.meta_value}
                  className={`${inputStyle} w-1/2`}
                />

                <input
                  type="text"
                  readOnly
                  defaultValue={details?.additional_data[1]?.meta_value}
                  className={`${inputStyle} w-1/2`}
                />
              </div>
            </div>

            <div className="flex flex-col mt-2">
              <label className="">Cast</label>
              <textarea
                type="text"
                rows={4}
                readOnly
                defaultValue={details?.additional_data[12]?.meta_value}
                className={inputStyle}
              />
            </div>

            <div className="flex flex-col mt-2">
              <label className="">Creator</label>
              <textarea
                rows={4}
                type="text"
                readOnly
                defaultValue={details?.additional_data[13]?.meta_value}
                className={inputStyle}
              />
            </div>
          </div>
        </div>
      )}

      <hr className="my-5" />
      {/* ===============>> SEASON LIST HERE <<============== */}
      <section>
        <div className="mx-auto  bg-white">
          <div className="items-start justify-center md:flex">
            <div className="max-w-lg">
              <h3 className="text-xl font-bold sm:text-2xl uppercase">
                Season List
              </h3>
            </div>
          </div>

          {/* ==============>> GENRE LIST <<=============== */}
          <div className="flex justify-between items-center">
            <Link to="/admin/dashboard/season-trash">
              <button className="flex items-center gap-1 text-red-700 hover:bg-red-50 px-2 py-[2px] rounded-lg">
                <FiTrash />
                Trash
              </button>
            </Link>

            <Link
              to={`/admin/dashboard/add-season/${id}`}
              className="py-1 px-2  duration-150 hover:bg-gray-50 rounded-lg"
            >
              +Add Season
            </Link>
          </div>

          <div className="shadow-sm border rounded-lg overflow-x-auto">
            <table className="w-full table-auto text-sm text-left">
              <thead className="text-gray-600 font-medium border-b">
                <tr>
                  <th className="py-3 px-6">Titile</th>
                  <th className="text-center">Actions</th>
                </tr>
              </thead>

              <tbody className="divide-y">
                {details?.tv_seasons?.map((item, idx) => (
                  <tr key={idx} className="odd:bg-gray-50 even:bg-white">
                    <td className="px-6 py-4 font-medium flex items-center gap-x-2">
                      {item?.season_name}
                    </td>

                    <td className="text-center px-6 ">
                      <Link to={`/admin/dashboard/episode-list/${item?.id}`}>
                        <button className="py-2 text-xl px-3 font-medium text-indigo-600 hover:text-indigo-500 duration-150 hover:bg-gray-50 rounded-lg">
                          <MdRemoveRedEye />
                        </button>
                      </Link>

                      <button
                        onClick={() => handleDeleteSeason(item?.id)}
                        className="py-2 text-lg leading-none px-6 font-medium text-red-600 hover:text-red-500 duration-150 hover:bg-gray-50 rounded-lg"
                      >
                        <FaTrashAlt />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </main>
  );
};

export default AdminTvShowDetails;
