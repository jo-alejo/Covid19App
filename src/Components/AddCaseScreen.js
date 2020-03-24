import React, {Component} from 'react';
import {
  Container,
  Text,
  Form,
  Card,
  Button,
  Item,
  Label,
  Input,
  CardItem,
  Picker,
  Icon,
} from 'native-base';
import {StyleSheet} from 'react-native';

class AddCaseScreen extends Component {
  render() {
    return (
      <Container>
        <Card transparent>
          <Text style={styles.title}>CASE REGISTRATION</Text>
        </Card>
        <Card transparent>
          <CardItem header>
            <Text>Patient information</Text>
          </CardItem>
          <Form>
            <Item stackedLabel>
              <Label>Case No.</Label>
              <Input />
            </Item>
            <Item stackedLabel>
              <Label>Patient name</Label>
              <Input />
            </Item>
            <Item stackedLabel>
              <Label>Age</Label>
              <Input />
            </Item>
            <Item picker style={styles.picker}>
              <Label>Classification</Label>
              <Picker
                mode="dropdown"
                note={false}
                placeholder="Select the classification">
                <Picker.Item label="Suspicious" value="Suspicious" />
                <Picker.Item label="Confirmed" value="Confirmed" />
              </Picker>
            </Item>
          </Form>
        </Card>
        <Card transparent>
          <CardItem header>
            <Text>Localization of case</Text>
          </CardItem>
          <Form>
            <Item stackedLabel>
              <Label>Longitude</Label>
              <Input />
            </Item>
            <Item stackedLabel>
              <Label>Latitude</Label>
              <Input />
            </Item>
          </Form>
        </Card>
        <Card transparent>
          <Button style={styles.button}>
            <Text>Register new case</Text>
          </Button>
        </Card>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  title: {
    color: '#3F51B5',
    fontSize: 25,
    fontWeight: 'bold',
    textAlign: 'center',
    padding: 15,
  },
  picker: {
    paddingLeft: 15,
    fontSize: 9,
  },
  button: {
    alignSelf: 'center',
  },
});

export default AddCaseScreen;
