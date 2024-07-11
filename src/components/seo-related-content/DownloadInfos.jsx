/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import { useSiteConfig } from "../../utils/configHooks/ConfigHooks";

const DownloadInfos = ({ details, type }) => {
  const { siteName, telegramLink } = useSiteConfig();

  return (
    <div className="mt-[13px] lg:mt-[30px] font-roboto text-white pr-4">
      {/* ============== ONE =============== */}
      <div>
        <h1 className="text-[35px] lg:text-[30px] font-semibold leading-none">
          <span className="mr-1">{details?.post_im_title}</span>
          {type} Telegram Download Link
        </h1>
        <span className="lg:text-[16px] text-[22px]">
          If you search
          <span className="mx-1">{details?.post_im_title}</span>
          full {type} in
          {details?.additional_data?.dtaudio ? (
            details?.additional_data?.dtaudio?.map((item, i) => (
              <span key={i} className="mx-1">
                {item.term.name}
              </span>
            ))
          ) : (
            <span className="mx-1">English</span>
          )}
          then you have reached the right place. There are so many groups you
          see but they dont&apos;t provide any kinds of {type}. But you can
          download
          <span className="mx-1">{details?.post_im_title}</span>
          {type} from this Telegram Channel-
          <Link
            to={telegramLink}
            className="text-[#fa00d2] hover:underline ml-1"
          >
            Click Here
          </Link>
          .
        </span>
      </div>
      <br />

      {/* ============== TWO =============== */}
      <div>
        <h1 className="text-[35px] lg:text-[30px] font-semibold leading-none">
          <span className="mr-1">{details?.post_im_title}</span>
          full {type} download in{" "}
          {details?.additional_data?.dtaudio?.map((item, i) => (
            <span key={i}> {item.term.name} </span>
          ))}{" "}
          1080p
        </h1>

        <span className="lg:text-[16px] text-[22px]">
          <span className="mr-1">{details?.post_im_title}</span>
          full {type} download in{" "}
          {details?.additional_data?.dtaudio?.map((item, i) => (
            <span key={i} className="mx-1">
              {item.term.name}
            </span>
          ))}{" "}
          1080p - Download
          <span className="mx-1">{details?.post_im_title}</span>
          (English-Hindi-Bengali) Hollywood/Bollywood blockbuster{" "}
          <span className="px-1">{type}</span>
          {details?.additional_data?.dtaudio && (
            <>
              in
              {details?.additional_data?.dtaudio?.map((item, i) => (
                <span key={i} className="px-1">
                  {item.term.name}
                </span>
              ))}
            </>
          )}
          Full HD Download & watch online.
        </span>
      </div>
      <br />

      {/* ============== THREE ============= */}
      <div>
        <h1 className="text-[35px] lg:text-[30px] font-semibold leading-none">
          How to Download <span className="mx-1">{details?.post_im_title}</span>{" "}
          {type} From Telegram Channel or Group?
        </h1>

        <p className="text-[22px] lg:text-[16px]">
          Basically, downloading the{" "}
          <span className="mx-1"> {details?.post_im_title} </span> {type} is a
          one or two-click process. But if you really dont&apos;t know how to
          download this {type}. Don&apos;t worry, you can easily download it.
          First, go to the Telegram search section and type this
          <Link
            to={telegramLink}
            className="text-green-500 hover:underline px-1"
          >
            {" "}
            &quot;@epicmovies&quot;{" "}
          </Link>
          channel name that should be available for this {type}. After that,
          open the channel that you search for. Finally, there you will get the
          <span className="mx-1"> {details?.post_im_title} </span> {type}{" "}
          download link or icon.
        </p>
      </div>
      <br />

      {/* ============== FOUR ============== */}
      <div>
        <h1 className="text-[35px] lg:text-[30px] font-semibold leading-none">
          Watch <span className="mx-1"> {details?.post_im_title} </span> Full{" "}
          {type} Online
        </h1>
        <p className="text-[22px] lg:text-[16px] ">
          For some reason, you do not want to download the {type}. Instead, if
          you want to watch the {type} online. Then this is possible, we will
          share with you such sites from where you can watch
          <span className="mx-1"> {details?.post_im_title} </span> full {type}{" "}
          online.
        </p>
      </div>
      <br />

      {/* ============== FIVE ============== */}
      <div>
        <h1 className="text-[35px] lg:text-[30px] font-semibold leading-none">
          <span className="mr-1"> {details?.post_im_title} </span>
          Full {type} Download
          <Link to="/" className="hover:underline px-1 underline">
            {siteName}
          </Link>
        </h1>
        <p className="text-[22px] lg:text-[16px]">
          <Link to="/" className="px-1 text-yellow-500 underline">
            {siteName}
          </Link>
          is also a famous pirated {type} downloading site, this site also works
          exactly like
          <Link
            to="https://mlcbd.fun/"
            className="pl-1 text-yellow-500 underline"
          >
            MLCBD.FUN
          </Link>
          , and on this site, you will get to download all types of {type} in
          good quality.
        </p>
      </div>
      <br />

      {/* ============== SIX =============== */}
      <div>
        <h1 className="text-[35px] lg:text-[30px] font-semibold leading-none">
          How to download{" "}
          <span className="mx-1"> {details?.post_im_title} </span> {type} in HD
        </h1>
        <p className="text-[22px] lg:text-[16px]">
          Actually, there are many sites on the internet from where you can
          download <span className="ml-1">{details?.post_im_title}</span>, out
          of which we have talked about the famous 2 sites
          <Link to="/" className="px-1 text-yellow-500 underline">
            {siteName}
          </Link>
          and
          <Link
            to="https://mlcbd.fun/"
            className="px-1 text-yellow-500 underline"
          >
            MLCBD.FUN
          </Link>
          site. If <span className="mx-1"> {details?.post_im_title} </span> is
          not available on these sites then you can request for this {type} on
          telegram-
          <Link
            to={telegramLink}
            className="text-[#fa00d2] ml-1 hover:underline"
          >
            Request Here
          </Link>
        </p>
      </div>
      <br />

      {/* ============== SEVEN ============= */}
      <div>
        <h1 className="text-[35px] lg:text-[30px] font-semibold leading-none">
          <span className="mx-1"> {details?.post_im_title} </span> {type} Google
          Drive Download link
        </h1>
        <p className="text-[22px] lg:text-[16px]">
          If you search <span className="mx-1"> {details?.post_im_title} </span>{" "}
          {type} google drive download link then you are in right place. Beacuse
          <Link to="/" className="font-semibold text-yellow-500 underline px-1">
            {siteName}
          </Link>
          provide direct Google Drive download links for fast and secure
          downloading. Click on the download button below and follow the steps
          to start downloading.
        </p>
      </div>
      <br />

      {/* ============== EIGHT ============== */}
      <div>
        <h1 className="text-[35px] lg:text-[30px] font-semibold leading-none">
          Hollywood Hindi Dubbed {type} Download{" "}
          <Link to="/" className="underline">
            {" "}
            {siteName}{" "}
          </Link>
        </h1>
        <p className="text-[22px] lg:text-[16px]">
          Hollywood Hindi dubbed {type} download: Are you a Hollywood {type}{" "}
          lover? If you like Hollywood {type} very much and you want to watch
          Hollywood {type} in Hindi, then you have come to the right place.
          Indian & Bangladeshi people like to watch {type} in the Hindi
          language. In this site, you will get a lot of Hollywood Hindi dubbed{" "}
          {type} to download.
        </p>
      </div>
      <br />

      {/* ============== NINE =============== */}
      <div>
        <h1 className="text-[35px] lg:text-[30px] leading-none font-semibold">
          How to download Hollywood Hindi dubbed {type} for free
        </h1>
        <p className="text-[22px] lg:text-[16px]">
          The fun of watching Hollywood {type} with Hindi dubbed is different.
          Indian & Banglashi people connect and feel the {type} by watching
          Hollywood {type} in the Hindi language. This is the reason people
          search on the internet for Hollywood Hindi dubbed {type} to download.
          So you have come to the right place to download Hollywood Hindi dubbed{" "}
          {type}.
        </p>
      </div>
      <br />

      {/* ============== TEN ================ */}
      <div>
        <h1 className="text-[35px] lg:text-[30px] font-semibold leading-none">
          Where can I watch Hollywood {type} in Hindi for free?
        </h1>
        <p className="text-[22px] lg:text-[16px]">
          There are many sites on the internet where you can watch Hollywood{" "}
          {type} in Hindi, among them the famous sites are
          <Link to="/" className="px-1 text-yellow-500 underline">
            {siteName}
          </Link>
          and
          <Link
            to="https://mlcbd.fun/"
            className="px-1 text-yellow-500 underline"
          >
            MLCBD.FUN
          </Link>
          .
        </p>
      </div>
      <br />

      {/* ============== ELEVEN ============= */}
      <div>
        <h1 className="text-[35px] lg:text-[30px] leading-none font-semibold">
          What is the best website to download the latest {type} for free?
        </h1>
        <p className="text-[22px] lg:text-[16px]">
          There are so many {type} download sites but they provide so many ads
          with download links. But
          <Link to="/" className="px-1 text-yellow-500 underline">
            {siteName}
          </Link>
          does not provide any ads with download links. So
          <Link to="/" className="px-1 text-yellow-500 underline">
            {siteName}
          </Link>
          is the best website to download the latest {type} for free.
        </p>
      </div>
    </div>
  );
};

export default DownloadInfos;
