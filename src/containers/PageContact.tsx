import * as React from 'react';
import { Inject, Connection } from 'exredux';
import { modelStore } from '../service/modelStore';
import { Contact } from '../components/Contact';
import { ContactModel } from '../service/models/ContactModel';

class Props {
  @Inject contactModel: ContactModel;
}

@Connection({
  modelStore,
  props: Props
})
export class PageContact extends React.Component<Props> {
  render() {
    const { contactModel } = this.props;
    return <Contact contactForm={contactModel} />;
  }
}
