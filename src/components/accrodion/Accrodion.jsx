import { useState } from "react";
import { TECollapse } from "tw-elements-react";
import DownloadButton from "../../utils/DownloadButton";
import { IoIosArrowDown } from "react-icons/io";

export default function Accrodion({ details }) {
  const myArray = details?.download_links;

  const [activeElement, setActiveElement] = useState(null);

  const handleClick = (element) => {
    setActiveElement((prevElement) =>
      prevElement === element ? null : element
    );
  };

  return (
    <>
      <div className="flex flex-col gap-2">
        {Object.keys(myArray || []).map((item, i) => (
          <div key={i} id={`accordionExample-${i}`}>
            <div className="">
              <h2 className="mb-0" id={`heading-${i}`}>
                <button
                  className={`
                  ${activeElement === item && "text-primary"} 
                  group relative flex w-full mx-auto justify-center items-center rounded-lg border-0 hover:bg-gradient-to-t from-[#ff1818] to-[#fdd506]  hover:text-white bg-white px-5 text-left text-slate-800 transition [overflow-anchor:none] hover:z-[2] focus:z-[3] focus:outline-none text-[30px] lg:text-[16px] font-semibold py-5 lg:py-2`}
                  type="button"
                  // onClick={() => handleClick(item)}
                  // aria-expanded={activeElement === item}
                  // aria-controls={`collapse-${i}`}
                >
                  <p> {item} </p>

                  {/* <span
                    className={`${activeElement === item ? "rotate-[-180deg] -mr-1" : "rotate-0 fill-[#212529]  dark:fill-white"} ml-auto shrink-0 fill-[#336dec] transition-transform duration-200 ease-in-out motion-reduce:transition-none dark:fill-blue-300 `}
                  >
                    <IoIosArrowDown/>
                  </span> */}
                </button>
              </h2>

              <TECollapse
                show={activeElement !== item}
                className="mt-0 !rounded-b-none !shadow-none"
              >
                <div className="px-5 flex flex-col gap-1">
                  {myArray[item]?.map((itm, i) => (
                    <DownloadButton key={i} url={itm?.download_link}>
                      {itm?.label}
                    </DownloadButton>
                  ))}
                </div>
              </TECollapse>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
