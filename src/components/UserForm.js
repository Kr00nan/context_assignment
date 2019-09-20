import React from 'react';
import { Form } from 'semantic-ui-react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import { UserConsumer } from '../providers/UserProvider';

class UserForm extends React.Component {
  // sets the default values of state
  state = {
    username: this.props.username,
    membershipLevel: this.props.membershipLevel
  }

  // as the values change, state is updated with the new values
  handleChange = (e, { name, value }) => this.setState({ [name]: value });

  // prevents the page from auto-reloading
  handleSubmit = (e) => {
    e.preventDefault();
    const user = { ...this.state };
    this.props.updateUser(user);
  }

  render() {
    const { firstName, lastName, email, graduated } = this.state;

    return (
      <Form onSubmit={this.handleSubmit}>
        <Form.Group widths='equal'>
          <Form.Input
            label='First Name'
            type='text'
            name='firstName'
            value={firstName}
            onChange={this.handleChange}
          />
          <Form.Input
            label='Last Name'
            type='text'
            name='lastName'
            value={lastName}
            onChange={this.handleChange}
          />
        </Form.Group>
        <Form.Input
          label='Email'
          type='text'
          name='email'
          value={email}
          onChange={this.handleChange}
        />
        <Form.Group>
          <DatePicker 
          selected={new Date()}
          label='Cohort Start Date'
          placeholderText='Click to select date'
          name='dateStarted'
          // value={selected}
          // onChange={date => setStartDate(date)} 
          onChange={this.handleChange}
          />
          <Form.Checkbox
            label='Graduated'
            name='graduated'
            value={graduated}
            onChange={this.handleChange}
          />
        </Form.Group>
        <Form.Button color='blue'>Update User</Form.Button>
      </Form>
    )

  };
};

const ConnectedUserForm = (props) => {
  return (
    <UserConsumer>
      {value => (
        <UserForm
          {...props}
          firstName={value.firstName}
          lastName={value.lastName}
          email={value.email}
          dateStarted={value.dateStarted}
          updateUser={value.updateUser}
        />
      )}
    </UserConsumer>
  )
}

// export default AccountForm;
export default ConnectedUserForm;