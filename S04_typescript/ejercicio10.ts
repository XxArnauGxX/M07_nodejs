let valor: any = '42';

let numero: number = valor as number;

let numero2: number = parseInt(valor as string);

console.log(numero + 8);
console.log(numero2 + 8);