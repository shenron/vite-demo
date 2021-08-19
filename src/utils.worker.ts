import { expose } from 'comlink';

export type WObj = {
  counter: number,
  inc: () => number,
}

const obj: WObj = {
  counter: 0,
  inc() {
    this.counter += 1;
    return this.counter;
  },
};

expose(obj);
