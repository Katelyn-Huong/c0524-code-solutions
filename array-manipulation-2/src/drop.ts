/* exported drop */
function drop(array: any[], count: number): any[] {
  const result = [];
  for (let i = count; i < array.length; i++) {
    result.push(array[i]);
  }
  return result;
}
