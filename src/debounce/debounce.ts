const debounce = (
  callback: Function,
  timeout: number,
  ...args: any | null
): Function => {
  let timer: ReturnType<typeof setTimeout>;
  return (...args: any) => {
    clearTimeout(timer);
    timer = setTimeout(() => callback.apply(this, ...args), timeout);
  };
};

export default debounce;
