export const validation = (value, type) => {
  if (!value) return `Value is empty`;

  if (typeof value === type) return value;

  throw new TypeError(
    `Change ${value} type to: ${type}, cause you send type ${typeof value}`
  );
};
