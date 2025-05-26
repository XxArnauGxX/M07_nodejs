export function getFactorial(num) {
  let resultado = 1;
  for (let i = 1; i <= num; i++) {
    resultado = resultado * i;
  }
  return resultado;
}
