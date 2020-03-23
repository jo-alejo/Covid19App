import firebase from 'firebase';
import {Actions} from 'react-native-router-flux';
import {
  EMAIL_CHANGED,
  PASSWORD_CHANGED,
  USERNAME_CHANGED,
  LOGIN_USER,
  LOGIN_USER_FAIL,
  LOGIN_USER_SUCCESS,
  SIGNUP_USER,
  SIGNUP_USER_FAIL,
} from './types';

export const emailChanged = text => {
  return {
    type: EMAIL_CHANGED,
    payload: text,
  };
};

export const passwordChanged = text => {
  return {
    type: PASSWORD_CHANGED,
    payload: text,
  };
};

export const usernameChanged = text => {
  return {
    type: USERNAME_CHANGED,
    payload: text,
  };
};

export const loginUser = ({email, password}) => {
  return dispatch => {
    dispatch({type: LOGIN_USER});

    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(user => loginUserSuccess(dispatch, user))
      .catch(() => loginUserFail(dispatch));
  };
};

export const singupUser = ({username, email, password}) => {
  return dispatch => {
    dispatch({type: SIGNUP_USER});
    console.log(`Trying to insert: ${username}`);

    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then(user => {
        if (firebase.auth().currentUser) {
          const userId = firebase.auth().currentUser.uid;
          if (userId) {
            firebase
              .database()
              .ref('users/' + userId)
              .set({
                userName: username,
                email: email,
                password: password,
                uid: userId,
              });
          }
        }
        loginUserSuccess(dispatch, user);
      })
      .catch(() => signupUserFail(dispatch));
  };
};

const loginUserSuccess = (dispatch, user) => {
  dispatch({
    type: LOGIN_USER_SUCCESS,
    payload: user,
  });
  Actions.main();
};

const loginUserFail = dispatch => {
  dispatch({type: LOGIN_USER_FAIL});
};

const signupUserFail = dispatch => {
  dispatch({type: SIGNUP_USER_FAIL});
};
