import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { useNavigate, useParams } from "react-router-dom";
import {
  useCreateMovieLinkMutation,
  usePixelQualityListQuery,
  usePrintQualityListQuery,
} from "../../../../redux/features/movies/movieApi";
import { useState } from "react";
import AudioListDropdown from "./AudioListDropdown";

const AddMovieLink = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { register, handleSubmit, reset } = useForm();
  const [createMovieLink] = useCreateMovieLinkMutation();
  const { data: pixelQualityList } = usePixelQualityListQuery();
  const { data: printQualityList } = usePrintQualityListQuery();
  const [selectedAudios, setSelectedAudios] = useState([]);

  const onSubmit = async (data) => {
    try {
      const allData = {
        ...data,
        post_id: id,
        audio_ids: selectedAudios?.map((ids) => ids.value),
      };

      console.log(allData);
      const res = await createMovieLink(allData);
      console.log(res)

      if (res && res?.data) {
        const { message } = res.data;
        toast.success(message);
          reset();
          navigate(`/admin/dashboard/movies-db`);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const inputStyle =
    "py-1 focus:outline-blue-500 border px-4 placeholder:text-sm";
  return (
    <div className="p-10">
      <div className="">
        <h3 className="text-xl font-bold text-slate-700 sm:text-2xl uppercase">
          Add Movie Link
        </h3>

        {/* =============>> FORM DATA <<=========== */}
        <form onSubmit={handleSubmit(onSubmit)} className="mt-5 space-y-5">
          <div className="px-8 bg-slate-100 p-5">
            <div className="flex flex-col">
              <label className="">Movie Link</label>
              <input
                type="text"
                {...register("link")}
                placeholder="Movie Link"
                className={inputStyle}
              />
            </div>

            {/* =====================>> SELECT QUALITY <<===============================*/}
            <div className="flex items-center gap-x-5 my-2">
              <div className="flex flex-col mt-2 w-1/2">
                <label className="">Select Pixel Quality</label>
                <select
                  data-te-select-init
                  {...register("pxquality_id")}
                  className={inputStyle}
                >
                  <option hidden>Pixel Quality</option>
                  {pixelQualityList?.data?.map((item) => (
                    <option key={item?.id} value={item?.id}>
                      {item?.name}
                    </option>
                  ))}
                </select>
              </div>

              <div className="flex flex-col mt-2 w-1/2">
                <label className="">Select Print Quality</label>
                <select
                  data-te-select-init
                  {...register("prquality_id")}
                  className={inputStyle}
                >
                  <option hidden>Print Quality</option>
                  {printQualityList?.data?.map((item) => (
                    <option key={item?.id} value={item?.id}>
                      {item?.name}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* =====================>> SELECT AUDIO <<===============================*/}
            <div className="flex items-center gap-x-5">
              <div className="flex flex-col mt-2 w-1/2">
                <label className="">Select Audio</label>
                <AudioListDropdown
                  selectedAudios={selectedAudios}
                  setSelectedAudios={setSelectedAudios}
                />
              </div>

              <div className="flex flex-col w-1/2">
                <label className="">Movie Size</label>
                <input
                  type="text"
                  name="post_title"
                  {...register("post_title")}
                  placeholder="movie size 200mb, 400mb"
                  className={inputStyle}
                />
              </div>
            </div>
          </div>

          {/* ================>> Submit Btn <<================= */}
          <div className="w-full flex justify-center">
            <button
              type="submit"
              className="px-32 py-2 rounded-lg text-white uppercase font-medium bg-slate-700 hover:bg-slate-800 transform duration-150"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddMovieLink;
