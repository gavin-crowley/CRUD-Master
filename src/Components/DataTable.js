import React from 'react'
import { Table, Button } from 'reactstrap';
import { Consumer } from '../context';
import { Context } from '../context'

const DataTable = () => (
  <Consumer>
    {value => {
      const { deleteItem } = value;
      const items = Context.items.map(item => {
        return (
          <tr key={item.id}>
            <td>{item.firstname}</td>
            <td>{item.lastname}</td>
            <td>
              <div>
                {' '}
                <Button color="danger" onClick={() => deleteItem(item.id)}>Delete</Button>
              </div>
            </td>
          </tr>
        )
      })

      return (
        <Table responsive hover>
          <thead>
            <tr>
              <th>Firstname</th>
              <th>Lastname</th>
            </tr>
          </thead>
          <tbody>
            {items}
          </tbody>
        </Table>
      )
    }}
  </Consumer>
)

export default DataTable