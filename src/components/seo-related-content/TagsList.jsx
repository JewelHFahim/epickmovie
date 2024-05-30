/* eslint-disable react/prop-types */
import { FaSquare } from "react-icons/fa";
import { Link } from "react-router-dom";

const TagsList = ({ details, title, className, textSize }) => {
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
    <div className={`mt-5 px-4 text-white ${className}`}>
      <p className="text-3xl lg:text-xl flex items-center  gap-x-1 font-semibold">
        <FaSquare className="text-green-500 text-2xl" /> Tags:
      </p>

      <div className="inline-block-flex ml-7 mt-5 text-lg lg:text-sm font-semibold text-justif">
        {/* <Link
          to={`/search-list/${details?.post_im_title}`}
          className="hover:underline pr-1"
        >
          Download {details?.post_title} ({details?.release_date?.slice(0, 4)}),
        </Link> */}

        {tagsList.map((item, i) => (
          <Link
            key={i}
            to={`/search-list/${details?.post_im_title}`}
            className={`hover:underline pr-1`}
          >
            <span className={textSize}>
              <span>{details?.post_im_title}</span>
              <span className="mx-1">
                ({details?.release_date?.slice(0, 4)})
              </span>
              <span>{item.title}</span>
            </span>
            ,
          </Link>
        ))}
      </div>
    </div>
  );
};

export default TagsList;
