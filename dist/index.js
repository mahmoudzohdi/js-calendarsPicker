!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.JSCalendarsPicker=t():e.JSCalendarsPicker=t()}("undefined"!=typeof self?self:this,(function(){return function(e){var t={};function n(r){if(t[r])return t[r].exports;var a=t[r]={i:r,l:!1,exports:{}};return e[r].call(a.exports,a,a.exports,n),a.l=!0,a.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)n.d(r,a,function(t){return e[t]}.bind(null,a));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="./",n(n.s=4)}([function(e,t,n){var r=n(1),a=n(2);"string"==typeof(a=a.__esModule?a.default:a)&&(a=[[e.i,a,""]]);var o={insert:"head",singleton:!1};r(a,o);e.exports=a.locals||{}},function(e,t,n){"use strict";var r,a=function(){return void 0===r&&(r=Boolean(window&&document&&document.all&&!window.atob)),r},o=function(){var e={};return function(t){if(void 0===e[t]){var n=document.querySelector(t);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}e[t]=n}return e[t]}}(),i=[];function s(e){for(var t=-1,n=0;n<i.length;n++)if(i[n].identifier===e){t=n;break}return t}function c(e,t){for(var n={},r=[],a=0;a<e.length;a++){var o=e[a],c=t.base?o[0]+t.base:o[0],l=n[c]||0,p="".concat(c," ").concat(l);n[c]=l+1;var d=s(p),u={css:o[1],media:o[2],sourceMap:o[3]};-1!==d?(i[d].references++,i[d].updater(u)):i.push({identifier:p,updater:y(u,t),references:1}),r.push(p)}return r}function l(e){var t=document.createElement("style"),r=e.attributes||{};if(void 0===r.nonce){var a=n.nc;a&&(r.nonce=a)}if(Object.keys(r).forEach((function(e){t.setAttribute(e,r[e])})),"function"==typeof e.insert)e.insert(t);else{var i=o(e.insert||"head");if(!i)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");i.appendChild(t)}return t}var p,d=(p=[],function(e,t){return p[e]=t,p.filter(Boolean).join("\n")});function u(e,t,n,r){var a=n?"":r.media?"@media ".concat(r.media," {").concat(r.css,"}"):r.css;if(e.styleSheet)e.styleSheet.cssText=d(t,a);else{var o=document.createTextNode(a),i=e.childNodes;i[t]&&e.removeChild(i[t]),i.length?e.insertBefore(o,i[t]):e.appendChild(o)}}function h(e,t,n){var r=n.css,a=n.media,o=n.sourceMap;if(a?e.setAttribute("media",a):e.removeAttribute("media"),o&&btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),e.styleSheet)e.styleSheet.cssText=r;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(r))}}var f=null,m=0;function y(e,t){var n,r,a;if(t.singleton){var o=m++;n=f||(f=l(t)),r=u.bind(null,n,o,!1),a=u.bind(null,n,o,!0)}else n=l(t),r=h.bind(null,n,t),a=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)};return r(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;r(e=t)}else a()}}e.exports=function(e,t){(t=t||{}).singleton||"boolean"==typeof t.singleton||(t.singleton=a());var n=c(e=e||[],t);return function(e){if(e=e||[],"[object Array]"===Object.prototype.toString.call(e)){for(var r=0;r<n.length;r++){var a=s(n[r]);i[a].references--}for(var o=c(e,t),l=0;l<n.length;l++){var p=s(n[l]);0===i[p].references&&(i[p].updater(),i.splice(p,1))}n=o}}}},function(e,t,n){(t=n(3)(!1)).push([e.i,".jscp-wrapper{position:relative;z-index:1}.jscp-wrapper .jscp-container{position:absolute;top:100%;left:0;z-index:2;display:none;box-sizing:border-box;width:230px;max-width:100%;border:1px solid #ccc;border-radius:5px;padding:15px 10px;text-align:center}.jscp-wrapper .jscp-container .jscp-calendar-header{width:100%;display:flex;justify-content:space-between;align-items:center}.jscp-wrapper .jscp-container .jscp-calendar-header .jscp-month-label{margin-right:5px}.jscp-wrapper .jscp-container .jscp-days-in-month{display:flex;list-style:none;padding:0;margin:15px 0;flex-wrap:wrap}.jscp-wrapper .jscp-container .jscp-days-in-month .jscp-day{width:14.28571%;display:inline-block;padding:5px 0;line-height:1;border-radius:2px;cursor:pointer}.jscp-wrapper .jscp-container .jscp-days-in-month .jscp-day.jscp-today{color:#9c27b0;border:1px solid #9c27b0}.jscp-wrapper .jscp-container .jscp-days-in-month .jscp-day.jscp-selected{color:#fff;background-color:#9c27b0}.jscp-wrapper .jscp-container .jscp-days-in-month .jscp-day:not(.jscp-today):not(.jscp-selected):hover{background-color:#eee}.jscp-wrapper .jscp-container .jscp-month-navigate-button{background:none;background-color:#eee;border:none;padding:5px 8px;line-height:1;margin:0 3px;cursor:pointer;border-radius:3px}.jscp-wrapper .jscp-container .jscp-month-navigate-button:hover{background-color:#333;color:#fff}.jscp-wrapper.focused .jscp-container{display:block}",""]),e.exports=t},function(e,t,n){"use strict";e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n=function(e,t){var n=e[1]||"",r=e[3];if(!r)return n;if(t&&"function"==typeof btoa){var a=(i=r,s=btoa(unescape(encodeURIComponent(JSON.stringify(i)))),c="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(s),"/*# ".concat(c," */")),o=r.sources.map((function(e){return"/*# sourceURL=".concat(r.sourceRoot||"").concat(e," */")}));return[n].concat(o).concat([a]).join("\n")}var i,s,c;return[n].join("\n")}(t,e);return t[2]?"@media ".concat(t[2]," {").concat(n,"}"):n})).join("")},t.i=function(e,n,r){"string"==typeof e&&(e=[[null,e,""]]);var a={};if(r)for(var o=0;o<this.length;o++){var i=this[o][0];null!=i&&(a[i]=!0)}for(var s=0;s<e.length;s++){var c=[].concat(e[s]);r&&a[c[0]]||(n&&(c[2]?c[2]="".concat(n," and ").concat(c[2]):c[2]=n),t.push(c))}},t}},function(e,t,n){"use strict";n.r(t);n(0);const r=["January","February","March","April","May","June","July","August","September","October","November","December"],a=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sept","Oct","Nov","Dec"],o=e=>document.createElement(e),i=e=>document.querySelector(e),s=(e,t,n)=>{const r=new Date;return n==r.getDate()&&t==r.getMonth()+1&&e==r.getFullYear()},c=(e,t)=>{const n=t?"add":"remove";e.classList[n]("focused")},l=(e,t)=>{for(var n=t.parentNode;null!=n;){if(n==e)return!0;n=n.parentNode}return!1},p=(e,t)=>{let n=(e=>-1!=e.indexOf("/")?"/":-1!=e.indexOf(".")?".":-1!=e.indexOf(" ")?" ":-1!=e.indexOf("-")?"-":void 0)(t);return t.split(n).map(t=>-1!=t.toLocaleLowerCase().indexOf("d")?((e,t)=>{const n=e.getDate();switch(t.length){case 2:return n<10?"0"+n:n;default:return n}})(e,t):-1!=t.toLocaleLowerCase().indexOf("m")?((e,t)=>{const n=e.getMonth()+1;switch(t.length){case 4:return r[n-1];case 3:return a[n-1];case 2:return n<10?"0"+n:n;default:return n}})(e,t):-1!=t.toLocaleLowerCase().indexOf("y")?((e,t)=>{const n=e.getFullYear();switch(t.length){case 2:let e=String(x);return e.slice(e.length-2,e.length);default:return n}})(e,t):void 0).join(n)},d=()=>{const e=o("div");return e.classList="jscp-month-and-year",e.appendChild((()=>{const e=o("label");return e.classList="jscp-month-label",e})()),e.appendChild((()=>{const e=o("label");return e.classList="jscp-year-label",e})()),e},u=()=>{const e=o("div");return e.classList="jscp-calendar-header",e.appendChild((()=>{const e=o("button");return e.classList="jscp-month-navigate-button jscp-prev-button",e.innerText="<",e})()),e.appendChild(d()),e.appendChild((()=>{const e=o("button");return e.classList="jscp-month-navigate-button jscp-next-button",e.innerText=">",e})()),e};t.default=class{constructor(e,t){this.options={format:"dd/mm/yyyy",onSelect:e=>e,...t},this.$elem=e,this.initialized=!1}init(){this.today=new Date,this.year=this.today.getFullYear(),this.month=this.today.getMonth()+1,this.selectedDate={year:null,month:null,day:null},this.$calenderWrapper=(()=>{const e=o("div");return e.classList="jscp-wrapper",e})(),this.$calenderContainer=(()=>{const e=o("div");return e.classList="jscp-container",e})(),this.$calendarHeader=this.$calenderContainer.appendChild(u()),this.$monthLabel=this.$calendarHeader.querySelector(".jscp-month-label"),this.$yearLabel=this.$calendarHeader.querySelector(".jscp-year-label"),this.$monthDaysList=this.$calenderContainer.appendChild((()=>{const e=o("ul");return e.classList="jscp-days-in-month",e})()),this.$nextMonthButton=this.$calendarHeader.querySelector(".jscp-next-button"),this.$prevMonthButton=this.$calendarHeader.querySelector(".jscp-prev-button"),this.updateCalendar(),this.addEventListeners(),this.appendPluginDOM(),this.initialized=!0}appendPluginDOM(){this.$elem.setAttribute("readonly",!0),this.$elem.classList.add("jscp-input"),this.$elem.parentNode.insertBefore(this.$calenderWrapper,this.$elem.nextSibling),this.$calenderWrapper.append(this.$elem),this.$calenderWrapper.append(this.$calenderContainer)}updateCalendar(){this.updateMonthDaysList(),this.updateMonthNameLabel(),this.updateYearLabel()}updateMonthNameLabel(){this.$monthLabel.innerText=r[this.month-1]}updateYearLabel(){this.$yearLabel.innerText=this.year}updateMonthDaysList(){this.$monthDaysList.innerHTML="",this.$monthDaysList.append(((e,t)=>{const n=new Date(e,t,0).getDate(),r=document.createDocumentFragment();for(let a=1;a<=n;a++){const n=s(e,t,a)?"jscp-today":"",i=o("li");i.classList="jscp-day "+n,i.innerText=a,r.appendChild(i)}return r})(this.year,this.month)),this.$monthDaysList.querySelectorAll(".jscp-day").forEach(e=>{e.onclick=e=>this.dayClickCallback(e)})}addEventListeners(){this.$nextMonthButton.onclick=()=>this.nextMonthClickCallback(),this.$prevMonthButton.onclick=()=>this.prevMonthClickCallback(),this.$elem.onfocus=()=>c(this.$calenderWrapper,!0),document.onclick=e=>{return t=this.$calenderWrapper,n=e.target,t!=n&&!l(t,n)&&c(this.$calenderWrapper,!1);var t,n}}nextMonthClickCallback(){this.month<r.length?this.month++:(this.month=1,this.year++),this.updateCalendar()}prevMonthClickCallback(){this.month>1?this.month--:(this.month=r.length,this.year--),this.updateCalendar()}dayClickCallback(e){const t=e.target.innerText,n=new Date(this.year,this.month-1,t);this.updateInputValue(p(n,this.options.format)),this.updateSelectedDay(e.target),this.options.onSelect(n)}updateInputValue(e){this.$elem.value=e}updateSelectedDay(e){i(".jscp-selected")&&i(".jscp-selected").classList.remove("jscp-selected"),e.classList.add("jscp-selected")}}}]).default}));
//# sourceMappingURL=index.js.map