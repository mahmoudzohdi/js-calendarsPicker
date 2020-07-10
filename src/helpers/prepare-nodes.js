import { createElement, isToday } from './utils';

export const getCalenderContainerRef = () => {
  const $calenderContainer = createElement("div");
  $calenderContainer.classList = "js-calendars-picker";
  return $calenderContainer;
}
export const getMonthLabelRef = () => {
  const _$monthLabel = createElement("label");
  _$monthLabel.classList = "month-label";
  return _$monthLabel;
}
export const getMonthDaysRef = () => {
  const _$monthDaysList = createElement("ul");
  _$monthDaysList.classList = "days-in-month";
  return _$monthDaysList;
}
export const getNextMonthButtonRef = () => {
  const _$nextMonthButton = createElement("button");
  _$nextMonthButton.classList = "month-navigate-button";
  _$nextMonthButton.innerText = ">";

  return _$nextMonthButton;
}
export const getPrevMonthButtonRef = () => {
  const _$prevMonthButton = createElement("button");
  _$prevMonthButton.classList = "month-navigate-button";
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