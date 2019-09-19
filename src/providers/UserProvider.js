import React from 'react';

// set up the initial context
const UserContext = React.createContext();

// create an exportable consumer that can be injected into components
export const UserConsumer = UserContext.Consumer;

// create the provider using traditional React.Component class
class UserProvider extends React.Component {
  state = {
    username: 'Michael Kroon',
    dateJoined: '19 SEP 19',
    membershipLevel: 'Silver',
    updateUser: (user) => {this.setState({...user})}
  };

  render() {
    return (
      <UserContext.Provider value={this.state}>
        { this.props.children}
      </UserContext.Provider>
    );
  };
}

export default UserProvider;