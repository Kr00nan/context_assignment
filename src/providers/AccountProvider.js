import React from 'react';

// set up the initial context
const AccountContext = React.createContext();

// create an exportable consumer that can be injected into components
export const AccountConsumer = AccountContext.Consumer;

// create the provider using traditional React.Component class
class AccountProvider extends React.Component {
  state = {
    username: 'Michael Kroon',
    dateJoined: '19 SEP 19',
    membershipLevel: 'Silver',
    updateAccount: (account) => {this.setState({...account})}
  };

  render() {
    return (
      <AccountContext.Provider value={this.state}>
        { this.props.children}
      </AccountContext.Provider>
    );
  };
}

export default AccountProvider;