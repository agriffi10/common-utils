"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const debounce_1 = __importDefault(require("./debounce"));
describe("Debounce", () => {
    jest.useFakeTimers();
    it("should not call the callback immediately", () => {
        const callbackFunc = jest.fn();
        const debouncedFunc = (0, debounce_1.default)(callbackFunc, 300);
        for (let i = 0; i < 100; i++) {
            debouncedFunc();
        }
        jest.runAllTimers();
        expect(callbackFunc).toBeCalledTimes(1);
    });
    it("should call the function immediately when passing immediate flag", () => {
        const callbackFunc = jest.fn();
        const debouncedFunc = (0, debounce_1.default)(callbackFunc, 300, true);
        for (let i = 0; i < 5; i++) {
            debouncedFunc();
        }
        jest.runAllTimers();
        expect(callbackFunc).toBeCalledTimes(5);
    });
});
