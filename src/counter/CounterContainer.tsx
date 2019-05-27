import * as React from 'react';
import { Connection, Inject } from 'exredux';
import { appModels } from '../AppModels';
import { CounterModel } from './CounterModel';
import { ICounter } from './ICounter';
import { CounterComponent } from './CounterComponent';

class ModelProps {
  @Inject(CounterModel) counterModel?: ICounter;
}

@Connection({
  modelStore: appModels,
  props: ModelProps,
})
export class CounterContainer extends React.Component<ModelProps> {
  render() {
    return (
      <CounterComponent counterModel={this.props.counterModel} />
    );
  }
}
