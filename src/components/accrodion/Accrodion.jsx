import { useState } from "react";
import { TECollapse } from "tw-elements-react";

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
            <div className="rounded-lg border border-neutral-200 bg-white dark:border-neutral-600 dark:bg-neutral-800">
              <h2 className="mb-0" id={`heading-${i}`}>
                <button
                  className={`${
                    activeElement === item &&
                    "text-primary [box-shadow:inset_0_-1px_0_rgba(229,231,235)] dark:!text-primary-400 dark:[box-shadow:inset_0_-1px_0_rgba(75,85,99)]"
                  } group relative flex w-full items-center rounded-lg border-0 bg-white px-5 py-4 text-left text-base text-neutral-800 transition [overflow-anchor:none] hover:z-[2] focus:z-[3] focus:outline-none dark:bg-neutral-800 dark:text-white`}
                  type="button"
                  onClick={() => handleClick(item)}
                  aria-expanded={activeElement === item}
                  aria-controls={`collapse-${i}`}
                >
                  {item}
                  <span
                    className={`${
                      activeElement === item
                        ? "rotate-[-180deg] -mr-1"
                        : "rotate-0 fill-[#212529]  dark:fill-white"
                    } ml-auto h-5 w-5 shrink-0 fill-[#336dec] transition-transform duration-200 ease-in-out motion-reduce:transition-none dark:fill-blue-300`}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="h-6 w-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                      />
                    </svg>
                  </span>
                </button>
              </h2>

              <TECollapse
                show={activeElement === item}
                className="!mt-0 !rounded-b-none !shadow-none"
              >
                <div className="px-5 py-4">
                  {myArray[item]?.map((itm, j) => (
                    <p key={j}>{itm.label}</p>
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
