import React from 'react';

// set up the initial context
const UserContext = React.createContext();

// create an exportable consumer that can be injected into components
export const UserConsumer = UserContext.Consumer;

// create the provider using traditional React.Component class
class UserProvider extends React.Component {
  state = {
    firstName: 'Michael',
    lastName: 'Kroon',
    email: 'kroonology@gmail.com',
    avatarSrc: 'https://robohash.org/',
    dateStarted: () => {new Date(2019, 8, 12).toDateString()},
    dateFinished: () => {new Date(2019, 10, 25).toDateString()},
    graduated: false,
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