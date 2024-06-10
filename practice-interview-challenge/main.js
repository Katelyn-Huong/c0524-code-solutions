"use strict";
function getRangeReport(start, end) {
    if (typeof start !== 'number' || typeof end !== 'number' || start > end) {
        throw new Error('invalid input');
    }
    let total = 0;
    const odds = [];
    const evens = [];
    const range = [];
    for (let i = start; i <= end; i++) { }
}
