import React, { Component } from 'react'
import { Table, Button } from 'reactstrap';
import { connect } from 'react-redux';

class DataTable extends Component {

  onDeleteClick = (id, dispatch) => {
    dispatch({ type: 'DELETE_ITEM', payload: id });
  };

  render() {
    // return (
    // <React.Fragment>
    {/* // {value => { */ }
    // console.log(this.props)
    // const { items } = this.props;
    // console.log(items)
    const itemList = this.props.items.map(item => {
      return (
        <tr key={item.id}>
          <td>{item.firstname}</td>
          <td>{item.lastname}</td>
          <td>
            <div>
              {' '}
              {/* <Button color="danger" onClick={this.onDeleteClick.bind(this, item.id, this.props.dispatch)}>Delete</Button> */}
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
    {/* // }} */ }

    // </React.Fragment>

  }
}

const mapStateToProps = state => ({
  // firstname: state.firstname,
  // lastname: state.lastname
  items: state.items
})

export default connect(mapStateToProps)(DataTable)