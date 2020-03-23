import {
  EMAIL_CHANGED,
  PASSWORD_CHANGED,
  USERNAME_CHANGED,
  LOGIN_USER,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAIL,
  SIGNUP_USER,
  SIGNUP_USER_FAIL,
} from '../Actions/types';

const INITIAL_STATE = {
  email: '',
  password: '',
  error: '',
  userName: '',
  user: null,
  loading: false,
};

export default (state = INITIAL_STATE, action) => {
  console.log(action);

  switch (action.type) {
    case EMAIL_CHANGED:
      return {...state, email: action.payload};
    case PASSWORD_CHANGED:
      return {...state, password: action.payload};
    case USERNAME_CHANGED:
      return {...state, userName: action.payload};
    case LOGIN_USER:
      return {...state, error: '', loading: true};
    case LOGIN_USER_SUCCESS:
      return {
        ...state,
        ...INITIAL_STATE,
        user: action.payload,
      };
    case LOGIN_USER_FAIL:
      return {
        ...state,
        error: 'Authentication Failed',
        password: '',
        loading: false,
      };
    case SIGNUP_USER:
      return {...state, error: '', loading: true};
    case SIGNUP_USER_FAIL:
      return {
        ...state,
        error: 'User creation failed',
        loading: false,
      };
    default:
      return state;
  }
};
