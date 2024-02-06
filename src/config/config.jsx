const userInfo = JSON.parse(localStorage.getItem("user-info"));

export const tmdb_baseurl = import.meta.env.VITE_tmdb_base_url;
export const tmdb_img_url = import.meta.env.VITE_tmdb_img_url;
export const user_api_key = import.meta.env.VITE_user_api_key;
export const key = import.meta.env.VITE_tmdb_api_key;
export const base_url = import.meta.env.VITE_base_url;

export const adminHeader = {
  "content-type": "application/json",
  Authorization: `Bearer ${userInfo?.token}`,
};

export const userHeader = {
  "X-API-KEY": user_api_key,
  "Content-Type": "application/json",
};
