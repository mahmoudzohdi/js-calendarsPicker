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

## Callback Events

### onSelect

this event fired on day selection.

Usage:

```
new JSCalendarsPicker(elem, {
  onSelect: function(dateObject){
    alert(dateObject); // the selected day date object
  }
});
```