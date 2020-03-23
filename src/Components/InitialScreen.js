import React, {Component} from 'react';
import {Container, Card, Button, Text, CardItem} from 'native-base';
import {StyleSheet, Image} from 'react-native';
import {Actions} from 'react-native-router-flux';
class InitScreen extends Component {
  render() {
    return (
      <Container style={Styles.container}>
        <Card transparent>
          <Text style={Styles.title}>Welcome!</Text>
        </Card>
        <Card transparent style={Styles.card}>
          <CardItem cardBody>
            <Image
              style={Styles.imageStyle}
              source={require('../img/SARSv.png')}
            />
          </CardItem>
          <CardItem style={Styles.cardItem}>
            <Button style={Styles.button} onPress={() => Actions.login()}>
              <Text style={Styles.text}> Log In </Text>
            </Button>
          </CardItem>
          <CardItem style={Styles.cardItem}>
            <Button
              bordered
              style={Styles.button}
              onPress={() => Actions.signup()}>
              <Text style={Styles.text}> Sign Up </Text>
            </Button>
          </CardItem>
        </Card>
      </Container>
    );
  }
}

const Styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  card: {
    padding: 30,
  },
  cardItem: {
    alignItems: 'stretch',
    flexDirection: 'column',
    justifyContent: 'space-between',
    padding: 20,
    margin: 3,
  },
  title: {
    color: '#3F51B5',
    fontSize: 40,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  imageStyle: {
    height: 300,
    width: null,
    flex: 1,
  },
  button: {
    justifyContent: 'center',
  },
  text: {
    textAlign: 'center',
  },
});

export default InitScreen;
