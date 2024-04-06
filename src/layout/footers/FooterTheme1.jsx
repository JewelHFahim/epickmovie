import { Link } from "react-router-dom";

const FooterTheme1 = () => {
  return (
    <div className="mt-5 h-[162px] bg-[#262626] flex justify-center items-center">
      <div className="lg:w-[78vw] mx-auto flex flex-col justify-center items-center gap-y-2.5 text-white">
        <h2 className=" text-[22px] font-bold">EpickMovies.com @ 2022</h2>
        <p className="text-[18px] text-center">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry&aposs standard dummy text
          ever since the 1500s, when an unknown printer took a galley of type
          and scrambled it to make a type specimen book.
        </p>
        <ul>
          <li className="text-[22px] font-bold grid grid-cols-8 gap-x-5">
            {Array.from({ length: 8 }).map((item, i) => (
              <Link to="" key={i}>
                EpicMovies
              </Link>
            ))}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default FooterTheme1;
