export const sumPositiveNumbers = (num1, num2) => {
  if (num1 < 0 || num2 < 0) throw new Error("both number must be positive");
  return num1 + num2;
};
