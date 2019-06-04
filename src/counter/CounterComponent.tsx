import * as React from 'react';
import { CounterModel } from './CounterModel';

class Props {
  counterModel: CounterModel;
}

export class CounterComponent extends React.Component<Props> {
  render() {
    const { counterModel } = this.props;
    return (
      <div>
        Counter = {counterModel.counter}
        <br />
        <button onClick={counterModel.add}>Add</button>
        <br />
      </div>
    );
  }
}
