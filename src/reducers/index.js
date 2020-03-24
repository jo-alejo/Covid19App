import {combineReducers} from 'redux';
import AuthReducer from './AuthReducer';
import CaseReducer from './CaseReducer';
import CaseFormReducer from './CaseFormReducer';

export default combineReducers({
  auth: AuthReducer,
  case: CaseReducer,
  caseForm: CaseFormReducer,
});
