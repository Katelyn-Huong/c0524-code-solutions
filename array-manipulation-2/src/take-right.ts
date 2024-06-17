/* exported takeRight */
function takeRight(array: any[], count: number): any[] {
  if (count >= array.length) {
    return [...array];
  }
  const result: any[] = [];
  const start = array.length - count;
  for (let i = start; i < array.length; i++) {
    result.push(array[i]);
  }
  return result;
}
