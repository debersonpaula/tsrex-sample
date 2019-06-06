import { Model, Action } from 'exredux';

@Model
export class ContactModel {
  contact_name: string;
  contact_email: string;

  doFieldUpdate = (fieldName: string, value: string) => {
    this[fieldName] = value;
  }

  @Action
  doSubmit() {
    // tslint:disable-next-line: no-console
    console.log('Dados submetidos = ', {
      contact_name: this.contact_name,
      contact_email: this.contact_email
    });
  }
}
