'use strict';
/* exported dropRight */
function dropRight(array, count) {
  if (count >= array.length) {
    return [];
  }
  const result = [];
  const end = array.length - count;
  for (let i = 0; i < end; i++) {
    result.push(array[i]);
  }
  return result;
}
