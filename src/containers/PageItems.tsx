import * as React from 'react';
import { Inject, Connection } from 'exredux';
import { Loading } from '../components/Loading';
import { Failed } from '../components/Failed';
import { ProductItemModel } from '../service/models/ProductItemModel';
import { ProductItem } from '../components/ProductItem';

class Props {
  @Inject productItem: ProductItemModel;
}

@Connection(Props)
export class PageItems extends React.Component<Props> {
  render() {
    const { productItem } = this.props;
    if (productItem.isLoading) {
      return <Loading />;
    }
    if (productItem.isFailed) {
      return <Failed />;
    }
    if (productItem.isCompleted) {
      return <ProductItem product={productItem.response.data} />;
    }
    return null;
  }
}
