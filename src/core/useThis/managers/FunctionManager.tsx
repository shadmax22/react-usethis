type FunctionStore = {
  [key: string]: Function;
};

const function_collection: FunctionStore = {};
let functionIdCounter = 0;

export let FunctionManager = {
  collection: {},
} as {
  collection: {
    store: (func: Function) => string;
    retrive: (id: string) => Function;
    get: Object;
  };
  store: (obj: unknown) => unknown;
  fetch: (obj: Object) => Object;
};

FunctionManager.collection.store = (func: Function) => {
  const id = `__func_${functionIdCounter++}__`;
  function_collection[id] = func;

  return id;
};
FunctionManager.collection.retrive = (id: string) => {
  return function_collection[id];
};
FunctionManager.collection.get = () => {
  return function_collection;
};

FunctionManager.store = (obj: any): any => {
  if (typeof obj === "function") {
    return FunctionManager.collection.store(obj);
  } else if (Array.isArray(obj)) {
    return obj.map(FunctionManager.store);
  } else if (obj !== null && typeof obj === "object") {
    return Object.keys(obj).reduce((acc, key) => {
      acc[key] = FunctionManager.store(obj[key]);
      return acc;
    }, {} as any);
  }
  return obj;
};

FunctionManager.fetch = (obj: Object): Object => {
  if (
    typeof obj === "string" &&
    obj.startsWith("__func_") &&
    obj.endsWith("__")
  ) {
    return FunctionManager.collection.retrive(obj);
  } else if (Array.isArray(obj)) {
    return obj.map(FunctionManager.fetch);
  } else if (obj !== null && typeof obj === "object") {
    return Object.keys(obj).reduce<{ [key: string]: Object }>((acc, key) => {
      //@ts-ignore
      acc[key] = FunctionManager.fetch(obj[key]);
      return acc;
    }, {});
  }
  return obj;
};
