import { format } from "date-fns";

export const formatDate = (dateString) => {
  const date = new Date(dateString);
  return format(date, "MMM. dd, yyyy");
};

