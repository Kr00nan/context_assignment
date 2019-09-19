import React from 'react';
import { Form } from 'semantic-ui-react';

const membershipOptions = [
  {key: 'b', text: 'Bronze', value: 'Bronze'},
  {key: 's', text: 'Silver', value: 'Silver'},
  {key: 'g', text: 'Gold', value: 'Gold'},
  {key: 'p', text: 'Platinum', value: 'Platinum'},
];

class AccountForm extends React.Component {
  // sets the default values of state
  state = {
    username: '',
    membershipLevel: ''
  }

  // as the values change, state is updated with the new values
  handleChange = (e, { name, value }) => this.setState({ [name]: value });

  // prevents the page from auto-reloading
  handleSubmit = (e) => e.preventDefault();

  render() {
    const { username, membershipLevel} = this.state;

    return (
      <Form onSubmit={this.handleSubmit}>
        <Form.Input 
        label='New Username'
        type='text'
        name='username'
        value={username}
        onChange={this.handleChange}/>
        <Form.Select 
        label='Membership Level'
        name='membershipLevel'
        value={membershipLevel}
        onChange={this.handleChange}
        options={membershipOptions}/>
        <Form.Button color='blue'>Save</Form.Button>
      </Form>
    )

  };
};

export default AccountForm;