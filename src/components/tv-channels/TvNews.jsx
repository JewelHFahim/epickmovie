import Marquee from "react-fast-marquee";

const TvNews = () => {
  return (
    <div className="flex justify-center items-center bg-[#5C1EC2] py-2 lg:hidden">
      <div className="text-[28px] lg:text-[18px] text-white">
        <Marquee>
          সকল খেলার আপডেট পেতে আমাদের চ্যানেলে জয়েন করুন এবং আমাদের সাইট ভিজিট
          করুন
        </Marquee>
      </div>
    </div>
  );
};

export default TvNews;
