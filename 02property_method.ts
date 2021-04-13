// Property merupakan sifat dan prilaku yang ada pada class
class Hewan2 {
  nama: string = ''
  kaki: number = 0
  mamalia: boolean = false

  bernafas (){
    console.log(`${this.nama} sedang bernafas`)
  }
}

const hewan2 = new Hewan2
console.log(hewan2)

hewan2.nama = 'katak'
hewan2.kaki = 4
console.log(hewan2)

hewan2.bernafas()