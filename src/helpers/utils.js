import {months, shortMonths} from './const-data';
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
const getFormatSplitter = (format) => {
  if (format.indexOf(".") != -1) return ".";
  if (format.indexOf(" ") != -1) return " ";
  if (format.indexOf("-") != -1) return "-";
  return "/";
};
const preparDayValue = (dateObj, dayFormat) => {
  /**
  suported day formats:
    d: 1..31
    dd: 01..31
  */
  const isUpperCase = dayFormat[0] == 'D';
  const day = dateObj.getDate(); // get date day, for example: 1, 12
  if(isUpperCase){
    switch (dayFormat.length) {
      case 2:
        return twoDigitsNumber(day);
      default:
        return day;
    }
  }
  return twoDigitsNumber(day);
};
const preparMonthValue = (dateObj, monthFormat) => {
  /**
  suported month formats:
    M: 1..12
    MM: 01..12
    MMM: Jan
    MMMM: January
  */
  const isUpperCase = monthFormat[0] == 'M';
  const month = dateObj.getMonth() + 1; // get date month
  if(isUpperCase) {
    switch (monthFormat.length) {
      case 4:
        return months[month - 1]
      case 3:
        return shortMonths[month - 1]
      case 2:
        return twoDigitsNumber(month);
      default:
        return month;
    }
  }
  return twoDigitsNumber(month);
};
const preparYearValue = (dateObj, yearFormat) => {
  /**
  suported year formats:
    YYYY: 2020
    YY: 20
  */
  const isUpperCase = yearFormat[0] == "Y";
  const year = dateObj.getFullYear(); // get date year
  if(isUpperCase) {
    switch (yearFormat.length) {
      case 2:
        let stringYear = String(x);
        return stringYear.slice((stringYear.length - 2), stringYear.length);
      default:
        return year;
    }
  }
  return year; // YYYY
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
