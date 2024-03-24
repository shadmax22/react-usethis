interface SetReturn {
  value: any[];
  index: any[] | null;
}

export function set(
  value: any[],
  index: any[] | null = null
): { update: SetReturn } {
  return { update: { value: value, index: index } };
}
