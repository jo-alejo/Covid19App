import _ from 'lodash';
import React, {Component} from 'react';
import {Container, Text, Card, CardItem} from 'native-base';
import {StyleSheet} from 'react-native';
import {connect} from 'react-redux';
import {caseUpdate} from '../Actions';
//import MapView from 'react-native-maps';

class CaseDetailScreen extends Component {
  componentDidMount() {
    _.each(this.props.case, (value, prop) => {
      this.props.caseUpdate({prop, value});
    });
  }

  render() {
    console.log(this.props.case);
    return (
      <Container>
        <Card transparent>
          <CardItem>
            <Text>Code Case: {this.props.case.patientCode}</Text>
          </CardItem>
          <CardItem>
            <Text>Patient name: {this.props.case.patientName}</Text>
          </CardItem>
          <CardItem>
            <Text>Patient Age: {this.props.case.patientAge}</Text>
          </CardItem>
          <CardItem>
            <Text>
              Patient classification: {this.props.case.pClassification}
            </Text>
          </CardItem>
        </Card>
      </Container>
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
  mapView: {
    flex: 1,
    width: 300,
  },
});

export default connect(mapStateToProps, {caseUpdate})(CaseDetailScreen);
