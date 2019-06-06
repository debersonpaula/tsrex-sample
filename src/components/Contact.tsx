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
export class Contact extends React.Component {
  render() {
    return (
      <div>
        <p>Please fill the form below to send us a message: </p>
        <div className={classes.formContact}>
          <p>
            <label>Name</label>
            <input name="contact_name" />
          </p>
          <p>
            <label>Email</label>
            <input name="contact_email" />
          </p>
          <p>
            <button>Send</button>
          </p>
        </div>
      </div>
    );
  }
}
