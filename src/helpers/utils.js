import {months, shortMonths} from './utils';
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

export const formatDate = (date) => {
  return new Intl.DateTimeFormat("en-US").format(date);
};

export const focusClass = (element, add) => {
  const method = add ? "add" : "remove";
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

const getFormatSplitter = (format) => {
  if (format.indexOf("/") != -1) return "/";
  if (format.indexOf(".") != -1) return ".";
  if (format.indexOf(" ") != -1) return " ";
  if (format.indexOf("-") != -1) return "-";
};
const preparDayValue = (dateObj, dayFormat) => {
  /**
  suported day formats:
    d: 1..31
    dd: 01..31
	*/
  const day = dateObj.getDate(); // get date day, for example: 1, 12
  switch (dayFormat.length) {
    case 2:
      return day < 10 ? `0${day}` : day;
    default:
      return day;
  }
};
const preparMonthValue = (dateObj, monthFormat) => {
  /**
  suported month formats:
    m: 1..12
    mm: 01..12
    mmm: Jan
    mmmm: January
	*/
  const month = dateObj.getMonth() + 1; // get date month
  switch (monthFormat.length) {
    case 4:
      return months[month - 1]
    case 3:
      return shortMonths[month - 1]
    case 2:
      return month < 10 ? `0${month}` : month;
    default:
      return month;
  }
};
const preparYearValue = (dateObj, yearFormat) => {
  /**
  suported year formats:
    yyyy: 2020
    yy: 20
	*/
  const year = dateObj.getFullYear(); // get date year
  switch (yearFormat.length) {
    case 2:
      let stringYear = String(x);
      return stringYear.slice((stringYear.length - 2), stringYear.length);
    default:
      return year;
  }
};

export const dateFormatter = (dateObj, format) => {
  let splitter = getFormatSplitter(format);
  const splittedFormat = format.split(splitter);
  return splittedFormat
    .map((item) => {
      if (item.toLocaleLowerCase().indexOf("d") != -1)
        return preparDayValue(dateObj, item);
      if (item.toLocaleLowerCase().indexOf("m") != -1)
        return preparMonthValue(dateObj, item);
      if (item.toLocaleLowerCase().indexOf("y") != -1)
        return preparYearValue(dateObj, item);
    })
    .join(splitter);
};
