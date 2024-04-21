import { useEffect } from "react";
import { Helmet } from "react-helmet";
import { useNavigate, useParams } from "react-router-dom";
import Breadcum from "../../../../utils/breadcum/Breadcum";
import SEOContentsTheme1 from "../../../../components/theme1-contents/SEOContentsTheme1";
import TagsList from "../../../../components/seo-related-content/TagsList";
import SiteNews from "../../../../components/SiteNews/SiteNews";
import JoinTelegramBtn from "../../../../utils/JoinTelegramBtn";
import { useSiteConfig } from "../../../../utils/configHooks/ConfigHooks";
import {
  useMovieDetailsQuery,
  usePerPgaeMovieQuery,
} from "../../../../redux/features/movies/movieApi";
import LatestMovieTvShow from "../../../../components/theme1-contents/LatestMovieTvShow";
import DownloadBtnTheme1 from "../../../../utils/theme1-contents/DownloadBtnTheme1";
import DetailsInfoCard from "../../../../components/theme1-contents/DetailsInfoCard";
import RelatedMovieTv from "../../../../components/theme1-contents/RelatedMovieTv";
import { useSuggessionMovieSeriesQuery } from "../../../../redux/features/search/searchApi";

const MovieDetailsTheme1 = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { siteName } = useSiteConfig();

  const { data: movieDetails } = useMovieDetailsQuery(id);
  const details = movieDetails?.data;
  const { data: perPageMovie, isLoading: movieLoading } = usePerPgaeMovieQuery(1);
  const { data: suggessions, isLoading: suggessionsLoading } =useSuggessionMovieSeriesQuery(id);


  useEffect(() => {
    if (movieDetails?.status === false) {
      navigate("/404");
    }
  }, [movieDetails, navigate]);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <div className="bg-[#18181a] px-10 lg:px-0 ">
      <Helmet>
        <title>
          {`${siteName} || ${details?.post_title ? details?.post_title : ""} `}
        </title>
        <meta
          name={details?.post_title ? details?.post_title : ""}
          content={details?.post_content}
        />
        <meta name="keywords" content="movies" />
      </Helmet>

      <SiteNews />

      {/* ===========> Latest Movies <===========*/}
      <LatestMovieTvShow loading={movieLoading} perPageData={perPageMovie} />

      <section className="lg:w-[1300px] mx-auto font-encode">
        <Breadcum
          children1="movies"
          children2={details?.post_title}
          redirect="/movies"
        />

        <div className="bg-[#262626] w-full">
          {/*Info Card */}
          <DetailsInfoCard details={details} />

          {/* SEO Content */}
          <SEOContentsTheme1 details={details} type="Movies" />

          {/* Download Section */}
          <div>
            <h2 className="text-[35px] lg:text-[28px] text-[#1FCD0F] font-bold text-center px-8">
              {details?.post_title}:
            </h2>

            <div className="mt-7 bg-[#FFB800] w-[300px] mx-auto py-1.5 text-[28px] lg:text-[24px] font-bold text-center">
              Download Links:
            </div>

            <div className="mt-7 w-full mx-auto flex justify-center items-center">
              <div className="w-[80%] flex flex-col gap-y-4">
                {details?.download_links.length ? (
                  <>
                    {details?.download_links?.map((item, i) => (
                      <DownloadBtnTheme1 key={i} url={item?.download_url}>
                        {item?.label} {item?.px_quality} {item?.file_size}
                      </DownloadBtnTheme1>
                    ))}
                  </>
                ) : (
                  <p className="text-[28px] lg:text-[18px] font-medium text-slate-500 text-center">
                    No Download Link
                  </p>
                )}
              </div>
            </div>

            <div className="mt-5">
              <p className="text-[#FFA113] text-[35px] text-center font-bold">
                [ How To Download ]
              </p>
            </div>

            {/* ===========>> JOIN TELEGRAM <<=========== */}
            <JoinTelegramBtn />
          </div>

          {/* Tag List */}
          <TagsList details={details} title="Movie" />

          {/* ===========> Related Movies <===========*/}
          <RelatedMovieTv suggessions={suggessions} isLoading={suggessionsLoading} type="Movies"/>
        </div>
      </section>
    </div>
  );
};

export default MovieDetailsTheme1;
