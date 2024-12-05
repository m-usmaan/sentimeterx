export const EXTRACT_ORGANIZATION_SLUG = () => {
  return process.env.REACT_APP_ENV === "local"
    ? process.env.REACT_APP_ORGANIZATION_SLUG
    : window.location.hostname.split(".")[0];
};

export const convertDateTime = (dateObject, dateOptions) => {
  // TODO: Construct this date object dynamically according to `dateObject.timezone`
  const utcDate = new Date(
    Date.UTC(
      dateObject.year,
      dateObject.month - 1,
      dateObject.day,
      dateObject.hour,
      dateObject.minute,
      dateObject.second
    )
  );
  const convertedDate = new Date(utcDate.toLocaleString("en-US", { timeZone: "Asia/Karachi" }));  // TODO: Fetch user's timezone and then convert dynamycally
  const formattedDate = convertedDate.toLocaleDateString('en-US', dateOptions);
  return formattedDate;
};