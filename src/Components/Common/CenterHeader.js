import React from 'react';
import {Container, Card, Text, CardItem} from 'native-base';

const Header = ({Title}) => {
  return (
    <Container>
      <Card>
        <CardItem>
          <Text style={styles.title}>{Title}</Text>
        </CardItem>
      </Card>
    </Container>
  );
};

const styles = {
  title: {
    color: '#3F51B5',
    fontSize: 35,
    fontWeight: 'bold',
    textAlign: 'center',
  },
};

export {Header};
