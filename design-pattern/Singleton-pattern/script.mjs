class Counter {

  constructor() {
    this.count = 0;
  }

  increment() {
    this.count++;
  }

  decrement() {
    this.count--
  }

}

export const counterInstance = new Counter();