"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const simple_deep_copy_1 = __importDefault(require("./simple-deep-copy/simple-deep-copy"));
const cu_ = {
    simpleDeepCopy: simple_deep_copy_1.default,
};
for (const prop in cu_) {
    if (cu_.hasOwnProperty(prop)) {
        module.exports[`cu_${prop}`] = cu_[prop];
    }
}
