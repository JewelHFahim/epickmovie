/* eslint-disable react/prop-types */

const MovieTvYoutubeTrailer = ({ url }) => {
  return (
    <div>
      <div className="p-1">
        <iframe
          width="100%"
          height="400"
          src={url}
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowfullscreen
        ></iframe>

        <div className="bg-black bg-opacity-[40%] flex justify-between p-10 lg:p-5">
          <p className=" text-4xl lg:text-xl font-medium text-gray-200">
            Video Source
          </p>

          <p className="flex items-center gap-x-2">
            <span className="border border-white border-opacity-[20%] px-4 text-center py-2 lg:py-1 text-blue-600 bg-black rounded-md text-xl lg:text-sm">
              Report Error
            </span>
            <span className="text-gray-400 font-medium text-2xl lg:text-base">
              112 views
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default MovieTvYoutubeTrailer;
