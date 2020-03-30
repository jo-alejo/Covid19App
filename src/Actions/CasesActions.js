import firebase from 'firebase';
import {
  CASE_FETCH_SUCCESS,
  CASE_CREATE,
  CASE_UPDATE,
  CASE_SAVE_SUCCESS,
} from './types';
import {Actions} from 'react-native-router-flux';

export const caseFetch = () => {
  return dispatch => {
    firebase
      .database()
      .ref('cases')
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
  Lat,
  Lon,
}) => {
  const user = firebase.auth().currentUser;
  const userUID = user.uid;
  return dispatch => {
    if (user) {
      firebase
        .database()
        .ref('cases')
        .push({
          patientCode,
          patientName,
          patientAge,
          pClassification,
          Lat,
          Lon,
          createdBy: userUID,
          updatedBy: null,
        })
        .then(() => {
          dispatch({type: CASE_CREATE});
          Actions.pop();
        });
    }
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
  return dispatch => {
    const userUID = firebase.auth().currentUser.uid;
    firebase
      .database()
      .ref(`cases/${uid}`)
      .set({
        patientCode,
        patientName,
        patientAge,
        pClassification,
        Lon,
        Lat,
        updatedBy: userUID,
      })
      .then(() => {
        dispatch({type: CASE_SAVE_SUCCESS});
        Actions.casesList({type: 'reset'});
      });
  };
};

/*
export const caseCreate = ({
  patientCode,
  patientName,
  patientAge,
  pClassification,
  Lat,
  Lon,
}) => {
  const {currentUser} = firebase.auth();
  return dispatch => {
    firebase
      .database()
      .ref(`users/${currentUser.uid}/caseBag`)
      .push({patientCode, patientName, patientAge, pClassification, Lat, Lon})
      .then(() => {
        dispatch({type: CASE_CREATE});
        Actions.pop();
      });
  };
};*/
