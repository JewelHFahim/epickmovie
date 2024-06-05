/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

const SynopsisTheme3 = ({details}) => {
    return (
        <div className="mt-10">
        <h2 className="text-4xl lg:text-[25px] text-gray-300 font-medium">Synopsis</h2>

        <div className="text-gray-300 mt-5 text-3xl lg:text-lg">
          ✅ {details?.post_title}: This is one of the best movies based on
          {details?.additional_data?.genres &&
            details?.additional_data?.genres?.map((item, i) => (
              <span key={i}>
                <Link
                  to={`/terms/${item?.term?.slug}`}
                  className="text-red-600 font-semibold mx-1 underline"
                >
                  {item.term.name}
                </Link>
              </span>
            ))}
          .
          {details?.additional_data?.prquality && (
            <>
              <p>This Movie is available in</p>
              <>
                {details?.additional_data?.pxquality?.map((item, i) => (
                  <Link
                    to={`/terms/${item?.term?.slug}`}
                    key={i}
                    className="text-green-600 font-semibold m-1"
                  >
                    {item.term.name}
                  </Link>
                ))}
              </>
              <>
                qualities with
                {details?.additional_data?.prquality?.map((item, i) => (
                  <Link
                    to={`/terms/${item?.term?.slug}`}
                    key={i}
                    className="text-green-600 font-semibold ml-1"
                  >
                    {item.term.name}
                  </Link>
                ))}
                .
              </>
            </>
          )}
          This Movie is Hindi with English Subtitles. Click on the Download
          links below to proceed.
        </div>
      </div>
    );
};

export default SynopsisTheme3;