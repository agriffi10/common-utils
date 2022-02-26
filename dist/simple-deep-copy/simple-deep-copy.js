"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const simpleDeepCopy = (data = []) => {
    return JSON.parse(JSON.stringify(data));
};
exports.default = simpleDeepCopy;
