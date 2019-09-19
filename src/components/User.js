import React from 'react';
import { Card } from 'semantic-ui-react';
import { UserConsumer } from '../providers/UserProvider';

const Account = () => (
  <UserConsumer>
    {value => (
      <Card>
        <Card.Content>
          <Card.Header>{value.username}</Card.Header>
          <Card.Meta>
            Member Since: {value.dateJoined}
          </Card.Meta>
        </Card.Content>
        <Card.Content>
          <p>Membership Level: {value.membershipLevel}</p>
        </Card.Content>
      </Card>
    )}
  </UserConsumer>
);

export default Account;