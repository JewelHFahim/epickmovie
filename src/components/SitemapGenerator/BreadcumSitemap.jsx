import { Link, useLocation } from "react-router-dom";

const BreadcumSitemap = () => {
  const location = useLocation();
  const currentRoute = location.pathname;

  return (
    <div className="flex items-center overflow-x-auto whitespace-nowrap">
      <Link to="/" className="text-gray-100 ">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-5 h-5"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
        </svg>
      </Link>

      <span className="mx-5 text-gray-500 rtl:-scale-x-100">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-5 h-5"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
            clipRule="evenodd"
          />
        </svg>
      </span>

      <Link to="/" className="text-gray-100 hover:underline">
        Home
      </Link>

      <span className="mx-5 text-gray-500 rtl:-scale-x-100">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-5 h-5"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
            clipRule="evenodd"
          />
        </svg>
      </span>

      <Link
        to="/sitemap-xml"
        className={
          currentRoute === "/sitemap-xml"
            ? "text-blue-600 hover:underline"
            : " text-gray-100 hover:underline"
        }
      >
        Sitemap Index
      </Link>

      {currentRoute === "/sitemap-xml" ? (
        ""
      ) : (
        <div className="flex items-center py-4 overflow-x-auto whitespace-nowrap">
          <span className="mx-5 text-gray-500 dark:text-gray-300 rtl:-scale-x-100">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                clipRule="evenodd"
              />
            </svg>
          </span>
          <Link to="#" className="text-blue-600 hover:underline">
            {currentRoute === "/movie-post.xml"
              ? "Movie Sitemap"
              : currentRoute === "/tv-post.xml"
              ? "TvShow Sitemap"
              : currentRoute === "/genre-post.xml"
              ? "Genre Sitemap"
              : currentRoute === "/year-post.xml"
              ? "Year Sitemap"
              : currentRoute === "/quality-post.xml"
              ? "Quality Sitemap"
              : "Bengali Sitemap"}
          </Link>
        </div>
      )}
    </div>
  );
};

export default BreadcumSitemap;
