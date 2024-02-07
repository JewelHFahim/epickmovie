import { useForm } from "react-hook-form";
import { useCreateMovieMutation } from "../../../../redux/features/movies/movieApi";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import GenreListDrop from "./GenreListDrop";
import { useState } from "react";
import PosterModal from "./PosterModal";
import MainBackdropModal from "./MainBackdropModal";
import BackdropsModal from "./BackdropsModal";
import { useGalleryListQuery } from "../../../../redux/features/gallery/galleryApi";

const AddMovies = () => {
  const { register, handleSubmit, reset } = useForm();
  const [createMovie] = useCreateMovieMutation();
  const navigate = useNavigate();
  const [selectedOptions, setSelectedOptions] = useState([]);

  const [selectedPoster, setSelectedPoster] = useState();
  const [selectedMainback, setSelectedMainback] = useState();
  const [selectedBackdrops, setSelectedbackdrops] = useState([]);

  const { data: galleryList } = useGalleryListQuery();

  const newGallery = galleryList?.data?.map((img, i) => ({
    id: i + 1,
    url: img,
  }));

  const onSubmit = async (data) => {
    try {
      const selectedGeneres = selectedOptions?.map((item) => item?.value);
      const imgUrls = selectedGeneres?.map((item) => item?.url);

      const allDatas = {
        ...data,
        dt_poster: selectedPoster?.url,
        dt_backdrop: selectedMainback?.url,
        imagenes: imgUrls,
        genre_ids: selectedGeneres,
      };

      console.log(allDatas);

      const res = await createMovie(allDatas);

      if (res && res.data) {
        const { message } = res.data;
        toast.success(message);
      } else {
        console.error("Invalid response format");
      }
      reset();
      navigate("/admin/dashboard/movies-db");
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const inputStyle =
    "py-1 focus:outline-blue-500 border px-4 placeholder:text-sm";

  const handleRemove = (imgId) => {
    setSelectedbackdrops(selectedBackdrops?.filter((img) => img.id !== imgId));
  };

  return (
    <main className="w-full  p-10">
      <div className="flex justify-center">
        <h3 className="text-xl font-bold sm:text-2xl uppercase ">
          Add New Movie
        </h3>
      </div>

      {/* =============>> FORM DATA <<=========== */}
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        {/* ==================>> MOVIE INFO <<============== */}
        <h2 className="text-[20px] ">Movies Info</h2>
        <div className="px-8 bg-slate-300 p-5">
          <div className="flex flex-col">
            <label className="">Movies Title</label>
            <input
              type="text"
              {...register("post_title", { required: true })}
              placeholder="Movie Title"
              className={inputStyle}
            />
          </div>

          <div className="flex flex-col mt-2">
            <label className="">Post Content</label>
            <textarea
              rows={3}
              type="text"
              {...register("post_content", { required: true })}
              placeholder="Post Content"
              className={inputStyle}
            />
          </div>

          <div className="flex flex-col mt-2">
            <label className="">Select Genre</label>
            <GenreListDrop
              selectedOptions={selectedOptions}
              setSelectedOptions={setSelectedOptions}
            />
          </div>
        </div>

        {/* ==================>> Images and trailer <<============== */}
        <h2 className="text-[20px] "> Images and Trailer </h2>
        <div className="px-8 bg-slate-300 p-5">
          <div className="flex flex-col mt-2">
            <label className="">Poster</label>
            <PosterModal
              selectedPoster={selectedPoster}
              setSelectedPoster={setSelectedPoster}
              newGallery={newGallery}
            />
            {selectedPoster && (
              <div className="bg-white flex flex-wrap gap-x-2 p-2">
                <img
                  src={selectedPoster?.url}
                  alt=""
                  className="w-[60px] h-[60px] object-cover border"
                />
              </div>
            )}
          </div>

          <div className="flex flex-col mt-2">
            <label className="">Main Backdrops</label>
            <MainBackdropModal
              newGallery={newGallery}
              setSelectedMainback={setSelectedMainback}
            />
            {selectedMainback && (
              <div className="bg-white flex flex-wrap gap-x-2 p-2">
                <img
                  src={selectedMainback?.url}
                  alt=""
                  className="w-[60px] h-[60px] object-cover border"
                />
              </div>
            )}
          </div>

          <div className="flex flex-col mt-2">
            <label className="">Backdrops</label>
            <BackdropsModal
              newGallery={newGallery}
              selectedBackdrops={selectedBackdrops}
              setSelectedbackdrops={setSelectedbackdrops}
            />
            {selectedBackdrops?.length > 0 && (
              <div className="bg-white flex flex-wrap gap-x-2 p-2 ">
                {selectedBackdrops?.map((item, i) => (
                  <div key={i} className="relative">
                    <img
                      src={item?.url}
                      alt=""
                      className="w-[60px] h-[60px] object-cover border"
                    />
                    <div className="absolute right-0 top-0 w-[15px] h-[15px] hover:scale-[1.3] hover bg-red-200 rounded-full flex justify-center items-center p-[3px] transition-transform duration-300">
                      <button
                        onClick={() => handleRemove(item.id)}
                        className="text-red-600"
                      >
                        X
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          <div className="flex flex-col mt-2 lg:w-1/2">
            <label className="">Video Trailer</label>
            <input
              type="text"
              {...register("video_tutorial")}
              placeholder="Add id Youtube video"
              className={inputStyle}
            />
          </div>
        </div>

        {/* ===============>> Themoviedb Data <<============ */}
        <h2 className="text-[20px] ">Themoviedb.org data</h2>
        <div className="px-8 bg-slate-300 p-5 gap-5">
          <div className="flex flex-col mt-2 lg:w-[220px]">
            <label className="">Release Date</label>
            <input
              type="date"
              {...register("release_year", { required: true })}
              placeholder="Release Date"
              className={`${inputStyle} text-slate-400`}
            />
          </div>
        </div>

        {/* ================>> Submit Btn <<================= */}
        <div className="w-full flex justify-center">
          <button
            type="submit"
            className="px-32 py-2 rounded-lg text-white uppercase font-medium bg-slate-600 hover:bg-slate-900 transform duration-150 border"
          >
            Submit
          </button>
        </div>
      </form>
    </main>
  );
};

export default AddMovies;
