import React from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import { connect } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';

class AddItem extends React.Component {
  state = {
    id: '',
    firstname: '',
    lastname: ''
  }

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value })
  }

  onSubmit = (dispatch, e) => {
    e.preventDefault();

    const { firstname, lastname } = this.state;

    const newItem = {
      id: uuidv4(),
      firstname,
      lastname
    };

    dispatch({ type: 'ADD_ITEM', payload: newItem });

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
      <Form onSubmit={this.onSubmit.bind(this, this.props.dispatch)}>
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
    )
  }
}

const mapStateToProps = state => ({
  items: state.items
})


export default connect(mapStateToProps)(AddItem)