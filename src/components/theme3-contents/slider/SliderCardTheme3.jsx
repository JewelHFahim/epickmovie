import {
  useCleanedTitle,
  useRedirect,
  useSiteConfig,
} from "../../../utils/configHooks/ConfigHooks";

/* eslint-disable react/prop-types */
const SliderCardTheme3 = ({ item }) => {
  const { maskLink } = useSiteConfig();
  const { url } = useCleanedTitle(item);
  const handleRedirect = useRedirect(url, maskLink);

  console.log(item);

  return (
    <div
      onClick={() => handleRedirect()}
      className="relative w-full h-full flex flex-col justify-end items-center hover:scale-[1.02] transition-all duration-200 ease-in-out"
    >
      <div className="z-10 w-full h-full absolute bg-gradient-to-t from-black from-8% via-transparent via-40%"></div>
      <div className="absolute bottom-3 z-20 w-full mx-auto px-4 text-center">
        <p className="text-[#DFDFDF] text-[35px] lg:text-xl">
          {item?.post_im_title}
        </p>
      </div>
      <img
        src={item?.poster_image_url}
        alt="poster image"
        className="w-full h-full object-cover "
      />

      <div className="absolute z-50 bottom-0 right-0 bg-red-700 px-4 lg:px-2 lg:text-sm text-white capitalize py-[2px]">
        {item?.post_type}
      </div>
    </div>
  );
};

export default SliderCardTheme3;
