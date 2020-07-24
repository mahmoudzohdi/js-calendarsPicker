export const createElement = (elementName) => document.createElement(elementName);
export const $ = (selector) => document.querySelector(selector);
export const isToday = (year, month, day) => {
  const today = new Date();
  return (
    day == today.getDate() &&
    month == today.getMonth() + 1 &&
    year == today.getFullYear()
  );
}

export const formatDate = (date) => {
  return new Intl.DateTimeFormat('en-US').format(date)
}

export const focusClass = (element, add) => {
  const method = add ? 'add' : 'remove';
  element.classList[method]('focused');
}

export const isElementOutsidePlugin = (parent, element) => {

  return parent != element && !isDescendant(parent, element);
}
const isDescendant = (parent, child) => {
  var node = child.parentNode;
  while (node != null) {
      if (node == parent) {
          return true;
      }
      node = node.parentNode;
  }
  return false;
}