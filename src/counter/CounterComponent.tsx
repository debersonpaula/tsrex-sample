import * as React from 'react';
import { ICounter } from './ICounter';

class Props {
  counterModel: ICounter;
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
