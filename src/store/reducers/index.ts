// third-party
import { combineReducers } from 'redux';

// project import
import menu from './menu';
import snackbar from './snackbar';
import auth from './auth';
import jobs from './jobs';
import calendar from './calendar';
import chat from './chat';
import experts from './experts';
import currentUser from './current-user';
import invitation from './invitation';
import settings from './settings';
import clients from './clients';

// ==============================|| COMBINE REDUCERS ||============================== //

const reducers = combineReducers({
  auth,
  calendar,
  chat,
  menu,
  snackbar,
  jobs,
  experts,
  clients,
  currentUser,
  invitation,
  settings
});

export default reducers;
