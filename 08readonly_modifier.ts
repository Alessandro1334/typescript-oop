// Readonly Modifier digunakan agar suatu properi tidak bisa diubah datanya

class Person {
  readonly gender: string = 'Pria';
}

const person = new Person();
// person.gender = 'Wanita';