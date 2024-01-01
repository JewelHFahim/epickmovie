const userInfo = JSON.parse(localStorage.getItem("user-info"));

export const base_url = "https://fapi.epickmovies.online/api";
export const adminHeader = {
  "content-type": "application/json",
  "X-API-KEY": "dtmgNfrv6AJDXV3nPEhkaQ",
  Authorization: `Bearer ${userInfo.token}`,
};

export const tmdb_baseurl = "https://api.themoviedb.org/3";
