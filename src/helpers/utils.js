import { MONTHS, SHORT_MONTHS } from "./const-data";
export const createElement = (elementName) =>
  document.createElement(elementName);
export const $ = (selector) => document.querySelector(selector);
export const isToday = (year, month, day) => {
  const today = new Date();
  return (
    day == today.getDate() &&
    month == today.getMonth() + 1 &&
    year == today.getFullYear()
  );
};

export const focusClass = (element, isAdd) => {
  const method = isAdd ? "add" : "remove";
  element.classList[method]("focused");
};

export const isElementOutsidePlugin = (parent, element) => {
  return parent != element && !isDescendant(parent, element);
};
const isDescendant = (parent, child) => {
  var node = child.parentNode;
  while (node != null) {
    if (node == parent) {
      return true;
    }
    node = node.parentNode;
  }
  return false;
};

const twoDigitsNumber = (num) => (num < 10 ? `0${num}` : num);

const getShortYear = (dateObj) => {
  const year = dateObj.getFullYear(); // get date year
  let stringYear = String(year);
  return stringYear.slice(stringYear.length - 2, stringYear.length);
}
const dateTokensHandlers = {
  DD: (dateObj) => twoDigitsNumber(dateObj.getDate()),
  D: (dateObj) => dateObj.getDate(),
  MMMM: (dateObj) => MONTHS[dateObj.getMonth() + 1],
  MMM: (dateObj) => SHORT_MONTHS[dateObj.getMonth() + 1],
  MM: (dateObj) => twoDigitsNumber(dateObj.getMonth() + 1),
  M: (dateObj) => dateObj.getMonth() + 1,
  YYYY: (dateObj) => dateObj.getFullYear(),
  YY: (dateObj) => getShortYear(dateObj),
};
export const dateFormatter = (dateObj, format) => {
  for (const token in dateTokensHandlers) {
    if(format.indexOf(token) != -1){
      format = format.replace(token, dateTokensHandlers[token](dateObj));
    }
  }
  return format;
};
