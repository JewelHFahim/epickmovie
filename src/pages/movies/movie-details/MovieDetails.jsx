import React from "react";
import { AiOutlineDoubleRight } from "react-icons/ai";
import calender from "../../../assets/calender.svg";
import jawan from "../../../assets/jawan.png";
import ss1 from "../../../assets/ScrrenShot 1.png";
import ss2 from "../../../assets/ScrrenShot 2.png";
import ss3 from "../../../assets/ScrrenShot 3.png";
import ss4 from "../../../assets/ScrrenShot 4.png";
import telegraqm from "../../../assets/telegram.svg";
import joinTelegran from "../../../assets/join telegram.png";
import ads from "../../../assets/ads.png";
import DownloadButton from "../../../utils/DownloadButton";

const MovieDetails = () => {

  return (
    <div className="bg-[#27272A]">

      <div className="bg-[#18181a] text-[#727171] flex items-center font-inter pt-[15px] pb-[20px] gap-[8px] font-[500] uppercase">
        Home <AiOutlineDoubleRight /> Movies <AiOutlineDoubleRight /> Bllywood
      </div>

      <section className=" p-5 flex justify-between">
        <div className="w-[70%]">
          <div>
            <h4 className="text-[24px] text-white font-aclonica max-w-[748px]">
              Download Jawan (2023) Extended Cut Hindi Movie 480p | 720p | 1080p
              | 2160p WEB-DL ESub
            </h4>

            <div className=" flex items-center gap-2 mt-2">
              <img src={calender} alt="" className="w-[12px] h-[12px]" />
              <p className="text-[13px] text-white font-roboto">2 Days Ago</p>
            </div>

            <div className="mt-[48px] max-w-[745px]">
              <p className="text-[15px]  text-white font-roboto">
                <span className="font-[700]">
                  Download Jawan (2023) Extended Cut Hindi Movie
                </span>{" "}
                available in 1080p, 720p & 480p Qualities For Your
                Mobile/tablet/Computer. This movie is based on{" "}
                <span className="font-[700]">Action, Thriller.</span>
              </p>
            </div>

            <div className="mt-[19px] max-w-[745px]">
              <p className="text-[15px]  text-white font-roboto">
                <span className="font-[700]">EpickMovies</span> Provide You With
                Super Quality Of Movies and{" "}
                <span className="font-[700]">WEB Series.</span> We Provide
                Google Drive Direct Download Links For Fast And Secure{" "}
                <span className="font-[700]">Download.</span> You Can Join us on
                Telegram For the Latest Updates.
              </p>
            </div>

            <div className="my-[15px]">
              <p className="text-[24px] text-[#217703] font-[600] font-roboto">
                Movie Details :
              </p>
            </div>

            <div className="w-[715px] h-[272px] rounded-[20px] bg-[#1B1E21] p-[14px] flex gap-[26px]">
              <div>
                <img
                  src={jawan}
                  alt=""
                  className="w-[182px] h-[244px] border-[1.5px] border-[#FFD80D]"
                />
              </div>

              <div className="font-roboto">
                <h3 className="text-[20px] text-[#FFA113]">Jawan</h3>
                <p className="text-[10px] text-white">
                  | September 7, 2023 (United States)
                </p>

                <p className="text-[13px] text-[#AEABAB] mt-[10px]">
                  Director:{" "}
                  <a href="" className="text-[#FFA113] underline">
                    Atlee
                  </a>
                </p>
                <p className="text-[13px] text-[#AEABAB]">
                  Writer:
                  <a href="" className="text-[#FFA113] underline">
                    {" "}
                    Sumit Arora{" "}
                  </a>
                  ,
                  <a href="" className="text-[#FFA113] underline">
                    {" "}
                    Atlee{" "}
                  </a>
                  ,
                  <a href="" className="text-[#FFA113] underline">
                    {" "}
                    Ramanagirivasan{" "}
                  </a>
                </p>

                <p className="text-[13px] text-[#AEABAB] font-[700] max-w-[455px]">
                  Summary:{" "}
                  <a href="" className="text-white font-[400]">
                    {" "}
                    A high-octane action thriller which outlines the emotional
                    journey of a man who is set to rectify the wrongs in the
                    society.
                  </a>
                </p>

                <p className="text-[11px] text-[#AEABAB] mt-[22px]">
                  Countries: <span className="text-white ">India</span>
                </p>

                <p className="text-[11px] text-[#AEABAB]">
                  Source:{" "}
                  <a href="" className="text-[#FFA113] font-[700]">
                    imdb.com
                  </a>
                </p>
                <p className="text-[11px] text-[#AEABAB]">
                  IMBDb RATING:{" "}
                  <a href="" className="text-[#FFA113] font-[700]">
                    7.4
                  </a>
                </p>
              </div>
            </div>

            <div className="max-w-[715px] mt-[13px]">
              <h3 className="text-[24px] font-[600] font-roboto text-[#217703] text-center">
                Download Jawan (2023) Extended Cut Hindi Movie ~ BollyFlix
              </h3>
            </div>

            <div className="max-w-[715px] mt-[30px] font-roboto">
              <h3 className="text-[24px] font-[600] text-[#217703]">
                Storyline:
              </h3>
              <p className="text-white text-[20px] mt-4">
                A high-octane action thriller which outlines the emotional
                journey of a man who is set to rectify the wrongs in the
                society.
              </p>
            </div>

            <div className="mt-[30px] font-roboto">
              <h3 className="text-[24px] font-[600] text-[#217703]">
                Screenshots:
              </h3>
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <img src={ss1} alt="" className="w-full h-[400px] object-cover" />
            <img src={ss2} alt="" className="w-full h-[400px] object-cover" />
            <img src={ss3} alt="" className="w-full h-[400px] object-cover" />
            <img src={ss4} alt="" className="w-full h-[400px] object-cover" />
          </div>

          <div className="max-w-[745px] my-[28px]">
            <p className="text-[20px] text-white font-roboto font-[700] text-center">
              Download Jawan (2023) Extended Cut Hindi Movie 480p | 720p | 1080p
              | 2160p WEB-DL ESub
            </p>
          </div>

          <div className="max-w-[399px] flex flex-col gap-3 mx-auto">
            <DownloadButton>Download 480p [480mb]</DownloadButton>
            <DownloadButton>Download 720p HEVC [980mb]</DownloadButton>
            <DownloadButton>Download 720p [1.4gb]</DownloadButton>
            <DownloadButton>Download 1080p HEVC [1.9Gb]</DownloadButton>
            <DownloadButton>Download 1080p [4.8gb]</DownloadButton>
            <DownloadButton>Download 4K 2160p [8gb]</DownloadButton>
          </div>

          <div className="flex justify-center mt-[36px]">
            <button className="flex justify-center items-center gap-2 border w-[211px] h-[43px] bg-[#FCD8FF] rounded-[9px]">
              <img src={telegraqm} alt="" className="w-[22px] h-[22px]" />
              <p className="text-[15px] text-black font-[700] font-roboto">
                Join Our Telegram
              </p>
            </button>
          </div>
        </div>

        <div className="w-[30%] bg-[#1F1F22] p-4">
          <div className="w-[299px] h-[193px] bg-[#27272A] flex flex-col">
            <p className="text-white font-inter font-[500] mt-[39px] ml-[34px]">
              Join Our Telegram
            </p>
            <hr className="w-full bg-[#494949] opacity-[.4]" />
            <img
              src={joinTelegran}
              alt=""
              className="mt-[10px] w-[268px] h-[104px] mx-auto"
            />
          </div>

          <div className="w-[299px] h-[275px]  bg-[#27272A] mt-[27px]">
            <p className="pl-[30px] pt-[15px] font-[500] font-inter text-[#F4F4F4C9] ">
              Movies
            </p>

            <hr className="w-full bg-[#494949] opacity-[.4]" />

            <div className="px-4 py-2 grid grid-cols-4 gap-[8px]">
              {Array.from({ length: 32 }).map((item, i) => (
                <button className="w-[53px] h-[20px] rounded-[4px] bg-[#f4f4f4c9] text-[10px] text-[#27272A] font-inter">
                  Bengali
                </button>
              ))}
            </div>
          </div>

          <div className="w-[299px] h-[271px] bg-[#27272A] mt-[25px]">
            <p className="px-[34px] pt-[15px] font-[500] text-[#F4F4F4C9] opacity-[.79] m-0">
              Ads
            </p>
            <img src={ads} alt="" />
          </div>
        </div>
      </section>

      {/* ===========>> RELETED POST <<=========== */}
      <section className="mt-[33px] p-5">
        <h3 className="text-[22px] text-[#AEABAB] font-[700] font-roboto">
          RELATED POSTS
        </h3>

        <div className="mt-[23px] flex items-center gap-[18px]">
          {Array.from({ length: 4 }).map((item, i) => (
            <div className="w-[205px] h-[420px] flex flex-col items-center text-center rounded-t-[10px]">
              <img
                src={jawan}
                alt=""
                className="w-full h-[322px] rounded-s-[10px]"
              />

              <p className="text-[14px] text-white font-[700] mt-[9px]">
                Download Jawan (2023) Extended Cut Hindi Movie 480p | 720p |
                1080p | 2160p WEB-DL ESub
              </p>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
};

export default MovieDetails;
