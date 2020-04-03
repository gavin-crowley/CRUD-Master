import React from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';

class AddItem extends React.Component {
  state = {
    id: '',
    firstname: '',
    lastname: ''
  }

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value })
  }

  onSubmit = e => {
    e.preventDefault();

    this.props.addItem(this.state);

    this.setState({
      firstname: '',
      lastname: ''
    });

    this.props.toggle();

  };



  componentDidMount() {
    if (this.props.item) {
      const { id, firstname, lastname } = this.props.item
      this.setState({ id, firstname, lastname })
    }
  }

  render() {
    return (
      <Form onSubmit={this.onSubmit}>
        <FormGroup>
          <Label>First Name</Label>
          <Input type="text" name="firstname" id="first" onChange={this.onChange} value={this.state.firstname} />
        </FormGroup>
        <FormGroup>
          <Label>Last Name</Label>
          <Input type="text" name="lastname" id="last" onChange={this.onChange} value={this.state.lastname} />
        </FormGroup>
        <Button>Submit</Button>
      </Form>
    );
  }
}

export default AddItem