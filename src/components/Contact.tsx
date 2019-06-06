import * as React from 'react';
import { createJssStyle } from '../helper/styler';
// ---------------------------------------------------------------------
// --- STYLE -----------------------------------------------------------
// ---------------------------------------------------------------------
const { classes } = createJssStyle({
  formContact: {
    '& label': {
      fontWeight: 'bold',
      display: 'inline-block',
      width: 100
    }
  }
});
// ---------------------------------------------------------------------
// --- COMPONENT -------------------------------------------------------
// ---------------------------------------------------------------------
export class Contact extends React.Component<Props> {
  render() {
    return (
      <div>
        <p>Please fill the form below to send us a message: </p>
        <div className={classes.formContact}>
          <p>
            <label>Name</label>
            <input name="contact_name" onChange={this.handleFieldUpdate('contact_name')} />
          </p>
          <p>
            <label>Email</label>
            <input name="contact_email" onChange={this.handleFieldUpdate('contact_email')} />
          </p>
          <p>
            <button onClick={this.props.onSubmit}>Send</button>
          </p>
        </div>
      </div>
    );
  }

  handleFieldUpdate = (fieldName: string) => evt => {
    this.props.onFieldUpdate(fieldName, evt.target.value);
  }
}
// ---------------------------------------------------------------------
// --- PROPS -----------------------------------------------------------
// ---------------------------------------------------------------------
interface Props {
  onFieldUpdate: (fieldName: string, value: string) => void;
  onSubmit: () => void;
}
