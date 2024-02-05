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
  useWebsiteLinkQuery,
} from "../../redux/features/settings/settingApi";
import toast from "react-hot-toast";
import { Select, initTE } from "tw-elements";
import { useEffect } from "react";
import MultiSelectMenu from "../../components/genere-select-menu/MultitSelect";
import LogoUploader from "./LogoUploader";
import FavIconUpLoader from "./FavIcon";
import { movieSortDatas, timeZoneDatas } from "../../utils/StaticData";

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
  const { data: websiteLink } = useWebsiteLinkQuery();
  const [createConfig] = useCreateConfigMutation();

  useEffect(() => {
    setValue("site_name", siteName?.data, { shouldDirty: false });
    setValue("site_footer", siteFooter?.data, { shouldDirty: false });
    setValue("site_news", siteNews?.data, { shouldDirty: false });
    setValue("telegram_link", siteTelegram?.data, { shouldDirty: false });
    setValue("global_header", globalHeader?.data, { shouldDirty: false });
    setValue("global_footer", globalFooter?.data, { shouldDirty: false });
    setValue("timezone", timeZone?.data, { shouldDirty: false });
    setValue("movie_order", movieSort?.data, { shouldDirty: false });
    setValue("tv_order", tvshowSort?.data, { shouldDirty: false });
    setValue("cache_time", cacheTime?.data, { shouldDirty: false });
    setValue("website_link", websiteLink?.data, { shouldDirty: false });
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
    websiteLink?.data,
    movieSort?.data,
    tvshowSort?.data,
  ]);

  const onSubmit = (data) => {
    createConfig(data);
    console.log(data);
    toast.success("Submitted");
    reset();
  };

  const inputStyle =
    "block w-full px-4 py-2 mt-2 text-black border border-slate-500 rounded-md focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring bg-white";

  return (
    <div>
      <section className="px-[20px] lg:px-[80px] py-[20px] lg:py-[20px] lg:pb-[70px] w-full h-full mx-auto">
        <h2 className="text-2xl underline font-semibold text-slate-800">
          Account Settings
        </h2>

        {/* =======================>> FORM START <<====================== */}
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2 p-4 border shadow-md bg-slate-200"
        >
          {/* =====================>> SITE NAME <<======================= */}
          <div>
            <label className="text-gray-900"> Site Name </label>
            <input
              type="text"
              {...register("site_name")}
              placeholder="site name"
              className={inputStyle}
            />
          </div>

          {/* =====================>> Telegram Link <<==================== */}
          <div>
            <label className="text-gray-900"> Telegram Link </label>
            <input
              type="text"
              {...register("telegram_link")}
              placeholder="telegram link"
              className={inputStyle}
            />
          </div>

          {/* ======================>> Cache Time <<======================= */}
          <div>
            <label className="text-gray-900"> Cache Time </label>
            <input
              type="number"
              {...register("cache_time")}
              placeholder="cache time"
              className={inputStyle}
            />
          </div>

          {/* =======================>> Time Zone <<======================= */}
          <div>
            <label className="text-gray-900">Select Timezone</label>
            <select {...register("timezone")} className={inputStyle}>
              <option hidden className="uppercase">
                {" "}
                {timeZone?.data}
              </option>
              {timeZoneDatas?.map((item, i) => (
                <option key={i} value={item?.value}>
                  {" "}
                  {item?.label}{" "}
                </option>
              ))}
            </select>
          </div>

          {/* ======================>> Movie Sort <<======================= */}
          <div>
            <label className="text-gray-900">Select Movie Sort</label>
            <select {...register("movie_order")} className={inputStyle}>
              <option hidden className="uppercase">
                {" "}
                {movieSort?.data}{" "}
              </option>
              {movieSortDatas?.map((item, i) => (
                <option key={i} value={item?.value}>
                  {item?.label}
                </option>
              ))}
            </select>
          </div>

          {/* =======================>> TV Sort <<========================= */}
          <div>
            <label className="text-gray-900">Select TV Sort</label>
            <select {...register("tv_order")} className={inputStyle}>
              <option hidden value="">
                {" "}
                {tvshowSort?.data}{" "}
              </option>
              {movieSortDatas?.map((item, i) => (
                <option key={i} value={item?.value}>
                  {item?.label}
                </option>
              ))}
            </select>
          </div>

          {/* =======================>> Site News <<======================= */}
          <div>
            <label className="text-gray-900"> Site News </label>
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
            <label className="text-gray-900"> Site Footer </label>
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
            <label className="text-gray-900"> Global Header </label>
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
            <label className="text-gray-900"> Global Footer </label>
            <textarea
              rows={4}
              type="text"
              {...register("global_footer")}
              placeholder="global footer"
              className={inputStyle}
            />
          </div>

          {/* =====================>> Live Website Link <<================= */}
          <div>
            <label className="text-gray-900"> Live Website Link </label>
            <input
              type="text"
              {...register("website_link")}
              placeholder="live website link"
              className={inputStyle}
            />
          </div>

          {/* ======================>> Submit Button <<==================== */}
          <div className="flex items-center justify-center mt-8 w-full">
            <button
              type="submit"
              className="w-full border border-slate-600 h-[44px] text-white uppercase rounded-md bg-slate-600 hover:bg-slate-800"
            >
              Submit
            </button>
          </div>
        </form>

        {/* ======================>> Fav Icon <<==================== */}
        <div className="flex flex-col lg:flex-row justify-between items-center gap-4 mt-[40px] border shadow-md bg-slate-200 p-4">
          <FavIconUpLoader />
          <LogoUploader />
        </div>

        {/* =====================>> Quick Menu <<=================== */}
        <div className=" mt-[40px] shadow-md bg-slate-200 border p-4">
          <label className="text-gray-200 pb-2"> Quick Menu</label>
          <MultiSelectMenu />
        </div>
      </section>
    </div>
  );
};

export default Settings;
