import React, { Component } from 'react'
import { Container, Row, Col } from 'reactstrap'
import ModalForm from './Components/Modal'
import DataTable from './Components/DataTable'


class App extends Component {


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
            <DataTable firstname={'Gavin'} />
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