import * as React from 'react';
import { Inject, Connection } from 'exredux';
import { modelStore } from '../service/modelStore';
import { Loading } from '../components/Loading';
import { ProductList } from '../components/ProductList';
import { Failed } from '../components/Failed';
import { ProductItemModel } from '../service/models/ProductItemModel';

class Props {
  @Inject productItem: ProductItemModel;
}

@Connection({
  modelStore,
  props: Props
})
export class PageItems extends React.Component<Props> {
  componentDidMount() {
    const { productItem } = this.props;
    productItem.getProduct(1);
  }

  render() {
    const { productItem } = this.props;
    if (productItem.isLoading) {
      return <Loading />;
    }
    if (productItem.isFailed) {
      return <Failed />;
    }
    if (productItem.isCompleted) {
      // return <ProductList products={productList.response.data} />;
    }
    return null;
  }
}
