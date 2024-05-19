import { Link, useNavigate, useParams } from "react-router-dom";
import BreadCumTheme2 from "../../../utils/breadcum/BreadCumTheme2";
import MovieCardTheme2 from "../../../components/movie-card/move-card-theme2/MovieCardTheme2";
import { useSuggessionMovieSeriesQuery } from "../../../redux/features/search/searchApi";
import LazyLoadingTheme2 from "../../../components/lazy-loading/LazyLoadingTheme2";
import DownloadSection from "../tvshow-details-theme1/DownloadSection";
import SeoContentTheme2 from "../../../components/theme2-contents/SeoContentTheme2";
import TagsList from "../../../components/seo-related-content/TagsList";
import { useSeriesDetailsQuery } from "../../../redux/features/tv-show/tvShowApi";
import { useEffect } from "react";

const TvShowDetailsTheme2 = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { data: seriesDetails, isLoading: detaislLoading } =
    useSeriesDetailsQuery(id);
  const details = seriesDetails?.data;
  const { data: suggessions, isLoading: suggessionsLoading } =
    useSuggessionMovieSeriesQuery(id);

  // Error handle, if id not found
  useEffect(() => {
    if (seriesDetails?.status === false) {
      navigate("/404");
    }
  }, [seriesDetails, navigate]);

  // page scroll effect
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <div className="mt-14 ">
      <BreadCumTheme2
        children1="movies"
        children2={details?.post_title}
        redirect="/movies"
        textColor="text-[#009987]"
      />

      <div className="bg-[#A8A8A812] py-5 px-7">
        <h2 className="font-jost text-[36px] lg:text-[26px] text-center lg:text-left font-bold text-[#1FCD0F]">
          {details?.post_title}
        </h2>

        <div className="mt-5 flex flex-col lg:flex-row gap-y-10 lg:gap-x-24">
          <div className="w-[70%] lg:w-[450px] mx-auto lg:mx-0">
            {detaislLoading ? (
              <div className="w-full h-[600px] bg-slate-600 animate-pulse rounded-[15px]" />
            ) : (
              <img
                src={details?.poster_image_url}
                alt=""
                className="w-full lg:h-[600px] object-cover rounded-[15px]"
              />
            )}
          </div>

          {/* Related Post */}
          <div className="lg:w-[450px] hidden lg:block">
            <h2 className="text-red-600 lg:text-[#10FFE3] text-[36px] lg:text-[26px] font-jost font-bold text-center">
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
                      className="text-[30px] lg:text-base text-[#1FCD0F]"
                    />
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
        {/* =======> MOVIE DETAILS <========*/}

        <>
          <h2 className="text-[#10FFE3] text-[36px] lg:text-[26px] font-jost font-bold text-center mt-5">
            Movie Details
          </h2>

          <hr className="border-[#009987] border-[1px] mb-4" />

          <div className="text-[30px] lg:text-[24px] leading-[32px] text-white font-jost font-[700]">
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
        </>

        {/* =======> DOWNLOAD SECTION <========*/}
        <div className="mt-16">
          <DownloadSection details={details} />
        </div>

        {/* Related Post */}
        <div className="lg:w-[450px] lg:hidden">
          <h2 className="text-red-600 lg:text-[#10FFE3] text-[36px] lg:text-[26px] font-jost font-bold text-center">
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
                    className="text-[30px] lg:text-base text-[#1FCD0F]"
                  />
                ))}
              </div>
            )}
          </div>
        </div>

        <hr className="mt-5 mb-2" />
        {/* ==================== SEO-CONTENT ===================== */}
        <SeoContentTheme2 />

        {/* ===========> TAG LIST <============*/}
        <TagsList details={details} title="Movie" className="pl-0 mt-8" />
      </div>
    </div>
  );
};

export default TvShowDetailsTheme2;
