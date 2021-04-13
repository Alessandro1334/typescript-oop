// Constructor merupakan sebuah method yang akan dipanggil pertama kali ketika object dibuat menggunakan class
class Hewan1 {
  constructor(){
    console.log('constructor akan selalu dipanggil terlebih dahulu')
  }
}

const hewan1 = new Hewan1()