import React, { Component } from 'react'
import { Container, Row, Col } from 'reactstrap'
import ModalForm from './Components/Modal'
import DataTable from './Components/DataTable'
// import { Provider } from 'react-redux';
// import { createStore } from 'redux'

// const initialContacts = [
//   {
//     id: '1',
//     firstname: 'John',
//     lastname: 'Doe'
//   },
//   {
//     id: '2',
//     firstname: 'Karen',
//     lastname: 'Williams'
//   }
// ];


// const reducer = (state = initialContacts, action) => {
//   switch (action.type) {
//     case 'DELETE_ITEM':
//       return {
//         ...state,
//         items: state.items.filter(
//           item => item.id !== action.payload
//         )
//       };
//     // case 'ADD_ITEM':
//     //     return {
//     //         ...state,
//     //         items: [action.payload, ...state.items]
//     //     };
//     default:
//       return state;
//   }
// };

// const store = createStore(reducer);



class App extends Component {
  // state = {
  //   items: []
  // }

  render() {
    return (
      // <Provider store={store}>
      <Container className="App">
        <Row>
          <Col>
            <h1 style={{ margin: "20px 0" }}>Staff List</h1>
          </Col>
        </Row>
        <Row>
          <Col>
            <DataTable firstname={'Gavin'} />
          </Col>
        </Row>
        <Row>
          <Col>
            {/* <ModalForm buttonLabel="Add Item" addItem={this.addItem} /> */}
          </Col>
        </Row>
      </Container>
      // </Provider>
    )

  }
}

export default App