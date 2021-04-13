interface Generics<T> {
  propA: T;
}

function genericsFunction<T>(value: T): Generics<T> {
  let data: Generics<T> = {
    propA: value
  }

  return data;
}

console.log(genericsFunction('Testing String'))
console.log(genericsFunction(111))
console.log(genericsFunction(true))