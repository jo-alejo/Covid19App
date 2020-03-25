import _ from 'lodash';
import React, {Component} from 'react';
import {Container, Text, Card, Button} from 'native-base';
import {StyleSheet, ScrollView} from 'react-native';
import {connect} from 'react-redux';
import {caseUpdate, caseSave} from '../Actions';
import CaseForm from './CaseForm';

class UpdateCaseScreen extends Component {
  componentDidMount() {
    _.each(this.props.case, (value, prop) => {
      this.props.caseUpdate({prop, value});
    });
  }
  onButtonPress() {
    const {
      patientCode,
      patientName,
      patientAge,
      pClassification,
      Lat,
      Lon,
    } = this.props;

    this.props.caseSave({
      patientCode,
      patientName,
      patientAge,
      pClassification: pClassification || 'Suspicious',
      Lat,
      Lon,
      uid: this.props.case.uid,
    });
  }
  render() {
    return (
      <ScrollView>
        <Container style={styles.container}>
          <CaseForm />
          <Card transparent>
            <Button
              style={styles.button}
              onPress={this.onButtonPress.bind(this)}>
              <Text>Update case</Text>
            </Button>
          </Card>
        </Container>
      </ScrollView>
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
  container: {
    flex: 1,
  },
  button: {
    alignSelf: 'center',
  },
});

export default connect(mapStateToProps, {caseSave, caseUpdate})(UpdateCaseScreen);
