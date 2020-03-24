import React, {Component} from 'react';
import {
  Container,
  Text,
  Form,
  Item,
  Input,
  Button,
  Spinner,
  Label,
  Card,
  CardItem,
} from 'native-base';
import {Actions} from 'react-native-router-flux';
import {connect} from 'react-redux';
import {emailChanged, passwordChanged, loginUser} from '../Actions';

class LoginScreen extends Component {
  onEmailChange(text) {
    this.props.emailChanged(text);
  }
  onPasswordChange(text) {
    this.props.passwordChanged(text);
  }
  onButtonPress() {
    const {email, password} = this.props;
    this.props.loginUser({email, password});
  }
  renderError() {
    if (this.props.error) {
      return (
        <CardItem style={styles.errorBox}>
          <Text style={styles.errorText}>{this.props.error}</Text>
        </CardItem>
      );
    }
  }
  renderButton() {
    if (this.props.loading) {
      return <Spinner color="#2b387c" />;
    }
    return (
      <Button
        bordered
        style={styles.button}
        onPress={this.onButtonPress.bind(this)}>
        <Text style={styles.text}>Log in</Text>
      </Button>
    );
  }

  render() {
    return (
      <Container style={styles.container}>
        <Card transparent>
          <Text style={styles.title}>SIGN IN</Text>
        </Card>
        <Card transparent style={styles.card}>
          <Form>
            <Item floatingLabel>
              <Label>Email</Label>
              <Input
                value={this.props.email}
                onChangeText={this.onEmailChange.bind(this)}
              />
            </Item>
            <Item floatingLabel>
              <Label>Password</Label>
              <Input
                value={this.props.password}
                secureTextEntry
                onChangeText={this.onPasswordChange.bind(this)}
              />
            </Item>
          </Form>
        </Card>
        <Card transparent>
          {this.renderError()}
          {this.renderButton()}
          <Button
            transparent
            style={styles.button}
            onPress={() => Actions.signup()}>
            <Text>Don't have an account? Sign Up!</Text>
          </Button>
        </Card>
      </Container>
    );
  }
}

const styles = {
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  card: {
    padding: 25,
  },
  title: {
    color: '#3F51B5',
    fontSize: 35,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  button: {
    alignSelf: 'center',
  },
  text: {
    fontSize: 18,
    textAlign: 'center',
  },
  errorBox: {
    justifyContent: 'center',
  },
  errorText: {
    color: 'red',
    textAlign: 'center',
  },
};

const mapStateToProps = state => {
  return {
    email: state.auth.email,
    password: state.auth.password,
    error: state.auth.error,
    loading: state.auth.loading,
  };
};

/* eslint-disable prettier/prettier */

export default connect(mapStateToProps, {
  emailChanged,
  passwordChanged,
  loginUser,
})(LoginScreen);
