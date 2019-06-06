import * as React from 'react';
import { Inject, Connection } from 'exredux';
import { ProductListModel } from '../service/models/ProductListModel';
import { modelStore } from '../service/modelStore';
import { Contact } from '../components/Contact';

class Props {
  @Inject productList: ProductListModel;
}

@Connection({
  modelStore,
  props: Props
})
export class PageContact extends React.Component<Props> {
  render() {
    return <Contact />;
  }
}
