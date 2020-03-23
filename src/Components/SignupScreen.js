import React, {Component} from 'react';
import {
  Container,
  Text,
  Form,
  Item,
  Input,
  Spinner,
  Button,
  Label,
  Card,
  CardItem,
} from 'native-base';
import {StyleSheet} from 'react-native';
import {Actions} from 'react-native-router-flux';
import {connect} from 'react-redux';
import {
  emailChanged,
  passwordChanged,
  usernameChanged,
  singupUser,
} from '../Actions';

class SignupScreen extends Component {
  onEmailChange(text) {
    this.props.emailChanged(text);
  }
  onPasswordChange(text) {
    this.props.passwordChanged(text);
  }
  onUsernameChange(text) {
    this.props.usernameChanged(text);
  }

  onButtonPress() {
    const {username, email, password} = this.props;
    this.props.singupUser({username, email, password});
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
      return <Spinner />;
    }
    return (
      <Button
        bordered
        style={styles.button}
        onPress={this.onButtonPress.bind(this)}>
        <Text style={styles.text}>Sign Up</Text>
      </Button>
    );
  }

  render() {
    return (
      <Container style={styles.container}>
        <Card transparent>
          <Text style={styles.title}>SIGN UP</Text>
        </Card>
        <Card transparent style={styles.card}>
          <Form>
            <Item floatingLabel>
              <Label>Name</Label>
              <Input
                value={this.props.username}
                onChangeText={this.onUsernameChange.bind(this)}
              />
            </Item>
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
                secureTextEntry
                value={this.props.password}
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
            onPress={() => Actions.login()}>
            <Text>Already have an account? Sign In here!</Text>
          </Button>
        </Card>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
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
    padding: 20,
  },
  errorText: {
    color: 'red',
    textAlign: 'center',
  },
});

const mapStateToProps = state => {
  return {
    username: state.auth.username,
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
  usernameChanged,
  singupUser,
})(SignupScreen);
