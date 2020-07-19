export const createElement = (elementName) => document.createElement(elementName);
export const $ = (selector) => document.querySelector(selector);
export const isToday = (year, month, day) => {
  const today = new Date();
  return (
    day == today.getDate() &&
    month == today.getMonth() + 1 &&
    year == today.getFullYear()
  );
}

export const formatDate = (date) => {
  return new Intl.DateTimeFormat('en-US').format(date)
}