import { ModelStore } from 'exredux';
import { ProductListModel } from './models/ProductListModel';
import { ProductItemModel } from './models/ProductItemModel';

export const modelStore = new ModelStore({
  devExtension: process.env.NODE_ENV === 'development',
  models: [ProductItemModel, ProductListModel]
});
