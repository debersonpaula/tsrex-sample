import { Model, Action, BaseHttpModel } from 'exredux';
import { IProductsResult } from '../interfaces/IProductsResult';
import { ProductListRepository } from '../repository/ProductListRepository';

@Model
export class ProductListModel extends BaseHttpModel<IProductsResult> {
  @Action
  public getProducts() {
    this.request(ProductListRepository.getProducts());
  }
}
