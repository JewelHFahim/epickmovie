import SiteNews from "../../components/SiteNews/SiteNews";
import Theme1Card from "../../components/movie-card/theme1-card/Theme1Card";
import SectionTitle from "../../utils/theme1-contents/section-title/SectionTitle";

const HomeTheme1 = ({ featuredPosts, movieList, tvShowList }) => {
  return (
    <div>
      <SiteNews />

      {/* ===========> Feature Movies <===========*/}
      <>
        <SectionTitle> Feature Movies </SectionTitle>
        <div className=" mt-5 grid grid-cols-8 gap-5">
          {featuredPosts?.data?.slice(0, 8)?.map((item, i) => (
            <Theme1Card key={i} item={item} />
          ))}
        </div>
      </>

      {/* ===========> Latest Movies <===========*/}
      <>
        <SectionTitle>Latest Movies </SectionTitle>
        <div className=" mt-5 grid grid-cols-8 gap-5">
          {movieList?.data?.data?.map((item, i) => (
            <Theme1Card key={i} item={item} />
          ))}
        </div>
      </>

      {/* ===========> Latest Movies <===========*/}
      <>
        <SectionTitle> Latest Web-Series </SectionTitle>
        <div className=" mt-5 grid grid-cols-8 gap-5">
          {tvShowList?.data?.data?.map((item, i) => (
            <Theme1Card key={i} item={item} />
          ))}
        </div>
      </>

      {/* ===========> Up Comming Movies/Tv Shows <===========*/}
      <>
        <SectionTitle> Upcomming Movies & Web-Series </SectionTitle>
        <div className=" mt-5 grid grid-cols-8 gap-5">
          {tvShowList?.data?.data?.slice(0,8)?.map((item, i) => (
            <Theme1Card key={i} item={item} />
          ))}
        </div>
      </>



    </div>
  );
};

export default HomeTheme1;
