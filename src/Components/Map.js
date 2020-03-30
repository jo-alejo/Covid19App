import _ from 'lodash';
import React, {Component} from 'react';
import {connect} from 'react-redux';
import {caseUpdate} from '../Actions';
import MapView, {Circle, PROVIDER_GOOGLE} from 'react-native-maps';
import {StyleSheet} from 'react-native';

class Map extends Component {
  componentDidMount() {
    _.each(this.props.case, (value, prop) => {
      this.props.caseUpdate({prop, value});
    });
  }

  constructor(props) {
    super(props);
    this.state = {
      region: {
        latitude: parseFloat(this.props.case.Lat),
        longitude: parseFloat(this.props.case.Lon),
        latitudeDelta: 0.009,
        longitudeDelta: 0.009,
      },
    };
  }

  onRegionChange(region) {
    this.setState({region});
  }

  render() {
    return (
      <MapView
        style={styles.mapView}
        provider={PROVIDER_GOOGLE}
        onRegionChange={this.onRegionChange.bind(this)}
        initialRegion={this.state.region}>
        <Circle
          center={this.state.region}
          radius={25}
          strokeColor="rgba(158,158,255,1.0)"
          fillColor="rgba(158,158,255,0.3)"
        />
      </MapView>
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
export default connect(mapStateToProps, {caseUpdate})(Map);
