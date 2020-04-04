import React from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import axios from 'axios'

class AddItem extends React.Component {
  state = {
    id: '',
    firstName: '',
    lastName: ''
  }

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value })
  }

  // onSubmit = e => {
  //   e.preventDefault();

  //   this.props.addItem(this.state);

  //   this.setState({
  //     firstName: '',
  //     lastName: ''
  //   });

  //   this.props.toggle();

  // };

  handleSubmit = (event) => {
    event.preventDefault();
    const { firstName, lastName } = this.state;
    axios.post('http://localhost:4000/items/addItem', {
      firstName: firstName,
      lastName: lastName,
    })
      .then((response) => {
        console.log(response);
        // this.props.history.push('/');
      })
      .catch((error) => {
        console.log(error);
      });

    this.props.toggle();
  }



  // componentDidMount() {
  //   if (this.props.item) {
  //     const { id, firstName, lastName } = this.props.item
  //     this.setState({ id, firstName, lastName })
  //   }
  // }

  render() {
    return (
      <Form onSubmit={this.handleSubmit}>
        <FormGroup>
          <Label>First Name</Label>
          <Input type="text" name="firstName" id="first" onChange={this.onChange} value={this.state.firstName} />
        </FormGroup>
        <FormGroup>
          <Label>Last Name</Label>
          <Input type="text" name="lastName" id="last" onChange={this.onChange} value={this.state.lastName} />
        </FormGroup>
        <Button>Submit</Button>
      </Form>
    );
  }
}

export default AddItem