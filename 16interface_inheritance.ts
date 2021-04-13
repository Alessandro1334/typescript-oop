interface Vehicle {
  name: string;
  wheel: number;
}

interface ICar extends Vehicle {
  doors: number;
}

class Civic implements ICar {
  name: string = 'Civic';
  wheel: number = 4;
  doors: number = 4;
}