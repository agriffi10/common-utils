const debounce = (callback: Function, timeout: number): Function => {
  let timer: ReturnType<typeof setTimeout>;
  return (immediate: boolean = false, ...args: any[]) => {
    clearTimeout(timer);
    if (immediate) {
      callback.call(this, ...args);
    } else timer = setTimeout(() => callback.call(this, ...args), timeout);
  };
};

export default debounce;
