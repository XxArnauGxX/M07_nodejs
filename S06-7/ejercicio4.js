export function getResult(operation, num1, num2) {
  switch (operation) {
    case "suma":
      return num1 + num2;
    case "resta":
      return num1 - num2;
    case "multiplicacion":
      return num1 * num2;
    case "division":
      if (num2 === 0) {
        return "Cannot be divided by 0";
      }
      return num1 / num2;
    default:
      return null;
  }
}
