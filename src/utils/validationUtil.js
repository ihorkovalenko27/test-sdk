export const validation = (value, type) => {
  if (!value) {
    return `${value} is empty`;
  }
  if (typeof value === type) {
    return value;
  }

  throw new TypeError(
    `Change ${value} type to: ${type}, cause you set type ${typeof value}`
  );
};
