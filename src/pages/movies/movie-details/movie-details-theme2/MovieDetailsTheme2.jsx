import { Link, useParams } from "react-router-dom";
import { useMovieDetailsQuery } from "../../../../redux/features/movies/movieApi";
import BreadCumTheme2 from "../../../../utils/breadcum/BreadCumTheme2";
import MovieCardTheme2 from "../../../../components/movie-card/move-card-theme2/MovieCardTheme2";
import { useSuggessionMovieSeriesQuery } from "../../../../redux/features/search/searchApi";
import LazyLoadingTheme2 from "../../../../components/lazy-loading/LazyLoadingTheme2";
import DownloadSection from "../movie-details-theme1/DownloadSection";
import SeoContentTheme2 from "../../../../components/theme2-contents/SeoContentTheme2";
import TagsList from "../../../../components/seo-related-content/TagsList";

const MovieDetailsTheme2 = () => {
  const { id } = useParams();
  const { data: movieDetails, isLoading: detaislLoading } =
    useMovieDetailsQuery(id);
  const details = movieDetails?.data;
  const { data: suggessions, isLoading: suggessionsLoading } =
    useSuggessionMovieSeriesQuery(id);

  console.log(details);

  return (
    <div className="mt-14 ">
      <BreadCumTheme2
        children1="movies"
        children2={details?.post_title}
        redirect="/movies"
        textColor="text-[#009987]"
      />

      <div className="bg-[#A8A8A812] py-5 px-7">
        <h2 className="font-jost text-[26px] font-bold text-[#10FFE3]">
          {details?.post_title}
        </h2>

        <div className="mt-5 flex gap-x-24">
          <div className="w-[503px]">
            { detaislLoading ?

            <div className="w-full h-[691px]  bg-slate-600 animate-pulse rounded-[15px]"/>

            :
                <img
              src={details?.poster_image_url}
              alt=""
              className="w-full h-[691px] rounded-[15px]"
            />
            }

            <h2 className="text-[#10FFE3] text-[26px] font-jost font-bold text-center mt-5">
              Movie Details
            </h2>

            <hr className="border-[#009987] border-[1px] mb-4" />

            <div className="text-[24px] leading-[32px] text-white font-jost font-[700]">
              <p>
                Genre:
                <span>
                  {details?.additional_data?.genres?.map((item, i) => (
                    <Link
                      to=""
                      key={i}
                      className="font-normal text-yellow-600 ml-2"
                    >
                      {item?.term?.name},
                    </Link>
                  ))}
                </span>
              </p>

              <p>
                Director:
                <span>
                  {details?.additional_data?.dtdirector?.map((item, i) => (
                    <Link
                      to=""
                      key={i}
                      className="font-normal text-yellow-600 ml-2"
                    >
                      {item?.term?.name},
                    </Link>
                  ))}
                </span>
              </p>

              <p>
                Actors:
                <span>
                  {details?.additional_data?.dtcast?.map((item, i) => (
                    <Link
                      to=""
                      key={i}
                      className="font-normal text-yellow-600 ml-2"
                    >
                      {item?.term?.name},
                    </Link>
                  ))}
                </span>
              </p>

              <p>
                Country:
                <span className="font-normal text-yellow-600 ml-2">
                  {details?.country ? (
                    details?.country
                  ) : (
                    <span className="text-slate-400">N/A</span>
                  )}
                </span>
              </p>

              <p>
                Runtime:
                <span className="font-normal text-yellow-600 ml-2">
                  {details?.runtime} min.
                </span>
              </p>
            </div>
          </div>

          {/* Related Post */}
          <div className="w-[450px]">
            <h2 className="text-[#10FFE3] text-[26px] font-jost font-bold text-center">
              Related Movies
            </h2>
            <hr className="border-[#009987] border-[1px] mb-4" />

            <div>
              {suggessionsLoading ? (
                <LazyLoadingTheme2 length={suggessions?.data?.data?.length} />
              ) : (
                <div className="flex flex-col gap-y-2 font-jost">
                  {suggessions?.data?.map((item, i) => (
                    <MovieCardTheme2
                      key={i}
                      item={item}
                      className="text-base"
                    />
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>

        {/* =======> DOWNLOAD SECTION <========*/}
        <div className="mt-16">
          <DownloadSection
            details={details}
            textColor="text-[#10FFE3]"
            textSize="text-[24px]"
          />
        </div>

        <hr className="mt-5 mb-2" />
        {/* ==================== SEO-CONTENT ===================== */}
        <SeoContentTheme2 />

        {/* ===========> TAG LIST <============*/}
        <TagsList details={details} title="Movie" className="px-0 mt-8" />
      </div>
    </div>
  );
};

export default MovieDetailsTheme2;
