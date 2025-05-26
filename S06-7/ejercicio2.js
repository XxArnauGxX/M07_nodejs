export function getMultiplicationTable(num) {
  if (num > 5 || num < 2) {
    return null;
  }
  let table = [];
  for (let i = 0; i <= 10; i++) {
    let number = num * i;
    table.push(number);
  }
  return table;
}
