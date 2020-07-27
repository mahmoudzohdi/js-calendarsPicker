import { createElement, isToday } from "./utils";
import { SELECTED_DAY_CLASS } from "./const-data";

export const getCalenderWrapperRef = () => {
  const $calenderWrapper = createElement("div");
  $calenderWrapper.classList = "jscp-wrapper";
  return $calenderWrapper;
};
export const getCalenderContainerRef = () => {
  const $calenderContainer = createElement("div");
  $calenderContainer.classList = "jscp-container";
  return $calenderContainer;
};
const getMonthLabelRef = () => {
  const _$monthLabel = createElement("label");
  _$monthLabel.classList = "jscp-month-label";
  return _$monthLabel;
};
const getYearLabelRef = () => {
  const _$yearLabel = createElement("label");
  _$yearLabel.classList = "jscp-year-label";
  return _$yearLabel;
};
export const getMonthDaysRef = () => {
  const _$monthDaysList = createElement("ul");
  _$monthDaysList.classList = "jscp-days-in-month";
  return _$monthDaysList;
};
const getNextMonthButtonRef = () => {
  const _$nextMonthButton = createElement("button");
  _$nextMonthButton.classList = "jscp-month-navigate-button jscp-next-button";
  _$nextMonthButton.innerText = ">";

  return _$nextMonthButton;
};
const getPrevMonthButtonRef = () => {
  const _$prevMonthButton = createElement("button");
  _$prevMonthButton.classList = "jscp-month-navigate-button jscp-prev-button";
  _$prevMonthButton.innerText = "<";
  return _$prevMonthButton;
};

const getSelectedDayClass = (selectedDate, { year, month, day }) => {
  return selectedDate.year == year &&
    selectedDate.month == month &&
    selectedDate.day == day
    ? SELECTED_DAY_CLASS
    : "";
};

export const getDaysInMonth = (year, month, selectedDate) => {
  const _updatedDaysInMonth = new Date(year, month, 0).getDate();
  const daysFragment = document.createDocumentFragment();
  for (let i = 1; i <= _updatedDaysInMonth; i++) {
    const todayClass = isToday(year, month, i) ? "jscp-today" : "";
    const selectedClass = getSelectedDayClass(selectedDate, {
      year,
      month,
      day: i,
    });
    const $li = createElement("li");
    $li.classList = `jscp-day ${todayClass} ${selectedClass}`;
    $li.innerText = i;
    daysFragment.appendChild($li);
  }
  return daysFragment;
};

const getMonthAndYear = () => {
  const _$monthAndYear = createElement("div");
  _$monthAndYear.classList = "jscp-month-and-year";
  _$monthAndYear.appendChild(getMonthLabelRef());
  _$monthAndYear.appendChild(getYearLabelRef());
  return _$monthAndYear;
};

export const getCalendarHeader = () => {
  const _$calendarHeader = createElement("div");
  _$calendarHeader.classList = "jscp-calendar-header";
  _$calendarHeader.appendChild(getPrevMonthButtonRef());
  _$calendarHeader.appendChild(getMonthAndYear());
  _$calendarHeader.appendChild(getNextMonthButtonRef());
  return _$calendarHeader;
};
