import {
  useMovieDetailsQuery,
  usePerPgaeMovieQuery,
} from "../../../../redux/features/movies/movieApi";
import { Link, useNavigate, useParams } from "react-router-dom";
import JoinTelegramBtn from "../../../../utils/JoinTelegramBtn";
import Breadcum from "../../../../utils/breadcum/Breadcum";
import { Helmet } from "react-helmet";
import { useEffect } from "react";
import { useSiteConfig } from "../../../../utils/configHooks/ConfigHooks";
import TagsList from "../../../../components/seo-related-content/TagsList";
import SiteNews from "../../../../components/SiteNews/SiteNews";
import SectionTitle from "../../../../utils/theme1-contents/section-title/SectionTitle";
import Theme1Card from "../../../../components/movie-card/theme1-card/Theme1Card";
import { useSuggessionMovieSeriesQuery } from "../../../../redux/features/search/searchApi";
import LazyLoadingTheme1 from "../../../../components/lazy-loading/LazyLoadingTheme1";

const MovieDetailsTheme1 = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { siteName, telegramLink } = useSiteConfig();
  const { data: movieDetails } = useMovieDetailsQuery(id);
  const details = movieDetails?.data;
  console.log(details);
  const { data: movieList, isLoading: movieLoading } = usePerPgaeMovieQuery(1);
  const { data: suggessions, isLoading: suggessionsLoading } =
    useSuggessionMovieSeriesQuery(id);

  useEffect(() => {
    if (movieDetails?.status === false) {
      navigate("/404");
    }
  }, [movieDetails, navigate]);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <div className="bg-[#18181a]">
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
      <>
        <SectionTitle>Latest Movies </SectionTitle>
        {movieLoading ? (
          <div className="w-full">
            <LazyLoadingTheme1 lazyLength={8} />
          </div>
        ) : (
          <div className=" mt-5 grid grid-cols-8 gap-5">
            {movieList?.data?.data?.slice(0, 8)?.map((item, i) => (
              <Theme1Card key={i} item={item} />
            ))}
          </div>
        )}
      </>

      <section className=" w-[1300px] mx-auto font-encode">
        <Breadcum
          children1="Movies"
          children2={details?.post_title}
          redirect={"/movies/page/1"}
        />

        <div className="bg-[#262626]">
          {/*Info Card */}
          <div className="flex gap-x-5 w-full p-5 border-b">
            <img
              src={details?.poster_image_url}
              alt=""
              className="w-[150px] h-[230px]"
            />
            <div className="w-full">
              <h2 className="text-[22px] font-bold text-[#CDCDCD]">
                {details?.post_title}
              </h2>

              <div className="mt-5 flex gap-x-5">
                <div className="w-[65%] flex flex-col gap-y-1">
                  {/* Genres */}
                  <p className="text-base flex items-center gap-x-1">
                    <span className="text-white font-bold">Genre:</span>
                    <span>
                      {details?.additional_data?.genres?.map((item, i) => (
                        <Link
                          to=""
                          key={i}
                          className="text-[#FFA113] underline mx-1"
                        >
                          {item?.term?.name},
                        </Link>
                      ))}
                    </span>
                  </p>

                  {/* Directors */}
                  <p className="text-base flex items-center gap-x-1">
                    <span className="text-white font-bold">Director:</span>
                    <span>
                      {details?.additional_data?.dtdirector?.map((item, i) => (
                        <Link
                          to=""
                          key={i}
                          className="text-[#FFA113] underline mx-1"
                        >
                          {item?.term?.name}
                        </Link>
                      ))}
                    </span>
                  </p>

                  {/* Actors */}
                  <p className="text-base flex gap-x-1">
                    <span className="text-white font-bold">Actors:</span>
                    <span>
                      {details?.additional_data?.dtcast?.map((item, i) => (
                        <Link
                          to=""
                          key={i}
                          className="text-[#FFA113] underline mx-1"
                        >
                          {item?.term?.name}
                        </Link>
                      ))}
                    </span>
                  </p>

                  {/* Country */}
                  <p className="text-base flex items-center gap-x-1">
                    <span className="text-white font-bold">Country:</span>
                    {details?.country ? (
                      <span className="text-[#FFA113] underline mx-1">
                        {details?.country}
                      </span>
                    ) : (
                      <span className="text-slate-400">N/A</span>
                    )}
                  </p>
                </div>

                <div className="w-[35%]  flex flex-col gap-y-1">
                  {/* Release Year */}
                  <p className="text-base flex items-center gap-x-1">
                    <span className="text-white font-bold">Release Year:</span>
                    <span className="text-[#FFA113] underline mx-1">
                      {details?.release_date?.slice(0, 4)}
                    </span>
                  </p>

                  {/* Directors */}
                  <p className="text-base flex items-center gap-x-1">
                    <span className="text-white font-bold">Runtime:</span>
                    <span className="text-[#FFA113] underline mx-1">
                      {details?.runtime} min
                    </span>
                  </p>

                  {/* Actors */}
                  <p className="text-base flex gap-x-1">
                    <span className="text-white font-bold">Quality:</span>
                    <span>
                      {details?.additional_data?.prquality?.map((item, i) => (
                        <Link
                          to=""
                          key={i}
                          className="text-[#FFA113] underline mx-1"
                        >
                          {item?.term?.name}
                        </Link>
                      ))}
                    </span>
                    {/* <span>
                      {details?.additional_data?.pxquality?.map((item, i) => (
                        <Link
                          to=""
                          key={i}
                          className="text-[#FFA113] underline mx-1"
                        >
                          {item?.term?.name}
                        </Link>
                      ))}
                    </span> */}
                  </p>
                </div>
              </div>

              {/* Story Line */}
              <p className="mt-1 text-base flex gap-x-1">
                <span className="text-white font-bold">Storyline:</span>
                <span className="text-[#FFA113] mx-1">
                  {details?.post_content}
                </span>
              </p>
            </div>
          </div>

          {/* SEO Content */}
          <div className="p-5 text-white ">
            {/* SEO Text-1 */}
            <div>
              <h2 className="text-[24px] font-bold">
                {details?.post_im_title} Movies Telegram Download Link
              </h2>
              <p className="mt-1 text-[22px] font-roboto">
                If you search
                <span className="text-red-600"> {details?.post_im_title} </span>
                full Movies in Hindi then you have reached the right place.
                There are so many groups you see but they dont&apos;t provide
                any kinds of Movies. But you can download
                <span className="text-red-600"> {details?.post_im_title} </span>
                Movies from this Telegram Channel -
                <Link
                  to={telegramLink}
                  className="text-[#ff0ae6] pl-1 hover:underline"
                >
                  Click Here
                </Link>
                .
              </p>
            </div>

            {/* SEO Text-2 */}
            <div className="mt-5">
              <h2 className="text-[24px] font-bold">
                {details?.post_im_title} Movies download in Hindi 1080p
              </h2>
              <p className="mt-1 text-[22px] font-roboto">
                {details?.post_im_title} full Movies download in Hindi 1080p -
                Download {details?.post_im_title} (English-Hindi-Bengali)
                Hollywood/Bollywood blockbuster Movies in Hindi Full HD Download
                & watch online.
              </p>
            </div>

            {/* SEO Text-3 */}
            <div className="mt-5">
              <h2 className="text-[24px] font-bold">
                How to Download {details?.post_im_title} Movies From Telegram
                Channel or Group?
              </h2>
              <p className="mt-1 text-[22px] font-roboto">
                For Download This movie First, go to the Telegram search section
                and type this
                <span className="text-green-500">
                  {" "}
                  &quot;@epicmovies&quot;{" "}
                </span>
                channel name that should be available for this Movies. After
                that, open the channel that you search for. Finally, there you
                will get the Ae Watan Mere Watan Movies download link or icon.
              </p>
            </div>

            {/* SEO Text-4 */}
            <div className="mt-5">
              <h2 className="text-[24px] font-bold">
                Watch {details?.post_im_title} Full Movies Online
              </h2>
              <p className="mt-1 text-[22px] font-roboto">
                For some reason, you do not want to download the Movies.
                Instead, if you want to watch the Movies online. Then this is
                possible, we will share with you such sites from where you can
                watch {details?.post_im_title} full Movies online.
              </p>
            </div>

            {/* SEO Text-5 */}
            <div className="mt-5">
              <h2 className="text-[24px] font-bold">
                {details?.post_im_title} Full Movies Download
                <Link to="/" className="underline px-1.5">
                  EpickMovies
                </Link>
              </h2>
              <p className="mt-1 text-[22px] font-roboto">
                <Link to="/" className="underline pr-1">
                  EpickMovies
                </Link>
                is also a famous pirated Movies downloading site, this site also
                works exactly like
                <Link to="https://mlcbd.fun/" className="underline pl-1">
                  MLCBD.FUN
                </Link>
                , and on this site, you will get to download all types of Movies
                in good quality.
              </p>
            </div>

            {/* SEO Text-6 */}
            <div className="mt-5">
              <h2 className="text-[24px] font-bold">
                How to download {details?.post_im_title} Movies in HD
              </h2>
              <p className="mt-1 text-[22px] font-roboto">
                Actually, there are many sites on the internet from where you
                can download {details?.post_im_title}, out of which we have
                talked about the famous 2 sites
                <Link to="/" className="underline px-1">
                  EpickMovies
                </Link>
                and
                <Link to="https://mlcbd.fun/" className="underline px-1">
                  MLCBD.FUN
                </Link>
                site. If {details?.post_im_title} is not available on these
                sites then you can request for this Movies on telegram -
                <Link to={telegramLink} className="text-[#ff0ae6] pl-1">
                  Request Here
                </Link>
              </p>
            </div>

            {/* SEO Text-7 */}
            <div className="mt-5">
              <h2 className="text-[24px] font-bold">
                {details?.post_im_title} Movies Google Drive Download link
              </h2>
              <p className="mt-1 text-[22px] font-roboto">
                If you search {details?.post_im_title} Movies google drive
                download link then you are in right place. Beacuse
                <Link to="/" className="underline px-1">
                  EpickMovies
                </Link>
                provide direct Google Drive download links for fast and secure
                downloading. Click on the download button below and follow the
                steps to start downloading.
              </p>
            </div>

            {/* SEO Text-8 */}
            <div className="mt-5">
              <h2 className="text-[24px] font-bold">
                Hollywood Hindi Dubbed Movies Download
                <Link to="/" className="underline pl-1.5">
                  EpickMovies
                </Link>
              </h2>
              <p className="mt-1 text-[22px] font-roboto">
                If you like Hollywood Movies very much and you want to watch
                Hollywood Movies in Hindi, then you have come to the right
                place. Indian & Bangladeshi people like to watch Movies in the
                Hindi language. In this site, you will get a lot of Hollywood
                Hindi dubbed Movies to download.
              </p>
            </div>

            {/* SEO Text-9 */}
            <div className="mt-5">
              <h2 className="text-[24px] font-bold">
                How to download Hollywood Hindi dubbed Movies for free
              </h2>
              <p className="mt-1 text-[22px] font-roboto">
                The fun of watching Hollywood Movies with Hindi dubbed is
                different. Indian & Banglashi people connect and feel the Movies
                by watching Hollywood Movies in the Hindi language. This is the
                reason people search on the internet for Hollywood Hindi dubbed
                Movies to download. So you have come to the right place to
                download Hollywood Hindi dubbed Movies.
              </p>
            </div>

            {/* SEO Text-10 */}
            <div className="mt-5">
              <h2 className="text-[24px] font-bold">
                Where can I watch Hollywood Movies in Hindi for free?
              </h2>
              <p className="mt-1 text-[22px] font-roboto">
                There are many sites on the internet where you can watch
                Hollywood Movies in Hindi, among them the famous sites are
                <Link to="/" className="underline px-1">
                  EpickMovies
                </Link>
                and
                <Link to="https://mlcbd.fun/" className="underline px-1">
                  MLCBD.FUN
                </Link>
                .
              </p>
            </div>

            {/* SEO Text-11 */}
            <div className="mt-5">
              <h2 className="text-[24px] font-bold">
                What is the best website to download the latest Movies for free?
              </h2>
              <p className="mt-1 text-[22px] font-roboto">
                There are so many Movies download sites but they provide so many
                ads with download links. But
                <Link to="/" className="underline px-1">
                  EpickMovies
                </Link>
                does not provide any ads with download links. So
                <Link to="/" className="underline px-1">
                  EpickMovies
                </Link>
                is the best website to download the latest Movies for free.
              </p>
            </div>

          </div>

          {/* Download Section */}
          <div>
            <h2 className="text-[28px] text-[#1FCD0F] font-bold text-center px-8">
              {details?.post_title}:
            </h2>

            <div className="mt-7 bg-[#FFB800] w-[300px] mx-auto py-1.5 text-[24px] font-bold text-center">
              Download Links:
            </div>

            <div className="mt-7 mx-auto flex justify-center items-center">
              <div className="flex flex-col gap-y-4">
                {details?.download_links.length ? (
                  <>
                    {details?.download_links?.map((item, i) => (
                      <Link
                        to={item?.download_url}
                        key={i}
                        className="bg-[#FF2345] w-[550px] hover:bg-[#FFA113] transition-all duration-200 mx-auto h-[50px] rounded-[10px] text-[#D7D7D7] text-[22px] font-bold flex justify-center items-center"
                      >
                        {item?.label} {item?.px_quality} {item?.file_size}
                      </Link>
                    ))}
                  </>
                ) : (
                  <p className="text-[18px] font-medium text-slate-500 text-center">
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

          {/* ===========> Latest Movies <===========*/}
          <div className="flex flex-col justify-center items-center p-5">
            <SectionTitle> Related Movies </SectionTitle>
            {suggessionsLoading ? (
              <div className="w-full">
                <LazyLoadingTheme1 lazyLength={5} />
              </div>
            ) : (
              <div className="w-full mt-5 flex justify-between">
                {suggessions?.data?.slice(0, 5)?.map((item, i) => (
                  <Theme1Card key={i} item={item} />
                ))}
              </div>
            )}
          </div>
          
        </div>
      </section>
    </div>
  );
};

export default MovieDetailsTheme1;
