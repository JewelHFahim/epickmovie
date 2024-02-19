import { useAllConfigQuery } from "../redux/features/settings/settingApi";

const Footer = () => {
  
  const { data: allConfig, isLoading } = useAllConfigQuery();
  const footer = allConfig?.data[1]?.value;

  return (
    <div>
      <div className="w-full h-[100%] lg:h-[100px] bg-[#343437] lg:bg-[#27272A] mt-[43px] flex justify-center items-center px-4 py-2 lg:p-0">
        <div className="w-[1170px]">
          {isLoading ? (
            <div
              className={`w-full h-[25px] my-5 rounded-md bg-slate-600`}
            ></div>
          ) : (
            <p className=" text-[20px] p-5 lg:text-[14px] font-inter font-[600] text-white text-center lg:text-left">
              {footer}
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Footer;
