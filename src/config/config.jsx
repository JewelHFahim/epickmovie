const userInfo = JSON.parse(localStorage.getItem("user-info"));

export const base_url = "https://fapi.epickmovies.online/api";

export const adminHeader = {
  "content-type": "application/json",
  Authorization: `Bearer ${userInfo?.token}`,
};

export const userHeader = {
  "X-API-KEY": "dtmgNfrv6AJDXV3nPEhkaQ",
  "Content-Type": "application/json",
};


export const tmdb_baseurl = "https://api.themoviedb.org/3";
