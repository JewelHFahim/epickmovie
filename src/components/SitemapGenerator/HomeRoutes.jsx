import { Link } from "react-router-dom";
import SitemapHeader from "./SitemapHeader";
import {
  useGenreListQuery,
  usePerPageBengaliMovieListQuery,
  usePerPgaeMovieQuery,
  usePixelQualityClientQuery,
  usePrintQualityClientQuery,
  useYearListQuery,
} from "../../redux/features/movies/movieApi";
import { usePerPgaeTvShowQuery } from "../../redux/features/tv-show/tvShowApi";

const HomeRoutes = () => {

  const { data: yearList } = useYearListQuery();
  const { data: genreList } = useGenreListQuery();
  const { data: tvShow } = usePerPgaeTvShowQuery();
  const { data: allMovie } = usePerPgaeMovieQuery();
  const { data: banglaMovie } = usePerPageBengaliMovieListQuery();
  const { data: pixelQualityList } = usePixelQualityClientQuery();
  const { data: printQualityList } = usePrintQualityClientQuery();

  const pixel = pixelQualityList?.data;
  const print = printQualityList?.data;
  const combinedQuality = pixel?.concat(print);


  const siteHomeUrls = [
    {
      loc: "http://localhost:3000/movie-post.xml",
      urlCount: allMovie?.data?.total,
      changefreq: "",
      priority: "",
    },
    {
      loc: "http://localhost:3000/tv-post.xml",
      urlCount: tvShow?.data?.total,
      changefreq: "",
      priority: "",
    },
    {
      loc: "http://localhost:3000/bengali-post.xml",
      urlCount: banglaMovie?.data?.total,
      changefreq: "",
      priority: "",
    },
    {
      loc: "http://localhost:3000/genre-post.xml",
      urlCount: genreList?.data?.length,
      changefreq: "",
      priority: "",
    },
    {
      loc: "http://localhost:3000/year-post.xml",
      urlCount: yearList?.data?.length,
      changefreq: "",
      priority: "",
    },
    {
      loc: "http://localhost:3000/quality-post.xml",
      urlCount: combinedQuality?.length,
      changefreq: "",
      priority: "",
    },
  ];

  return (
    <div className="mx-auto">
      <SitemapHeader />

      <div className="w-[80%] mx-auto mt-6 shadow-sm border rounded-lg overflow-x-auto">
        <table className="w-full table-auto text-sm text-left bg-[#0f0f10]">
          <thead className="bg-slate-800 text-gray-100 font-medium border-b">
            <tr className="divide-x">
              <th className="py-3 px-6">URL</th>
              <th className="py-3 px-6"> URL Count</th>
              <th className="py-3 px-6">Last Updated</th>
            </tr>
          </thead>
          <tbody className="text-gray-100 divide-y">
            {siteHomeUrls?.map((item, idx) => (
              <tr key={idx} className="divide-x">
                <td className="px-6 py-4 whitespace-nowrap flex items-center gap-x-6">
                  <Link to={item.loc} className="text-blue-400">
                    {item.loc}
                  </Link>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">{item.urlCount}</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  {item.changefreq}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default HomeRoutes;
