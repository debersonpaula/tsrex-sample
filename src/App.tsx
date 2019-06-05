import * as React from 'react';
import { Provider } from 'exredux';
import { modelStore } from './service/modelStore';

class App extends React.Component {
  render() {
    return (
      <Provider modelStore={modelStore}>
        <div>
          <h2>React App</h2>
          <p>Testing TSREx</p>
          <p>ExRedux Counter: </p>
        </div>
      </Provider>
    );
  }
}

export default App;
