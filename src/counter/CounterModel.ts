import { Model, Action } from 'exredux';
import { ICounter } from './ICounter';

@Model
export class CounterModel implements ICounter {
  counter = 0;
  
  @Action add() {
    this.counter += 1;
  }
}
