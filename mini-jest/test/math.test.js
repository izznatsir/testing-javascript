import {test, expect} from '../lib/main.js'
import {add, substract} from './math.js'

test("Add b to a", () => {
  const result = add(1, 2);
  const expected = 3;

  expect(result).toBe(expected);
})

test("Substract b from a", () => {
  const result = substract(2, 1);
  const expected = 1;

  expect(result).toBe(expected);
})
