const debounce = (callback: Function, timeout: number): Function => {
  let timer: ReturnType<typeof setTimeout>;
  return (immediate: boolean = false, ...args: any | null) => {
    clearTimeout(timer);
    if (immediate) {
      callback.apply(this, ...args), timeout;
    } else timer = setTimeout(() => callback.apply(this, ...args), timeout);
  };
};

export default debounce;
