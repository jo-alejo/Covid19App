import React, {Component} from 'react';
import {Container, Text, Card, Button} from 'native-base';
import {StyleSheet, ScrollView} from 'react-native';
import {connect} from 'react-redux';
import {caseUpdate, caseCreate} from '../Actions';
import CaseForm from './CaseForm';

class AddCaseScreen extends Component {
  onButtonPress() {
    const {
      patientCode,
      patientName,
      patientAge,
      pClassification,
      Lat,
      Lon,
    } = this.props;

    this.props.caseCreate({
      patientCode,
      patientName,
      patientAge,
      pClassification: pClassification || 'Suspicious',
      Lat,
      Lon,
    });
  }
  render() {
    return (
      <ScrollView>
        <Container style={styles.container}>
          <CaseForm {...this.props} />
          <Card transparent>
            <Button
              style={styles.button}
              onPress={this.onButtonPress.bind(this)}>
              <Text>Register new case</Text>
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

export default connect(mapStateToProps, {caseCreate, caseUpdate})(
  AddCaseScreen,
);
