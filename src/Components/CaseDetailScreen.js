import _ from 'lodash';
import React, {Component} from 'react';
import {Container, Text, Card, CardItem} from 'native-base';
import {StyleSheet, ActivityIndicator} from 'react-native';
import {connect} from 'react-redux';
import {caseUpdate} from '../Actions';
import MapView, {Circle, PROVIDER_GOOGLE} from 'react-native-maps';

class CaseDetailScreen extends Component {
  componentDidMount() {
    _.each(this.props.case, (value, prop) => {
      this.props.caseUpdate({prop, value});
    });
  }

  renderMap(Reg) {
    return (
      <MapView style={styles.mapView} provider={PROVIDER_GOOGLE} region={Reg}>
        <Circle
          center={Reg}
          radius={25}
          strokeColor="rgba(158,158,255,1.0)"
          fillColor="rgba(158,158,255,0.3)"
        />
      </MapView>
    );
  }

  render() {
    const Region = {
      latitude: parseFloat(this.props.case.Lat),
      longitude: parseFloat(this.props.case.Lon),
      latitudeDelta: 0.01,
      longitudeDelta: 0.01,
    };
    console.log(Region);
    return (
      <Container>
        {Region ? this.renderMap(Region) : <ActivityIndicator size="large" />}
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
    height: 400,
    width: 400,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
});

// eslint-disable-next-line prettier/prettier
export default connect(mapStateToProps, {caseUpdate})(CaseDetailScreen);
