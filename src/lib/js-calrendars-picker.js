// import dependencies
import { months } from "../helpers/const-data";
import {
  getCalenderContainerRef,
  getMonthDaysRef,
  getNextMonthButtonRef,
  getPrevMonthButtonRef,
  getMonthLabelRef,
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
    this.$monthLabel = this.$calenderContainer.appendChild(getMonthLabelRef());
    this.$monthDaysList = this.$calenderContainer.appendChild(
      getMonthDaysRef()
    );
    this.$prevMonthButton = this.$calenderContainer.appendChild(getPrevMonthButtonRef());
    this.$nextMonthButton = this.$calenderContainer.appendChild(getNextMonthButtonRef());
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
    this.updateMonthName();
  }
  updateMonthName() {
    this.$monthLabel.innerText = months[this.month - 1];
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
