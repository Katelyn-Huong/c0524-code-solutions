interface rangeReport {
  total: number;
  odds: number[];
  evens: number[];
  range: number[];
  average: number;
}

function getRangeReport(start: number, end: number): rangeReport {
  if (typeof start !== 'number' || typeof end !== 'number' || start > end) {
    throw new Error('invalid input');
  }
  const total = 0;
  const odds: number[] = [];
  const evens: number[] = [];
  const range: number[] = [];
  for (let i = start; i <= end; i++) {}
}
