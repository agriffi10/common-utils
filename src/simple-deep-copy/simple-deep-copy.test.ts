import simpleDeepCopy from "./simple-deep-copy";

describe("Simple Deep Copy", () => {
  it("should return an empty array with no params", () => {
    const expected = "[]",
      result = JSON.stringify(simpleDeepCopy());
    expect(expected).toBe(result);
  });

  it("should return a copy of the array passed to it", () => {
    const initialData = [1, 2, 4],
      result = JSON.stringify(simpleDeepCopy(initialData));
    expect(JSON.stringify(initialData)).toBe(result);
  });
  it("should return a copy of the object passed to it", () => {
    const initialData = { title: "test" },
      result = JSON.stringify(simpleDeepCopy(initialData));
    expect(JSON.stringify(initialData)).toBe(result);
  });
});
