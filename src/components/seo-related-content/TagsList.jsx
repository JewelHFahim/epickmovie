import { FaSquare } from "react-icons/fa";
import { Link } from "react-router-dom";

const TagsList = ({ details }) => {
  const movieTitle = details?.post_im_title;
  const releaseDate = details?.release_date?.slice(0, 4);

  const tagsList = [
    { title: `Download ${movieTitle} ${releaseDate}`, url: "" },
    { title: `${movieTitle} ${releaseDate} Download Filmyzilla`, url: "" },
    { title: `${movieTitle} ${releaseDate} Download HDMovies`, url: "" },
    { title: `${movieTitle} ${releaseDate} Download Bolly4u`, url: "" },
    { title: `${movieTitle} ${releaseDate} Download Bolly4u`, url: "" },
    { title: `${movieTitle} ${releaseDate} Download Pagalmovies`, url: "" },
    { title: `${movieTitle} ${releaseDate} Download Filmyhit`, url: "" },
    { title: `${movieTitle} ${releaseDate} Download Filmywap`, url: "" },
    {
      title: `${movieTitle} ${releaseDate} Movie Download EpickMovies`,
      url: "",
    },
    { title: `${movieTitle} ${releaseDate} Movie Download MoviesHub`, url: "" },
    { title: `${movieTitle} ${releaseDate} Download Pagalworld`, url: "" },
    { title: `${movieTitle} ${releaseDate} Download Kuttymovies`, url: "" },
    { title: `${movieTitle} ${releaseDate} Download HDFriday`, url: "" },
    {
      title: `${movieTitle} ${releaseDate} Movie Download Trends on Google`,
      url: "",
    },
    {
      title: `${movieTitle} ${releaseDate} Movie Download Filmyzilla`,
      url: "",
    },
    {
      title: `${movieTitle} ${releaseDate} Movie Download Tamilrockers`,
      url: "",
    },
    { title: `${movieTitle} ${releaseDate} Movie Download Filmymeet`, url: "" },
    { title: `${movieTitle} ${releaseDate} Movie Download Isaimini`, url: "" },
    { title: `${movieTitle} ${releaseDate} Movie Download 7starhd`, url: "" },
    {
      title: `${movieTitle} ${releaseDate} Movie Download MoviesFlix`,
      url: "",
    },
    {
      title: `${movieTitle} ${releaseDate} Movie Download Khatrimaza`,
      url: "",
    },
    {
      title: `${movieTitle} ${releaseDate} Movie Download Coolmoviez`,
      url: "",
    },
    { title: `${movieTitle} ${releaseDate} Movie Download Tamilyogi`, url: "" },
    {
      title: `${movieTitle} ${releaseDate} Movie Download mkvcinemas`,
      url: "",
    },
    { title: `Impact of Downloading Movies from Torrent Websites`, url: "" },
  ];

  return (
    <div className="mt-5 px-4">
      <p className="text-xl flex items-center text-white gap-x-1 font-semibold">
        <FaSquare className="text-green-500 text-2xl" /> Tags:
      </p>

      <div className="inline-block-flex ml-7 mt-5 text-white text-sm font-semibold text-justify">
        {tagsList.map((item, i) => (
          <Link key={i} className="hover:underline pr-1">
            {item.title},
          </Link>
        ))}
      </div>
    </div>
  );
};

export default TagsList;

{
  /* <div className="flex flex-wrap ml-7 mt-6 text-white text-sm font-semibold gap-x-1">
        Download Jawan (2023), Jawan (2023) Download Filmyzilla, Jawan (2023)
        Download HDMovies, Jawan (2023) Download Bolly4u, Jawan (2023) Download
        Pagalmovies, Jawan (2023) Download Filmyhit, Jawan (2023) Download
        Filmywap, Jawan (2023) Movie Download EpickMovies, Jawan (2023) Movie
        Download MoviesHub, Jawan (2023) Download Pagalworld, Jawan (2023)
        Download Kuttymovies, Jawan (2023) Download HDFriday, Jawan (2023) Movie
        Download Trends on Google, Jawan (2023) Movie Download Filmyzilla,
        Impact of Downloading Movies from Torrent Websites, Jawan (2023) Movie
        Download Tamilrockers, Jawan (2023) Movie Download Filmymeet, Jawan
        (2023) Movie Download Isaimini, Jawan (2023) Movie Download 7starhd,
        Jawan (2023) Movie Download MoviesFlix, Jawan (2023) Movie Download
        Khatrimaza, Jawan (2023) Movie Download Coolmoviez, Jawan (2023) Movie
        Download Tamilyogi, Jawan (2023) Movie Download mkvcinemas.
      </div> */
}
