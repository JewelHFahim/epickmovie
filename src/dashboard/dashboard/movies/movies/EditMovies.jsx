import { useForm } from "react-hook-form";
import {
  useMovieDetailsQuery,
  useUpdateMovieMutation,
  useYearListQuery,
} from "../../../../redux/features/movies/movieApi";
import { useNavigate, useParams } from "react-router-dom";
import toast from "react-hot-toast";
import GenreListDrop from "./GenreListDrop";
import { useState } from "react";

const EditMovies = () => {
  const { register, handleSubmit, reset } = useForm();
  const { id } = useParams();
  const navigate = useNavigate();
  const { data: movieDetails } = useMovieDetailsQuery(id);
  const { data: yearList } = useYearListQuery();
  const [updateMovie] = useUpdateMovieMutation();
  const [selectedOptions, setSelectedOptions] = useState([]);

  const prevGenres = movieDetails?.data?.additional_data?.genres?.map(
    (item) => ({ value: item?.term?.id, label: item?.term?.name })
  );

  const onSubmit = (data) => {

    const selectedGeneres = selectedOptions?.map((item) => item?.value);
    
    const updatedData = { ...data, genre_ids: selectedGeneres };
    updateMovie({ updatedData, id });
    reset();
    toast.success("Updated");
    navigate("/admin/dashboard/movies-db");
  };

  const inputStyle =
    "py-1 focus:outline-blue-500 border px-4 placeholder:text-sm";

  return (
    <main className="w-full bg-white p-10">
      <div className="flex justify-center">
        <h3 className="text-xl font-bold sm:text-2xl uppercase">Edit Movie</h3>
      </div>
      <hr />

      {/* =============>> FORM DATA <<=========== */}
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
        {/* ==================>> MOVIE INFO <<============== */}
        <h2 className="text-[20px]">Movie Info</h2>

        <div className="px-8 bg-slate-100 p-5">
          <div className="flex flex-col">
            <label className="">Movie Title</label>
            <input
              type="text"
              name="post_title"
              defaultValue={movieDetails?.data?.post_title}
              {...register("post_title")}
              placeholder="Movie Title"
              className={inputStyle}
            />
          </div>

          <div className="flex flex-col mt-2">
            <label className="">Movie Content</label>
            <textarea
              rows={6}
              type="text"
              name="post_content"
              {...register("post_content")}
              defaultValue={movieDetails?.data?.post_content}
              placeholder="Movie Content"
              className={`${inputStyle} py-2`}
            />
          </div>

          {/* =====================>> GENRE LIST <<===============================*/}
          <div className="flex flex-col mt-2">
            <label className="">Select Genre</label>
            <GenreListDrop
              selectedOptions={selectedOptions}
              setSelectedOptions={setSelectedOptions}
              prevGenres={prevGenres}
            />
          </div>

          {/* =====================>> YEAR LIST <<===============================*/}
          <div className="flex flex-col mt-2">
              <label className="">Select Year</label>
              <select
                data-te-select-init
                {...register("yearId")}
                className={inputStyle}
              >
                <option hidden>Select Year</option>
                {yearList?.data?.map((item) => (
                  <option key={item?.id} value={item?.id}>
                    {item?.name}
                  </option>
                ))}
              </select>
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
    </main>
  );
};

export default EditMovies;
