import simpleDeepCopy from "./simple-deep-copy/simple-deep-copy";
import generateRandomHexColor from "./generate-random-hex-color/generate-random-hex-color";
import debounce from "./debounce/debounce";

const cu_: {
  [key: string]: Function;
} = {
  simpleDeepCopy,
  generateRandomHexColor,
  debounce,
};

for (const prop in cu_) {
  if (cu_.hasOwnProperty(prop)) {
    module.exports[`cu_${prop}`] = cu_[prop];
  }
}
