import React, {Component} from 'react';
import {
  Text,
  Form,
  Card,
  Item,
  Label,
  Input,
  CardItem,
  Picker,
} from 'native-base';
import {StyleSheet} from 'react-native';
import {connect} from 'react-redux';
import {caseUpdate} from '../Actions';

class CaseForm extends Component {
  render() {
    console.log(this.props);
    return (
      <>
        <Card transparent>
          <Text style={styles.title}>CASE</Text>
        </Card>
        <Card transparent>
          <CardItem header>
            <Text>Patient information</Text>
          </CardItem>
          <Form>
            <Item stackedLabel>
              <Label>Case code</Label>
              <Input
                value={this.props.patientCode}
                onChangeText={value =>
                  this.props.caseUpdate({prop: 'patientCode', value})
                }
              />
            </Item>
            <Item stackedLabel>
              <Label>Patient name</Label>
              <Input
                value={this.props.patientName}
                onChangeText={value =>
                  this.props.caseUpdate({prop: 'patientName', value})
                }
              />
            </Item>
            <Item stackedLabel>
              <Label>Age</Label>
              <Input
                value={this.props.patientAge}
                keyboardType={'numeric'}
                onChangeText={value =>
                  this.props.caseUpdate({prop: 'patientAge', value})
                }
              />
            </Item>
            <Item picker style={styles.picker}>
              <Label>Classification</Label>
              <Picker
                mode="dropdown"
                note={false}
                placeholder="Select the classification"
                selectedValue={this.props.pClassification}
                onValueChange={value =>
                  this.props.caseUpdate({prop: 'pClassification', value})
                }>
                <Picker.Item label="Suspicious" value="Suspicious" />
                <Picker.Item label="Confirmed" vacaselue="Confirmed" />
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
              <Input
                keyboardType={'decimal-pad'}
                value={this.props.Lon}
                onChangeText={value =>
                  this.props.caseUpdate({prop: 'Lon', value})
                }
              />
            </Item>
            <Item stackedLabel>
              <Label>Latitude</Label>
              <Input
                keyboardType={'decimal-pad'}
                value={this.props.Lat}
                onChangeText={value =>
                  this.props.caseUpdate({prop: 'Lat', value})
                }
              />
            </Item>
          </Form>
        </Card>
      </>
    );
  }
}

const mapStateToProps = state => {
  const {
    patientCode,
    patientName,
    patientAge,
    pClassification,
    Lat,
    Lon,
  } = state.caseForm;
  return {
    patientCode,
    patientName,
    patientAge,
    pClassification,
    Lat,
    Lon,
  };
};

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
});

export default connect(mapStateToProps, {caseUpdate})(CaseForm);
