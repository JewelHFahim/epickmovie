import { useEffect, useState } from "react";
import IndexTable from "../IndexTable";
import SitemapHeader from "../SitemapHeader";

const TermPost = ({termUrl}) => {
  const [download, setDwonload] = useState();
  const [urls, setUrls] = useState([]);

  useEffect(() => {
    const xmlData = `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      ${termUrl?.map(
          (genre) => `
        <url>
          <loc>http://localhost:3000/terms/${genre?.slug}</loc>
          <lastmod>${new Date().toISOString()}</lastmod>
          <changefreq>daily</changefreq>
          <priority>0.8</priority>
        </url>
      `
        )
        .join("")}
    </urlset>`;
    setDwonload(xmlData)

    const parser = new DOMParser();
    const xmlDoc = parser.parseFromString(xmlData, "text/xml");
    const urlNodes = xmlDoc.getElementsByTagName("url");
    const parsedUrls = [];

    for (let i = 0; i < urlNodes.length; i++) {
      const loc = urlNodes[i].getElementsByTagName("loc")[0].textContent;
      const lastmod =
        urlNodes[i].getElementsByTagName("lastmod")[0].textContent;
      const changefreq =
        urlNodes[i].getElementsByTagName("changefreq")[0].textContent;
      const priority =
        urlNodes[i].getElementsByTagName("priority")[0].textContent;

      parsedUrls.push({ loc, lastmod, changefreq, priority });
    }


    setUrls(parsedUrls);
  }, [termUrl]);

  const handleDownload = () => {
    // Create a Blob from the XML data
    const blob = new Blob([download], { type: 'text/xml' });
    const url = window.URL.createObjectURL(blob);

    // Create a link element and trigger a click event to download the file
    const a = document.createElement('a');
    a.href = url;
    a.download = 'sitemap.xml';
    document.body.appendChild(a);
    a.click();

    // Cleanup
    window.URL.revokeObjectURL(url);
    document.body.removeChild(a);
}


  return (
    <div className="mb-10">
       <SitemapHeader/>
      <IndexTable urls={urls} downloadFn={handleDownload} />
    </div>
  );
};

export default TermPost;
