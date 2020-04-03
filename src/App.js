import React, { Component } from 'react'
import { Container, Row, Col } from 'reactstrap'
import ModalForm from './Components/Modal'
import DataTable from './Components/DataTable'

const initialContacts = [
  {
    id: 1,
    firstname: 'John',
    lastname: 'Doe'
  },
  {
    id: 2,
    firstname: 'Karen',
    lastname: 'Williams'
  }
];

class App extends Component {
  state = {
    items: []
  }

  addItem = (item) => {
    item.id = Math.random();
    this.setState(prevState => ({
      items: [...prevState.items, item]
    }))
  }

  deleteItem = id => {
    const items = this.state.items.filter(item => item.id !== id);
    this.setState({
      items
    });
  };

  componentDidMount = () => {
    this.setState({
      items: initialContacts
    });
  };

  render() {
    return (
      <Container className="App">
        <Row>
          <Col>
            <h1 style={{ margin: "20px 0" }}>Staff List</h1>
          </Col>
        </Row>
        <Row>
          <Col>
            <DataTable items={this.state.items} deleteItem={this.deleteItem} />
          </Col>
        </Row>
        <Row>
          <Col>
            <ModalForm buttonLabel="Add Item" addItem={this.addItem} />
          </Col>
        </Row>
      </Container>
    )
  }
}

export default App