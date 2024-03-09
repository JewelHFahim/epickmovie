import BreadcumSitemap from "./BreadcumSitemap";

const SitemapHeader = () => {
  return (
    <div>
      <div className="w-full h-[180px] bg-slate-800 mb-2">
        <div className="w-[80%] h-full mx-auto text-white flex flex-col justify-center">
          <h1 className="text-2xl">XML Sitemap</h1>
          <p className="text-sm mt-4">
            Generated by All in One SEO, this is an XML Sitemap, meant to be
            consumed by search engines like Google or Bing.
          </p>
          <p className="text-sm">
            You can find more information about XML Sitemaps at example.org.
          </p>
        </div>
      </div>

      <div className="w-[80%] mx-auto">
        <BreadcumSitemap />
      </div>
    </div>
  );
};

export default SitemapHeader;