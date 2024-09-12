type FunctionStore = {
  [key: string]: Function;
};

const functionStore: FunctionStore = {};
let functionIdCounter = 0;

export function storeFunction(func: Function): string {
  const id = `__func_${functionIdCounter++}__`;
  functionStore[id] = func;

  return id;
}

export function retrieveFunction(id: string): Function | undefined {
  return functionStore[id];
}
