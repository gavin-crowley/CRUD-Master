import React, { Component } from 'react'
import { Table, Button } from 'reactstrap';
import axios from 'axios';

class DataTable extends Component {

  constructor(props) {
    super(props);
    this.state = {
      items: []
    }
    this.deleteItem = this.deleteItem.bind(this);
  }

  // state = {
  //   items: []
  // }

  componentDidMount = () => {
    this.getItemList();
  }

  getItemList() {
    axios.get('http://localhost:4000/items')
      .then((response) => {
        console.log(response);
        this.setState({
          items: response.data
        });
      })
      .catch((error) => {
        console.log(error);
      })
  }

  // To delete any employee
  deleteItem(id) {
    axios.get('http://localhost:4000/items/deleteItem/' + id)
      .then(() => {
        console.log('Employee Deleted !!!')
      })
      .catch((error) => {
        console.log(error)
      })
    this.getItemList();
  }

  render() {
    const itemList = this.state.items && this.state.items.map((item, i) => {
      return (
        <tr key={i}>
          <td>{item.firstName}</td>
          <td>{item.lastName}</td>
          <td>
            <div>
              {' '}
              <Button color="danger" onClick={() => this.deleteItem(item._id)}>Delete</Button>
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
}

export default DataTable