import { combineReducers } from 'redux';
import { reducer as toastr } from 'react-redux-toastr';

import security from './security';
import national from './national';

export default combineReducers({
  toastr,
  security,
  national
});
