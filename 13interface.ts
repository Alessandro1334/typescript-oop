// Interface merupakan perjanjian atau kontrak semua property atau method yang ada di dalam interface harus diimplementasi oleh class yang menggunakan suatu interface

interface AndroidPhone {
  name:string;
  menu(): void;
  home(): void;
  back(): void;
}

class Samsung implements AndroidPhone {
  name: string;
  constructor(name: string) {
    this.name = name;
  }
  menu(): void {
    console.log('menu tapped');
  }
  home(): void {
    console.log('home tapped');
  }
  back(): void {
    console.log('back tapped');
  }
}

class Asus implements AndroidPhone {
  name: string;
  constructor(name: string) {
    this.name = name;
  }
  menu(): void {
    console.log('menu tapped');
  }
  home(): void {
    console.log('home tapped');
  }
  back(): void {
    console.log('back tapped');
  }
}

class GameA {
  private phone: AndroidPhone;

  constructor(phone: AndroidPhone) {
    this.phone = phone;
  }

  back() {
    console.log('kembali ke menu utama di game');
  }

  menu() {
    this.phone.menu();
  }

  home() {
    this.phone.home();
  }
}

const samsung = new Samsung('Tipe A');

const game = new GameA(samsung);

game.home();
game.back();
game.menu();

// ---- interface apple phone

interface ApplePhone {
  home(): void;
}

class Iphone implements ApplePhone {
  name: string;

  constructor(name:string) {
    this.name = name;
  }

  home(): void {
    console.log('muncul global');
  }
}

const iphone = new Iphone('IPhone Se');

// const game2 = new GameA(iphone);