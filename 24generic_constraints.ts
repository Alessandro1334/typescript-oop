// function generic24<T>(arg: T): T {
//   console.log(arg.length);
//   return arg;
// }

interface Length {
  length: number;
}

function generics24<T extends Length>(arg: T): T {
  console.log(arg.length);
  return arg;
}

const generic24a = generics24('21313');
console.log(generic24a);

const generic24b = generics24({length:10, value:200});
console.log(generic24b);