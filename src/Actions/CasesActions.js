import firebase from 'firebase';
import {CASE_FETCH_SUCCESS, CASE_CREATE, CASE_UPDATE} from './types';
import {Actions} from 'react-native-router-flux';

export const caseFetch = () => {
  const {currentUser} = firebase.auth();
  return dispacth => {
    firebase
      .database()
      .ref(`users/${currentUser.uid}/caseBag`)
      .on('value', snapshot => {
        dispacth({type: CASE_FETCH_SUCCESS, payload: snapshot.val()});
      });
  };
};

export const caseCreate = ({
  patientCode,
  patientName,
  patientAge,
  pClassification,
  Lon,
  Lat,
}) => {
  const {currentUser} = firebase.auth();
  return dispacth => {
    firebase
      .database()
      .ref(`users/${currentUser.uid}/caseBag`)
      .push({patientCode, patientName, patientAge, pClassification, Lon, Lat})
      .then(() => {
        dispacth({type: CASE_CREATE});
        Actions.casesList();
      });
  };
};

export const caseUpdate = ({prop, value}) => {
  return {
    type: CASE_UPDATE,
    payload: {prop, value},
  };
};
