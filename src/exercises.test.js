import { describe, expect, test } from "@jest/globals";
import { flatten, every, dominantDirection } from "./exercises";

describe("flatten", () => {
  test("flatten [[1,2],[3,4]]", () => {
    expect(
      flatten([
        [1, 2],
        [3, 4],
      ])
    ).toStrictEqual([1, 2, 3, 4]);
  });
});

describe("every", () => {
  test("all even", () => {
    expect(every([2, 4, 6], (x) => x % 2 === 0)).toBe(true);
  });

  test("all odd", () => {
    expect(every([1, 3, 5], (x) => x % 2 == 1)).toBe(true);
  });

  test("not all even", () => {
    expect(every([1, 2, 3], (x) => x % 2 == 0)).toBe(false);
  });
});

describe("dominantDirection", () => {
  test("ltr", () => {
    expect(dominantDirection("Hello!")).toBe("ltr");
  });

  test("rtl", () => {
    expect(dominantDirection("Hey, مساء الخير")).toBe("rtl");
  });
});
