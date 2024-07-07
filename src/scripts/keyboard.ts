export const compareKeyboardState = (
  e: KeyboardEvent,
  keys: { key: string; ctrl?: boolean; shift?: boolean; alt?: boolean }[]
): boolean => {
  for (let keyObj of keys) {
    if (
      e.code === keyObj.key &&
      !e.shiftKey === !keyObj.shift &&
      !e.altKey === !keyObj.alt &&
      !e.ctrlKey === !keyObj.ctrl
    ) {
      return true;
    }
  }
  return false;
};
