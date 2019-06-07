import { Model, Action, Inject, Trigger } from 'exredux';
import { ProductItemModel } from './ProductItemModel';

@Model
export class RouterModel {
  pathname = '';

  @Inject productItem?: ProductItemModel;

  @Action
  routeChange(pathname: string) {
    this.pathname = pathname;
    const path = pathname.split('/');
    const page = path[1];

    if (page === 'item') {
      const productId = parseInt(path[2]);
      this.reloadProductItem(productId);
    }
  }

  reloadProductItem(productId: number) {
    this.productItem.getProduct(productId);
  }

  @Trigger(ProductItemModel, 'completed')
  protected itemModelCompleted() {
    // tslint:disable-next-line: no-console
    console.log('Item Product Reloaded!');
  }
}
