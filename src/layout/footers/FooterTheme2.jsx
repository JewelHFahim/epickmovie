import { Link } from "react-router-dom";

const FooterTheme2 = () => {
  return (
    <div className="mt-5 border-t border-slate-700 bg-[#262626] flex justify-center items-center p-2">
      <div className="lg:w-[78vw] mx-auto flex flex-col justify-center items-center gap-y-3 text-white px-8 lg:px-0 p-2">
        <h2 className=" text-[22px] font-bold"> EpickMovies.com @ 2022 </h2>

        <p className="text-[16px] lg:text-[18px] text-center">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry&aposs standard dummy text
          ever since the 1500s, when an unknown printer took a galley of type
          and scrambled it to make a type specimen book.
        </p>

        <ul className="">
          <li className="text-[22px] font-bold grid grid-cols-6 gap-x-5">
            {Array.from({ length: 6 }).map((item, i) => (
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

export default FooterTheme2;
