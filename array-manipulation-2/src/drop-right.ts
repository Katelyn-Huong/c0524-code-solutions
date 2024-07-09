/* exported dropRight */
function dropRight(array: any[], count: number): any[] {
  if (count >= array.length) {
    return [];
  }
  const result: any[] = [];
  const end = array.length - count;
  for (let i = 0; i < end; i++) {
    result.push(array[i]);
  }
  return result;
}
