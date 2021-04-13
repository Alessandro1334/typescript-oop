type Generics2<T> = T;

function genericsFunction2<T>(value: T): Generics2<T> {
  return value;
}

console.log(genericsFunction2('Testing String'))
console.log(genericsFunction2(111))
console.log(genericsFunction2(true))