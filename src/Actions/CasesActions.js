import firebase from 'firebase';
import {CASE_FETCH_SUCCESS} from './types';
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
