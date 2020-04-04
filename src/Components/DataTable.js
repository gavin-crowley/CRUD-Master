import React, { Component } from 'react'
import { Table, Button } from 'reactstrap';

const DataTable = props => {

  const itemList = props.items.map(item => {
    return (
      <tr key={item.id}>
        <td>{item.firstname}</td>
        <td>{item.lastname}</td>
        <td>
          <div>
            {' '}
            <Button color="danger" onClick={() => props.deleteItem(item.id)}>Delete</Button>
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
        {itemList}
      </tbody>
    </Table>
  )

}

export default DataTable