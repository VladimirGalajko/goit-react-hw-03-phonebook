import { Component } from 'react';
import { Button, Form, Input } from './FormAddContact.styled';

class FormAddContact extends Component {
  state = {
    name: '',
    number: '',
  };

  handleChange = ({ target: { value, name } }) => {
    this.setState({ [name]: value });
  };
  handleSubmit = e => {
    e.preventDefault();
    this.props.onAddContact(this.state);
    this.setState({ name: '', number: '' });
  };

  render() {
    // console.log(this.state)
    const { name, number } = this.state;
    return (
      <Form onSubmit={this.handleSubmit}>
        <label>Name</label>

        <Input
          type="text"
          id="inputName"
          name="name"
          placeholder="text"
          value={name}
          onChange={this.handleChange}
          pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Text"
          required
        />

        <label>Number</label>

        <Input
          type="tel"
          id="inputNumber"
          name="number"
          placeholder="number"
          value={number}
          onChange={this.handleChange}
          pattern="\+?\d{1,4}?[ .\-\s]?\(?\d{1,3}?\)?[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,9}"
          title="Numbers"
          required
        />

        <Button type="submit">add contact 👆</Button>
      </Form>
    );
  }
}

export default FormAddContact;
