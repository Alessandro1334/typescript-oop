// Static property method merupakan property atau method yang ada pada class itu sendiri

class Ayam {
  // Static menjadi bagian didalam class
  static kaki: number = 2;

  static jalan() {
    console.log(`ayam berjalan dengan ${this.kaki} kaki`);
  }

  getKaki() {
    console.log(Ayam.kaki)
  }
}

console.log(Ayam.jalan())

const ayam2 = new Ayam();
ayam2.getKaki();

// ------------------------
const ayam3 = new Ayam();
const ayam4 = new Ayam();
const ayam5 = new Ayam();
const ayam6 = new Ayam();

console.log(ayam3.getKaki())
console.log(ayam4.getKaki())
console.log(ayam5.getKaki())
console.log(ayam6.getKaki())

Ayam.kaki = 4;

console.log(ayam3.getKaki())
console.log(ayam4.getKaki())
console.log(ayam5.getKaki())
console.log(ayam6.getKaki())