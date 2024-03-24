export function keyFinder(
  { obj }: any,
  targetKey: any,
  currentKeys = [] as any,
  inner = false
): any {
  let result = [] as any;
  let value = [];

  for (let key in obj) {
    if (key === targetKey && (obj[key] ?? false)) {
      result.push({
        index: [...currentKeys, ...(obj[key].index ?? [])],
        value: obj[key].value,
      });
    } else if (typeof obj[key] === "object") {
      const nestedResult = keyFinder(
        { obj: obj[key] },
        targetKey,
        [...currentKeys, key],
        true
      );

      result = result.concat(nestedResult.obj);
      value = nestedResult.value;
    }
  }

  return inner
    ? { obj: result }
    : {
        result,
      };
}

// Example usage:
const data = {
  g: {
    gr: {
      keyfind: true,
    },
  },
  gb: {
    keyfind: true,
  },
};
