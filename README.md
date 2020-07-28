# JS-CalendarsPicker

[Demo Here](https://zohdi.me/js-calendarspicker)

## Installation

```
npm i js-calendarspicker
```

## Usage

```

import JSCalendarsPicker from 'js-calendarspicker';

var elem = document.getElementById('calendar-input');

// create instance of a plugin
var instance = new JSCalendarsPicker(elem, {YOUR_OPTIONS_HERE});

// initialize
instance.init();

```

## Options

### format

You can use this option to customize the date format.

type: `string`
default: `'DD/MM/YYYY'`

#### supported tokens (case-sensitive):

| Input  | Example   | Description          |
| ------ | --------- | -------------------- |
| `YYYY` | `2019`    | 4 digit year         |
| `YY`   | `19`      | 2 digit year         |
| `M`    | `1..12`   | month number         |
| `MM`   | `01..12`  | 2 digit month number |
| `MMM`  | `Jan`     | short month name     |
| `MMMM` | `January` | full month name      |
| `D`    | `1..31`   | day number           |
| `DD`   | `01..31`  | 2 digit day number   |


example:

```
new JSCalendarsPicker(elem, {
  format: 'DD-MM-YYYY'
});
```

### defaultDate

You can use this option to init your calendar with default date

type: `Date Object`
default: `null`

example:

```
new JSCalendarsPicker(elem, {
  defaultDate: new Date(2020, 8, 20)
});
```

## Callback Events

### onSelect

this event fired on day selection, returns the `Date Object` of the selected day 

#### Usage:

```
new JSCalendarsPicker(elem, {
  onSelect: function(dateObject){
    alert(dateObject); // the selected day date object
  }
});
```
