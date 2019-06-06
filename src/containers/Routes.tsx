import * as React from 'react';
import { Switch, Route, Redirect, HashRouter } from 'react-router-dom';
import { PageHome } from './PageHome';
import { PageProducts } from './PageProducts';
import { PageContact } from './PageContact';

export class Routes extends React.Component {
  public render() {
    return (
      <Switch>
        <Route exact={true} path="/" component={PageHome} />
        <Route exact={true} path="/products" component={PageProducts} />
        <Route exact={true} path="/contact" component={PageContact} />
        <Redirect to="/" />
      </Switch>
    );
  }
}