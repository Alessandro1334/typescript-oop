// Return type berfungsi untuk membatasi type data yang di return oleh suatu method

class Burung {
  private kaki: number = 2;

  getKaki() {
    return this.kaki;
  }

  terbang(): void {
    console.log('terbang');
  }

  async makan(): Promise<number> {
    return 1223;
  }
}