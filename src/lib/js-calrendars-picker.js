// import dependencies
import { months } from "../helpers/const-data";
import {
  getCalenderContainerRef,
  getMonthDaysRef,
  getCalendarHeader,
  getDaysInMonth
} from "../helpers/prepare-nodes";

// return UserList class
export class JSCalrendarsPicker {
  constructor(elem) {
    this.$elem = elem;

    this.initialized = false;
  }

  // initialize plugin
  init() {
    // store today date
    this.today = new Date();
    // store today's year date
    this.year = this.today.getFullYear();
    // store today's month date
    this.month = this.today.getMonth() + 1;

    // store elements references
    this.$calenderContainer = getCalenderContainerRef();

    this.$calendarHeader = this.$calenderContainer.appendChild(getCalendarHeader());
    this.$monthLabel = this.$calendarHeader.querySelector('.month-label');
    this.$yearLabel = this.$calendarHeader.querySelector('.year-label');
    this.$monthDaysList = this.$calenderContainer.appendChild(
      getMonthDaysRef()
    );
    this.$nextMonthButton = this.$calendarHeader.querySelector('.next-button');
    this.$prevMonthButton = this.$calendarHeader.querySelector('.prev-button');
    this.addEventListeners()

    // append days of the month
    this.updateCalendar();

    // append calendar container i the selected element
    this.$elem.appendChild(this.$calenderContainer);

    // set initialized to `true`
    this.initialized = true;
  }

  updateCalendar() {
    this.updateMonthDaysList();
    this.updateMonthNameLabel();
    this.updateYearLabel();
  }
  updateMonthNameLabel() {
    this.$monthLabel.innerText = months[this.month - 1];
  }
  updateYearLabel() {
    this.$yearLabel.innerText = this.year;
  }
  updateMonthDaysList() {
    this.$monthDaysList.innerHTML = "";
    this.$monthDaysList.append(getDaysInMonth(this.year, this.month));
  }
  addEventListeners(){
    this.$nextMonthButton.onclick = () => this.nextMonthClickCallback();
    this.$prevMonthButton.onclick = () => this.prevMonthClickCallback();
  }
  nextMonthClickCallback(){
    if(this.month < months.length) {
      this.month++;
      this.updateCalendar()
    }
  }
  prevMonthClickCallback(){
    if(this.month > 1) {
      this.month--;
      this.updateCalendar()
    }
  }
}
