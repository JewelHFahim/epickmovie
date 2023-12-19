import jawan from "../../../assets/jawan.png";


const RelatedPostMovie = () => {
  return (
    <div>
      <section className="mt-[33px] p-5">
        <h3 className="text-[18px] lg:text-[22px] text-[#AEABAB] font-[700] font-roboto">
          RELATED POSTS
        </h3>

        <div className="mt-[23px] grid grid-cols-2 lg:grid-cols-4 items-center gap-[18px]">
          {Array.from({ length: 4 }).map((item, i) => (
            <div
              key={i}
              className="w-[180px] lg:w-[205px] h-[390px] bg-gradient-to-t from-[#ff1818] to-[#fdd506] lg:bg-none lg:h-[420px] flex flex-col items-center text-center rounded-[10px] p-[1.5px]"
            >
              <img
                src={jawan}
                alt=""
                className="w-full h-[267px] lg:h-[322px] rounded-tl-[10px] rounded-tr-[10px] bg-[#27272A]"
              />

              <p className="text-[14px] text-white font-[700] pt-[9px] bg-[#27272A] h-full rounded-b-[10px]">
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

export default RelatedPostMovie;
