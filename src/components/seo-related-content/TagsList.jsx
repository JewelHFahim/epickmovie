import { FaSquare } from "react-icons/fa";
import { Link } from "react-router-dom";

const TagsList = ({ details,title }) => {
  
  const tagsList = [
    { title: `Download Filmyzilla`, url: "" },
    { title: `Download HDMovies`, url: "" },
    { title: `Download Bolly4u`, url: "" },
    { title: `Download Bolly4u`, url: "" },
    { title: `Download Pagalmovies`, url: "" },
    { title: `Download Filmyhit`, url: "" },
    { title: `Download Filmywap`, url: "" },
    {
      title: `${title} Download EpickMovies`,
      url: "",
    },
    { title: `${title} Download MoviesHub`, url: "" },
    { title: `Download Pagalworld`, url: "" },
    { title: `Download Kuttymovies`, url: "" },
    { title: `Download HDFriday`, url: "" },
    {
      title: `${title} Download Trends on Google`,
      url: "",
    },
    {
      title: `${title} Download Filmyzilla`,
      url: "",
    },
    {
      title: `${title} Download Tamilrockers`,
      url: "",
    },
    { title: `${title} Download Filmymeet`, url: "" },
    { title: `${title} Download Isaimini`, url: "" },
    { title: `${title} Download 7starhd`, url: "" },
    {
      title: `${title} Download MoviesFlix`,
      url: "",
    },
    {
      title: `${title} Download Khatrimaza`,
      url: "",
    },
    {
      title: `${title} Download Coolmoviez`,
      url: "",
    },
    { title: `${title} Download Tamilyogi`, url: "" },
    {
      title: `${title} Download mkvcinemas`,
      url: "",
    },
  ];

  return (
    <div className="mt-5 px-4">
      <p className="text-xl flex items-center text-white gap-x-1 font-semibold">
        <FaSquare className="text-green-500 text-2xl" /> Tags:
      </p>

      <div className="inline-block-flex ml-7 mt-5 text-white text-sm font-semibold text-justif">
        <Link to="" className="hover:underline pr-1">
          Download {details?.post_im_title} (
          {details?.release_date?.slice(0, 4)}),
        </Link>
        {tagsList.map((item, i) => (
          <Link key={i} className="hover:underline pr-1">
            <span>
              <span>{details?.post_im_title}</span>
              <span className="mx-1">({details?.release_date?.slice(0, 4)})</span>
              <span>{item.title}</span>
            </span>
            ,
          </Link>
        ))}
        <span>Impact of Downloading {title} from Torrent Websites</span>
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
