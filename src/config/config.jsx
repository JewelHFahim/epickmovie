export const user_api_key = import.meta.env.VITE_user_api_key;
// export const base_url = import.meta.env.VITE_base_url;

export const base_url = "https://fapi.nflixvilla.online/api";
export const admin_base_url = "http://localhost:3001";

export const userHeader = {
  "X-API-KEY": user_api_key,
  "Content-Type": "application/json",
};
