import CardTheme3 from "../../components/theme3-contents/CardTheme3";
import { formatDate } from "../../components/theme3-contents/FormateDateTheme3";
import SectionTitleTheme3 from "../../components/theme3-contents/SectionTitleTheme3";
import SliderTheme3 from "../../components/theme3-contents/slider/SliderTheme3";
import {
  useFeaturedPostsQuery,
  usePerPgaeMovieQuery,
} from "../../redux/features/movies/movieApi";
import { usePerPgaeTvShowQuery } from "../../redux/features/tv-show/tvShowApi";

const HomeTheme3 = () => {
  const { data: featuredPosts, isLoading: featureLoading } =
    useFeaturedPostsQuery();

  const { data: movieList, isLoading: movieLoading } = usePerPgaeMovieQuery(1);
  const { data: perPageTvShows, isLoading: tvLoading } =
    usePerPgaeTvShowQuery(1);

  return (
    <div className="border border-red-500 flex items-center">
      <div className="border py-5 w-[840px]">
        <SliderTheme3 />

        {/* ==================>> FEATURED <<==================== */}
        <>
          <SectionTitleTheme3 sideBtn={false}>Featured</SectionTitleTheme3>

          <div className="flex justify-between">
            {featuredPosts?.data?.slice(0, 5)?.map((item, i) => (
              <div key={i} className="w-[160px] h-[290px] p-2">
                <img
                  src={item?.poster_image_url}
                  alt=""
                  className="w-full h-[200px] object-cover"
                />

                <div className="mt-1">
                  <p className="text-[12px] text-[#D8D8D8] font-bold">
                    {item?.post_title?.length >= 60
                      ? `${item?.post_title.slice(0, 60)} ...`
                      : item?.post_title}
                  </p>
                  <p className="text-[#D8D8D8] text-[9px] mt-1">
                    {formatDate(item?.updated_at)}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </>

        <hr className="border-1 border-[#676666] mt-5" />

        {/* ================>> LATEST MOVIES <<================= */}
        <div className="mt-10">
          <SectionTitleTheme3 sideBtn={true}>Latest Movies</SectionTitleTheme3>
          <CardTheme3 datas={movieList} isLoading={movieLoading} />
        </div>

        {/* ================>> LATEST TV SHOWS <<================= */}
        <div className="mt-10">
          <SectionTitleTheme3 sideBtn={true}> Latest Web-Series </SectionTitleTheme3>
          <CardTheme3 datas={perPageTvShows} isLoading={tvLoading} />
        </div>
      </div>

      <div className="border border-blue-500 bg-green-900 w-[360px] h-full">
        Side Content
      </div>
    </div>
  );
};

export default HomeTheme3;
