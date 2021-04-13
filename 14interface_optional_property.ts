// Optional Property berfungsi untuk mengabaikan property yang ada di suatu interface yang beresifat optional

interface Teacher {
  name: string;
  age: number;
  // phone sebagai optional property
  phone?: string;
}

let teacher: Teacher = {name: 'Alessandro', age: 28};