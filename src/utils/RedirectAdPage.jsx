import { ad_url } from "../config/config";

export const RedirectAdPage = () => {
  const newTab = window.open(`${ad_url}`, "_blank");

  if (newTab) {
    newTab.focus();
  }
};
