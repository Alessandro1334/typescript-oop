class Animal {
  name: string;

  constructor(name: string) {
    this.name = name;
  }
}

interface IShark extends Animal {
  swim(): void;
  getAnimal(): void;
}

class Shark implements IShark {
  name: string;

  constructor(name:string) {
    this.name = name;
  }

  swim(): void {
    console.log('berenang');
  }

  getAnimal(): void {
    console.log(`${this.name}`)
  }
}

// Try
const animal = new Shark('Hiu Martil');

animal.swim();
animal.getAnimal();
