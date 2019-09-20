import React from 'react';
import { Card } from 'semantic-ui-react';
import { UserConsumer } from '../providers/UserProvider';

const User = () => (
  <UserConsumer>
    {value => (
      <Card>
        <Card.Content>
          <Card.Header>{value.firstName} {value.lastName}</Card.Header>
          <br />
          <Card.Header>{value.email}</Card.Header>
          <br />
          <Card.Meta>
            Cohort Start Date: {value.dateStarted}
          </Card.Meta>
          <Card.Meta>
            Expected End Date: {value.dateFinished}
          </Card.Meta>
        </Card.Content>
        <Card.Content>
          <p>Status: {value.graduated ? 'Graduated' : 'Not Graduated'}</p>
        </Card.Content>
      </Card>
    )}
  </UserConsumer>
);

export default User;