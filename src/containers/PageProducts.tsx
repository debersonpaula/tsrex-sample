import * as React from 'react';
import { Inject, Connection } from 'exredux';
import { ProductListModel } from '../service/models/ProductListModel';
import { modelStore } from '../service/modelStore';
import { Loading } from '../components/Loading';
import { ProductList } from '../components/ProductList';
import { Failed } from '../components/Failed';

class Props {
  @Inject productList: ProductListModel;
}

@Connection({
  modelStore,
  props: Props
})
export class PageProducts extends React.Component<Props> {
  componentDidMount() {
    const { productList } = this.props;
    productList.getProducts();
  }

  render() {
    const { productList } = this.props;
    if (productList.isLoading) {
      return <Loading />;
    }
    if (productList.isFailed) {
      return <Failed />;
    }
    if (productList.isCompleted) {
      return <ProductList products={productList.response.data} />;
    }
    return null;
  }
}
