/* exported take */
function take(array: any[], count: number): any[] {
  const result = [];
  for (let i = 0; i < count && i < array.length; i++) {
    result.push(array[i]);
  }
  return result;
}
