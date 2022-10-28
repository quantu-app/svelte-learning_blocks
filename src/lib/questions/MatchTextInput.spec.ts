import '@testing-library/jest-dom'
import { inputTextChecker } from './MatchTextInput';

describe("inputTextChecker", () => {
  it("Returns true when the user input is correct", () => {
    expect(inputTextChecker("a", ["a", "b", "c"])).toBe(true);
    expect(inputTextChecker(" FOO ", ["foo", "bar", "baz"], [
      (s: string) => s.trim(),
      (s: string) => s.toLowerCase()
    ])).toBe(true)

    expect(inputTextChecker("cat", [/^[cbh]at/])).toBe(true);
    expect(inputTextChecker("The number is 100.5", [
      /(.*)number(.*)\s100+\.[0-9]{1}/
    ])).toBe(true);
  });

  it("Returns false when the user input is incorrect", () => {
    expect(inputTextChecker("d", ["a", "b", "c"])).toBe(false);
    expect(inputTextChecker("that", [/^[cbh]at]/])).toBe(false);
  });
})