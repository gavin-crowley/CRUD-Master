import React, { Component } from 'react'
import { Container, Row, Col } from 'reactstrap'
import ModalForm from './Components/Modal'
import DataTable from './Components/DataTable'
import { v4 as uuidv4 } from 'uuid';

class App extends Component {
  state = {
    items: this.returnItems()
  }

  returnItems() {
    if (localStorage.getItem('items') === null) localStorage.setItem('items', JSON.stringify([]))
    return JSON.parse(localStorage.getItem('items'))
  }

  addItem = item => {
    item.id = uuidv4();
    let items = [item, ...this.state.items];
    localStorage.setItem('items', JSON.stringify(items))
    this.setState({
      items
    });
  }

  deleteItem = id => {
    const items = this.state.items.filter(item => item.id !== id);
    // localStorage.setItem('items', JSON.stringify(items));
    this.setState({
      items
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