import React, { useState } from 'react';
import { Container, Row, Col } from 'reactstrap'
import ModalForm from './Components/Modal'
import DataTable from './Components/DataTable'

const initialContacts = [
  {
    id: '1',
    firstname: 'John',
    lastname: 'Doe'
  },
  {
    id: '2',
    firstname: 'Karen',
    lastname: 'Williams'
  }
];

const App = () => {

  const [items, setItems] = useState(initialContacts);


  const deleteItem = id => {
    setItems(items.filter(item => item.id !== id))
  }

  const addItem = item => {
    item.id = Math.random();
    setItems([...items, item])
  }

  return (
    <Container className="App">
      <Row>
        <Col>
          <h1 style={{ margin: "20px 0" }}>Staff List</h1>
        </Col>
      </Row>
      <Row>
        <Col>
          <DataTable items={items} deleteItem={deleteItem} />
        </Col>
      </Row>
      <Row>
        <Col>
          <ModalForm buttonLabel="Add Item" addItem={addItem} />
        </Col>
      </Row>
    </Container>
  )


}

export default App