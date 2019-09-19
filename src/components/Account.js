import React from 'react';
import {Card} from 'semantic-ui-react';

const Account = () => (
  <Card>
    <Card.Content>
      <Card.Header>username</Card.Header>
      <Card.Meta>
        Member Since: dateJoined
      </Card.Meta>
    </Card.Content>
    <Card.Content>
      <p>Membership Level: membershipLevel</p>
    </Card.Content>
  </Card>
);

export default Account;