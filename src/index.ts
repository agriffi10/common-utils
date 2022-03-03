import simpleDeepCopy from "./simple-deep-copy/simple-deep-copy";

const cu_: {
  [key: string]: Function;
} = {
  simpleDeepCopy,
};

for (const prop in cu_) {
  if (cu_.hasOwnProperty(prop)) {
    module.exports[`cu_${prop}`] = cu_[prop];
  }
}
