'use strict';
/* exported takeRight */
function takeRight(array, count) {
  if (count >= array.length) {
    return [...array];
  }
  const result = [];
  const start = array.length - count;
  for (let i = start; i < array.length; i++) {
    result.push(array[i]);
  }
  return result;
}
