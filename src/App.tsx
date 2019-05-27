import * as React from 'react';
import { Provider } from 'react-redux';
import { CounterContainer } from './counter/CounterContainer';
import { appModels } from './AppModels';
import { reactHot } from 'tsrex/utils';

class App extends React.Component {
  render() {
    return (
      <Provider store={appModels.createStore()}>
        <div>
          <h2>React App</h2>
          <p>Testing TSREx</p>
          <p>ExRedux Counter: </p>
          <CounterContainer />
        </div>
      </Provider>
    );
  }
}

export default reactHot(module, App);
