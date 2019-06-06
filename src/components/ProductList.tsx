import * as React from 'react';
import { createJssStyle } from '../helper/styler';
import { IProductsResult } from '../service/interfaces/IProductsResult';
// ---------------------------------------------------------------------
// --- STYLE -----------------------------------------------------------
// ---------------------------------------------------------------------
const { classes } = createJssStyle({
  table: {
    width: '100%',

    '& td': {
      padding: '8px 32px'
    },
    '& tbody tr': {
      cursor: 'pointer',
      '&:hover': {
        backgroundColor: '#ddd'
      }
    },
  },
  box: {
    height: 32,
    width: 64
  }
});
// ---------------------------------------------------------------------
// --- PROPS -------------------------------------------------------
// ---------------------------------------------------------------------
interface Props {
  products: IProductsResult;
}
// ---------------------------------------------------------------------
// --- COMPONENT -------------------------------------------------------
// ---------------------------------------------------------------------
export class ProductList extends React.Component<Props> {
  render() {
    const { products } = this.props;
    return (
      <table className={classes.table}>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Year</th>
            <th>Pan Tone Code</th>
            <th>Color code</th>
            <th>Color sample</th>
          </tr>
        </thead>
        <tbody>
          {products.data.map((item, index) => (
            <tr key={index}>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>{item.year}</td>
              <td>{item.pantone_value}</td>
              <td>{item.color}</td>
              <td>
                <div className={classes.box} style={{ backgroundColor: item.color }} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  }
}
