import firebase from 'firebase';
import {
  CASE_FETCH_SUCCESS,
  CASE_CREATE,
  CASE_UPDATE,
  CASE_SAVE_SUCCESS,
} from './types';
import {Actions} from 'react-native-router-flux';

export const caseFetch = () => {
  const {currentUser} = firebase.auth();
  return dispatch => {
    firebase
      .database()
      .ref(`users/${currentUser.uid}/caseBag`)
      .on('value', snapshot => {
        dispatch({type: CASE_FETCH_SUCCESS, payload: snapshot.val()});
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
  return dispatch => {
    firebase
      .database()
      .ref(`users/${currentUser.uid}/caseBag`)
      .push({patientCode, patientName, patientAge, pClassification, Lon, Lat})
      .then(() => {
        dispatch({type: CASE_CREATE});
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

export const caseSave = ({
  patientCode,
  patientName,
  patientAge,
  pClassification,
  Lon,
  Lat,
  uid,
}) => {
  const {currentUser} = firebase.auth();
  return dispatch => {
    firebase
      .database()
      .ref(`users/${currentUser.uid}/caseBag/${uid}`)
      .set({patientCode, patientName, patientAge, pClassification, Lon, Lat})
      .then(() => {
        dispatch({type: CASE_SAVE_SUCCESS});
        Actions.pop();
      });
  };
};
