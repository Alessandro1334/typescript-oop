// Interface hanya bisa menggunakan object type

// type Phone = string;
// type PC = number;

// type BBB = {
//   name: string
// }

// interface AAA {
//   name: string;
// }


// -------------------------
// Interface bisa di merge, sedangkan type tidak bisa

interface Dinosaurus {
  name:string;
}

interface Dinosaurus {
  weight: number;
}

class Dino implements Dinosaurus {
  name: string;
  weight: number;
}

// --------------------------
// Type
// type Dinos = {
//   name: string;
// }

// type Dinos = {
//   weight: number;
// }

// ----------------------------
// type Name = {
//   name: string;
// }

// type Age = {
//   age: number;
// }

// type Employee = Name & Age;
// type Employee2 = Name | Age;

// const employee: Employee = {
//   name: 'ssd',
//   age: 234,
// }

// Interface digunakan untuk object dari class
// Type digunakan untuk variabel atau function