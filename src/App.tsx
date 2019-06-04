import * as React from 'react';
import { Provider } from 'exredux';
import { CounterContainer } from './counter/CounterContainer';
import { appModels } from './AppModels';

class App extends React.Component {
  render() {
    return (
      <Provider modelStore={appModels}>
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

export default App;
