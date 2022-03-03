"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const simple_deep_copy_1 = __importDefault(require("./simple-deep-copy"));
describe("Simple Deep Copy", () => {
    it("should return an empty array with no params", () => {
        const expected = "[]", result = JSON.stringify((0, simple_deep_copy_1.default)());
        expect(expected).toBe(result);
    });
    it("should return a copy of the array passed to it", () => {
        const initialData = [1, 2, 4], result = JSON.stringify((0, simple_deep_copy_1.default)(initialData));
        expect(JSON.stringify(initialData)).toBe(result);
    });
    it("should return a copy of the object passed to it", () => {
        const initialData = { title: "test" }, result = JSON.stringify((0, simple_deep_copy_1.default)(initialData));
        expect(JSON.stringify(initialData)).toBe(result);
    });
});
