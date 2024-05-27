import { format } from "date-fns";

export const formatDate = (dateString) => {
  if (!dateString) {
    return "Invalid date"; // Return a default message or handle it appropriately
  }

  const date = new Date(dateString);

  if (isNaN(date.getTime())) {
    return "Invalid date"; // Handle invalid date string
  }

  return format(date, "MMM. dd, yyyy");
};
