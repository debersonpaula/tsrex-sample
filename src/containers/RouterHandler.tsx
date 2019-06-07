import * as React from 'react';
import { withRouter, RouteComponentProps } from 'react-router-dom';
import { ProductItemModel } from '../service/models/ProductItemModel';
import { Inject, Connection } from 'exredux';
import { modelStore } from '../service/modelStore';

class ModelProps {
  @Inject productItem?: ProductItemModel;
}

type Props = RouteComponentProps & ModelProps;

@Connection({
  modelStore,
  props: ModelProps
})
class RouterHandler extends React.Component<Props> {
  render() {
    return <React.Fragment />;
  }

  componentDidMount() {
    const { history } = this.props;
    this.reloadProductItem(history.location.pathname);
    
    history.listen((location, action) => {
      this.reloadProductItem(location.pathname);
    });
  }

  reloadProductItem(pathname: string) {
    const { productItem } = this.props;
    const path = pathname.split('/');

    if (path[1] === 'item') {
      const productId = parseInt(path[2]);
      productItem.getProduct(productId);
    }
  }
}

export default withRouter(RouterHandler);
