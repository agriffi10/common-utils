import debounce from "./debounce";

describe("Debounce", () => {
  jest.useFakeTimers();

  it("should not call the callback immediately", () => {
    const callbackFunc = jest.fn();
    const debouncedFunc = debounce(callbackFunc, 300);
    for (let i = 0; i < 100; i++) {
      debouncedFunc();
    }
    jest.runAllTimers();
    expect(callbackFunc).toBeCalledTimes(1);
  });

  it("should call the function immediately when passing immediate flag", () => {
    const callbackFunc = jest.fn();
    const debouncedFunc = debounce(callbackFunc, 300);
    for (let i = 0; i < 5; i++) {
      debouncedFunc(true);
    }
    jest.runAllTimers();
    expect(callbackFunc).toBeCalledTimes(5);
  });

  it("should call with my parameters", () => {
    const myFunction = jest.fn();
    const myDebouncedFunction = debounce(myFunction, 300);
    myDebouncedFunction(true, 1);
    myDebouncedFunction(false, 1);
    jest.runAllTimers();
    expect(myFunction).toBeCalledTimes(2);
    expect(myFunction).toHaveBeenCalledWith(1);
  });
});
