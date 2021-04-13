// Generic, menjadikan sebuah class, function, atau inteface yang memiliki berbagai tipe data yang lebih dinamis
// Without Generic Type
function getData(value: any) {
  return value;
}

const data1 = getData(1231);

//With Generic Type

function getData2<T>(value: T): T {
  return value;
}

const data2 = getData2<string>("test");
console.log(data2.length);

const data3 = getData2<number>(1231313);
console.log(data3.toFixed(3));

