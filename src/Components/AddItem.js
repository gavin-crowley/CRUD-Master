import React, { useState } from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';

const AddItem = props => {

  const initialFormState = { id: null, firstname: '', lastname: '' }
  const [item, setItem] = useState(initialFormState)

  const onChange = e => {
    const { name, value } = e.target
    setItem({ ...item, [name]: value })
  }

  const onSubmit = e => {
    e.preventDefault();

    props.addItem(item);
    setItem(initialFormState)

    props.toggle();

  };

  return (
    <Form onSubmit={onSubmit}>
      <FormGroup>
        <Label>First Name</Label>
        <Input type="text" name="firstname" id="first" onChange={onChange} value={item.firstname} />
      </FormGroup>
      <FormGroup>
        <Label>Last Name</Label>
        <Input type="text" name="lastname" id="last" onChange={onChange} value={item.lastname} />
      </FormGroup>
      <Button>Submit</Button>
    </Form>
  )
}

export default AddItem