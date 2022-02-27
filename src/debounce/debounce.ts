const debounce = (
  callback: Function,
  timeout: number,
  immediate: boolean = false,
  ...args: any | null
): Function => {
  let timer: ReturnType<typeof setTimeout>;
  if (immediate) {
    return (...args: any) => {
      callback.apply(this, ...args);
    };
  } else {
    return (...args: any) => {
      clearTimeout(timer);
      timer = setTimeout(() => callback.apply(this, ...args), timeout);
    };
  }
};

export default debounce;
