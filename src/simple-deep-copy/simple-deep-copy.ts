const simpleDeepCopy = (
  data: Array<any> | object = []
): Array<any> | object => {
  return JSON.parse(JSON.stringify(data));
};

export default simpleDeepCopy;
