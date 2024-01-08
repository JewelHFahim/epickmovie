import { useForm } from "react-hook-form";
import {
  useCacheTimeQuery,
  useCreateConfigMutation,
  useFooterConfigQuery,
  useGlobalFooterQuery,
  useGlobalHeaderQuery,
  useJoinTelegramConfigQuery,
  useMovieSortQuery,
  useSiteNameConfigQuery,
  useSiteNewsConfigQuery,
  useTimeZoneQuery,
  useTvshowSortQuery,
} from "../../redux/features/settings/settingApi";
import toast from "react-hot-toast";
import { Select, initTE } from "tw-elements";
import MultiSelectMenu from "../../components/genere-select-menu/MultitSelect";
import { useEffect, useState } from "react";
import LogoUploader from "./LogoUploader";
import TimeZone from "./TImeZone";
import MovieSort from "./MovieSort";
import TvshowSort from "./TvshowSort";

const Settings = () => {
  initTE({ Select });
  const { handleSubmit, register, reset, setValue } = useForm();
  const { data: siteName } = useSiteNameConfigQuery();
  const { data: siteFooter } = useFooterConfigQuery();
  const { data: siteNews } = useSiteNewsConfigQuery();
  const { data: siteTelegram } = useJoinTelegramConfigQuery();
  const { data: globalHeader } = useGlobalHeaderQuery();
  const { data: globalFooter } = useGlobalFooterQuery();
  const { data: timeZone } = useTimeZoneQuery();
  const { data: movieSort } = useMovieSortQuery();
  const { data: tvshowSort } = useTvshowSortQuery();
  const { data: cacheTime } = useCacheTimeQuery();
  const [createConfig] = useCreateConfigMutation();
  const [selectedOption, setSelectedOption] = useState(timeZone?.data);
  const [selectedOptionTv, setSelectedOptionTv] = useState();
  const [selectedOptionMovie, setSelectedOptionMovie] = useState();

  useEffect(() => {
    setValue("site_name", siteName?.data, { shouldDirty: false });
    setValue("site_footer", siteFooter?.data, { shouldDirty: false });
    setValue("site_news", siteNews?.data, { shouldDirty: false });
    setValue("telegram_link", siteTelegram?.data, { shouldDirty: false });
    setValue("global_header", globalHeader?.data, { shouldDirty: false });
    setValue("global_footer", globalFooter?.data, { shouldDirty: false });
    setValue("timezone", timeZone?.data, { shouldDirty: false });
    setValue("cache_time", cacheTime?.data, { shouldDirty: false });
  }, [
    setValue,
    siteName?.data,
    siteFooter?.data,
    siteNews?.data,
    siteTelegram?.data,
    globalHeader?.data,
    globalFooter?.data,
    timeZone?.data,
    cacheTime?.data,
  ]);

  const onSubmit = (data) => {
    console.log({
      ...data,
      timezone: selectedOption?.value,
      movie_order: selectedOptionMovie?.value,
      tv_order: selectedOptionTv?.value,
    });

    createConfig({
      ...data,
      timezone: selectedOption?.value,
      movie_order: selectedOptionMovie?.value,
      tv_order: selectedOptionTv?.value,
    });

    toast.success("Submitted");
    reset();
  };

  const inputStyle =
    "block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring";

  return (
    <div>
      <section className="px-[20px] lg:px-[200px] py-[20px] lg:py-[20px] w-full h-full mx-auto bg-gray-800">
        <h2 className="text-lg font-semibold text-white">Account settings</h2>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2 p-4 border border-slate-700"
        >
          {/* =====================>> SITE NAME <<======================= */}
          <div>
            <label className="text-gray-200"> Site Name </label>
            <input
              type="text"
              {...register("site_name")}
              placeholder="site name"
              className={inputStyle}
            />
          </div>

          {/* =====================>> Telegram Link <<==================== */}
          <div>
            <label className="text-gray-200"> Telegram Link </label>
            <input
              type="text"
              {...register("telegram_link")}
              placeholder="telegram link"
              className={inputStyle}
            />
          </div>

        {/* ======================>> Cache Time <<======================= */}
          <div>
            <label className="text-gray-200"> Cache Time </label>
            <input
              type="number"
              {...register("cache_time")}
              placeholder="cache time"
              className={inputStyle}
            />
          </div>

          {/* =======================>> Time Zone <<======================= */}
          <div className="mt-2 w-full">
            <label className="text-gray-200"> Select Timezone- {timeZone?.data}</label>
            <TimeZone
              selectedOption={selectedOption}
              setSelectedOption={setSelectedOption}
              timezone={timeZone}
            />
          </div>

          {/* ======================>> Movie Sort <<======================= */}
          <div className="mt-2 w-full">
            <label className="text-gray-200"> Movie Sort- {movieSort?.data} </label>
            <MovieSort
              selectedOptionMovie={selectedOptionMovie}
              setSelectedOptionMovie={setSelectedOptionMovie}
              movie_order={movieSort?.data}
            />
          </div>

          {/* =======================>> TV Sort <<======================= */}
          <div className="mt-2 w-full">
            <label className="text-gray-200"> Tv Show Sort- {movieSort?.data} </label>
            <TvshowSort
              selectedOptionTv={selectedOptionTv}
              setSelectedOptionTv={setSelectedOptionTv}
              tv_order={tvshowSort?.data}
            />
          </div>

          {/* =======================>> Site News <<======================= */}
          <div>
            <label className="text-gray-200"> Site News </label>
            <textarea
              rows={4}
              type="text"
              {...register("site_news")}
              placeholder="site news"
              className={inputStyle}
            />
          </div>

          {/* ======================>> Site Footer <<====================== */}
          <div>
            <label className="text-gray-200"> Site Footer </label>
            <textarea
              rows={4}
              type="text"
              {...register("site_footer")}
              placeholder="site footer"
              className={inputStyle}
            />
          </div>

          {/* ====================>> Global Header <<====================== */}
          <div>
            <label className="text-gray-200"> Global Header </label>
            <textarea
              rows={4}
              type="text"
              {...register("global_header")}
              placeholder="global header"
              className={inputStyle}
            />
          </div>

          {/* =====================>> Global Footer <<===================== */}
          <div>
            <label className="text-gray-200"> Global Footer </label>
            <textarea
              rows={4}
              type="text"
              {...register("global_footer")}
              placeholder="global footer"
              className={inputStyle}
            />
          </div>

          <div></div>

          <div className="flex items-center justify-center mt-8 w-full">
            <button
              type="submit"
              className="w-full border border-slate-600 h-[44px] text-white uppercase rounded-md bg-slate-900 hover:bg-slate-600"
            >
              Save
            </button>
          </div>
        </form>

        <div className="flex justify-center mt-[40px] border border-slate-700 p-4">
          <LogoUploader />
        </div>

        <div className=" mt-[40px] border border-slate-700 p-4">
          <label className="text-gray-200 pb-2"> Quick Menu</label>
          <MultiSelectMenu />
        </div>
      </section>
    </div>
  );
};

export default Settings;
