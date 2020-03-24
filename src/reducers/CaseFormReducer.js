import {CASE_CREATE, CASE_UPDATE, CASE_SAVE_SUCCESS} from '../Actions/types';

const INITIAL_STATE = {
  patientCode: '',
  patientName: '',
  patientAge: '',
  pClassification: '',
  Lat: '',
  Lon: '',
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CASE_CREATE:
      return INITIAL_STATE;
    case CASE_SAVE_SUCCESS:
      return INITIAL_STATE;
    case CASE_UPDATE:
      return {...state, [action.payload.prop]: action.payload.value};
    default:
      return state;
  }
};
