import { useForm } from "react-hook-form";
import { useParams } from "react-router-dom";
import { useAdminTvShowDetailsQuery } from "../../../../redux/features/tv-show/tvShowApi";

const AdminTvShowDetails = () => {
  const { id } = useParams();
  const { data: tvShowDetails } = useAdminTvShowDetailsQuery(id);
  const details = tvShowDetails?.data;
  console.log(details);

  const { register } = useForm();

  const inputStyle =
    "py-1 focus:outline-blue-500 border px-4 placeholder:text-sm";

  return (
    <main className="w-full bg-white p-10">
      <div className="flex justify-center">
        <h3 className="text-xl font-bold sm:text-2xl uppercase">
          TV Show Details
        </h3>
      </div>

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
              defaultValue={details?.additional_data[3]?.meta_value}
              className={inputStyle}
            />
          </div>

          <div className="flex flex-col mt-2">
            <label className="">Main Backdrops</label>
            <input
              type="text"
              readOnly
              defaultValue={details?.additional_data[4]?.meta_value}
              className={inputStyle}
            />
          </div>

          <div className="flex flex-col mt-2">
            <label className="">Backdrops</label>
            <textarea
              type="text"
              rows={4}
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
    </main>
  );
};

export default AdminTvShowDetails;
