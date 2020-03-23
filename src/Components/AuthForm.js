import React, {Component} from 'react';
import {
  Container,
  Text,
  Form,
  Item,
  Input,
  Button,
  Label,
  Card,
} from 'native-base';
import {Actions} from 'react-native-router-flux';

const AuthForm = () => {
  return (
    <Container>
      <Card transparent style={styles.card}>
        <Form>
          <Item floatingLabel>
            <Label>Email</Label>
            <Input />
          </Item>
          <Item floatingLabel>
            <Label>Password</Label>
            <Input />
          </Item>
        </Form>
      </Card>
      <Card transparent>
        <Button
          bordered
          style={styles.button}
          onPress={() => console.log('Pressed')}>
          <Text style={styles.text}>Sign Up</Text>
        </Button>
        <Button transparent style={styles.button} onPress={() => Actions.()}>
          <Text>Already have an account? Sign In here!</Text>
        </Button>
      </Card>
    </Container>
  );
};

const styles = {
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  card: {
    padding: 25,
  },
  button: {
    alignSelf: 'center',
  },
  text: {
    fontSize: 18,
    textAlign: 'center',
  },
};

export default AuthForm;

onPasswordChange(text) {