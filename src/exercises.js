import { SCRIPTS } from "./script_data";
import _ from "lodash";

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

export function characterScript(c) {
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
  return arrs.reduce((a, b) => a.concat(b), []);
}

// often called "all" (see also "any")
export function every(array, test) {
  let truthValues = array.map(test);
  return truthValues.reduce((x, y) => x && y, true);
}

// find the most common direction in the string `text`
export function dominantDirection(text) {
  // first, get the script corresponding to each character
  let directions = text
    .split("")
    .map(characterScript)
    .filter((x) => x != null)
    .map((obj) => obj.direction);

  let groups = _.groupBy(directions, (x) => x);
  let [maxDir] = _.maxBy(Object.entries(groups), ([k, vs]) => vs.length);
  return maxDir;
}
