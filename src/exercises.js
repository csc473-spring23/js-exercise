import { SCRIPTS } from "./script_data";

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

function characterScript(c) {
  let code = c.codePointAt(0);
  for (let script of SCRIPTS) {
    if (
      script.ranges.some(([from, to]) => {
        return code >= from && code < to;
      })
    ) {
      return script;
    }
  }
  return null;
}

export function flatten(arrs) {
  // TODO: Use reduce + concat to implement "flatten"
}

export function every(array, test) {}

export function dominantDirection(text) {}
