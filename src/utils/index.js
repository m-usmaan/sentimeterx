export const EXTRACT_ORGANIZATION_SLUG = () => {
  return process.env.REACT_APP_ORGANIZATION_SLUG;
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

export const buildQueryString = (params) => {
  const pairs = [];
  for (const key in params) {
    const value = params[key];
    const encodedKey = encodeURIComponent(key);
    const encodedValue = encodeURIComponent(value);
    pairs.push(`${encodedKey}=${encodedValue}`);
  }
  return pairs.join("&");
};

export const getToken = () => {
  return localStorage.getItem(`${EXTRACT_ORGANIZATION_SLUG()}_token`);
};

export const setToken = (token) => {
  localStorage.setItem(`${EXTRACT_ORGANIZATION_SLUG()}_token`, token);
};

export const removeToken = () => {
  localStorage.removeItem(`${EXTRACT_ORGANIZATION_SLUG()}_token`);
};
