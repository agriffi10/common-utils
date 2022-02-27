import debounce from "./debounce";

describe("Debounce", () => {
  jest.useFakeTimers();
  it("should not call the callback immediately", () => {
    const callbackFn = jest.fn();
    debounce(() => callbackFn(), 150);
    debounce(() => callbackFn(), 150);
    debounce(() => callbackFn(), 150);
    setTimeout(() => {
      expect(callbackFn).toHaveBeenCalledTimes(1);
    }, 500);
  });
});
