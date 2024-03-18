import { Link } from "react-router-dom";
import { useSiteConfig } from "../../utils/configHooks/ConfigHooks";

const DownloadInfos = ({ details }) => {
  const { siteName } = useSiteConfig();

  return (
    <div className="mt-[13px] lg:mt-[30px] font-roboto text-white pr-4">
      {/* ============== ONE =============== */}
      <div>
        <h1 className="text-[35px] lg:text-[30px] font-semibold leading-none">
          <span className="mr-1">{details?.post_im_title}</span>
          Movie Telegram Download Link
        </h1>
        <span className="lg:text-[16px] text-[22px]">
          If you search
          <span className="mx-1">{details?.post_im_title}</span>
          full movie in
          {details?.additional_data?.dtaudio?.map((item, i) => (
            <span key={i} className="mx-1">
              {item.term.name}
            </span>
          ))}
          then you have reached the right place. There are so many groups you
          see but they dont&apos;t provide any kinds of movies. But you can
          download
          <span className="mx-1">{details?.post_im_title}</span>
          Movie from this Telegram Channel-
          <Link to="" className="text-[#fa00d2] ml-1">
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
          full movie download in
          {details?.additional_data?.dtaudio?.map((item, i) => (
            <span key={i}> {item.term.name} </span>
          ))}
          1080p
        </h1>

        <span className="lg:text-[16px] text-[22px]">
          <span className="mr-1">{details?.post_im_title}</span>
          full movie download in
          {details?.additional_data?.dtaudio?.map((item, i) => (
            <span key={i} className="mx-1">
              {item.term.name}
            </span>
          ))}
          1080p - Download
          <span className="mx-1">{details?.post_im_title}</span>
          (English-Hindi-Bengali) Hollywood/Bollywood blockbuster movie in
          {details?.additional_data?.dtaudio?.map((item, i) => (
            <span key={i}> {item.term.name} </span>
          ))}
          Full HD Download & watch online.
        </span>
      </div>
      <br />

      {/* ============== THREE ============= */}
      <div>
        <h1 className="text-[35px] lg:text-[30px] font-semibold leading-none">
          How to Download
          <span className="mx-1">{details?.post_im_title}</span>
          Movie From Telegram Channel or Group?
        </h1>

        <p className="text-[22px] lg:text-[16px]">
          Basically, downloading the
          <span className="mx-1">{details?.post_im_title}</span>
          movie is a one or two-click process. But if you really dont&apos;t
          know how to download this movie. Don&apos;t worry, you can easily
          download it. First, go to the Telegram search section and type this
          &quot;@epicmovies&quot; channel name that should be available for this
          movie. After that, open the channel that you search for. Finally,
          there you will get the
          <span className="mx-1">{details?.post_im_title}</span>
          movie download link or icon.
        </p>
      </div>
      <br />

      {/* ============== FOUR ============= */}
      <div>
        <h1 className="text-[35px] lg:text-[30px] font-semibold leading-none">
          Watch <span className="mx-1">{details?.post_im_title}</span> Full
          Movie Online
        </h1>
        <p className="text-[22px] lg:text-[16px] ">
          For some reason, you do not want to download the movie. Instead, if
          you want to watch the movie online. Then this is possible, we will
          share with you such sites from where you can watch
          <span className="mx-1">{details?.post_im_title}</span> full movie
          online.
        </p>
      </div>
      <br />

      {/* ============== FIVE ============= */}
      <div>
        <h1 className="text-[35px] lg:text-[30px] font-semibold leading-none">
          <span className="mr-1 ">{details?.post_im_title}</span>
          Full Movie Download {siteName}
        </h1>
        <p className="text-[22px] lg:text-[16px]">
          {siteName}is also a famous pirated movie downloading site, this site
          also works exactly like MLcbd.fun, and on this site, you will get to
          download all types of movies in good quality.
        </p>
      </div>
      <br />

      {/* ============== SIX ============= */}
      <div>
        <h1 className="text-[35px] lg:text-[30px] font-semibold leading-none">
          How to download
          <span className="mx-1">{details?.post_im_title}</span>
          Movie in HD
        </h1>
        <p className="text-[22px] lg:text-[16px]">
          Actually, there are many sites on the internet from where you can
          download <span className="ml-1">{details?.post_im_title}</span>, out
          of which we have talked about the famous 2 sites {siteName} and MLCBD
          site. If <span className="mx-1">{details?.post_im_title}</span> is not
          available on these sites then you can request for this movie on
          telegram-
          <Link to="" className="text-[#fa00d2] ml-1 hover:underline">
            Request Here
          </Link>
        </p>
      </div>
      <br />

      {/* ============== SEVEN ============= */}
      <div>
        <h1 className="text-[35px] lg:text-[30px] font-semibold leading-none">
          <span className="mx-1">{details?.post_im_title}</span> Movie Google
          Drive Download link
        </h1>
        <p className="text-[22px] lg:text-[16px]">
          If you search <span className="mx-1">{details?.post_im_title}</span>
          movie google drive download link then you are in right place. Beacuse
          <Link to="" className="font-semibold underline px-1">
            {siteName}
          </Link>
          provide direct Google Drive download links for fast and secure
          downloading. Click on the download button below and follow the steps
          to start downloading.
        </p>
      </div>
      <br />

      {/* ============== EIGHT ============= */}
      <div>
        <h1 className="text-[35px] lg:text-[30px] font-semibold leading-none">
          Hollywood Hindi Dubbed Movies Download {siteName}
        </h1>
        <p className="text-[22px] lg:text-[16px]">
          Hollywood Hindi dubbed movies download: Are you a Hollywood movie
          lover? If you like Hollywood movies very much and you want to watch
          Hollywood movies in Hindi, then you have come to the right place.
          Indian & Bangladeshi people like to watch movies in the Hindi
          language. In this site, you will get a lot of Hollywood Hindi dubbed
          movies to download.
        </p>
      </div>
      <br />

      {/* ============== NINE ============= */}
      <div>
        <h1 className="text-[35px] lg:text-[30px] leading-none font-semibold">
          How to download Hollywood Hindi dubbed movies for free
        </h1>
        <p className="text-[22px] lg:text-[16px]">
          The fun of watching Hollywood movies with Hindi dubbed is different.
          Indian & banglashi people connect and feel the movie by watching
          Hollywood movies in the Hindi language. This is the reason people
          search on the internet for Hollywood Hindi dubbed movies to download.
          So you have come to the right place to download Hollywood Hindi dubbed
          movies.
        </p>
      </div>
      <br />

      {/* ============== TEN ============= */}
      <div>
        <h1 className="text-[35px] lg:text-[30px] font-semibold">
          Where can I watch Hollywood movies in Hindi for free?
        </h1>
        <p className="text-[22px] lg:text-[16px]">
          There are many sites on the internet where you can watch Hollywood
          movies in Hindi, among them the famous sites are {siteName} and MLcBD.
        </p>
      </div>
      <br />

      {/* ============== ELEVEN ============= */}
      <div>
        <h1 className="text-[35px] lg:text-[30px] leading-none font-semibold">
          What is the best website to download the latest movies for free?
        </h1>
        <p className="text-[22px] lg:text-[16px]">
          There are so many movie download sites but they provide so many ads
          with download links. But {siteName} does not provide any ads with
          download links. So {siteName} is the best website to download the
          latest movies for free.
        </p>
      </div>
    </div>
  );
};

export default DownloadInfos;
