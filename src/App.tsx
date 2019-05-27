import * as React from 'react';
import { Provider } from 'react-redux';
import { Counter } from './counter/Counter';
import { appModels } from './AppModels';
import { reactHot } from 'tsrex/utils';

class App extends React.Component {
  render() {
    return (
      <Provider store={appModels.createStore()}>
        <div>
          <h2>React App</h2>
          <p>Testing TSREx</p>
          <p>
            Values from NodeEnv comments = {process.env.comments}
            <br />
            numericValue = {process.env.numericValue}
            <br />
          </p>

          <p>isEnvDevelopment = {process.env.isEnvDevelopment}</p>
          <p>isEnvProduction = {process.env.isEnvProduction}</p>

          <hr />
          <p>ExRedux Counter</p>
          <Counter />
        </div>
      </Provider>
    );
  }
}

export default reactHot(App);
