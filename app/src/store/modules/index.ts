import { combineReducers } from 'redux';
import counterReducer from './counter';
// import { baseReducer } from './base';
// import { chatReducer } from './chat';
// import { systemReducer } from './system';

const rootReducer = combineReducers({
  counter: counterReducer,
  // base: baseReducer,
  // chat: chatReducer,
  // system: systemReducer,
});

export default rootReducer;
export type RootState = ReturnType<typeof rootReducer>;
