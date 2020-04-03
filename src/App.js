import React, { Component } from 'react'
import { Container, Row, Col } from 'reactstrap'
import ModalForm from './Components/Modal'
import DataTable from './Components/DataTable'
// import { v4 as uuidv4 } from 'uuid';
import { Provider } from './context';

class App extends Component {
  state = {
    items: []
  }

  render() {
    return (
      <Provider>
        <Container className="App">
          <Row>
            <Col>
              <h1 style={{ margin: "20px 0" }}>Staff List</h1>
            </Col>
          </Row>
          <Row>
            <Col>
              <DataTable />
            </Col>
          </Row>
          <Row>
            <Col>
              <ModalForm buttonLabel="Add Item" addItem={this.addItem} />
            </Col>
          </Row>
        </Container>
      </Provider>
    )

  }
}

export default App