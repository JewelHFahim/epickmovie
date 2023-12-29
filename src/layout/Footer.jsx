import { useFooterUserQuery } from "../redux/features/settings/settingApi";

const Footer = () => {
  const { data: footerConfig } = useFooterUserQuery();

  return (
    <div className="w-full h-[100%] lg:h-[100px] bg-[#343437] lg:bg-[#27272A] mt-[43px] flex justify-center items-center px-4 py-2 lg:p-0">
      <div className="w-[1170px]">

        <p className=" text-[10px] lg:text-[14px] font-inter font-[600] text-white text-center lg:text-left">
          {footerConfig?.data}
        </p>

      </div>
    </div>
  );
};

export default Footer;
