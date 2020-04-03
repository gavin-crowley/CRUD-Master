import React, { Component } from 'react'
import { Container, Row, Col } from 'reactstrap'
import ModalForm from './Components/Modal'
import DataTable from './Components/DataTable'
import { v4 as uuidv4 } from 'uuid';
import { db } from './config/fbConfig'

class App extends Component {
  state = {
    items: []
  }

  componentDidMount() {
    db.collection('items')
      .get()
      .then(querySnapshot => {
        const data = querySnapshot.docs.map(doc => doc.data());
        this.setState({ items: data });
      });
  }

  addItem = (item) => {
    item.id = uuidv4();
    db.collection("items")
      .doc(item.id.toString())
      .set(item)
      .then(function () {
        console.log("Document successfully written!");
      })
      .catch(function (error) {
        console.error("Error writing document: ", error);
      });
  };

  deleteItem = id => {
    db.collection('items').doc(id).delete().then(function () {
      console.log("Document successfully deleted!");
    }).catch(function (error) {
      console.error("Error removing document: ", error);
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