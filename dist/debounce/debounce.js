"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const debounce = (callback, timeout, immediate = false, ...args) => {
    let timer;
    if (immediate) {
        return (...args) => {
            callback.apply(this, ...args);
        };
    }
    else {
        return (...args) => {
            clearTimeout(timer);
            timer = setTimeout(() => callback.apply(this, ...args), timeout);
        };
    }
};
exports.default = debounce;
