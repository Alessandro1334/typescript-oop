// Method Overriding berfungsi untuk me-replace method yang ada di parent class

class Hewan6 {
  name: string = '';

  bernafas() {
    console.log('sedang bernafas');
  }
}

// class Katak7 extends Hewan6 {
//   bernafas() {
//     console.log('malas bernafas');
//   }
// }

// const katak7 = new Katak7;
// katak7.bernafas();