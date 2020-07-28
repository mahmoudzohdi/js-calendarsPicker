// import dependencies
import { MONTHS, SELECTED_DAY_CLASS } from "../helpers/const-data";
import { $, focusClass, isElementOutsidePlugin, dateFormatter } from "../helpers/utils";
import {
  getCalenderWrapperRef,
  getCalenderContainerRef,
  getMonthDaysRef,
  getCalendarHeader,
  getDaysInMonth
} from "../helpers/prepare-nodes";

// return UserList class
export class JSCalendarsPicker {
  constructor(elem, options) {
    this.options = {
      format: 'DD/MM/YYYY',
      defaultDate: null,
      onSelect: (e) => e,
      // here overwrite defaults with user's options
      ...options
    }
    this.$elem = elem;

    this.initialized = false;
  }

  // initialize plugin
  init() {
    // store today date
    const defaultDate = this.options.defaultDate || new Date();
    // store today's year date
    this.year = defaultDate.getFullYear();
    // store today's month date
    this.month = defaultDate.getMonth() + 1;
    
    this.selectedDate = {
      year: null,
      month: null,
      day: null,
    };

    // store elements references
    this.$calenderWrapper = getCalenderWrapperRef();
    this.$calenderContainer = getCalenderContainerRef();

    this.$calendarHeader = this.$calenderContainer.appendChild(getCalendarHeader());
    this.$monthLabel = this.$calendarHeader.querySelector('.jscp-month-label');
    this.$yearLabel = this.$calendarHeader.querySelector('.jscp-year-label');
    this.$monthDaysList = this.$calenderContainer.appendChild(
      getMonthDaysRef()
    );
    this.$nextMonthButton = this.$calendarHeader.querySelector('.jscp-next-button');
    this.$prevMonthButton = this.$calendarHeader.querySelector('.jscp-prev-button');
    
    // append days of the month
    this.updateCalendar();
    
    this.addEventListeners();
    
    this.initPluginWithDate();
    
    // append plugin DOM
    this.appendPluginDOM();
    
    // set initialized to `true`
    this.initialized = true;
  }
  initPluginWithDate(){
    const { defaultDate } = this.options;
    if(!defaultDate) return;
    this.updateSelectedDate(defaultDate);
    this.updateInputValue(defaultDate);

    this.$monthDaysList.childNodes[this.selectedDate.day -1].classList.add(SELECTED_DAY_CLASS);
  }
  appendPluginDOM(){
    // make the selected input readonly
    this.$elem.setAttribute('readonly', true)
    // add plugin class to the selected input
    this.$elem.classList.add('jscp-input')

    // append plugin wrapper after the selected input
    this.$elem.parentNode.insertBefore(this.$calenderWrapper, this.$elem.nextSibling);
    // move selected input into the plugin wrapper
    this.$calenderWrapper.append(this.$elem);
    // appent plguin container into wrapper
    this.$calenderWrapper.append(this.$calenderContainer);
  }
  updateSelectedDate(dateObject) {
    this.selectedDate = {
      year: dateObject.getFullYear(),
      month: dateObject.getMonth() +1,
      day: dateObject.getDate(),
    };
  }
  updateCalendar() {
    this.updateMonthDaysList();
    this.updateMonthNameLabel();
    this.updateYearLabel();
  }
  updateMonthNameLabel() {
    this.$monthLabel.innerText = MONTHS[this.month - 1];
  }
  updateYearLabel() {
    this.$yearLabel.innerText = this.year;
  }
  updateMonthDaysList() {
    this.$monthDaysList.innerHTML = "";
    this.$monthDaysList.append(getDaysInMonth(this.year, this.month, this.selectedDate));
    this.$monthDaysList.querySelectorAll('.jscp-day').forEach( element => {
      element.onclick = (e) => this.dayClickCallback(e)
    });
  }
  addEventListeners(){
    this.$nextMonthButton.onclick = () => this.nextMonthClickCallback();
    this.$prevMonthButton.onclick = () => this.prevMonthClickCallback();
    this.$elem.onfocus = () => focusClass(this.$calenderWrapper, true);
    document.onclick = (e) => (isElementOutsidePlugin(this.$calenderWrapper, e.target) && focusClass(this.$calenderWrapper, false));
  }
  nextMonthClickCallback(){
    if(this.month < MONTHS.length) {
      this.month++;
    } else {
      this.month = 1;
      this.year++;
    }
    this.updateCalendar()
  }
  prevMonthClickCallback(){
    if(this.month > 1) {
      this.month--;
    } else {
      this.month = MONTHS.length;
      this.year--;
    }
    this.updateCalendar()
  }
  dayClickCallback(e) {
    const day = e.target.innerText;
    const dateObject = new Date(this.year, this.month - 1, day)
    // here we have the date object of the selected day
    this.updateInputValue(dateObject);
    this.updateSelectedDay(e.target);
    this.updateSelectedDate(dateObject);
    this.options.onSelect(dateObject);

  }
  updateInputValue(dateObject){
    this.$elem.value = dateFormatter(dateObject, this.options.format);
  }
  updateSelectedDay(target){
    const $selectedDay =  $(`.${SELECTED_DAY_CLASS}`)
    $selectedDay&& $selectedDay.classList.remove(SELECTED_DAY_CLASS); 
    target.classList.add(SELECTED_DAY_CLASS);
  }
}
