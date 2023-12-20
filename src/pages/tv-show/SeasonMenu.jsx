import { useState } from "react";

const SeasonMenu = () => {
  const myObj = {
    Season1: [
      { balebl: "EP 1", download_links: "abc.com/test1" },
      { balebl: "EP 2", download_links: "abc.com/test2" },
      { balebl: "EP 3", download_links: "abc.com/test3" },
    ],
    Season2: [
      { balebl: "EP 1", download_links: "abc.com/test3" },
      { balebl: "EP 2", download_links: "abc.com/test4" },
    ],
    Season3: [{ balebl: "EP 1", download_links: "abc.com/test5" }],
    Season4: [],
    Season5: [
      { balebl: "EP 1", download_links: "abc.com/test6" },
      { balebl: "EP 2", download_links: "abc.com/test7" },
    ],
  };

  const [selectedSeason, setSelectedSeason] = useState(null);
  const [selectedEpisode, setSelectedEpisode] = useState(null);

  const handleSeasonChange = (event) => {
    const season = event.target.value;
    setSelectedSeason(season);
    setSelectedEpisode(null); // Reset selected episode when season changes
  };

  const handleEpisodeChange = (event) => {
    const episode = event.target.value;
    setSelectedEpisode(episode);
  };

  return (
    <div className="dropdown-menu">
      {/* <select value={selectedSeason || ''} onChange={handleSeasonChange}>
        <option value="" disabled>Select a Season</option>
        {Object.keys(myObj).map((season) => (
          <option key={season} value={season}>
            {season}
          </option>
        ))}
      </select> */}
      {/* 
      {selectedSeason && (
        <div className="submenu">
          <label>Select Episode:</label>
          <select value={selectedEpisode || ''} onChange={handleEpisodeChange}>
            <option value="" disabled>Select an Episode</option>
            {myObj[selectedSeason].map((episode) => (
              <option key={episode.balebl} value={episode.balebl}>
                {episode.balebl}
              </option>
            ))}
          </select>
        </div>
      )}

      {selectedEpisode && (
        <div>
          <strong>Selected Episode:</strong> {selectedEpisode}
        </div>
      )} */}

      <div>
        {

        Object.keys(myObj).map((season,i) => <div key={i}>
          {season}

          <div>
            {
              season?.map(item => item.balebl)
            }
          </div>
          
          </div>)
      
        }
      </div>
    </div>
  );
};

export default SeasonMenu;
