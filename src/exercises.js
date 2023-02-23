// https://eloquentjavascript.net/05_higher_order.html#h_TcUD2vzyMe

// These are borrowed from Eloquent Javascript.
// map and reduce are now built into Array in ES6
function map(arr, func) {
  let result = [];
  for (let element of arr) {
    result.push(func(element));
  }
  return result;
}

function reduce(array, combine, start) {
  let current = start;
  for (let el of array) {
    current = combine(current, el);
  }
  return current;
}

export function flatten(arrs) {
  // TODO: Use map + concat to implement "flatten"
}

export function every(array, test) {}

export function dominantDirection(text) {}
