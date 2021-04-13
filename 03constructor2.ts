class Hewan3 {
  nama: string
  kaki: number

  constructor(nama: string, kaki: number) {
    this.nama = nama
    this.kaki = kaki
  }
}

const burung = new Hewan3('burung',2)
console.log(burung)


// -----------------------------
class Hewan31 {
  constructor(public nama:string, public kaki: number){

  }
}
const burung2 = new Hewan31('burung',2)
console.log(burung)