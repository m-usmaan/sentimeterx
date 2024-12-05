export const EXTRACT_ORGANIZATION_SLUG = () => {
  return process.env.REACT_APP_ENV === "local"
    ? process.env.REACT_APP_ORGANIZATION_SLUG
    : window.location.hostname.split(".")[0];
};

export const convertDateTime = (dateObject, dateOptions, ago = false) => {
  const timeAgo = (date) => {
    const now = new Date();
    const diffInMs = now - date;
    const diffInDays = Math.floor(diffInMs / (1000 * 60 * 60 * 24)); // Convert milliseconds to days
    if (diffInDays === 0) return "(today)";
    else if (diffInDays === 1) return "(yesterday)";
    else return `(${diffInDays} days ago)`;
  };

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
  const convertedDate = new Date(
    utcDate.toLocaleString("en-US", { timeZone: "Asia/Karachi" })
  ); // TODO: Fetch user's timezone and then convert dynamycally

  let formattedDate = convertedDate.toLocaleDateString("en-US", dateOptions);
  if (ago) {
    const agoText = timeAgo(convertedDate);
    formattedDate = `${formattedDate} ${agoText}`;
  }
  return formattedDate;
};
