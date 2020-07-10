import { createElement, isToday } from './utils';

export const getCalenderContainerRef = () => {
  const $calenderContainer = createElement("div");
  $calenderContainer.classList = "js-calendars-picker";
  return $calenderContainer;
}
const getMonthLabelRef = () => {
  const _$monthLabel = createElement("label");
  _$monthLabel.classList = "month-label";
  return _$monthLabel;
}
const getYearLabelRef = () => {
  const _$yearLabel = createElement("label");
  _$yearLabel.classList = "year-label";
  return _$yearLabel;
}
export const getMonthDaysRef = () => {
  const _$monthDaysList = createElement("ul");
  _$monthDaysList.classList = "days-in-month";
  return _$monthDaysList;
}
const getNextMonthButtonRef = () => {
  const _$nextMonthButton = createElement("button");
  _$nextMonthButton.classList = "month-navigate-button next-button";
  _$nextMonthButton.innerText = ">";

  return _$nextMonthButton;
}
const getPrevMonthButtonRef = () => {
  const _$prevMonthButton = createElement("button");
  _$prevMonthButton.classList = "month-navigate-button prev-button";
  _$prevMonthButton.innerText = "<";
  return _$prevMonthButton;
}

export const getDaysInMonth = (year, month) => {
  const _updatedDaysInMonth = new Date(year, month, 0).getDate();
  const daysFragment = document.createDocumentFragment();
  for (let i = 1; i <= _updatedDaysInMonth; i++) {
    const todayClass = isToday(year, month, i) ? "jscp-today" : "";
    const $li = createElement("li");
    $li.classList = todayClass;
    $li.innerText = i;
    daysFragment.appendChild($li);
  }
  return daysFragment;
}

const getMonthAndYear = () => {
  const _$monthAndYear = createElement("div");
  _$monthAndYear.classList = "month-and-year";
  _$monthAndYear.appendChild(getMonthLabelRef());
  _$monthAndYear.appendChild(getYearLabelRef());
  return _$monthAndYear;
}

export const getCalendarHeader = () => {
  const _$calendarHeader = createElement("div");
  _$calendarHeader.classList = "calendar-header";
  _$calendarHeader.appendChild(getPrevMonthButtonRef());
  _$calendarHeader.appendChild(getMonthAndYear());
  _$calendarHeader.appendChild(getNextMonthButtonRef());
  return _$calendarHeader;
}